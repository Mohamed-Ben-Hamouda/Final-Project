import React from 'react'
import InfermierList from '../components/InfermierList'
import InfermierForm from '../components/InfermierForm'
import { connect } from 'react-redux'
import { getInfermier } from '../actions/InfermierActions'
import { loadMedecin } from '../actions/AuthAction'
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"



const { Header, Content, Footer } = Layout

class GestionInfermier extends React.Component {
    componentWillMount() {
        this.props.loadMedecin()
        this.props.getInfermier()
    }

    render() {
        return (
            <div>

                <Layout>
                    <Header
                        style={{
                            position: "fixed",
                            zIndex: 1,
                            width: "81.3%",
                            background: "#F0F2F5",
                        }}
                    >

                        <div className="logo" />
                        <Menu theme="light" mode="horizontal" >
                            <Menu.Item key="1"><Link to="/HomeMedecin">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/SuivieInfermier">Suivie infermier</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/SuiviePatient">Suivie Patient</Link></Menu.Item>
                            <Menu.Item key="4">Visualiser COVID-19/Tunisie</Menu.Item>
                            <Menu.Item key="5"><Link to="/Home">Quiter</Link></Menu.Item>

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
                            <div className="row mt-4">
                                <div className="col-md-6 col-sm-12">
                                    <InfermierForm />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <InfermierList />
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</Footer>
                </Layout>

            </div>
        )
    }
}


export default connect(null, { getInfermier, loadMedecin })(GestionInfermier)
