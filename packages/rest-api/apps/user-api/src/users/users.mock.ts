import {UserEntity} from './entities/user.entity';
import * as crypto from 'crypto';

export const userMock: UserEntity = {
    id: crypto.randomUUID(),
    posts: [],
    firstName: 'Johannes',
    lastName: 'Aschenbrenner',
    birthDate: new Date('1989-10-31'),
};
