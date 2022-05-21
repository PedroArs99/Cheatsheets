import {v4 as uuidv4} from 'uuid';

export interface Feedback {
    id: string;
    rating: number;
    text: string;
}

export let feedbackItems: Feedback[] = [
    {
        id: uuidv4(),
        rating: 5,
        text: 'This is a great app!',
    },
    {
        id: uuidv4(),
        rating: 4,
        text: 'This is a good app!',
    },
    {
        id: uuidv4(),
        rating: 3,
        text: 'This is a ok app!',
    },
    {
        id: uuidv4(),
        rating: 2,
        text: 'This is a bad app!',
    },
    {
        id: uuidv4(),
        rating: 1,
        text: 'This is an awful app!',
    }
];