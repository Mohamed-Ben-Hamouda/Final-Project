import React from "react";
import { Form, Input, Button, Radio, Select, DatePicker } from "antd";
import { Modal } from "antd";
import { Checkbox, Row } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  addPatient,
  editPatient,
  clearPatient,
} from "../actions/PatientAction";
class ModalPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      componentSize: "small",
      setComponentSize: "small",
      nom: "",
      prenom: "",
      cin: "",
      email: "",
      dateEn: "",
      image: "",
      origine: "",
      numChambre: "",
      numLit: "",
      etat: "",
      ATCD: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChangeSelect = (value) => {
    this.setState({ etat: value });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  onChange = (checkedValues) => {
    this.setState({ ATCD: checkedValues });
  };
  onChangedate = (date, dateString) => {
    this.setState({ dateEn: dateString });
  };
  handleOk = (e) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.save);
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onFormLayoutChange = ({ size }) => {
    this.state.setComponentSize = size;
  };

  render() {
    return (
      <div>
        <Button style={{ border: "0" }} onClick={this.showModal}>
          <UserAddOutlined style={{ fontSize: "40px", color: "#87B4E4" }} />
        </Button>
        <Modal
          title="Ajout Patient"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          style={{ background: "#F6F8FA" }}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              type="primary"
              onOk={this.handleOk}
              loading={this.state.loading}
              onClick={(e) => {
                e.preventDefault();
                if (this.props.save) {
                  this.props.editPatient(this.state);
                  this.props.clearPatient();
                } else {
                  this.props.addPatient(this.state);
                }
                this.setState({
                  nom: "",
                  prenom: "",
                  cin: "",
                  email: "",
                  dateEn: "",
                  image: "",
                  origine: "",
                  numChambre: "",
                  numLit: "",
                  etat: "",
                  ATCD: [],
                });
              }}
            >
              {this.props.save ? "MODIFIER " : "AJOUTER"}
            </Button>,
          ]}
        >
          <div>
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              initialValues={{ size: this.componentSize }}
              onValuesChange={this.onFormLayoutChange}
              size={this.componentSize}
            >
              <Form.Item label="Form Size" name="size">
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="middle">Middle</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
                <br />
              </Form.Item>

              <Form.Item label="CIN" style={{ fontWeight: "bold" }}>
                <Input
                  onChange={this.handleChange}
                  name="cin"
                  value={this.state.cin}
                />
              </Form.Item>

              <Form.Item label="Nom" style={{ fontWeight: "bold" }}>
                <Input
                  onChange={this.handleChange}
                  name="nom"
                  value={this.state.nom}
                />
              </Form.Item>

              <Form.Item label="Prenom" style={{ fontWeight: "bold" }}>
                <Input
                  onChange={this.handleChange}
                  name="prenom"
                  value={this.state.prenom}
                />
              </Form.Item>

              <Form.Item
                label="Date d'entrer"
                name="dateEn"
                style={{ fontWeight: "bold" }}
              >
                <DatePicker
                  name="dateEn"
                  onChange={this.onChangedate}
                  value={this.state.dateEn}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[{ type: "email" }]}
                style={{ fontWeight: "bold" }}
              >
                <Input
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                />
              </Form.Item>

              <Form.Item label="Téléphone" style={{ fontWeight: "bold" }}>
                {"              "}
                <Input
                  onChange={this.handleChange}
                  name="phone"
                  value={this.state.phone}
                />
              </Form.Item>

              <Form.Item label="Origine" style={{ fontWeight: "bold" }}>
                {"   "}
                <Input
                  onChange={this.handleChange}
                  name="origine"
                  value={this.state.origine}
                />
              </Form.Item>

              <Form.Item label="N° de chambre" style={{ fontWeight: "bold" }}>
                <Input
                  onChange={this.handleChange}
                  name="numChambre"
                  value={this.state.numChambre}
                />
              </Form.Item>
              <div>
                <Form.Item label="N° de lit" style={{ fontWeight: "bold" }}>
                  <Input
                    onChange={this.handleChange}
                    name="numLit"
                    value={this.state.numLit}
                  />
                </Form.Item>
              </div>
              <Form.Item label="Etat Patient" style={{ fontWeight: "bold" }}>
                <Select name="etat" onChange={this.handleChangeSelect}>
                  <Select.Option value="Infecter">Infecter</Select.Option>
                  <Select.Option value="Non Infecter">
                    Non Infecter
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="image"
                label="Image Patient"
                style={{ fontWeight: "bold" }}
              >
                <Input
                  onChange={this.handleChange}
                  name="image"
                  value={this.state.image}
                />
              </Form.Item>

              <Form.Item label="ATCD" style={{ fontWeight: "bold" }}>
                <div>
                  <Checkbox.Group
                    style={{ width: "100%", fontSize: "16px" }}
                    onChange={this.onChange}
                    name="ATCD"
                  >
                    <Row span={12}>
                      <Checkbox value="Asmatique">Asmatique</Checkbox>
                    </Row>
                    <Row span={12}>
                      <Checkbox value="Cardiaque">Cardiaque</Checkbox>
                    </Row>
                    <Row span={12}>
                      <Checkbox value="Diabetique">Diabetique</Checkbox>
                    </Row>
                    <Row span={12}>
                      <Checkbox value="Hyertensif" onChange={this.handleChange}>
                        Hyertensif
                      </Checkbox>
                    </Row>
                    <Row span={12}>
                      <Checkbox value="Inseficence renal">
                        Inseficence renal
                      </Checkbox>
                    </Row>
                    <Row span={12}>
                      <Checkbox value="L'immunodéficience">
                        L'immunodéficience
                      </Checkbox>
                    </Row>
                  </Checkbox.Group>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    save: state.patient.saved,
  };
};
export default connect(mapStateToProps, {
  addPatient,
  editPatient,
  clearPatient,
})(ModalPatient);

export default connect(mapStateToProps, { editPatient, clearPatient });
