import type {
    ISODate,
    Localized,
    Markdown,
    UUID
} from './common';

import type { Media } from './media';

export interface Post {
    uuid: UUID;

    slug: string;

    title: Localized<string>;

    excerpt: Localized<Markdown>;

    content: Localized<Markdown>;

    status: PostStatus;

    publishedAt?: ISODate;

    updatedAt?: ISODate;

    tags: UUID[];

    relatedProjects: UUID[];

    media: Media[];
}

export enum PostStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived'
}