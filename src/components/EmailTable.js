import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

import EmailTableRow from "./EmailTableRow";

import { ReactComponent as Arrow1 } from "../assets/icon_arrow01.svg";

const EmailTable = ({ full, emails }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paginatedEmails, setPaginatedEmails] = useState(
    emails.slice(0, rowsPerPage)
  );

  useEffect(() => {
    setPage(0);
    setPaginatedEmails(emails.slice(0, rowsPerPage));
  }, [emails, rowsPerPage]);

  const handleChangeRowsPerPage = (event) => {
    let value = parseInt(event.target.value);

    setRowsPerPage(value, 10);
    setPage(0);

    if (value === -1) setPaginatedEmails(emails);
    else {
      setPaginatedEmails(emails.slice(0, value));
    }
  };

  const handlePageChanged = (event, page) => {
    setPage(page);
    setPaginatedEmails(
      emails.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
  };

  return paginatedEmails.length === 0 ? (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: "30vh" }}
    >
      <img
        alt="app_logo"
        src={require("../assets/logo.png")}
        style={{ height: 150, width: 140 }}
      />
    </Grid>
  ) : (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {full ? (
          <>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">From</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">To</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">Subject</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1">
                    Date
                    <Arrow1 style={{ height: 10, width: 10, marginLeft: 10 }} />
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedEmails.map((row) => (
                <EmailTableRow key={row.from + row.to} row={row} full={full} />
              ))}
            </TableBody>
          </>
        ) : (
          <>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "bold" }}
                      >
                        From
                        <Arrow1
                          style={{ height: 10, width: 10, marginLeft: 10 }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>{"  |  "}To |</Grid>
                    <Grid item>Subject |</Grid>
                    <Grid item>Date</Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedEmails.map((row) => (
                <EmailTableRow key={row.from + row.to} row={row} full={full} />
              ))}
            </TableBody>
          </>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30, { label: "All", value: -1 }]}
              colSpan={full ? 4 : 1}
              count={emails.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handlePageChanged}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default EmailTable;
