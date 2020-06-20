import React from 'react'
import InfermierList from '../components/InfermierList'
import InfermierForm from '../components/InfermierForm'
import { connect } from 'react-redux'
import { getInfermier, removeCurrentInfermier } from '../actions/InfermierActions'
import { loadMedecin, Logout } from '../actions/AuthAction'
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"


const { Header, Content, Footer } = Layout
const logMeOut = () => {
    Logout();
    removeCurrentInfermier();
};

class GestionInfermier extends React.Component {
    componentWillMount() {
        this.props.loadMedecin()
        this.props.getInfermier()


    }
    // logMeOut() {
    //     this.props.Logout();
    //     this.props.removeCurrentInfermier();
    // };
    render() {
        // const { props } = this.props
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
                            <Menu.Item key="2"><Link to="/SuivieInfermier">Suivie infirmier</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/SuiviePatientM">Suivie Patient</Link></Menu.Item>
                            <Menu.Item key="4"><a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" >Visualiser COVID-19/Tunisie</a></Menu.Item>
                            <Menu.Item key="5"><a href="/Home" onClick={logMeOut}>Quitter</a></Menu.Item>

                        </Menu>
                    </Header>
                    <Content
                        className="site-layout"
                        style={{ padding: "0 50px", marginTop: 64 }}
                    >
                        {" "}
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            {/* <Breadcrumb.Item>Bienvenue Dr {this.props.auth.user.nom + ' ' + this.props.auth.user.prenom}</Breadcrumb.Item> */}


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
                    <Footer style={{ textAlign: "center", marginTop: 20 }}>وزارة الصحة التونسية</Footer>
                </Layout>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, { getInfermier, loadMedecin, Logout, removeCurrentInfermier })(GestionInfermier)
