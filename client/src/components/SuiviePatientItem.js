import React, { Component } from "react";
import ModalSuivie from "./ModalSuivie";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
const { Meta } = Card;
const SuiviePatientItem = ({ data, patient }) => {
  return (
    <div className="d-flex flex-wrap fl">
      {data && (
        <Card
          className="cad"
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <ModalSuivie dataS={data} editMode={true} />,
            // <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={patient.image} />}
            title={patient.nom + "  " + patient.prenom}
          />
          <br />
          <br />
          <div className="form">
            <div className="data">
              <h5>Date de suivie : </h5>
              <h6>{data.dateSuivie}</h6>
            </div>
            <div className="data">
              <h5>Température : </h5>
              <h6>{data.temperature} </h6>
            </div>
            <div className="data">
              <h5>Réspiration : </h5>
              <h6>{data.respiration}</h6>
            </div>
            <div className="data">
              <h5>Pulsation : </h5>
              <h6>{data.pulsation}</h6>
            </div>
          </div>
          <CheckCircleTwoTone twoToneColor="#52C41A" />
        </Card>
      )}
    </div>
  );
};
export default SuiviePatientItem;





