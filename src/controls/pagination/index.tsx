import { Grid } from "@mui/material";
import { Pagination as MUIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

type PaginationProps = {
  onPaginationChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export default function Pagination({ onPaginationChange }: PaginationProps) {
  return (
    <Grid container justifyContent="flex-end" sx={{ px: 3.5, pb: 1 }}>
      <Stack spacing={2}>
        <MUIPagination
          count={5}
          variant="outlined"
          shape="rounded"
          onChange={onPaginationChange}
        />
      </Stack>
    </Grid>
  );
}
