import {v4 as uuidv4} from 'uuid';

export interface Feedback {
    id: string;
    rating: number;
    text: string;
}