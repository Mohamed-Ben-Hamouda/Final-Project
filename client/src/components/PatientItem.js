import React from "react";
import ModalPatient from "./ModalPatient";
import { Layout, Menu, Breadcrumb } from "antd";
import { Card } from "antd";
import Icon from "@ant-design/icons";
import { savePatient, getPatient } from "../actions/PatientAction";
import { connect } from "react-redux";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const PatientItem = ({ data, savePatient }) => {
  return (
    <div className="d-flex card">
      {data && (
        <Card
          hoverable
          style={{ width: 200 }}
          cover={
            <img
              style={{ width: 200, height: 250 }}
              alt="example"
              src={data.image}
            />
          }
        >
          <Meta title={data.nom} />
          <h4>{data.prenom}</h4>

          <ModalPatient patient={data} />
        </Card>
      )}
    </div>
  );
};

export default connect(null, { getPatient, savePatient })(PatientItem);
