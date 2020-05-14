import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadInfermier } from "../actions/AuthAction";
const { Header, Content, Footer } = Layout;

class HomeInfermier extends Component {
  componentWillMount() {
    this.props.loadInfermier();
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
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/affichePatient">
                  {/* <Link to={`/affichePatient/${this.props.auth.user._id}`}> */}
                  Gestion Patients
                </Link>
              </Menu.Item>
              <Menu.Item key="2">Suivie Patient</Menu.Item>
              <Menu.Item key="3">Visualiser COVID-19/Tunisie</Menu.Item>
              <Menu.Item key="4">Quitter</Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            {" "}
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                Bien Venu M/Mme{this.props.auth.user.nom}{" "}
                {this.props.auth.user.prenom}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              Content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</Footer>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { loadInfermier })(HomeInfermier);
