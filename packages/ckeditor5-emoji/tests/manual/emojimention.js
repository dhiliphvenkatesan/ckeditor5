/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console:false, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import { EmojiMention } from '../../src/index.js';

import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard.js';
import Enter from '@ckeditor/ckeditor5-enter/src/enter.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Typing from '@ckeditor/ckeditor5-typing/src/typing.js';
import Undo from '@ckeditor/ckeditor5-undo/src/undo.js';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			EmojiMention,
			Clipboard,
			Enter,
			Mention,
			Paragraph,
			Typing,
			Undo
		],
		toolbar: [ 'undo', 'redo' ]
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
