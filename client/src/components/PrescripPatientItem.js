import React, { Component } from "react";
import ModalSuivie from "./ModalSuivie";
import { Card, Avatar } from "antd";
import { connect } from 'react-redux'

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { getPrescription } from "../actions/PrescriptionAction";

// import authMedecin from "../../../middleware/authMedecin";

const { Meta } = Card;


class PrescripPatientItem extends React.Component {
  state = {
    medecin: null,
    patient: null
  }
  componentWillMount() {
    getPrescription()
    this.setState({
      medecin: this.props.infermier.medecins.filter(el => el._id === this.props.data.medecin)[0]
    })
  }


  render() {
    const { data, patient, auth } = this.props
    return (

      <div className="d-flex flex-wrap fl">
        {data && (
          <Card
            style={{ width: 350, marginTop: 16 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            {/* style={{ textTransform: "capitalize", color: "#1890ff" }}  */}
            <Meta style={{ textTransform: "capitalize", color: "#1890ff" }}
              avatar={<Avatar src={patient.image} />}
              title={patient.nom + "  " + patient.prenom}
            />
            <p>{patient.origin}</p>
            <h5>{patient.ATCD.map((el) => (<p>{el}</p>))}</h5>
            {/* <p>{patient.soin.map((el) => (<h1>{el}</h1>))}</p> */}
            {this.props.soinsProps.map(el =>
              <div className="form">
                <div className="data">
                  <h5>Date du Soin : </h5>
                  <h6>{"  " + el.dateSoin} </h6>
                </div>
                <div className="data">
                  <h5>Traitement du Soin : </h5>
                  <h6>{"  " + el.traitementSoin} </h6>
                </div>
              </div>
            )}


            <br />
            <br />

            <div className="form">
              <div className="data">
                <h5 style={{ color: "#DD9661" }}>Date du Prescription : </h5>
                <h6 style={{ color: "#1890ff" }}>{data.datePrescription} </h6>
              </div>

              <h5 style={{ color: "#DD9661" }}>Traitement du Prescription : </h5>
              <h6 style={{ textTransform: "capitalize", color: "#1890ff" }}>{data.traitement} </h6>
              <div>
                <h5 style={{ color: "#DD9661" }}>Rediger par Dr: </h5>
                <h6 style={{ textTransform: "capitalize", color: "#1890ff" }}>{this.state.medecin.nom + " " + this.state.medecin.prenom} </h6>


              </div>
            </div>


            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Card>
        )}

      </div>
    );
  }


};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    infermier: state.infermier,
  }
}
export default connect(mapStateToProps, { getPrescription })(PrescripPatientItem);
