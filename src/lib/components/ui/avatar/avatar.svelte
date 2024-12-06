<!--
	jsrepo 1.17.5
	Installed from github/ieedan/geist/tree/jsrepo
	12-6-2024
-->

<script lang="ts">
	import type { Icons } from '$lib/assets/icons/index';
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive, type Without } from 'bits-ui';
	import { Skeleton } from '$lib/components/ui/skeleton';

	type CustomAvatarProps = {
		icon?: typeof Icons.Bell;
		placeholder?: boolean;
	};

	type Props = CustomAvatarProps & Without<AvatarPrimitive.RootProps, CustomAvatarProps>;

	let {
		class: class_name = undefined,
		icon: Icon = undefined,
		children,
		placeholder = undefined,
		...rest
	}: Props = $props();
</script>

<AvatarPrimitive.Root
	class={cn('relative size-10 rounded-full border border-gray-alpha-400', class_name)}
	{...rest}
>
	<div class="flex size-full shrink-0 overflow-hidden rounded-[inherit]">
		{#if placeholder}
			<Skeleton width="100%" />
		{:else}
			{@render children?.()}
		{/if}
	</div>
	{#if Icon}
		<Icon
			class="absolute -bottom-[5px] -left-[3px] size-3.5 rounded-full bg-background-200"
			aria-hidden="true"
		/>
	{/if}
</AvatarPrimitive.Root>
