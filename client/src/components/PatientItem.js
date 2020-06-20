import React from "react";
import ModalPatient from "./ModalPatient";
import { Layout, Menu, Breadcrumb } from "antd";
import { Card } from "antd";
import Icon from "@ant-design/icons";
import { savePatient, getPatient } from "../actions/PatientAction";
import { connect } from "react-redux";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const PatientItem = ({ data }) => {
  return (
    <div className="d-flex patient">
      {data && (
        <Card
          style={{ borderRadius: "50% 20% / 10% 40%" }}
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              style={{ width: 150, height: 200, justifyItems: "center" }}
              alt="example"
              src={data.image}
            />
          }
        >
          <Meta title={data.nom} />
          <h3>{data.prenom}</h3>
          <br />
          <div className="data">
            <h5> CIN :</h5>
            <h6>{data.cin} </h6>
          </div>
          <div className="data">
            <h5> Date Entrer :</h5>
            <h6> {data.dateEn} </h6>
          </div>
          <div className="data">
            <h5> Email :</h5>
            <h6>{data.email} </h6>
          </div>
          <div className="data">
            <h5> Tel :</h5>
            <h6> {data.phone} </h6>
          </div>
          <div className="data">
            <h5> Origine : </h5>
            <h6>{data.origin}</h6>
          </div>
          <div className="data">
            <h5> Num Chambre : </h5>
            <h6>{data.numChambre}</h6>
          </div>
          <div className="data">
            <h5> Num Lit : </h5>
            <h6>{data.numLit} </h6>
          </div>
          <div className="data">
            <h5> Etat :</h5>
            <h6>{data.etat} </h6>
          </div>
          <h5 style={{ color: "#1890FF" }}> ATCD:</h5>
          {data.ATCD.map((el) => (
            <h6 className="atcd">{el}</h6>
          ))}
          <ModalPatient patient={data} />
        </Card>
      )}
    </div>
  );
};
export default PatientItem;











