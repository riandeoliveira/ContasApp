"use client";

import { Tab, Tabs } from "@mui/material";
import { green } from "@mui/material/colors";
import { BillsToPay } from "components/BillsToPay";
import { NextPage } from "next";
import { SyntheticEvent, useState } from "react";
const Home: NextPage = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <header style={{ minHeight: "48px", backgroundColor: green[500] }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Contas a Pagar" style={{ flex: 1, maxWidth: "100%" }} />
          <Tab label="Contas a Receber" style={{ flex: 1, maxWidth: "100%" }} />
        </Tabs>
      </header>
      <main>
        <BillsToPay />
      </main>
    </>
  );
};

export default Home;
