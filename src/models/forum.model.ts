import { Specialist } from "./specialist.model";

export interface Forum {    
    date: number;
    specialist: Specialist;
    topic: string;
    question: string;
    narrative: string;
    tags: string;
}