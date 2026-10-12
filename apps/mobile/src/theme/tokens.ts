// Placeholder tokens. Shokhnur replaces these with the real design. Screens never use raw values.
const palette = {
  white: '#FFFFFF',
  grey50: '#F5F5F5',
  grey100: '#EBEBEB',
  grey300: '#C4C4C4',
  grey500: '#8A8A8A',
  grey700: '#4A4A4A',
  grey900: '#1A1A1A',
  amber50: '#2A2118',
  amber100: '#3A2E21',
  amber300: '#8C6D45',
  amber500: '#C9A06A',
  amber700: '#E3C394',
  night: '#14100C',
  danger: '#B3261E',
};

export type ColorTokens = {
  background: string;
  surface: string;
  surfaceRaised: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  onAccent: string;
  danger: string;
};

export const colors: { day: ColorTokens; night: ColorTokens } = {
  day: {
    background: palette.white,
    surface: palette.grey50,
    surfaceRaised: palette.grey100,
    border: palette.grey300,
    text: palette.grey900,
    textMuted: palette.grey500,
    accent: palette.grey700,
    onAccent: palette.white,
    danger: palette.danger,
  },
  // Dim warm amber, low contrast, no white flashes.
  night: {
    background: palette.night,
    surface: palette.amber50,
    surfaceRaised: palette.amber100,
    border: palette.amber300,
    text: palette.amber700,
    textMuted: palette.amber300,
    accent: palette.amber500,
    onAccent: palette.night,
    danger: palette.danger,
  },
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

export const radius = { sm: 6, md: 12, lg: 20, pill: 999 } as const;

export const type = {
  caption: { fontSize: 13, lineHeight: 18 },
  body: { fontSize: 16, lineHeight: 22 },
  title: { fontSize: 20, lineHeight: 26, fontWeight: '600' as const },
  display: { fontSize: 32, lineHeight: 38, fontWeight: '600' as const },
} as const;

export const hitTarget = { min: 48, tile: 56 } as const;

export const motion = {
  spring: { damping: 18, stiffness: 180, mass: 1 },
  toastMs: 4000,
} as const;

export type Theme = {
  mode: 'day' | 'night';
  colors: ColorTokens;
  spacing: typeof spacing;
  radius: typeof radius;
  type: typeof type;
  hitTarget: typeof hitTarget;
};
