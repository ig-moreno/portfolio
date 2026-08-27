import type {
    ISODate,
    Localized,
    Markdown,
    UUID
} from './common';

import type { Media } from './media';
import type { ExternalLink } from './external-link';

export interface Experience {
    uuid: UUID;

    company: string;

    position: Localized<string>;

    description: Localized<Markdown>;

    startDate: ISODate;

    endDate?: ISODate;

    location?: Localized<string>;

    skills: UUID[];

    logo?: Media;

    links?: ExternalLink[];
}