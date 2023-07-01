import { Add } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";

export const AddBillButton = (): JSX.Element => {
  return (
    <Box position="fixed" bottom={16} right={16}>
      <Fab>
        <Add />
      </Fab>
    </Box>
  );
};
