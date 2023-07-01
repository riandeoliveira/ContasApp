import { TableCell, TableHead, TableRow } from "@mui/material";

type BillsHeadProps = {
  hasDropdown?: boolean;
  labels: string[];
};

export const BillHead = ({
  hasDropdown,
  labels,
}: BillsHeadProps): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        {hasDropdown && <TableCell align="left" />}
        {labels.map((label, index) => (
          <TableCell align="left" key={index}>
            {label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
