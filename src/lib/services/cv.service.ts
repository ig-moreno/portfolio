import type {
    Education,
    Experience,
    Portfolio,
    Profile,
    Project,
    Skill
} from '$lib/domain';

export interface Cv {
    profile: Profile;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skill[];
}

export class CvService {
    constructor(private readonly portfolio: Portfolio) {}

    getCv(): Cv {
        return {
            profile: this.portfolio.profile,

            experience: [
                ...this.portfolio.experience
            ].sort(
                (a, b) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime()
            ),

            education: [
                ...this.portfolio.education
            ].sort(
                (a, b) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime()
            ),

            projects: [
                ...this.portfolio.projects
            ].sort(
                (a, b) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime()
            ),

            skills: this.portfolio.skills
        };
    }
}