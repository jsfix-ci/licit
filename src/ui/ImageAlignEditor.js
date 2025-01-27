// @flow

import './czi-inline-editor.css';
import { CustomButton } from '@modusoperandi/licit-ui-commands';
import * as React from 'react';

const ImageAlignValues = {
  NONE: {
    value: null,
    text: 'Inline',
  },
  LEFT: {
    value: 'left',
    text: 'Float left',
  },
  CENTER: {
    value: 'center',
    text: 'Center',
  },
  RIGHT: {
    value: 'right',
    text: 'Float right',
  },
};

export type ImageInlineEditorValue = {
  align: ?string,
};

class ImageInlineEditor extends React.PureComponent<any, any> {
  props: {
    onSelect: (val: ImageInlineEditorValue) => void,
    value: ?ImageInlineEditorValue,
  };

  render(): React.Element<any> {
    const align = this.props.value ? this.props.value.align : null;
    const onClick = this._onClick;
    const buttons = Object.keys(ImageAlignValues).map((key) => {
      const { value, text } = ImageAlignValues[key];
      return (
        <CustomButton
          active={align === value}
          key={key}
          label={text}
          onClick={onClick}
          value={value}
        />
      );
    });

    return <div className="czi-inline-editor custom-">{buttons}</div>;
  }

  _onClick = (align: ?string): void => {
    this.props.onSelect({ align: align });
  };
}

export default ImageInlineEditor;
