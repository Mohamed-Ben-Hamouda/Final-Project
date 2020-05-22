import React from "react";
import { AuditOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
import { Card } from "antd";
import Icon from "@ant-design/icons";
import { addPatient, getPatient } from "../actions/PatientAction";
import { connect } from "react-redux";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const PatientItem = ({ data }) => {
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
          <AuditOutlined style={{ fontSize: "40px", color: "#87B4E4" }} />
        </Card>
      )}
    </div>
  );
};

export default connect(null, { getPatient })(PatientItem);
