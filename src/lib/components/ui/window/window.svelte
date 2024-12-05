<!--
	jsrepo 1.17.2
	Installed from github/ieedan/geist/tree/jsrepo
	12-5-2024
-->

<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		class?: string | null;
		children?: Snippet;
	};

	let { class: class_name = undefined, title, children, ...rest }: Props = $props();
</script>

<div
	class={cn('bg-background-200 flex flex-col rounded-md border shadow-sm', class_name)}
	{...rest}
>
	<div class="relative flex h-9 w-full border-b px-2">
		<div class="flex place-items-center gap-2">
			<span class="size-3 rounded-full bg-[#ff5f56]"></span>
			<span class="size-3 rounded-full bg-[#ffbd2e]"></span>
			<span class="size-3 rounded-full bg-[#27c93f]"></span>
		</div>
		<p
			class="text-accents-5 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xs"
		>
			{title}
		</p>
	</div>
	<div class="flex-grow">
		{@render children?.()}
	</div>
</div>
