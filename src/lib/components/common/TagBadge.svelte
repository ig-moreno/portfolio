<script lang="ts">
	import type { Tag } from '$lib/domain';
	import { localize } from '$lib/services';

	interface Props {
		tag: Tag;
		locale: string;
		defaultLocale: string;
	}

	let {
		tag,
		locale,
		defaultLocale
	}: Props = $props();
</script>

<span>
	{localize(tag.name, locale, defaultLocale)}
</span>