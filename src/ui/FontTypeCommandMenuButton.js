// @flow

import CommandMenuButton from './CommandMenuButton';
import {FontTypeCommand} from '@modusoperandi/licit-ui-commands';
import * as React from 'react';
import findActiveFontType from './findActiveFontType';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { FONT_TYPE_NAMES } from '../FontTypeMarkSpec';
import { FONT_TYPE_NAME_DEFAULT } from './findActiveFontType';
import { Transform } from 'prosemirror-transform';

const FONT_TYPE_COMMANDS: Object = {
  [FONT_TYPE_NAME_DEFAULT]: new FontTypeCommand(''),
};

FONT_TYPE_NAMES.forEach((name) => {
  FONT_TYPE_COMMANDS[name] = new FontTypeCommand(name);
});

const COMMAND_GROUPS = [FONT_TYPE_COMMANDS];

class FontTypeCommandMenuButton extends React.PureComponent<any, any> {
  props: {
    dispatch: (tr: Transform) => void,
    editorState: EditorState,
    editorView: ?EditorView,
  };

  render(): React.Element<any> {
    const { dispatch, editorState, editorView } = this.props;
    const fontType = findActiveFontType(editorState);
    return (
      <CommandMenuButton
        className="width-100"
        // [FS] IRAD-1008 2020-07-16
        // Disable font type menu on editor disable state
        commandGroups={COMMAND_GROUPS}
        disabled={editorView && editorView.disabled ? true : false}
        dispatch={dispatch}
        editorState={editorState}
        editorView={editorView}
        label={fontType}
      />
    );
  }
}

export default FontTypeCommandMenuButton;
