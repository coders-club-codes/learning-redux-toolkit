import { global } from '../config';

export const globalStyles = global({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    border: 0,
    listStyle: 'none',
    boxSizing: 'border-box',
  },

  'html, body, #root': {
    minHeight: '100%',
  },

  body: {
    background: '$bg',
    color: '$text',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased !important',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  'body, #root': {
    minHeight: '100vh',
    position: 'relative',
  },

  '#root': {
    display: 'grid',
    placeContent: 'center',
    height: '100%',
  },

  'body, input, textarea, button': {
    fontSize: '$body',
    fontFamily: '$default',
    fontWeight: '$400',
    lineHeight: 1.48,
  },

  button: {
    border: 0,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
    background: 'none',
    fontWeight: '$600',
    cursor: 'pointer',
    border: 0,
    transition: '$hover',
  },

  ul: {
    listStyle: 'none',
    textAlign: 'left',
    padding: 0,
  },

  svg: {
    flexShrink: 0,
  },
});
