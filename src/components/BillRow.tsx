import {
  AttachMoney,
  Clear,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Box, TableHead } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { green, red } from "@mui/material/colors";
import { useState } from "react";
import { BillType } from "types";
import { InstallmentRow } from "./InstallmentRow";

type BillRowProps = {
  row: BillType;
};

export const BillRow = ({ row }: BillRowProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          align="left"
          sx={{ padding: "8px" }}
          onClick={() => setOpen(!open)}
        >
          <IconButton size="small">
            {open ? (
              <KeyboardArrowUp sx={{ fill: green[500] }} />
            ) : (
              <KeyboardArrowDown sx={{ fill: green[500] }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell
          align="left"
          component="th"
          scope="row"
          onClick={() => setOpen(!open)}
          sx={{ padding: "8px" }}
        >
          {row.account_name}
        </TableCell>
        <TableCell
          align="left"
          onClick={() => setOpen(!open)}
          sx={{ padding: "8px" }}
        >
          {row.purchase_amount}
        </TableCell>
        <TableCell
          align="left"
          onClick={() => setOpen(!open)}
          sx={{ padding: "8px" }}
        >
          {row.installments_quantity}
        </TableCell>
        <TableCell align="left" sx={{ padding: "8px" }}>
          <IconButton onClick={() => alert("money")}>
            <AttachMoney sx={{ fill: green[500] }} />
          </IconButton>
          <IconButton onClick={() => alert("clear")}>
            <Clear sx={{ fill: red[500] }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ padding: "8px" }}>
                      Valor da parcela
                    </TableCell>
                    <TableCell align="left" sx={{ padding: "8px" }}>
                      Parcela
                    </TableCell>
                    <TableCell align="left" sx={{ padding: "8px" }}>
                      Opções da parcela
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.installments_list.map(
                    ({ price, installment }, index) => (
                      <InstallmentRow
                        price={price}
                        installment={installment}
                        key={index}
                      />
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
