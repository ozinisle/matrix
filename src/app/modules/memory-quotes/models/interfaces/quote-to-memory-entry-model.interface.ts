import { QuoteToMemoryExperienceType } from '../types/quote-to-memory.types';

export interface QuoteToMemoryEntryModelInterface {
    eventName: string; // event name
    eventDescription: string; // event description
    peopleInvolved: string[]; // all people who are involved
    entitiesInvolved: string[]; // all other entities that are involved
    locationInvolved: string[]; // all locations involved with the event
    categories: string[]; // all categories under which the event has been classified into
    date: string; // date of event
    time: string; // time of event
    experienceType: QuoteToMemoryExperienceType; // experience type
    comments: string; // comments
}

