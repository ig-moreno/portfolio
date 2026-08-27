export interface Media {
    type: MediaType;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

export enum MediaType {
    IMAGE = 'image',
    VIDEO = 'video'
}