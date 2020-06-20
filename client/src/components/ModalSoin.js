import { Form, Modal, Button } from "antd";
import { MedicineBoxTwoTone, EditOutlined } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addSoin, clearSoin, saveSoin, editSoin } from "../actions/SoinAction";
import React, { Component } from "react";
import { loadInfermier } from "../actions/AuthAction";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
class ModalSoin extends Component {
  state = {
    loading: false,
    visible: false,
    dateSoin: this.props.dataS ? this.props.dataS.dateSoin : "",
    traitementSoin: this.props.dataS ? this.props.dataS.traitementSoin : "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ dateSoin: dateString });
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.save);
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
    this.props.clearSoin();
    this.setState({
      dateSoin: "",
      traitementSoin: "",
    });
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.save);
    console.log(
      "ModalSoin -> componentWillReceiveProps -> nextProps",
      nextProps.save
    );
  }
  getSoin = () => {
    this.setState({
      visible: true,
    });
    this.props.dataS
      ? this.props.saveSoin(this.props.dataS)
      : this.props.clearSoin();
    console.log("ModalSoin -> getSoin -> this.props.dataS", this.props.dataS);
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        {this.props.dataS ? (
          <EditOutlined
            style={{ fontSize: "20px", color: "#87B4E4" }}
            onClick={this.getSoin}
          />
        ) : (
            <MedicineBoxTwoTone
              className="ajout"
              onClick={this.getSoin}
              style={{ fontSize: "40px", color: "#87B4E4" }}
            />
          )}
        <Modal
          visible={this.state.visible}
          title={
            this.props.editMode
              ? "Modifier Soin Patient"
              : "Ajouter Soin Patient"
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
              loading={this.state.loading}
              onClick={(e) => {
                e.preventDefault();
                if (this.props.dataS) {
                  this.props.editSoin(this.state);
                  this.props.clearSoin();
                  this.props.loadInfermier();
                  this.handleCancel();
                } else {
                  this.props.addSoin(this.state, this.props.patient._id);
                  this.props.clearSoin();
                  this.handleCancel();
                  this.props.loadInfermier();
                }
                this.setState({
                  dateSoin: "",
                  traitementSoin: "",
                });
              }}
            >
              {this.props.editMode ? "MODIFIER " : "AJOUTER"}
            </Button>,
          ]}
        >
          {/* <form style={{ display: "flex", flexWrap: "wrap" }}> */}
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
            className="forum"
          >
            <form noValidate>
              <div className="input">
                <TextField
                  name="dateSoin"
                  type="date"
                  value={this.state.dateSoin}
                  style={{ width: "200px" }}
                  variant="outlined"
                  onChange={this.onChangedate}
                  fullWidth
                  autoComplete="Date de Soin"
                />
              </div>
              <div className="input">
                <TextareaAutosize
                  style={{ width: "200px", textTransform: "capitalize" }}
                  onChange={this.handleChange}
                  rowsMax={8}
                  colsMax={15}
                  aria-label="Taitement Soin"
                  placeholder="Taitement Soin"
                  name="traitementSoin"
                  value={this.state.traitementSoin}
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
    soin: state.soin,
    save: state.soin.saved,
  };
};
export default connect(mapStateToProps, {
  loadInfermier,
  addSoin,
  saveSoin,
  editSoin,
  clearSoin,
})(ModalSoin);





