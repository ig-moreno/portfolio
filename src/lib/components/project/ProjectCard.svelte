<script lang="ts">
	import type { ResolvedProject } from '$lib/services';

	import SkillBadge from '$lib/components/common/SkillBadge.svelte';
	import TagBadge from '$lib/components/common/TagBadge.svelte';

	import { localize } from '$lib/services';

	interface Props {
		data: ResolvedProject;
		locale: string;
		defaultLocale: string;
	}

	let {
		data,
		locale,
		defaultLocale
	}: Props = $props();
</script>

<article>
	<h2>
		<a href={`/projects/${data.project.slug}`}>
			{localize(data.project.title, locale, defaultLocale)}
		</a>
	</h2>

	<p>
		{localize(
			data.project.shortDescription,
			locale,
			defaultLocale
		)}
	</p>

	{#if data.skills.length > 0}
		<div>
			{#each data.skills as skill (skill.uuid)}
				<SkillBadge {skill} />
			{/each}
		</div>
	{/if}

	{#if data.tags.length > 0}
		<div>
			{#each data.tags as tag (tag.uuid)}
				<TagBadge
					{tag}
					{locale}
					{defaultLocale}
				/>
			{/each}
		</div>
	{/if}
</article>