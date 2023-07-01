import { Tab, Tabs } from "@mui/material";
import { green } from "@mui/material/colors";
import { SyntheticEvent, useState } from "react";

export const Header = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <header style={{ minHeight: "48px", backgroundColor: green[500] }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Contas a Pagar" />
        <Tab label="Contas a Receber" />
      </Tabs>
    </header>
  );
};
