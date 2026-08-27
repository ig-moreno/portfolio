import type { Profile } from './profile';
import type { Skill } from './skill';
import type { Tag } from './tag';
import type { Experience } from './experience';
import type { Education } from './education';
import type { Project } from './project';
import type { Post } from './post';

export interface Portfolio {
    schemaVersion: number;

    defaultLocale: string;

    supportedLocales: string[];

    profile: Profile;

    skills: Skill[];

    tags: Tag[];

    experience: Experience[];

    education: Education[];

    projects: Project[];

    posts: Post[];
}