import type { Portfolio } from '$lib/domain';

import { ProjectService } from './project.service';
import { PostService } from './post.service';
import { SkillService } from './skill.service';
import { TagService } from './tag.service';
import { ExperienceService } from './experience.service';
import { EducationService } from './education.service';
import { ProfileService } from './profile.service';
import { CvService } from './cv.service';
import { PortfolioService } from './portfolio.service';


export class ApplicationServices {
    readonly portfolio: PortfolioService;
    readonly projects: ProjectService;
    readonly posts: PostService;
    readonly skills: SkillService;
    readonly tags: TagService;
    readonly experience: ExperienceService;
    readonly education: EducationService;
    readonly profile: ProfileService;
    readonly cv: CvService;

    constructor(portfolio: Portfolio) {
        this.portfolio = new PortfolioService(portfolio);
        this.projects = new ProjectService(portfolio);
        this.posts = new PostService(portfolio);
        this.skills = new SkillService(portfolio);
        this.tags = new TagService(portfolio);
        this.experience = new ExperienceService(portfolio);
        this.education = new EducationService(portfolio);
        this.profile = new ProfileService(portfolio);
        this.cv = new CvService(portfolio);
    }
}