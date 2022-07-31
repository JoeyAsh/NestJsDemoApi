import {Injectable, Logger} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from './entities/user.entity';
import {Repository} from 'typeorm';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
    private readonly logger: Logger = new Logger(UsersService.name);

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    public async create(createUserDto: CreateUserDto) {
        this.logger.log('Creating new user.');

        const id: string = crypto.randomUUID();

        const newUser: UserEntity = {
            ...createUserDto,
            id,
            posts: [],
        };

        await this.userRepository.save(newUser);

        return newUser;
    }

    public async findAll(): Promise<Array<UserEntity>> {
        return this.userRepository.find({
            relations: {
                posts: true,
            },
        });
    }

    public async findOne(id: string): Promise<UserEntity> {
        return this.userRepository.findOneBy({id});
    }

    public async update(
        id: string,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        this.logger.log(`Updating user with id: ${id}.`);

        const updatedUser: UserEntity = {
            ...updateUserDto,
            id,
            posts: [],
        };

        await this.userRepository.save(updatedUser);

        return updatedUser;
    }

    public async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    public async getFirstFoundUser(): Promise<UserEntity> {
        const users = await this.userRepository.find();
        return users[users.length - 1];
    }
}
