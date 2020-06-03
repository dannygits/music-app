import React from "react";
import {
  Grid,
  Container,
  Card,
  Typography,
  Avatar,
  Divider,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 180,
    height: 180,
  },
  avatarContainer: {
    width: "100%",
  },
  root: {
    maxWidth: 345,
    padding: 50,
    margin: 100,
  },
  divider: {
    width: "100%",
    margin: 10,
  },
  miniContainer: {
    margin: 10,
    "& div": {
      margin: "2px",
    },
    "& .MuiAvatar-root": {
      // width: 50,
      // height: 50,
      marginRight: 20,
      marginLeft: 10,
      background: pink[500],
      color: "#fff",
    },
  },
});

const ContributorsPage = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Grid container justify="center">
        <Card className={classes.root}>
          <Grid
            component={Link}
            href="https://github.com/megkl"
            target="blank"
            direction="column"
            alignItems="center"
            color="inherit"
            className={classes.avatarContainer}
          >
            <Avatar className={classes.avatar} src="icons/maggie.png" />
            <Typography variant="h5">Maggie Luke</Typography>
            <Typography>Concept creator of spectra</Typography>
          </Grid>
        </Card>
        <Card className={classes.root}>
          <Grid
            direction="column"
            alignItems="center"
            className={classes.avatarContainer}
            component={Link}
            href="https://github.com/dannygits"
            target="blank"
            color="inherit"
          >
            <Avatar className={classes.avatar} src="icons/dan.png" />
            <Typography variant="h5">Danny Gitonga</Typography>
            <Typography>Helped in creating spectra</Typography>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default ContributorsPage;
