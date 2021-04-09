// @flow

import * as React from 'react';

export type NodeSpec = {
  attrs?: ?{[key: string]: any},
  content?: ?string,
  draggable?: ?boolean,
  group?: ?string,
  inline?: ?boolean,
  name?: ?string,
  parseDOM?: ?Array<any>,
  toDOM?: ?(node: any) => Array<any>,
};

export type MarkSpec = {
  attrs?: ?{[key: string]: any},
  name?: ?string,
  parseDOM: Array<any>,
  toDOM: (node: any) => Array<any>,
};

export type EditorProps = {
  // TODO: Fill the interface.
  // https://github.com/ProseMirror/prosemirror-view/blob/master/src/index.js
};

export type DirectEditorProps = EditorProps & {
  // TODO: Fill the interface.
  // https://github.com/ProseMirror/prosemirror-view/blob/master/src/index.js
};

export type RenderCommentProps = {
  commentThreadId: string,
  isActive: boolean,
  requestCommentThreadDeletion: Function,
  requestCommentThreadReflow: Function,
};

export type ImageLike = {
  height: number,
  id: string,
  src: string,
  width: number,
};

export type StyleProps = {
  /**
   * Name of the style. Case insensitive value must be unique.
   */
  styleName: string, // Style name to display
  mode?: number, // For Style Editor UI behaviour //0 = new , 1- modify, 2- rename, 3- editall
  description?: string, // style description
  styles?: {
    align?: string, // Text align
    boldNumbering?: boolean, // true= Bold the Numbering part
    boldPartial?: boolean, // true = Bold first word
    boldSentence?: boolean, // true = Bold first sentence
    fontName?: string, // Font Name
    fontSize?: string, // Font size
    strong?: boolean, // Bold
    em?: boolean, // Italic
    underline?: boolean, // Text Underline
    color?: string, // Text colour
    textHighlight?: string, // Text highlight
    hasNumbering?: boolean, // true= The style has numbering
    paragraphSpacingAfter?: string, // Spacing after a Paragraph
    paragraphSpacingBefore?: string, // Spacing before a Paragraph
    styleLevel?: number, // Numbering heirachy level
    lineHeight?: string, // Line spacing
    isLevelbased?: boolean, // true= Text indent will be based on Level
    indent?: string, // Text indent
  },
};

/**
 * Styles to display in Preview text
 **/
export type Style = {
  float: ?string, // css float property
  fontWeight: ?string, // css font-weight property
  fontStyle: ?string, //css font-style property
  color: ?string, //css color property
  backgroundColor: ?string, //css background-color property
  fontSize: ?string, //css font-size property
  fontName: ?string, //css font property
  textDecorationLine: ?string, //css text-decoration-line property
  verticalAlign: ?string, //css vertical-align property
  textDecoration: ?string, //css text-decoration property
  textAlign: ?string, //css text-align property
  lineHeight: ?string, //css line-height property
};
export type EditorRuntime = {
  // Image Proxy
  canProxyImageSrc?: (src: string) => boolean,
  getProxyImageSrc?: (src: string) => string,

  // Image Upload
  canUploadImage?: () => boolean,
  uploadImage?: (obj: Blob) => Promise<ImageLike>,

  // Comments
  canComment?: () => boolean,
  createCommentThreadID?: () => string,
  renderComment?: (props: RenderCommentProps) => ?React.Element<any>,

  // External HTML
  canLoadHTML?: () => boolean,
  loadHTML?: () => Promise<?string>,

  /**
   * Gets array of styles from the service
   */
  getStylesAsync: () => Promise<StyleProps[]>,
  /**
   * Renames an existing style from the service.
   * @param oldStyleName
   * @param newStyleName
   */
  renameStyle: (
    oldStyleName: string,
    newStyleName: string
  ) => Promise<StyleProps[]>,

  /**
   * Remove an existing style from the service.
   * @param name
   */
  removeStyle: (name: string) => Promise<StyleProps[]>,
};

export type EditorState = any;
