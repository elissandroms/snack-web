import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import mapKeys from 'lodash/mapKeys';
import withThemeName, { ThemeName } from './Preferences/withThemeName';

type Colors = typeof light;

const common = {
  primary: '#4630eb',
  secondary: '#5844ed',

  error: '#f44336',
  warning: '#ff9800',
  success: '#4caf50',

  border: 'rgba(0, 0, 0, .08)',
};

export const light = {
  ...common,

  accent: '#000',
  'accent-text': '#fff',

  text: '#111',
  background: '#fafafa',
  content: '#fff',

  // Editor colors
  'editor-background': '#fafafa',
  'editor-text': '#111',
  'editor-border': 'transparent',
};

export const dark: Colors = {
  ...common,

  accent: '#fff',
  'accent-text': '#000',

  text: '#D3D7CE',
  background: '#212733',
  content: '#242B38',

  // Editor colors
  'editor-background': '#272D38',
  'editor-text': '#D9D7CE',
  'editor-border': '#343D4A',
};

export const c = (name: keyof typeof light) => `var(--color-${name})`;

type Props = {
  theme: ThemeName;
  children: React.ReactNode;
};

function ColorsProvider({ theme, children }: Props) {
  return (
    <div
      className={css(styles.container)}
      style={mapKeys(theme === 'dark' ? dark : light, (_, key) => `--color-${key}`)}>
      {children}
    </div>
  );
}

export default withThemeName(ColorsProvider);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
