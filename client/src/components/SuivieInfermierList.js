import React from 'react'
import { connect } from 'react-redux'
import { getInfermier, infirmierInfos, getPatientinf } from '../actions/InfermierActions'
import { Select } from 'antd'
import PatientItem from './PatientItem'
import { EditOutlined, EllipsisOutlined, SettingOutlined, PhoneTwoTone, MailTwoTone } from "@ant-design/icons";
import { Skeleton, Switch, Card, Avatar } from "antd";
import Paper from '@material-ui/core/Paper';

const { Meta } = Card;
const { Option } = Select;



class SuivieInfermierList extends React.Component {
    state = {
        infermier: null,
        patient: null
    }

    componentWillMount() {
        this.props.getPatientinf();

    }

    handleChange = value => {

        this.setState({
            infermier: this.props.auth.user.infermier.find(el => el._id === value), idInfermier: value
        })

    }

    render() {
        return (
            <div className="inf">
                <div>
                    <Select name="nom" defaultValue="--Selection infirmier--"
                        style={{ width: "100%", marginLeft: 50 }} onChange={this.handleChange}>

                        {this.props.auth.user.infermier &&
                            this.props.auth.user.infermier.map(matricule =>
                                <Option value={matricule._id} style={{ textTransform: "capitalize" }}>

                                    {matricule.nom + "  " + matricule.prenom}
                                </Option>

                            )}
                    </Select>
                    {/* //info infermier */}

                    <Card
                        style={{ width: 300, marginTop: 16 }}

                    >
                        {this.state.infermier && (
                            <Meta
                                avatar={<Avatar src={this.state.infermier.image} />}
                                title={this.state.infermier.phone}
                                description={this.state.infermier.email}

                            />

                        )}
                    </Card>



                    {/* info patients de l'infermier selectionner */}

                    <Card
                        style={{ width: "auto", marginTop: 70 }}

                    // style={{ textTransform: "capitalize", color: "#1890ff" }}


                    >

                        {



                            this.props.myPatient.patient.filter(el => el.infermier === this.state.idInfermier).map(x => (

                                <Meta


                                    avatar={<Avatar src={x.image} />}
                                    title={x.nom + "  " + x.prenom}
                                    description={"Date Entrer: " + x.dateEn + " // Etat du Patient: " + x.etat}
                                />

                            ))
                        }
                        {/* <p>{x.ATCD.map((el) => (<h1>{el}</h1>))}</p> */}


                    </Card>

                </div>

            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        myInf: state.infermier,
        auth: state.auth,
        myPatient: state.patient
    }
}
export default connect(mapStateToProps, { getInfermier, infirmierInfos, getPatientinf })(SuivieInfermierList)
