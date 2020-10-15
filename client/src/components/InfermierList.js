import React from "react";
import { connect } from "react-redux";
import { getInfermier } from "../actions/InfermierActions";
import InfermierItem from "./InfermierItem";

class InfermierList extends React.Component {
  componentWillMount() {
    this.props.getInfermier();
  }

  render() {
    return (
      <div>
        {this.props.auth.user &&
          this.props.auth.user.infermier.map((matricule) => (
            <InfermierItem key={matricule._id} matricule={matricule} />
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    infermier: state.infermier,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getInfermier })(InfermierList);
