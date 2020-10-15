import React, { Component } from "react";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import ModalSuivie from "./ModalSuivie";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import { loadInfermier } from "../actions/AuthAction";
import SuiviePatientItem from "./SuiviePatientItem";
import { getSuivie } from "../actions/SuivieAction";
const { Meta } = Card;

const { Option } = Select;
class SuiviePatient extends Component {
  state = {
    patient: null,
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
        this.props.getSuivie(this.state.patient._id);
      }
    );
  };

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
            <ModalSuivie patient={this.state.patient} editMode={false} />
          )}
          <br />
          <br />
        </div>
        <div className="d-flex flex-wrap fl">
          {this.state.patient &&
            this.props.suivie.suivies.map((el) => (
              <SuiviePatientItem
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
    suivie: state.suivie,
  };
};
export default connect(mapStateToProps, { loadInfermier, getSuivie })(
  SuiviePatient
);
