/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* globals document */

import { ButtonView, ToolbarLineBreakView, ToolbarView } from 'ckeditor5';
import { Locale } from 'ckeditor5-premium-features';

const locale = new Locale();

function createButton() {
	const button = new ButtonView();
	button.set( { label: 'Button', withText: true } );
	return button;
}

const newLine = new ToolbarLineBreakView( locale );

const items = [ createButton(), newLine, createButton() ];

const toolbarMultiRow = new ToolbarView( locale );
items.forEach( item => toolbarMultiRow.items.add( item ) );
toolbarMultiRow.render();

document.querySelector( '.ui-toolbar-multirow' ).append( toolbarMultiRow.element );
