import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import PrescripPatient from "../components/PrescripPatient"
import { connect } from 'react-redux'
import { getPatientinf, getAllMed, removeCurrentInfermier } from "../actions/InfermierActions"
import { loadMedecin, Logout } from '../actions/AuthAction'

const { Header, Content, Footer } = Layout
const logMeOut = () => {
    Logout();
    removeCurrentInfermier();
};

class SuiviePatientM extends React.Component {

    componentWillMount() {
        this.props.getPatientinf();
        this.props.loadMedecin()
        this.props.getAllMed()

    }

    render() {
        return (
            <div>

                <Layout>
                    <Header
                        style={{
                            position: "fixed",
                            zIndex: 1,
                            width: "1110px",
                            background: "#F0F2F5",
                        }}
                    >

                        <div className="logo" />
                        <Menu theme="light" mode="horizontal" >
                            {/* <Menu.Item key="1"><Link to="/HomeMedecin">Acceuil</Link></Menu.Item> */}
                            <Menu.Item key="2"><Link to="/GestionInfermier">Gestion infirmier</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/Suivieinfermier">Suivie infirmier</Link></Menu.Item>
                            <Menu.Item key="4"><a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" >Visualiser COVID-19</a></Menu.Item>
                            <Menu.Item key="5"><a href="/Home" onClick={logMeOut}>Quitter</a></Menu.Item>

                        </Menu>
                    </Header>
                    <Content
                        className="site-layout"
                        style={{ padding: "0 50px", marginTop: 64 }}
                    >
                        {" "}
                        <Breadcrumb style={{ margin: "16px 0" }}>

                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 380 }}
                        >
                            <PrescripPatient />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</Footer>
                </Layout>
            </div>
        )
    }
};




export default connect(null, { getPatientinf, loadMedecin, getAllMed, Logout, removeCurrentInfermier })(SuiviePatientM)
