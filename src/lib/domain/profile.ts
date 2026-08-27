import type { Localized, Markdown } from './common';
import type { Media } from './media';
import type { ExternalLink } from './external-link';

export interface Profile {
    name: string;
    headline: Localized<string>;
    summary: Localized<Markdown>;

    avatar?: Media;

    location?: string;

    email?: string;

    links: ExternalLink[];
}