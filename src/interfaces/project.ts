import { Technology } from './technology';

export interface Project {
    id: string;
    images: string[];
    repoUrl: string;
    liveUrl: string;
    technologies: Technology[];
}
