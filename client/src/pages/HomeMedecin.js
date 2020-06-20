// import React from "react"
// import { Layout, Menu, Breadcrumb } from "antd"
// import { Link } from "react-router-dom"
// import { connect } from 'react-redux'


// const { Header, Content, Footer } = Layout

// const HomeMedecin = (props) => {
//   return (
//     <div >

//       <Layout>
//         <Header
//           style={{
//             position: "fixed",
//             zIndex: 1,
//             width: "1110px",
//             // width: "82.013%",
//             background: "#F0F2F5",
//           }}
//         >

//           <div className="logo" />
//           <Menu theme="light" mode="horizontal" >
//             <Menu.Item key="1"><Link to="/GestionInfermier">Gestion infermier</Link></Menu.Item>
//             <Menu.Item key="2"><Link to="/SuivieInfermier">Suivie infermier</Link></Menu.Item>
//             <Menu.Item key="3"><Link to="/SuiviePatientM">Suivie Patient</Link></Menu.Item>
//             <Menu.Item key="4"><a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" >Visualiser COVID-19/Tunisie</a></Menu.Item>
//             <Menu.Item key="5"><Link to="/Home">Quiter</Link></Menu.Item>

//           </Menu>
//         </Header>
//         <Content
//           className="site-layout"
//           style={{ padding: "0 50px", marginTop: 64 }}
//         >
//           {" "}
//           <Breadcrumb style={{ margin: "16px 0" }}>
//             <Breadcrumb.Item>Bienvenue Dr {props.auth.user && " " + props.auth.user.nom + ' ' + props.auth.user.prenom}</Breadcrumb.Item>

//           </Breadcrumb>
//           <div
//             className="site-layout-background"
//             style={{ padding: 24, minHeight: 380 }}
//           >


//           </div>
//         </Content>
//         <Footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</Footer>
//       </Layout>
//     </div>
//   );
// };


// const mapStateToProps = state => {
//   return {
//     auth: state.auth
//   }
// }
// export default connect(mapStateToProps)(HomeMedecin)