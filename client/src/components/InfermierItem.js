import React from 'react'
import { connect } from 'react-redux'
import { AuditOutlined, Icon, DeleteOutlined } from "@ant-design/icons";
import { deleteInfermier, saveInfermier } from '../actions/InfermierActions'


const InfermierItem = ({ matricule, deleteInfermier, saveInfermier }) => {
    return (
        <div className="card fav-item">
            <div className="infos">
                <div className="row align-items-center">
                    <div className="col-md-4 col-xs-12">
                        <img className="imgg inf-img" src={matricule.image} width="150" alt="..." />

                    </div>

                    <div className="modif col-md-4 col-xs-10">
                        <AuditOutlined onClick={() => saveInfermier(matricule)} style={{ fontSize: "40px", color: "#87B4E4" }} />
                        <DeleteOutlined onClick={() => deleteInfermier(matricule._id)} style={{ fontSize: "40px", color: "#690813" }} />

                    </div>
                    <div className='infoor'> <h4 style={{ textTransform: "capitalize" }} > Nom:&nbsp;{matricule.nom}</h4>
                        <h4 style={{ textTransform: "capitalize" }} > Prenom:&nbsp;{matricule.prenom}</h4>
                        <h4> Email:&nbsp;{matricule.email}</h4>
                        <h4> Phone:&nbsp;{matricule.phone}</h4>
                        <h4> Matricule:&nbsp; {matricule.matricule}</h4>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default connect(null, { saveInfermier, deleteInfermier })(InfermierItem)
