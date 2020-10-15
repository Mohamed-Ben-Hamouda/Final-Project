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
      {"وزارة الصحة التونسية © "}
      {/* <Link variant="body2" color="inherit" href="#/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [poste, setPoste] = useState("");

  useEffect(() => {
    if (props.auth.isAuthenticated && poste === "Medecin") {
      props.history.push("/HomeMedecin");
    } else if (props.auth.isAuthenticated && poste === "Infermier") {
      props.history.push("/HomeInfermier");
    } else if (props.auth.error) {
      let id = uuidv4();
      props.setAlert(props.auth.error, "danger", id);
      setTimeout(() => {
        props.removeAlert(id);
        props.clearError();
      }, 5000);
    }
  }, [props.auth.isAuthenticated, poste, props.auth.error]);

  const loginNow = useCallback(() => {
    if (matricule === "" || password === "" || poste === "") {
      let id = uuidv4();
      props.setAlert("SVP entrer vos informations avant!", "danger", id);
      setTimeout(() => {
        props.removeAlert(id);
      }, 10000);
    } else if (poste === "Infermier") {
      props.loginInfermier({
        matricule,
        password,
      });
    } else if (poste === "Medecin") {
      props.loginMedecin({
        matricule,
        password,
      });
    }
  }, [matricule, password, poste]);

  return (
    <div className="card ">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
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
                >
                  Infirmier
                </Radio>
              </div>
            </Radio.Group>
            <br />
            <br />
            <TextField
              onChange={(e) => setMatricule(e.target.value)}
              name="matricule"
              variant="outlined"
              // margin="normal"
              fullWidth
              label="Matricule"
              autoComplete="matricule"
              value={matricule}
              required
              id="demo-simple-select-outlined"
              labelId="demo-simple-select-outlined-label"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
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

          <Box mt={8}>
            <Copyright />
          </Box>
        </div>
      </Container>
    </div>
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
