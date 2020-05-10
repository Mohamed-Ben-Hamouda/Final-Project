import { Form, Input, Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { login, clearError } from "../actions/AuthAction";
import { v4 as uuidv4 } from "uuid";
import { setAlert, removeAlert } from "../actions/AlertAction";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
//function forum antd
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

class TestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricule: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginNow = () => {
    console.log("mat" + this.state.matricule + "pasw" + this.state.password);
    if (this.state.matricule === "" || this.state.password === "") {
      let id = uuidv4();
      this.props.setAlert("Please enter your credentials bfore", "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
      }, 5000);
    } else {
      this.props.login({
        matricule: this.state.matricule,
        password: this.state.password,
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (
      nextProps.auth.error === "Please register Before" ||
      nextProps.auth.error === "Wrong Password"
    ) {
      let id = uuidv4();
      this.props.setAlert(nextProps.auth.error, "danger", id);
      setTimeout(() => {
        this.props.removeAlert(id);
        this.props.clearError();
      }, 5000);
    }
  }

  render() {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Matricule"
          rules={[{ required: true, message: "Please input your username!" }]}
          name="matricule"
          onChange={this.handleChange}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
          name="password"
          onChange={this.handleChange}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={this.loginNow} htmlType="submit">
            Connect
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  login,
  setAlert,
  removeAlert,
  clearError,
})(TestLogin);
