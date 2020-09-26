import React, { useState, useEffect } from "react";
import { Grid, Snackbar } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import EmailTable from "../components/EmailTable";
import EmailCount from "../components/EmailCount";

import Moment from "moment";

import emails from "../assets/data.json";

const Home = () => {
  const [fullTable, setFullTable] = useState(
    document.documentElement.clientWidth > 760 ? true : false
  );
  const [filteredEmails, setFilteredEmails] = useState(emails);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      document.documentElement.clientWidth > 924
        ? setFullTable(true)
        : setFullTable(false);
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  const onSearchPress = (p) => {
    let start = p[0].unix();
    let end = p[1].unix();
    console.log(start, end);
    let filtered = emails.filter((email) => {
      let emailDate = new Moment(email.date).unix();
      if (emailDate >= start && emailDate <= end) {
        return email;
      }
    });
    setFilteredEmails(filtered);
    if (filtered.length > 0) setSnackbarOpen(true);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item md={2} />
      <Grid item container direction="column" xs={12} sm={12} md={12} lg={8}>
        <Grid item style={{ marginTop: 10 }}>
          <SearchBar onSearchPress={(p) => onSearchPress(p)} />
        </Grid>
        <Grid item>
          <EmailCount count={filteredEmails.length} />
        </Grid>
        <Grid item style={{ marginTop: 10 }}>
          <EmailTable full={fullTable} emails={filteredEmails} />
        </Grid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={setSnackbarOpen}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message="Search Successful !"
        ></Snackbar>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

export default Home;
