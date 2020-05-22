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
      <div>
        <div className="d-flex">
          {this.props.auth.user &&
            this.props.auth.user.patient.map((el) => <PatientItem data={el} />)}
        </div>
        <div>
          <ModalPatient />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myPatient: state.patient,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { getPatientinf, loadInfermier })(
  PatientList
);
