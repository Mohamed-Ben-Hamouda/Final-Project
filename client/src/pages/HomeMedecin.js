import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'


const { Header, Content, Footer } = Layout

const HomeInfermier = (props) => {
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
            <Menu.Item key="1"><Link to="/GestionInfermier">Gestion infermier</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/SuivieInfermier">Suivie infermier</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/SuiviePatient">Suivie Patient</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/covid">Visualiser COVID-19/Tunisie</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/Home">Quiter</Link></Menu.Item>

          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          {" "}
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Bien venue Dr:{props.auth.user && props.auth.user.nom + ' ' + props.auth.user.prenom}</Breadcrumb.Item>

          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >

            <div className="container-fluid color:red">

              <div class="row">
                <div class="col"> <legend>Notes du chef Service </legend></div>
                <div class="col"><legend>Les Patients Infecter </legend></div>
              </div>
              <div class="row">
                <div class="col"><p className="par1Med">-Note1 <br />-Note2 </p></div>
                <div class="col"><p className="par2Med"> -Flen ben foulen <br />-falten ben falten</p></div>

              </div>

            </div>

          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</Footer>
      </Layout>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(HomeInfermier)