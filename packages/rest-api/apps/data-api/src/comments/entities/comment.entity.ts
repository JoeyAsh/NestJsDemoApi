import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Comment')
export class CommentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
