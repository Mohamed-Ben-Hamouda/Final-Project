import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    render() {
        return (
            <form className="formo">
                <div>
                    <label>Nom:</label>
                    <input style={{ textTransform: "capitalize" }} onChange={this.handleChange} name="nom" type="text" value={this.state.nom} />
                </div>
                <div>
                    <label>prenom:</label>
                    <input style={{ textTransform: "capitalize" }} onChange={this.handleChange} name="prenom" type="text" value={this.state.prenom} />
                </div>
                <div>
                    <label>email:</label>
                    <input onChange={this.handleChange} name="email" type="text" value={this.state.email} />
                </div>
                <div>
                    <label>phone:</label>
                    <input onChange={this.handleChange} name="phone" type="text" value={this.state.phone} />
                </div>
                <div>
                    <label>image:</label>
                    <input style={{ textTransform: "capitalize" }} onChange={this.handleChange} name="image" type="text" value={this.state.image} />
                </div>
                <div>
                    <label>matricule:</label>
                    <input onChange={this.handleChange} name="matricule" type="text" value={this.state.matricule} />
                </div>
                <div>
                    <label>password:</label>
                    <input onChange={this.handleChange} name="password" type="text" value={this.state.password} />
                </div>
                <button className="btn-success" onClick={e => {
                    e.preventDefault()
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
                }}>{this.props.save ? 'EDIT INFERMIER' : 'ADD INFERMIER'}</button>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
        save: state.infermier.saved
    }
}
export default connect(mapStateToProps, { addInfermier, editInfermier, clearInfermier })(InfermierForm)