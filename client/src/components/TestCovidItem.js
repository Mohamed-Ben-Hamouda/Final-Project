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
import ModalTestCovid from "./ModalTestCovid";
const { Meta } = Card;
const TestCovidItem = ({ data, patient }) => {
    return (
        <div className="d-flex flex-wrap fl">
            {data && (
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <ModalTestCovid dataS={data} editMode={true} />,
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
                            <h5>Nom de Test Covid19 :</h5>
                            <h6>{data.testName}</h6>
                        </div>
                        <div className="data">
                            <h5>Date du Test : </h5>
                            <h6>{data.dateTest} </h6>
                        </div>
                        <div className="data">
                            <h5>Résultat de test : </h5>
                            <h6>{data.resultat} </h6>
                        </div>
                    </div>
                    {/* <CheckCircleTwoTone twoToneColor="#52C41A" /> */}
                </Card>
            )}
        </div>
    );
};
export default TestCovidItem;