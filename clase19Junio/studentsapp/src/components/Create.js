
import React, { Component } from 'react';
import '../components/Create.css';
import Card from '../components/Card'
import axios from 'axios'
import { Redirect } from 'react-router';


class Create extends Component {

    constructor(props){
        super(props)
        this.state = {
            nombre: "",
            apellido: "",
            edad: "",
            redirect:false
        }

        console.log(props,"desde create");
        //this.onInputChange = this.onInputChange.bind(this); esto se soluciona si usamos las arrow functions 

    }

    onInputChange = (e) => {
        // console.log(e.target.id)
        // console.log(e.target.value)

        switch(e.target.id){
            case "nombre" : this.setState({nombre: e.target.value}) ; break;
            case "apellido" : this.setState({apellido: e.target.value}) ; break;
            case "edad" : this.setState({edad: e.target.value}) ; break;
        }
        //console.log(this.state)
    }

    onSubmit = (e) =>{
        console.log(this.state)

        let msgs = "";

        if(this.state.nombre == "" || this.state.nombre.length < 4){
            msgs += "- El nombre es invalido o es demasiado corto.\n ";
        }

        else if(this.state.apellido == "" || this.state.nombre.length < 4){
            msgs += "- El apellido es invalido o es demasiado corto.\n ";
        }

        else if(this.state.edad == "" || this.state.edad < 0){
            msgs += "- La edad es invalida.\n ";
        }

        else if (msgs.trim() != ""){
            alert(msgs);
        }
        else{
            let estudiante = {
                nombre : this.state.nombre,
                apellidos : this.state.apellido,
                edad : this.state.edad
            }

            axios.post("https://cintarojaheroku.herokuapp.com/api/v1/user/create/",estudiante)
            .then(estudiante => alert('Usuario guardado'))
            .catch(error => alert(error))
        }

        e.preventDefault();
    }

    handleOnClick = () => {
        // some action...
        // then redirect
        this.setState({redirect: true});
      }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/Home" />;
        }
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
            
                <form className="body-create" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <button type="button" className="btn btn-info" onClick={this.handleOnClick}>Lista Estudiantes</button>
                </div>
                <div className="form-group">
                    <label for="estudiante_nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="helper_nombre" placeholder="Nombre" onChange={ this.onInputChange }/>
                </div>
                <div className="form-group">
                    <label for="estudiante_apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido" aria-describedby="helper_apellido" placeholder="Apellidos" onChange={ this.onInputChange } />
                </div>
                <div className="form-group">
                    <label for="estudiante_edad">Edad</label>
                    <input type="number" className="form-control" id="edad" aria-describedby="helper_edad" onChange={ this.onInputChange }/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>
            </div>
            </div>
            </div>
        );
      }
}

export default Create;