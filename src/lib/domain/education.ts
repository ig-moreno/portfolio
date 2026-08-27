import type {
    ISODate,
    Localized,
    Markdown,
    UUID
} from './common';

import type { Media } from './media';
import type { ExternalLink } from './external-link';

export interface Education {
    uuid: UUID;

    institution: string;

    title: Localized<string>;

    description?: Localized<Markdown>;

    startDate: ISODate;

    endDate?: ISODate;

    location?: Localized<string>;

    logo?: Media;

    links?: ExternalLink[];
}