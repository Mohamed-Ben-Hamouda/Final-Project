import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { connect } from "react-redux";
import { loadInfermier } from "../actions/AuthAction";
import PatientListe from "../components/PatientListe";
import SuiviePatient from "../components/SuiviePatient";
import SoinPatient from "../components/SoinPatient";
import Prescription from "../components/PrescriptionAffiche";
import TestCovid from "../components/TestCovid.js";
import { Link } from "react-router-dom";
import { removeCurrentPatient } from "../actions/PatientAction";
import { Logout } from "../actions/AuthAction";
import PrescriptionAffiche from "../components/PrescriptionAffiche";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    // borderLeft: "4rem solid",
    // borderBottom: "4rem solid",
    // borderRight: "4rem solid",
    // borderLeftColor: "#F5F5F5",
    // borderBottomColor: "#F5F5F5",
    // borderRightColor: "#F5F5F5",
  },
}));
const logMeOut = () => {
  Logout();
  removeCurrentPatient();
};

function HomeInfermier() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Gestion Patient" {...a11yProps(0)} />
            <Tab label="Suivie Patient" {...a11yProps(1)} />
            <Tab label="Soin Patient" {...a11yProps(2)} />
            <Tab label="Test Covid" {...a11yProps(3)} />
            <Tab label="Prescription" {...a11yProps(4)} />
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              <Tab label="Visualiser COVID-19" {...a11yProps(5)} />
            </a>
            <a href="/Home" onClick={logMeOut}>
              <Tab label="Quitter" {...a11yProps(5)} />
            </a>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PatientListe />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SuiviePatient />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SoinPatient />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TestCovid />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PrescriptionAffiche />
        </TabPanel>
        {/* <TabPanel value={value} index={5}>
          Visualiser COVID-19
        </TabPanel> */}
        <TabPanel value={value} index={5}></TabPanel>
      </div>
      <footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</footer>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { Logout, removeCurrentPatient })(
  HomeInfermier
);
