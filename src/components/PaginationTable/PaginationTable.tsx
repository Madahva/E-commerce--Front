import React, { useState } from "react";
import { TablePagination } from "@mui/material";

type Props = {
  rowsPerPage: number;
  page: number;
  count: number;
  onChangePage: (event: unknown, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Pagination(props: Props) {
  const { rowsPerPage, page, count, onChangePage, onChangeRowsPerPage } = props;

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
    />
  );
}
