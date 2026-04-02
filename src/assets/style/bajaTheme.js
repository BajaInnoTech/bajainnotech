// theme/bajaTheme.ts
import { createTheme } from '@mui/material';

const bajaTokens = {
  duskAmber:     '#F5A855',
  sunsetBlush:   '#E8855E',
  warmHorizon:   '#D4C097',
  duskSlate:     '#7A8FAD',
  seaMist:       '#9EB5C8',
  mountainHaze:  '#5A6B80',
  shoreSand:     '#C2B8A0',
  deepDusk:      '#3C4A5C',
};

const bajaTheme = createTheme({
  palette: {
    primary: {
      main:         bajaTokens.sunsetBlush,
      light:        bajaTokens.duskAmber,
      dark:         '#C4613A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main:         bajaTokens.duskSlate,
      light:        bajaTokens.seaMist,
      dark:         bajaTokens.mountainHaze,
      contrastText: '#FFFFFF',
    },
    warning: {
      main:         bajaTokens.duskAmber,
      contrastText: bajaTokens.deepDusk,
    },
    background: {
      default: '#FBF5EE',
      paper:   '#FFFFFF',
    },
    text: {
      primary:   bajaTokens.deepDusk,
      secondary: bajaTokens.mountainHaze,
      disabled:  bajaTokens.shoreSand,
    },
    divider: 'rgba(90, 107, 128, 0.2)',
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 600, color: bajaTokens.deepDusk },
    h2: { fontWeight: 600, color: bajaTokens.deepDusk },
    h3: { fontWeight: 500, color: bajaTokens.deepDusk },
    h4: { fontWeight: 500 },
    body1: { color: bajaTokens.deepDusk },
    body2: { color: bajaTokens.mountainHaze },
  },

  shape: { borderRadius: 10 },

  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 500, borderRadius: 8 },
        containedPrimary: {
          background: bajaTokens.sunsetBlush,
          '&:hover': { background: '#C4613A' },
        },
        containedSecondary: {
          background: bajaTokens.duskSlate,
          '&:hover': { background: bajaTokens.mountainHaze },
        },
        outlined: {
          borderColor: bajaTokens.seaMist,
          color: bajaTokens.duskSlate,
          '&:hover': { borderColor: bajaTokens.duskSlate, background: 'rgba(122,143,173,0.06)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'none',
          border: '0.5px solid rgba(90,107,128,0.18)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: bajaTokens.deepDusk,
          color: bajaTokens.warmHorizon,
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 20, fontWeight: 500 },
        colorPrimary: {
          background: '#FEE8DC',
          color: '#7A3B1E',
          border: `1px solid ${bajaTokens.sunsetBlush}`,
        },
        colorSecondary: {
          background: '#EAF0F6',
          color: '#1E3A5C',
          border: `1px solid ${bajaTokens.duskSlate}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '& .MuiOutlinedInput-notchedOutline': { borderColor: bajaTokens.seaMist },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: bajaTokens.duskSlate },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: bajaTokens.sunsetBlush },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: bajaTokens.sunsetBlush,
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': { background: '#C4613A' },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 4, background: 'rgba(212,192,151,0.3)' },
        bar: { background: bajaTokens.sunsetBlush },
      },
    },
  },
});

export default bajaTheme;
