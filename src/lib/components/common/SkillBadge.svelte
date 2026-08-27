<script lang="ts">
	import type { Skill } from '$lib/domain';

	interface Props {
		skill: Skill;
	}

	let { skill }: Props = $props();
</script>

<span>
	{skill.name}
</span>