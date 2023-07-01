import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { billsToPay as rows } from "mock/bills_to_pay";
import { BillHead } from "./BillHead";
import { BillRow } from "./BillRow";

import { AddBillButton } from "./AddBillButton";
export const BillsToPay = (): JSX.Element => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <BillHead
            labels={["Conta", "Total", "Parcelas", "Opções"]}
            hasDropdown
          />
          <TableBody>
            {rows.map((row, index) => (
              <BillRow row={row} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddBillButton />
    </>
  );
};
