import type {
    Portfolio,
    Project,
    Skill,
    Tag,
    UUID
} from '$lib/domain';

import { ProjectStatus } from '$lib/domain/';

export interface ResolvedProject {
    project: Project;
    skills: Skill[];
    tags: Tag[];
}

export class ProjectService {
    constructor(private readonly portfolio: Portfolio) {}

    getAll(): Project[] {
        return this.portfolio.projects;
    }

    getByUuid(uuid: UUID): Project | undefined {
        return this.portfolio.projects.find(
            project => project.uuid === uuid
        );
    }

    getBySlug(slug: string): Project | undefined {
        return this.portfolio.projects.find(
            project => project.slug === slug
        );
    }

    getByStatus(status: ProjectStatus): Project[] {
        return this.portfolio.projects.filter(
            project => project.projectStatus === status
        );
    }

    getActive(): Project[] {
        return this.portfolio.projects.filter(
            project =>
                project.projectStatus === ProjectStatus.IN_PROGRESS
        );
    }

    getFeatured(): Project[] {
        return this.portfolio.projects.filter(
            project =>
                project.featured === true
        );
    }

    getCompleted(): Project[] {
        return this.portfolio.projects.filter(
            project =>
                project.projectStatus === ProjectStatus.COMPLETED
        );
    }

    getBySkill(skillUuid: UUID): Project[] {
        return this.portfolio.projects.filter(
            project => project.skills.includes(skillUuid)
        );
    }

    getByTag(tagUuid: UUID): Project[] {
        return this.portfolio.projects.filter(
            project => project.tags.includes(tagUuid)
        );
    }

    resolve(project: Project): ResolvedProject {
        const skills = this.portfolio.skills.filter(
            skill => project.skills.includes(skill.uuid)
        );

        const tags = this.portfolio.tags.filter(
            tag => project.tags.includes(tag.uuid)
        );

        return {
            project,
            skills,
            tags
        };
    }

    getResolvedBySlug(
        slug: string
    ): ResolvedProject | undefined {
        const project = this.getBySlug(slug);

        if (!project) {
            return undefined;
        }

        return this.resolve(project);
    }

    getSortedByDate(): Project[] {
        return [...this.portfolio.projects].sort(
            (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
        );
    }
}