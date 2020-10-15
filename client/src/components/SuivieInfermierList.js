import React from "react";
import { connect } from "react-redux";
import { getInfermier, infirmierInfos } from "../actions/InfermierActions";
import { getPatientinf } from "../actions/InfermierActions";
import { Select } from "antd";
import PatientItem from "./PatientItem";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PhoneTwoTone,
  MailTwoTone,
} from "@ant-design/icons";
import { Skeleton, Switch, Card, Avatar } from "antd";
const { Meta } = Card;
const { Option } = Select;

class SuivieInfermierList extends React.Component {
  state = {
    infermier: null,
  };
  componentWillMount() {
    this.props.getPatientinf();
  }

  handleChange = (value) => {
    this.setState({
      infermier: this.props.auth.user.infermier.find((el) => el._id === value),
    });
  };

  render() {
    return (
      <div className="inf">
        <div>
          <Select
            name="nom"
            defaultValue="--Infos d'infermier--"
            style={{ width: "100%" }}
            onChange={this.handleChange}
          >
            {this.props.auth.user.infermier &&
              this.props.auth.user.infermier.map((matricule) => (
                <Option value={matricule._id}>
                  Mr: {matricule.nom + "  " + matricule.prenom}
                </Option>
              ))}
          </Select>
          {/* {
                        this.state.infermier && <div>
                            <h1>{this.state.infermier.phone}</h1>
                            <h1>{this.state.infermier.email}</h1>
                        </div>
                    } */}
          <Card style={{ width: 300, marginTop: 16 }}>
            {this.state.infermier && (
              <Meta
                avatar={<Avatar src={this.state.infermier.image} />}
                title={this.state.infermier.phone}
                description={this.state.infermier.email}
              />
            )}{" "}
          </Card>

          <PhoneTwoTone />
          <MailTwoTone />
        </div>
        <div className="list">
          Patient en charge
          <img
            className="inf-img"
            src="https://cdn.pixabay.com/photo/2016/03/31/20/11/patient-1295570_960_720.png"
            width="150"
            alt="..."
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myInf: state.infermier,
    auth: state.auth,
    myPatient: state.patient,
  };
};
export default connect(mapStateToProps, {
  getInfermier,
  infirmierInfos,
  getPatientinf,
})(SuivieInfermierList);
