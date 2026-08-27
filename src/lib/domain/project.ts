import type {
    ISODate,
    Localized,
    Markdown,
    UUID
} from './common';

import type { Media } from './media';
import type { ExternalLink } from './external-link';

export interface Project {
    uuid: UUID;

    slug: string;

    title: Localized<string>;

    shortDescription: Localized<Markdown>;

    description: Localized<Markdown>;

    projectStatus: ProjectStatus;

    startDate: ISODate;

    endDate?: ISODate;

    skills: UUID[];

    tags: UUID[];

    media: Media[];

    links: ExternalLink[];
}

export enum ProjectStatus {
    PLANNED = 'planned',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    PAUSED = 'paused',
    ARCHIVED = 'archived'
}