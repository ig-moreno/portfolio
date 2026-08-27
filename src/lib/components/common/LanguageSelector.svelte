<!-- src/lib/components/common/LanguageSelector.svelte -->

<script lang="ts">
	import { locale } from '$lib/stores/locale';

	import {
		SUPPORTED_LOCALES,
		type Locale
	} from '$lib/config/i18n';

	function changeLocale(value: Locale) {
		locale.set(value);
	}
</script>

<select
	value={$locale}
	onchange={(event) =>
		changeLocale(
			(event.currentTarget as HTMLSelectElement).value as Locale
		)}
>
	{#each SUPPORTED_LOCALES as language}
		<option value={language}>
			{language.toUpperCase()}
		</option>
	{/each}
</select>