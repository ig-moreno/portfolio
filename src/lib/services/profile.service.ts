import type {
    Portfolio,
    Profile
} from '$lib/domain';

export class ProfileService {
    constructor(private readonly portfolio: Portfolio) {}

    get(): Profile {
        return this.portfolio.profile;
    }
}