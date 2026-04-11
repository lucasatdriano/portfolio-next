import { Technology } from './technology';

export interface Project {
    id: string;
    title: string;
    image: string;
    repoUrl: string;
    liveUrl: string;
    technologies: Technology[];
}
