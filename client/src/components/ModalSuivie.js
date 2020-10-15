import { Form, Modal, Button } from "antd";
import { MedicineBoxTwoTone, EditOutlined } from "@ant-design/icons";
import { loadInfermier } from "../actions/AuthAction";
import { KeyboardDatePicker } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import {
  addSuivie,
  editSuivie,
  saveSuivie,
  clearSuivie,
} from "../actions/SuivieAction";
import React from "react";

class ModalSuivie extends React.Component {
  state = {
    loading: false,
    visible: false,
    dateSuivie: this.props.data ? this.props.data.dateSuivie : "",
    temperature: this.props.data ? this.props.data.temperature : "",
    heureSuivie: this.props.data ? this.props.data.heureSuivie : "",
    respiration: this.props.data ? this.props.data.respiration : "",
    pulsation: this.props.data ? this.props.data.pulsation : "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ dateSuivie: dateString });
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.save);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleDateChange = (date) => {
    this.setState({ heureSuivie: date });
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
  getSuivie = () => {
    this.setState({
      visible: true,
    });
    this.props.dataS
      ? this.props.saveSuivie(this.props.dataS)
      : this.props.clearSuivie();
    console.log("ModalSoin -> getSoin -> this.props.dataS", this.props.dataS);
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        {this.props.dataS ? (
          <EditOutlined
            onClick={this.getSuivie}
            style={{ fontSize: "20px", color: "#87B4E4" }}
          />
        ) : (
          <MedicineBoxTwoTone
            className="ajout"
            onClick={this.getSuivie}
            style={{ fontSize: "40px", color: "#87B4E4" }}
          />
        )}
        <Modal
          style={{ fontSize: "50px", color: "#87B4E4" }}
          visible={visible}
          title={
            this.props.editMode
              ? "Modifier Suivie Patient"
              : "Ajouter Suivie Patient"
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
                if (this.props.editMode) {
                  this.props.editSuivie(this.state);
                  this.props.clearSuivie();
                  this.props.loadInfermier();
                  this.handleCancel();
                } else {
                  this.props.addSuivie(this.state, this.props.patient._id);
                  this.handleCancel();
                  this.props.loadInfermier();
                }
                this.setState({
                  dateSuivie: "",
                  temperature: "",
                  respiration: "",
                  pulsation: "",
                  heureSuivie: "",
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
            <div className="input">
              <TextField
                name="dateSuivie"
                type="date"
                value={this.state.dateSuivie}
                style={{ width: "200px" }}
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
                autoComplete="Date de Suivie"
              />
              {/* <KeyboardDatePicker
                name="dateSuivie"
                label="Date de Suivie"
                type="date"
                value={this.state.dateSuivie}
                style={{ width: "200px" }}
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
                // autoComplete="Date de Suivie"
              /> */}
            </div>
            {/*<div className="input">
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardTimePicker
                    margin="normal"
                    name="heureSuivie"
                    id="time-picker"
                    label="Heure de Suivie"
                    value={this.state.heureSuivie}
                    onChange={this.handleDateChange}
                    style={{ width: "200px" }}
                    fullWidth
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                    variant="outlined"
                  />
                </Grid>
              </MuiPickersUtilsProvider> 
            </div>*/}
            {/* heur de suivie */}
            <div className="input">
              <form noValidate>
                <TextField
                  variant="outlined"
                  id="time"
                  label="Heure de Suivie"
                  name="heureSuivie"
                  type="time"
                  style={{ width: "200px" }}
                  value={this.state.heureSuivie}
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  fullWidth
                  autoComplete="Heure de Suivie"
                />
              </form>
            </div>
            <div className="input">
              <TextField
                id="standard-number"
                name="temperature"
                label="Température"
                type="number"
                style={{ width: "200px" }}
                value={this.state.temperature}
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
                autoComplete="Température"
              />
            </div>
            <div className="input">
              <TextField
                name="respiration"
                id="outlined-basic"
                label="Réspiration"
                style={{ width: "200px" }}
                variant="outlined"
                margin="normal"
                onChange={this.handleChange}
                value={this.state.respiration}
                fullWidth
                autoComplete="Réspiration"
              />
            </div>
            <div className="input">
              <TextField
                onChange={this.handleChange}
                name="pulsation"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Pulsation"
                autoComplete="Pulsation"
                required
                id="outlined-basic"
                style={{ width: "200px" }}
                value={this.state.pulsation}
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
    suivie: state.suivie,
    save: state.suivie.saved,
  };
};
export default connect(mapStateToProps, {
  loadInfermier,
  addSuivie,
  saveSuivie,
  editSuivie,
  clearSuivie,
})(ModalSuivie);
