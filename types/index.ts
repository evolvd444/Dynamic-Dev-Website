
import type {Image} from 'sanity'

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt:string;
}

// interface Image {
//     _type: "image";
//     asset: {
//         _ref: string;
//         _type: "reference";
//     };
// }

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address?: string;
    backgroundInformation?: string;
    email?: string;
    role?: string;
    heroImage?: Image;
    name?: string
    phoneNumber?: string;
    profilePic?: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    title?: string;
    progress?: string;
    image?: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    progress?: string;
    image?: Image;
    title?: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle?: string;
    companyImage?: Image;
    company?: string;
    //@ts-expect-error
    dateStarted?: date;
     //@ts-expect-error
    dateEnded?: date;
    points?: string[];
    isCurrentlyWorkingHere?: boolean;
    technologies?: Technology[];
}

export interface Project extends SanityBody {
    title?: string
    _type: "project";
    image?: Image;
    promoVideo?: string;
    playbackId?:string;
    linkToBuild?: string;
    summary?: string;
    technologies?: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title?: string;
    url?: string;

}



