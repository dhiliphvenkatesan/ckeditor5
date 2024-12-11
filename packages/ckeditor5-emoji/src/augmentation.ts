/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

import type {
	Emoji,
	EmojiConfig,
	EmojiMention,
	EmojiPicker
} from './index.js';

declare module '@ckeditor/ckeditor5-core' {
	interface EditorConfig {

		/**
		 * The configuration of the {@link module:emoji/emoji~Emoji} feature.
		 *
		 * Read more in {@link module:emoji/emojiconfig~EmojiConfig}.
		 */
		emoji?: EmojiConfig;
	}

	interface PluginsMap {
		[Emoji.pluginName]: Emoji;
		[EmojiMention.pluginName]: EmojiMention;
		[EmojiPicker.pluginName]: EmojiPicker;
	}
}
