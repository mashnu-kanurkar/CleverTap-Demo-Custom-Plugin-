import { registerPlugin } from '@capacitor/core';

import type { CleverTapCustomPlugin } from './definitions';

const CleverTapCustom1 = registerPlugin<CleverTapCustomPlugin>('CleverTapCustomPlugin');

export * from './definitions';
export { CleverTapCustom1 };