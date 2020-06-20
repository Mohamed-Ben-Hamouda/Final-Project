import React, { Component } from 'react'

import { connect } from 'react-redux'
import TextField from "@material-ui/core/TextField";
import { addInfermier, editInfermier, clearInfermier } from '../actions/InfermierActions'


class InfermierForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            phone: '',
            image: '',
            matricule: '',
            password: '',

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.save)
    }
    //////////////


    //////////////////
    render() {
        return (
            <form className="formo">


                <form noValidate autoComplete="off">

                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Nom:" onChange={this.handleChange} name="nom" value={this.state.nom} /><br />
                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Prenom:" onChange={this.handleChange} name="prenom" value={this.state.prenom} /><br />
                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Email:" onChange={this.handleChange} name="email" value={this.state.email} /><br />
                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Phone:" onChange={this.handleChange} name="phone" value={this.state.phone} /><br />
                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Image:" onChange={this.handleChange} name="image" value={this.state.image} /><br />
                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Matricule:" onChange={this.handleChange} name="matricule" value={this.state.matricule} /><br />
                    <TextField style={{ width: 200, paddingBottom: 7 }} variant="outlined" id="outlined-basic" label="Password:" onChange={this.handleChange} name="password" value={this.state.password} /><br />
                </form>




                <button style={{ width: 200 }} className="btn-primary" onClick={e => {
                    e.preventDefault()
                    e.info()
                    if (this.props.save) {
                        this.props.editInfermier(this.state._id, {
                            nom: this.state.nom,
                            prenom: this.state.prenom,
                            email: this.state.email,
                            phone: this.state.phone,
                            image: this.state.image,
                            matricule: this.state.matricule,
                            password: this.state.password
                        })
                        this.props.clearInfermier()
                    } else {
                        this.props.addInfermier(this.state)
                    }
                    this.setState({
                        nom: '',
                        prenom: '',
                        email: '',
                        phone: '',
                        image: '',
                        matricule: '',
                        password: '',
                    })
                }}>{this.props.save ? 'EDIT INFERMIER' : 'AJOUT INFERMIER'}</button>
            </form >

        )
    }
}
const mapStateToProps = state => {
    return {
        save: state.infermier.saved
    }
}
export default connect(mapStateToProps, { addInfermier, editInfermier, clearInfermier })(InfermierForm)