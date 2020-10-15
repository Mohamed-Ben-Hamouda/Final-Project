import React from "react";
import { connect } from "react-redux";
import { getPatientinf } from "../actions/PatientAction";
import { loadInfermier } from "../actions/AuthAction";

import ModalPatient from "./ModalPatient";
import PatientItem from "./PatientItem";

class PatientList extends React.Component {
  componentWillMount() {
    // this.props.getPatientinf();
    this.props.loadInfermier();
  }

  render() {
    return (
      <div className="card cadd">
        <div style={{ marginBottom: "20px" }}>
          <ModalPatient />
        </div>

        <div className="d-flex flex-wrap fl">
          {this.props.auth.user &&
            this.props.auth.user.patient.map((el) => <PatientItem data={el} />)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { loadInfermier })(PatientList);
