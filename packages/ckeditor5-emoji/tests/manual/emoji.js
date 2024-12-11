/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* globals console:false, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import { Emoji } from '../../src/index.js';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			Emoji,
			Mention,
			Essentials,
			Paragraph
		],
		toolbar: [ 'undo', 'redo', 'emoji' ],
		menuBar: {
			isVisible: true
		}
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
