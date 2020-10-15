import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import SuivieInfermierList from "../components/SuivieInfermierList"



const { Header, Content, Footer } = Layout

const SuivieInfermier = (props) => {
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
                        <Menu.Item key="2"><Link to="/GestionInfermier">Gestion infermier</Link></Menu.Item>
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
                        {/* <Breadcrumb.Item>Bien venue Dr:{props.auth.user && props.auth.user.nom + ' ' + props.auth.user.prenom}</Breadcrumb.Item> */}

                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 380 }}
                    >
                        suivie infermier
                        <SuivieInfermierList />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</Footer>
            </Layout>
        </div>
    );
};



export default SuivieInfermier