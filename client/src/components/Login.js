import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import {
  loginInfermier,
  loginMedecin,
  clearError,
} from "../actions/AuthAction";
import { v4 as uuidv4 } from "uuid";
import { setAlert, removeAlert } from "../actions/AlertAction";
import { Radio } from "antd";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricule: "",
      password: "",
      poste: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  loginNow = () => {
    if (
      this.state.matricule === "" ||
      this.state.password === "" ||
      this.state.poste === ""
    ) {
      let id = uuidv4();
      this.props.setAlert("Please enter your credentials bfore", "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
      }, 5000);
    } else if (this.state.poste === "Infermier") {
      this.props.loginInfermier({
        matricule: this.state.matricule,
        password: this.state.password,
      });
    } else {
      this.props.loginMedecin({
        matricule: this.state.matricule,
        password: this.state.password,
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated && this.state.poste === "Medecin") {
      this.props.history.push("/HomeMedecin");
    }
    if (nextProps.auth.token && this.state.poste === "Infermier") {
      this.props.history.push("/HomeInfermier");
    }
    if (nextProps.auth.error) {
      let id = uuidv4();
      this.props.setAlert(nextProps.auth.error, "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
        this.props.clearError();
      }, 5000);
    }
  }
  // componentDidMount() {
  //   if (this.props.auth.token) {
  //     this.props.history.push("/HomeInfermier");
  //   }
  // }

  render() {
    return (
      <div className="card">
        <h1>Login page</h1>
        <Form>
          <Radio.Group name="poste" defaultValue={1}>
            <div className="radio1">
              <Radio value="Medecin" onChange={this.handleChange}>
                {" "}
                Medecin
              </Radio>
            </div>
            <div className="radio2">
              <Radio value="Infermier" onChange={this.handleChange}>
                Infermier
              </Radio>
            </div>
          </Radio.Group>
          <div className="matr">
            <label>
              <h3>Matricule:</h3>
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="your matricule"
              name="matricule"
              rules={[
                { required: true, message: "Please input your matricule!" },
              ]}
            />
          </div>

          <div className="pasw">
            {" "}
            <label>
              <h3>Password:</h3>{" "}
            </label>
            <input
              type="password"
              onChange={this.handleChange}
              placeholder="your password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            />
          </div>
        </Form>
        <Button type="primary" onClick={this.loginNow} htmlType="submit">
          Connect
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  loginInfermier,
  loginMedecin,
  setAlert,
  removeAlert,
  clearError,
})(Login);
