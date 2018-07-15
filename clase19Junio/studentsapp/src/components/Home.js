import React, { Component } from 'react';
import Card from '../components/Card'
import axios from 'axios'


class Home extends Component {


  constructor(){
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    console.log("Did Mount");
    this.getStudentsApi();
    this.getStudets();
  }

  getStudentsApi(){
    axios.get('https://cintarojaheroku.herokuapp.com/api/v1/alumnos/') //
    .then(response => {
      console.log(response.data);
      this.setState({
        students : response.data
      })
    })
    .catch(err => console.log(err));
  }

  getStudets(){
    if(this.state.students.length == 0){
      return <div>Cargando</div>
    }
    else{

      return this.state.students.map((ele,ix,arr) => {
        return <Card pokemon={ele.nombre} idPokemon={ele.edad}/>
      })


    }
  }


    render() {
        return (
          <div className="row">
          {this.getStudets()}
          </div>
        );
      }
}

export default Home;