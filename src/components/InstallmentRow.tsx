import { AttachMoney, Clear } from "@mui/icons-material";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { InstallmentType } from "types";

type InstallmentRowProps = InstallmentType;

export const InstallmentRow = ({
  price,
  installment,
}: InstallmentRowProps): JSX.Element => {
  return (
    <TableRow>
      <TableCell align="left" sx={{ padding: "8px" }}>
        {price}
      </TableCell>
      <TableCell align="left" sx={{ padding: "8px" }}>
        {installment}
      </TableCell>
      <TableCell align="left" sx={{ padding: "8px" }}>
        <IconButton>
          <AttachMoney sx={{ fill: green[500] }} />
        </IconButton>
        <IconButton>
          <Clear sx={{ fill: red[500] }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
