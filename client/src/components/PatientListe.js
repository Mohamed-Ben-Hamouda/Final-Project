import React from "react";
import { connect } from "react-redux";
import { getPatientinf } from "../actions/PatientAction";
import { loadInfermier } from "../actions/AuthAction";
import { UserAddOutlined } from "@ant-design/icons";
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
          <UserAddOutlined style={{ fontSize: "40px", color: "#87B4E4" }} />
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
