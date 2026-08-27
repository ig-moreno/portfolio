export interface ExternalLink {
    type: ExternalLinkType;
    url: string;
    label?: string;
}

export enum ExternalLinkType {
    WEBSITE = 'website',
    GITHUB = 'github',
    GITLAB = 'gitlab',
    DEMO = 'demo',
    DOCUMENTATION = 'documentation',
    OTHER = 'other'
}