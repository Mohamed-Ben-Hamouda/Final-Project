import React, { Component } from "react";
import ModalSoin from "./ModalSoin";
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
const PrescriptionAfficheItem = ({ data, patient }) => {
    return (
        <div className="d-flex flex-wrap fl">
            {data && (
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EllipsisOutlined key="ellipsis" />,
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
                            <h5>Date du Prescription : </h5>
                        </div>
                        <h6>{data.datePrescription} </h6>
                        <div className="data">
                            <h5>Traitement : </h5>
                            <h6>{data.traitement} </h6>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
};
export default PrescriptionAfficheItem;
