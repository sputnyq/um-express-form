import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { deDE } from "@mui/x-date-pickers/locales";

const opts: ThemeOptions = {
  palette: {
    primary: {
      main: "#199663",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#1a1a1a",
          fontWeight: "400",
        },
      },
    },
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: `"Open Sans", Helvetica, Arial, Lucida, sans-serif`,
    fontSize: 14,
    fontWeightRegular: 400,
  },
};

export const theme = createTheme(opts, deDE);
