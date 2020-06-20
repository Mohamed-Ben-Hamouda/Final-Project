import React, { Component } from "react";
import { getSoin } from "../actions/SoinAction";
import ModalSuivie from "./ModalSuivie";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";
import { Select } from "antd";
import { loadInfermier } from "../actions/AuthAction";
import ModalSoin from "./ModalSoin";
import SoinPatientItem from "./SoinPatientItem";
const { Meta } = Card;
const { Option } = Select;
class SoinPatient extends Component {
  state = {
    patient: null,
    soin: null,
  };
  componentWillMount() {
    this.props.loadInfermier();
  }
  handleChange = (value) => {
    this.setState(
      {
        patient: this.props.auth.user.patient.find((el) => el._id === value),
      },
      () => {
        this.props.getSoin(this.state.patient._id);
      }
    );
  };
  // get = () => {
  //   this.props.getSoin(this.state.patient);
  // };
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  // componentWillReceiveProps(nextProps) {
  //   console.log(
  //     "SoinPatient -> componentWillReceiveProps -> nextProps",
  //     nextProps
  //   );
  //   // nextProps.auth.user.patient &&
  //   //   this.setState({ patient: nextProps.auth.user.patient });
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    // nextState.patient && this.setState({ patient: nextState.patient });
  }
  render() {
    return (
      <div className="card cadd">
        <div>
          <Select
            name="nom"
            defaultValue="--Nom Patient--"
            style={{ width: "100%" }}
            onChange={this.handleChange}
          >
            {this.props.auth.user.patient &&
              this.props.auth.user.patient.map((el) => (
                <Option value={el._id}>{el.nom + "  " + el.prenom}</Option>
              ))}
          </Select>
          <br />
          <br />
          <br />
          <br />
          {this.state.patient && (
            <ModalSoin patient={this.state.patient} editMode={false} />
          )}
          <br />
          <br />
        </div>
        <div className="d-flex flex-wrap fl">
          {this.state.patient &&
            this.props.soin.soins.map((el) => (
              <SoinPatientItem
                data={el}
                patient={this.state.patient}
                editMode={true}
              />
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    patient: state.patient,
    soin: state.soin,
  };
};
export default connect(mapStateToProps, { loadInfermier, getSoin })(
  SoinPatient
);