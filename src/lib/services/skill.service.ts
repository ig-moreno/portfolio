import type {
    Project,
    Skill,
    UUID
} from '$lib/domain';

import type { Portfolio } from '$lib/domain';

export class SkillService {
    constructor(private readonly portfolio: Portfolio) {}

    getAll(): Skill[] {
        return this.portfolio.skills;
    }

    getByUuid(uuid: UUID): Skill | undefined {
        return this.portfolio.skills.find(
            skill => skill.uuid === uuid
        );
    }

    getBySlug(slug: string): Skill | undefined {
        return this.portfolio.skills.find(
            skill => skill.slug === slug
        );
    }

    getByUuids(uuids: UUID[]): Skill[] {
        const uuidSet = new Set(uuids);

        return this.portfolio.skills.filter(
            skill => uuidSet.has(skill.uuid)
        );
    }

    getForProject(project: Project): Skill[] {
        return this.getByUuids(project.skills);
    }
}