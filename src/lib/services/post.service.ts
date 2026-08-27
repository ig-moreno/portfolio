import type {
    Portfolio,
    Post,
    Project,
    Tag,
    UUID
} from '$lib/domain';

import { PostStatus } from '$lib/domain';

export interface ResolvedPost {
    post: Post;
    tags: Tag[];
    relatedProjects: Project[];
}

export class PostService {
    constructor(private readonly portfolio: Portfolio) {}

    getAll(): Post[] {
        return this.portfolio.posts;
    }

    getByUuid(uuid: UUID): Post | undefined {
        return this.portfolio.posts.find(
            post => post.uuid === uuid
        );
    }

    getBySlug(slug: string): Post | undefined {
        return this.portfolio.posts.find(
            post => post.slug === slug
        );
    }

    getPublished(): Post[] {
        return this.portfolio.posts.filter(
            post => post.status === PostStatus.PUBLISHED
        );
    }

    getByTag(tagUuid: UUID): Post[] {
        return this.portfolio.posts.filter(
            post => post.tags.includes(tagUuid)
        );
    }

    getByProject(projectUuid: UUID): Post[] {
        return this.portfolio.posts.filter(
            post => post.relatedProjects.includes(projectUuid)
        );
    }

    resolve(post: Post): ResolvedPost {
        const tags = this.portfolio.tags.filter(
            tag => post.tags.includes(tag.uuid)
        );

        const relatedProjects =
            this.portfolio.projects.filter(
                project =>
                    post.relatedProjects.includes(project.uuid)
            );

        return {
            post,
            tags,
            relatedProjects
        };
    }

    getResolvedBySlug(
        slug: string
    ): ResolvedPost | undefined {
        const post = this.getBySlug(slug);

        if (!post) {
            return undefined;
        }

        return this.resolve(post);
    }

    getPublishedSortedByDate(): Post[] {
        return this.getPublished().sort(
            (a, b) =>
                new Date(b.publishedAt ?? 0).getTime() -
                new Date(a.publishedAt ?? 0).getTime()
        );
    }
}