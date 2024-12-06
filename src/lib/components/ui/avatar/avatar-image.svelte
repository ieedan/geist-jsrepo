<!--
	jsrepo 1.17.5
	Installed from github/ieedan/geist/tree/jsrepo
	12-6-2024
-->

<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: AvatarPrimitive.ImageProps = $props();
</script>

<AvatarPrimitive.Image
	bind:ref
	class={cn('aspect-square h-full w-full', className)}
	{...restProps}
/>
