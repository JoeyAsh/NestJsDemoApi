import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {PostEntity} from '../../../../data-api/src/posts/entities/post.entity';

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    birthDate: Date;

    @OneToMany(() => PostEntity, (post) => post.user, {
        cascade: true,
    })
    posts: Array<PostEntity>;
}
