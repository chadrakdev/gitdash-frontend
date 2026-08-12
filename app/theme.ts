import { createTheme } from "@mui/material/styles";

/**
 * GitDash theme.
 *
 * Colours and type scale are lifted directly from the homepage mockup:
 * a near-black canvas, slightly-lighter dark panels, a single blue accent
 * used for the "1 Year" pill, and a three-tone green ramp for the
 * contribution bars (mapped onto the MUI `success` palette so it stays
 * themeable instead of hardcoded).
 */
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3B6FF0",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#4ADE80",
      main: "#22C55E",
      dark: "#15803D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#0A0A0F",
      paper: "#15171C",
    },
    text: {
      primary: "#F5F5F7",
      secondary: "#9AA0AC",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      'var(--font-inter), "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "3.25rem",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: 1.6,
      color: "#9AA0AC",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#9AA0AC",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0A0A0F",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
