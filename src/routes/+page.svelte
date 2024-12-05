<script lang="ts">
	import { Snippet } from '$lib/components/ui/snippet';
	import { Window } from '$lib/components/ui/window';
	import { Icons } from '$lib/assets/icons';
	import ThemeSwitcher from '$lib/components/ui/theme-switcher/theme-switcher.svelte';
</script>

<main class="flex h-svh place-items-center justify-center px-6 bg-background-100">
	<Window title="jsrepo.dev" class="w-full max-w-2xl">
		<div class="flex flex-col gap-5 place-items-center justify-center min-h-96">
			<div class="flex place-items-center gap-3">
				<img src="https://jsrepo.dev/badges/jsrepo.svg" alt="jsrepo logo">
				<span class="font-mono text-xl text-gray-900">+</span>
				<Icons.LogoGeist width="27" height="27" aria-hidden="true" />
			</div>
			<Snippet text="npx jsrepo init" class="w-[300px]" />
			<ThemeSwitcher/>
		</div>
	</Window>
</main>
