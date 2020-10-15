import { Modal, Button, Form } from "antd";
import { MedicineBoxTwoTone, EditOutlined } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import {
  addTestCovid,
  editTestCovid,
  saveTest,
  clearTest,
} from "../actions/TestCovidAction";
import React, { Component } from "react";
import { loadInfermier } from "../actions/AuthAction";

class ModalTestCovid extends Component {
  state = {
    loading: false,
    visible: false,
    dateTest: "",
    testName: "",
    resultat: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.save);
    console.log(nextProps);
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.props.clearTest();
    this.setState({
      dateTest: "",
      testName: "",
      resultat: "",
    });
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.save);
  }
  getTest = () => {
    this.setState({
      visible: true,
    });
    this.props.dataS
      ? this.props.saveTest(this.props.dataS)
      : this.props.clearTest();
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        {this.props.dataS ? (
          <EditOutlined
            style={{ fontSize: "20px", color: "#87B4E4" }}
            onClick={this.getTest}
          />
        ) : (
          <MedicineBoxTwoTone
            className="ajout"
            style={{ fontSize: "40px", color: "#87B4E4" }}
            onClick={this.getTest}
          />
        )}

        <Modal
          style={{ fontSize: "50px", color: "#87B4E4" }}
          visible={visible}
          title={
            this.props.editMode ? "Modifier Test Covid19" : "Ajout Test Covid19"
          }
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Annuler
            </Button>,
            <Button
              key="Ajout"
              type="primary"
              loading={loading}
              onClick={(e) => {
                e.preventDefault();
                if (this.props.dataS) {
                  this.props.editTestCovid(this.state);
                  this.props.clearTest();
                  this.props.loadInfermier();
                  this.handleCancel();
                } else {
                  this.props.addTestCovid(this.state, this.props.patient);
                  this.props.clearTest();
                  this.handleCancel();
                  this.props.loadInfermier();
                }
                this.setState({
                  dateTest: "",
                  testName: "",
                  resultat: "",
                });
              }}
            >
              {this.props.editMode ? "MODIFIER " : "AJOUTER"}
            </Button>,
          ]}
        >
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
            className="forum"
          >
            {/*  style={{ display: "flex", flexWrap: "wrap" }}> */}
            <div className="input">
              <TextField
                style={{ width: "200px" }}
                autoComplete="Nom du Test"
                variant="outlined"
                id="outlined-basic"
                name="testName"
                label="Nom du Test"
                type="text"
                onChange={this.handleChange}
                value={this.state.testName}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="input">
              <TextField
                style={{ width: "200px" }}
                autoComplete="Date de Test"
                variant="outlined"
                id="date"
                name="dateTest"
                type="date"
                onChange={this.handleChange}
                value={this.state.dateTest}
                style={{ width: "200px" }}
              />
            </div>
            <div className="input">
              <TextField
                style={{ width: "200px" }}
                autoComplete="Résultat du Test"
                variant="outlined"
                id="outlined-basic"
                name="resultat"
                label="Résultat du Test"
                type="text"
                onChange={this.handleChange}
                value={this.state.resultat}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tetCovid: state.testCovid,
    save: state.testCovid.saved,
  };
};
export default connect(mapStateToProps, {
  loadInfermier,
  addTestCovid,
  editTestCovid,
  saveTest,
  clearTest,
})(ModalTestCovid);
