import {PostEntity} from './entities/post.entity';
import * as crypto from 'crypto';
import {userMock} from '../../../user-api/src/users/users.mock';

const generateEarlierDate = (): Date => {
    return new Date(Date.now() - (Math.random() * (9000 - 1000) + 1000));
};

export const postMock: PostEntity = {
    id: crypto.randomUUID(),
    createdOn: generateEarlierDate(),
    updatedOn: new Date(Date.now()),
    text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed' +
        ' diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
        ' aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
        'justo duo dolores et ea rebum. Stet clita kasd gubergren, no' +
        ' sea takimata sanctus est Lorem ipsum dolor sit amet.',
    views: 253,
    shares: 12,
    likes: 142,
    user: userMock,
};

export const postArrayMock: Array<PostEntity> = [
    {
        id: crypto.randomUUID(),
        createdOn: generateEarlierDate(),
        updatedOn: new Date(Date.now()),
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed' +
            ' diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
            ' aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
            'justo duo dolores et ea rebum. Stet clita kasd gubergren, no' +
            ' sea takimata sanctus est Lorem ipsum dolor sit amet.',
        views: 253,
        shares: 12,
        likes: 142,
        user: userMock,
    },
    {
        id: crypto.randomUUID(),
        createdOn: generateEarlierDate(),
        updatedOn: new Date(Date.now()),
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed' +
            ' diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
            ' aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
            'justo duo dolores et ea rebum. Stet clita kasd gubergren, no' +
            ' sea takimata sanctus est Lorem ipsum dolor sit amet.',
        views: 253,
        shares: 12,
        likes: 142,
        user: userMock,
    },
    {
        id: crypto.randomUUID(),
        createdOn: generateEarlierDate(),
        updatedOn: new Date(Date.now()),
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed' +
            ' diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
            ' aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
            'justo duo dolores et ea rebum. Stet clita kasd gubergren, no' +
            ' sea takimata sanctus est Lorem ipsum dolor sit amet.',
        views: 253,
        shares: 12,
        likes: 142,
        user: userMock,
    },
    {
        id: crypto.randomUUID(),
        createdOn: generateEarlierDate(),
        updatedOn: new Date(Date.now()),
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed' +
            ' diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
            ' aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
            'justo duo dolores et ea rebum. Stet clita kasd gubergren, no' +
            ' sea takimata sanctus est Lorem ipsum dolor sit amet.',
        views: 253,
        shares: 12,
        likes: 142,
        user: userMock,
    },
    {
        id: crypto.randomUUID(),
        createdOn: generateEarlierDate(),
        updatedOn: new Date(Date.now()),
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed' +
            ' diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
            ' aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
            'justo duo dolores et ea rebum. Stet clita kasd gubergren, no' +
            ' sea takimata sanctus est Lorem ipsum dolor sit amet.',
        views: 253,
        shares: 12,
        likes: 142,
        user: userMock,
    },
];
