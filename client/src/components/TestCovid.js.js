import React, { Component } from "react";
import { getTestCovid } from "../actions/TestCovidAction";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";
import TestCovidItem from "./TestCovidItem";
import { Select } from "antd";
import { loadInfermier } from "../actions/AuthAction";
import ModalTestCovid from "./ModalTestCovid";
const { Meta } = Card;
const { Option } = Select;
class TestCovid extends Component {
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
        this.props.getTestCovid(this.state.patient._id);
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
                <Option value={el._id}> {el.nom + "  " + el.prenom}</Option>
              ))}
          </Select>
          <br />
          <br />
          <br />
          {this.state.patient && (
            <ModalTestCovid patient={this.state.patient} editMode={false} />
          )}
          <br />
          <br />
        </div>
        <div className="d-flex flex-wrap fl">
          {this.state.patient &&
            this.props.test.testCovids.map((el) => (
              <TestCovidItem
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
    test: state.testCovid,
  };
};
export default connect(mapStateToProps, { loadInfermier, getTestCovid })(
  TestCovid
);