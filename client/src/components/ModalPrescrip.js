import { Form, Modal, Button } from "antd";
import { MedicineBoxTwoTone } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addPrescription } from "../actions/PrescriptionAction";
import React, { Component } from "react";
import { loadInfermier } from "../actions/AuthAction";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { getPatientinf } from "../actions/InfermierActions"


class ModalPrescrip extends Component {
  componentWillMount() {
    this.props.getPatientinf();

  }
  state = {
    loading: false,
    visible: false,
    datePrescription: "",
    traitement: "",

  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ datePrescription: dateString });
  };
  componentWillReceiveProps(nextProps) {
    // this.setState(nextProps.save);
    console.log(nextProps);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        {this.props.patient && (
          <MedicineBoxTwoTone style={{ position: "absolute", right: 50, left: 50 }}
            className="ajout"
            style={{ fontSize: "40px", color: "#87B4E4" }}
            onClick={this.showModal}
          />
        )}
        <Modal
          visible={visible}
          title="Ajout Prescription Patient"
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
                this.props.addPrescription({ datePrescription: this.state.datePrescription, traitement: this.state.traitement }, this.props.patient._id);
                this.handleCancel();
                this.props.getPatientinf()
                this.setState({
                  datePrescription: "",
                  traitement: "",

                });

              }}
            >
              Ajouter
            </Button>,
          ]}
        >

          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
            className="forum"
          >
            <form noValidate>
              <div className="input">
                <TextField
                  name="datePrescription"
                  type="date"
                  defaultValue="2017-05-24"
                  value={this.state.datePrescription}
                  style={{ width: "200px" }}
                  variant="outlined"
                  onChange={this.handleChange}
                  fullWidth
                  autoComplete="Date de Prescription"
                />
              </div>
              <div className="input">
                <TextareaAutosize
                  style={{ width: "200px" }}
                  onChange={this.handleChange}
                  rowsMax={8}
                  colsMax={15}
                  aria-label="Taitement "
                  placeholder="Taitement "
                  name="traitement"
                  value={this.state.traitement}
                />
              </div>

            </form>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Prescription: state.Prescription,
  };
};
export default connect(mapStateToProps, { loadInfermier, addPrescription, getPatientinf })(ModalPrescrip);
