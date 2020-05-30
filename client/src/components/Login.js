import React, { useEffect, useFocusEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  loginInfermier,
  loginMedecin,
  clearError,
} from "../actions/AuthAction";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { v4 as uuidv4 } from "uuid";
import { setAlert, removeAlert } from "../actions/AlertAction";
import { Radio } from "antd";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link variant="body2" color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const UseStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = UseStyles();

  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [poste, setPoste] = useState("");

  const loginNow = useCallback(() => {
    if (matricule === "" || password === "" || poste === "") {
      let id = uuidv4();
      props.setAlert("Please enter your credentials bfore", "danger", id);
      setTimeout(() => {
        props.removeAlert(id);
      }, 10000);
    } else if (poste === "Infermier") {
      props.loginInfermier({
        matricule,
        password,
      });
      props.history.push("/HomeInfermier");
    } else if (poste === "Medecin") {
      props.loginMedecin({
        matricule,
        password,
      });
    }
  }, [props, matricule, password, poste]);

  useEffect(() => {
    if (props.auth.isAuthenticated && { poste } === "Medecin") {
      props.history.push("/HomeMedecin");
    }
    if (props.auth.isAuthenticated && { poste } === "Infermier") {
      props.history.push("/HomeInfermier");
      console.log("hayyyyyyyyyyyy");
    }
    if (props.auth.error) {
      let id = uuidv4();
      props.setAlert(props.auth.error, "danger", id);
      setTimeout(() => {
        props.removeAlert(id);
        props.clearError();
      }, 5000);
    }
  }, [props.auth.isAuthenticated, poste]);

  const handleChangePost = (e) => {
    setPoste((poste = e.target.value));
  };

  const handleChangeMatricule = (e) => {
    setMatricule((matricule = e.target.value));
  };

  const handleChangePassword = (e) => {
    setPassword((password = e.target.value));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <CssBaseline />
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className={classes.paper}
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form
            style={{
              width: "100%", // Fix IE 11 issue.
              marginTop: "20px",
            }}
            className={classes.form}
            noValidate
          >
            <Radio.Group name="poste" defaultValue={1}>
              <div className="radio1">
                <Radio
                  value="Medecin"
                  onChange={(e) => setPoste(e.target.value)}
                >
                  Medecin
                </Radio>
              </div>
              <div className="radio2">
                <Radio
                  value="Infermier"
                  onChange={(e) => setPoste(e.target.value)}
                  //  onChange={handleChangePost}
                >
                  Infermier
                </Radio>
              </div>
            </Radio.Group>
            <TextField
              // onChange={handleChangeMatricule}
              onChange={(e) => setMatricule(e.target.value)}
              name="matricule"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Matricule"
              autoComplete="matricule"
              value={matricule}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handleChangePassword}
              name="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
            />

            <Button
              onClick={loginNow}
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SIGN IN
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loginInfermier,
  loginMedecin,
  setAlert,
  removeAlert,
  clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
