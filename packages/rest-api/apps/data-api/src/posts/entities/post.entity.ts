import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {UserEntity} from '../../../../user-api/src/users/entities/user.entity';

@Entity('Post')
export class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date;

    @Column({type: 'timestamp', nullable: true})
    updatedOn?: Date;

    @Column()
    likes: number;

    @Column()
    views: number;

    @Column()
    shares: number;

    @Column({nullable: true})
    mediaUrl?: string;

    @ManyToOne(() => UserEntity, (user) => user.posts)
    @JoinColumn()
    user: UserEntity;
}
