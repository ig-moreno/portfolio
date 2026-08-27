import type { Localized, UUID } from './common';

export interface Tag {
    uuid: UUID;
    name: Localized<string>;
}