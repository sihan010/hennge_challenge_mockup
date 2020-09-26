import React, { useState } from "react";

import {
  Box,
  Collapse,
  TableCell,
  TableRow,
  Typography,
  Grid,
  Chip,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import Moment from "moment";

import { useRowStyles } from "../styles/styles";
import { ReactComponent as Clip } from "../assets/icon_clip.svg";
import { ReactComponent as Mail } from "../assets/icon_mail_sp.svg";
import { ReactComponent as Arrow2 } from "../assets/icon_arrow02.svg";

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
  },
}))(TableRow);

const EmailTableRow = (props) => {
  const { row, full } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const fullTableRow = () => (
    <>
      <TableRow
        className={classes.root}
        onClick={() => setOpen(!open)}
        hover={true}
        style={open ? { backgroundColor: "#D4EFDF" } : null}
      >
        <TableCell>
          <Typography variant="body1">{row.from}</Typography>
        </TableCell>
        <TableCell>
          <Grid container direction="row">
            <Grid item xs={10}>
              <Typography variant="body1" noWrap={true}>
                {row.to}
              </Typography>
            </Grid>
            {row.cc > 0 ? (
              <Grid item xs={2}>
                <Chip size="small" label={`+${row.cc}`} />
              </Grid>
            ) : null}
          </Grid>
        </TableCell>
        <TableCell>
          <Grid container direction="row">
            <Grid item xs={10}>
              <Typography variant="body1" noWrap={true}>
                {row.subject}
              </Typography>
            </Grid>
            {row.attachment ? (
              <Grid item xs={2}>
                <Clip style={{ height: 20, width: 20 }} />
              </Grid>
            ) : null}
          </Grid>
        </TableCell>
        <TableCell align="right">
          <Typography variant="body1" noWrap={true}>
            {new Moment(row.date).format("MMM DD, YYYY")}
          </Typography>
        </TableCell>
      </TableRow>
      {collabsibleBody()}
    </>
  );

  const smallTableRow = () => (
    <>
      <TableRow
        className={classes.root}
        onClick={() => setOpen(!open)}
        hover={true}
        style={open ? { backgroundColor: "#D4EFDF" } : null}
      >
        <TableCell>
          <Grid container>
            <Grid item container direction="row">
              <Grid item container direction="row" xs={8}>
                <Grid item>
                  <Mail style={{ height: 35, width: 25, marginTop: 7 }} />
                </Grid>
                <Grid item>
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    {row.from}
                  </Typography>
                  <Typography variant="body1">{row.to}</Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={4}
                direction="column"
                alignItems="flex-end"
                justify="flex-start"
              >
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  justify="flex-end"
                >
                  {row.attachment ? (
                    <Clip style={{ height: 20, width: 20, marginRight: 5 }} />
                  ) : null}
                  <Typography variant="inherit" noWrap={true}>
                    {new Moment(row.date).format("MMM DD, YYYY")}
                  </Typography>
                  <Arrow2 style={{ height: 10, width: 10, marginLeft: 10 }} />
                </Grid>

                {row.cc > 0 ? <Chip size="small" label={`+${row.cc}`} /> : null}
              </Grid>
            </Grid>
            <Typography
              variant="body1"
              noWrap={true}
              align="left"
              style={{ marginLeft: 5 }}
            >
              {row.subject}
            </Typography>
          </Grid>
        </TableCell>
      </TableRow>
      {collabsibleBody()}
    </>
  );

  const collabsibleBody = () => (
    <StyledTableRow>
      <TableCell
        style={{
          paddingBottom: 0,
          paddingTop: 0,
        }}
        colSpan={full ? 6 : 1}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Email Content:
            </Typography>
            <Typography variant="body1">{row.body}</Typography>
          </Box>
        </Collapse>
      </TableCell>
    </StyledTableRow>
  );

  return full ? fullTableRow() : smallTableRow();
};

export default EmailTableRow;
