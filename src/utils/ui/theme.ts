import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    blue: PaletteOptions["primary"];
    turquoise: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
    purple: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
    yellow: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
  }

  interface Palette {
    blue: Palette["primary"];
    turquoise: Palette["primary"];
    green: Palette["primary"];
    purple: Palette["primary"];
    pink: Palette["primary"];
    yellow: Palette["primary"];
    red: Palette["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
    turquoise: true;
    green: true;
    purple: true;
    pink: true;
    yellow: true;
    red: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    blue: true;
    turquoise: true;
    green: true;
    purple: true;
    pink: true;
    yellow: true;
    red: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    blue: true;
    turquoise: true;
    green: true;
    purple: true;
    pink: true;
    yellow: true;
    red: true;
    blueSelected: true;
    blueUnselected: true;
  }
}

declare module "@mui/material/Paper" {
  interface paperPropsColorOverrides {
    blue: true;
    turquoise: true;
    green: true;
    purple: true;
    pink: true;
    yellow: true;
    red: true;
  }
}

declare module "@mui/material/ToggleButton" {
  interface ToggleButtonPropsColorOverrides {
    blue: true;
    turquoise: true;
    green: true;
    purple: true;
    pink: true;
    yellow: true;
    red: true;
  }
}

const REM_SCALE = 0.25;

/**
 * Spacing is in REM. Base font-size is 16px
 * 1 unit = 0.25rem = 4px
 *
 * @param units
 */
const spacing = (units: number) => `${REM_SCALE * units}rem`;

export const theme = createTheme({
  spacing,
  palette: {
    primary: {
      // Mobkoi brand guidelines primary-light
      main: "#0B72C4",
    },
    secondary: {
      main: pink["A400"],
    },
    // mobkoi expanded colour palette
    blue: {
      main: "#244364",
      light: "#E3F2FD",
      dark: "#2B4262",
      contrastText: "#ffffff",
    },
    turquoise: {
      main: "#118AB2",
    },
    green: {
      main: "#06D6A0",
    },
    purple: {
      main: "#9155F2",
    },
    pink: {
      main: "#F261FF",
    },
    yellow: {
      main: "#FFD166",
    },
    red: {
      main: "#FF5454",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
});
