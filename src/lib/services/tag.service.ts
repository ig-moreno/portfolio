import type {
    Portfolio,
    Project,
    Tag,
    UUID
} from '$lib/domain';

export class TagService {
    constructor(private readonly portfolio: Portfolio) {}

    getAll(): Tag[] {
        return this.portfolio.tags;
    }

    getByUuid(uuid: UUID): Tag | undefined {
        return this.portfolio.tags.find(
            tag => tag.uuid === uuid
        );
    }

    getByUuids(uuids: UUID[]): Tag[] {
        const uuidSet = new Set(uuids);

        return this.portfolio.tags.filter(
            tag => uuidSet.has(tag.uuid)
        );
    }

    getForProject(project: Project): Tag[] {
        return this.getByUuids(project.tags);
    }
}