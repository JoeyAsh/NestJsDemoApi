import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {ApiTags} from '@nestjs/swagger';
import {UserEntity} from './entities/user.entity';
import {userMock} from './users.mock';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id', new ParseUUIDPipe()) id: string,
    ): Promise<UserEntity> {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }

    @Post('/mock')
    async createRandomMockUser(): Promise<UserEntity> {
        return this.usersService.create(userMock);
    }
}
