/*
	jsrepo 1.18.0
	Installed from github/ieedan/geist/tree/jsrepo-updates
	12-6-2024
*/

import { type VariantProps, tv } from 'tailwind-variants';

export const empty_state_variants = tv({
	base: 'grid place-items-center gap-4 text-gray-900',
	variants: {
		variant: {}
	},
	defaultVariants: {}
});

export type Variant = VariantProps<typeof empty_state_variants>['variant'];

export { default as EmptyState } from './empty-state.svelte';
