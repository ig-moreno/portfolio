import type {
    Experience,
    Portfolio,
    Skill,
    UUID
} from '$lib/domain';

export interface ResolvedExperience {
    experience: Experience;
    skills: Skill[];
}

export class ExperienceService {
    constructor(private readonly portfolio: Portfolio) {}

    getAll(): Experience[] {
        return this.portfolio.experience;
    }

    getByUuid(uuid: UUID): Experience | undefined {
        return this.portfolio.experience.find(
            experience => experience.uuid === uuid
        );
    }

    getCurrent(): Experience[] {
        return this.portfolio.experience.filter(
            experience => experience.endDate === undefined
        );
    }

    getPrevious(): Experience[] {
        return this.portfolio.experience.filter(
            experience => experience.endDate !== undefined
        );
    }

    resolve(
        experience: Experience
    ): ResolvedExperience {
        const skills = this.portfolio.skills.filter(
            skill => experience.skills.includes(skill.uuid)
        );

        return {
            experience,
            skills
        };
    }

    getResolved(): ResolvedExperience[] {
        return this.portfolio.experience.map(
            experience => this.resolve(experience)
        );
    }

    getSortedByDate(): Experience[] {
        return [...this.portfolio.experience].sort(
            (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
        );
    }
}