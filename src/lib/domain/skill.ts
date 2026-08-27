import type { UUID } from './common';
import type { Media } from './media';

export interface Skill {
    uuid: UUID;
    slug: string;
    name: string;
    color: string;
    category: SkillCategory;
    icon?: Media;
    url?: string;
}

export enum SkillCategory {
    LANGUAGE = 'language',
    FRAMEWORK = 'framework',
    LIBRARY = 'library',
    DATABASE = 'database',
    TOOL = 'tool',
    PLATFORM = 'platform',
    CLOUD = 'cloud',
    OTHER = 'other'
}