<script lang="ts">
	import { asset } from '$app/paths';
	import type { Profile } from '$lib/domain';
	import { localize } from '$lib/services';

	interface Props {
		profile: Profile;
		locale: string;
		defaultLocale: string;
	}

	let {
		profile,
		locale,
		defaultLocale
	}: Props = $props();
</script>

<div class="grid grid-cols-[3fr_2fr] gap-4">
	<div class="flex flex-col">
		<p class="text-3xl">Hola, soy</p>
		<h1 class="text-9xl font">
			{profile.name}
		</h1>
		<p class="text-6xl">{localize(profile.headline, locale, defaultLocale)}</p>
		<p class="py-6">
			{localize(profile.summary, locale, defaultLocale)}
		</p>
		<div class=" mt-7 flex gap-8">
			<button class="bg-white rounded-full text-slate-800 px-8 py-4 font-bold">
				<i class="fa-solid fa-envelope"></i>
				<span>contact.ig-moreno@gmail.com</span>
			</button>
			<button>
				Download CV <i class="fa-solid fa-download"></i>
			</button>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<img
			class="profile-avatar w-full h-full object-cover aspect-square shadow-lg"
			src={asset('/images/avatar.png')}
			alt=""
		/>
	</div>
</div>
