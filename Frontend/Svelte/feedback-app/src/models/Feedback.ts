export interface Feedback {
    id: number;
    rating: number;
    text: string;
}

export const feedbackItems: Feedback[] = [
    {
        id: 1,
        rating: 5,
        text: 'This is a great app!',
    },
    {
        id: 2,
        rating: 4,
        text: 'This is a good app!',
    },
    {
        id: 3,
        rating: 3,
        text: 'This is a ok app!',
    },
    {
        id: 4,
        rating: 2,
        text: 'This is a bad app!',
    },
    {
        id: 5,
        rating: 1,
        text: 'This is an awful app!',
    }
];