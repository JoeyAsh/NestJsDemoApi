import {PostModel} from './entities/post.entity';

export const postMock: PostModel = {
    id: 1,
    date: new Date(Date.now()),
    title: 'Intro to NestJS',
    body: 'This blog post is about NestJS',
    category: 'NestJS',
};

export const postArrayMock: Array<PostModel> = [
    {
        id: 1,
        date: new Date(Date.now()),
        title: 'First Post',
        body: 'Post 1',
        category: 'NestJS',
    },
    {
        id: 2,
        date: new Date(Date.now()),
        title: 'Second post',
        body: 'Post 2',
        category: 'React',
    },
    {
        id: 3,
        date: new Date(Date.now()),
        title: 'Third post',
        body: 'Post 3',
        category: 'Typescript',
    },
    {
        id: 4,
        date: new Date(Date.now()),
        title: 'Fourth post',
        body: 'Post 4',
        category: 'AngularJS',
    },
    {
        id: 5,
        date: new Date(Date.now()),
        title: 'Fifth post',
        body: 'Post 5',
        category: 'VueJS',
    },
];
