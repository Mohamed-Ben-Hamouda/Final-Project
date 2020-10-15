import { Modal, Button } from "antd";
import { MedicineBoxTwoTone } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addPrescription } from "../actions/PrescriptionAction";
import React from "react";
class ModalPrescription extends React.Component {
  state = {
    loading: false,
    visible: false,
    datePrescrition: "",
    traitement: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ datePrescrition: dateString });
  };
  //   componentWillReceiveProps(nextProps) {
  //     this.setState(nextProps.save);
  //   }

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
        {this.props.patient && <MedicineBoxTwoTone onClick={this.showModal} />}
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
                this.props.addPrescription(this.state);
                this.setState({
                  datePrescrition: "",
                  traitement: "",
                });
              }}
            >
              Ajouter
            </Button>,
          ]}
        >
          <form style={{ display: "flex", flexWrap: "wrap" }}>
            <TextField
              id="date"
              name="datePrescrition"
              label="Date de Préscription"
              type="date"
              defaultValue="2017-05-24"
              value={this.state.datePrescrition}
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              name=" traitement"
              label="Taitement Préscription"
              type="text"
              value={this.state.traitement}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    prescription: state.prescription,
  };
};
export default connect(mapStateToProps, { addPrescription })(ModalPrescription);
