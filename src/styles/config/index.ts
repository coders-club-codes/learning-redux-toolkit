import { createCss } from '@stitches/react';
import { readableColor, shade, tint } from 'polished';

export const { styled, css, global } = createCss({
  prefix: 'coders-club',
  theme: {
    colors: {
      bg: '#202020',
      bgHighLight: '#4a2d2e',
      text: '#e6dddd',
      textStrong: '#bbbbbb',
      border: '#422a2b',
      brand: '#f35160',
      readableBrandText: readableColor('#f35160'),
      brandHover: tint(0.075, '#f35160'),
      brandActive: shade(0.078, '#f35160'),
    },
    fonts: {
      default:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    fontSizes: {
      body: '16px',
      title: '24px',
    },
    fontWeights: {
      300: 300,
      400: 400,
      600: 600,
    },
    radii: {
      small: '2px',
      default: '4px',
      huge: '8px',
    },
    transitions: {
      hover: '180ms 50ms ease-in-out',
    },
  },
});
