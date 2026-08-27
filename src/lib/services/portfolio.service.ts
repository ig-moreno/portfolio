import type {
    Education,
    Experience,
    Portfolio,
    Post,
    Project,
    Skill,
    Tag
} from '$lib/domain';

export class PortfolioService {
    constructor(private readonly portfolio: Portfolio) {}

    getPortfolio(): Portfolio {
        return this.portfolio;
    }

    getSkills(): Skill[] {
        return this.portfolio.skills;
    }

    getTags(): Tag[] {
        return this.portfolio.tags;
    }

    getProjects(): Project[] {
        return this.portfolio.projects;
    }

    getPosts(): Post[] {
        return this.portfolio.posts;
    }

    getExperience(): Experience[] {
        return this.portfolio.experience;
    }

    getEducation(): Education[] {
        return this.portfolio.education;
    }

    getDefaultLocale(): string {
        return this.portfolio.defaultLocale;
    }

    getSupportedLocales(): string[] {
        return this.portfolio.supportedLocales;
    }

    isSupportedLocale(locale: string): boolean {
        return this.portfolio.supportedLocales.includes(locale);
    }
}