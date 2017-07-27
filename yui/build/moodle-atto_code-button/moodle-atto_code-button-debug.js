YUI.add('moodle-atto_code-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_code
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @copyright  2017 The University of Southern Queensland
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_code-button
 */

/**
 * Atto text editor code plugin.
 *
 * @namespace M.atto_code
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_code').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    /**
     * A rangy object to alter CSS classes.
     *
     * @property _codeApplier
     * @type Object
     * @private
     */
    _codeApplier: null,

    initializer: function() {
        this.addButton({
            buttonName: 'code',
            callback: this.toggleCode,
            icon: 'icon',
            iconComponent: 'atto_code',
            inlineFormat: true,

            // Watch the following tags and add/remove highlighting as appropriate:
            tags: 'code'
        });
        this._codeApplier = window.rangy.createClassApplier("editor-code");
    },

    /**
     * Toggle code in selection
     *
     * @method toggleCode
     */
    toggleCode: function() {
        // Replace all the code tags.
        this.get('host').changeToCSS('code', 'editor-code');

        // Toggle code.
        this._codeApplier.toggleSelection();

        // Replace CSS classes with tags.
        this.get('host').changeToTags('editor-code', 'code');
    }
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
