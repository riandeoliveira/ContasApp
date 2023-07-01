"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import { BillsToPay } from "components/BillsToPay";
import { Header } from "components/Header";
import { NextPage } from "next";

const theme = createTheme({
  components: {
    MuiFab: {
      defaultProps: {
        sx: {
          backgroundColor: green[500],
          "&:hover": { backgroundColor: green[800] },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        sx: {
          flex: 1,
          maxWidth: "100%",
        },
      },
    },
    MuiTabs: {},
    MuiTableCell: {
      defaultProps: {
        sx: {
          padding: "8px",
        },
      },
    },
  },
});

const Home: NextPage = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <BillsToPay />
      </main>
    </ThemeProvider>
  );
};

export default Home;
