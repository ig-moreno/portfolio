import type {
    Education,
    Portfolio,
    UUID
} from '$lib/domain';

export class EducationService {
    constructor(private readonly portfolio: Portfolio) {}

    getAll(): Education[] {
        return this.portfolio.education;
    }

    getByUuid(uuid: UUID): Education | undefined {
        return this.portfolio.education.find(
            education => education.uuid === uuid
        );
    }

    getCurrent(): Education[] {
        return this.portfolio.education.filter(
            education => education.endDate === undefined
        );
    }

    getSortedByDate(): Education[] {
        return [...this.portfolio.education].sort(
            (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
        );
    }
}