import React from 'react'
import { connect } from 'react-redux'
import { AuditOutlined, Icon, DeleteOutlined } from "@ant-design/icons";
import { deleteInfermier, saveInfermier } from '../actions/InfermierActions'
import { Card } from "antd";
import { red } from '@material-ui/core/colors';


const InfermierItem = ({ matricule, deleteInfermier, saveInfermier }) => {
    return (
        // 
        <Card
            hoverable
            style={{ width: 350, marginBottom: 10 }}
            cover={<img style={{ width: 150, marginLeft: "30%" }} alt="example" src={matricule.image} />}
        >
            <div className='infoor'>
                <AuditOutlined onClick={() => saveInfermier(matricule)} style={{ fontSize: "40px", color: "#87B4E4" }} />
                <DeleteOutlined onClick={() => deleteInfermier(matricule._id)} style={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className='infoor'>
                <h4 style={{ textTransform: "capitalize", color: "#1890ff" }} > Nom:&nbsp;{matricule.nom}</h4>
                <h4 style={{ textTransform: "capitalize", color: "#1890ff" }} > Prenom:&nbsp;{matricule.prenom}</h4>
                <h4 style={{ color: "#1890ff" }}> Email:&nbsp;{matricule.email}</h4>
                <h4 style={{ color: "#1890ff" }}> Phone:&nbsp;{matricule.phone}</h4>
                <h4 style={{ color: "#1890ff" }}> Matricule:&nbsp; {matricule.matricule}</h4>


            </div>

        </Card>

    )
}

export default connect(null, { saveInfermier, deleteInfermier })(InfermierItem)
