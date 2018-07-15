import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Saludo from './components/Saludo';
import Card from './components/Card';
import axios from 'axios';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      saludo: "Hola desde React",
      text: "Saludos desde texto",
      numero: 0,
      cards : [
        {nombre:"Juan",telefono:"23213123213"},
        {nombre:"Pedro",telefono:"23213123213"},
        {nombre:"Luis",telefono:"23213123213"},
        {nombre:"Ana",telefono:"23213123213"},
        {nombre:"Isaac",telefono:"23213123213"},
        {nombre:"Diogny",telefono:"23213123213"}
      ],
      pokemons:[]
    };
  }

  updateComponent(){
    const cards = this.state.cards.map((elem,index,array) => {
        return <Card card={elem} />
    });

    return cards;
  }

  retronaParrafo(){
    return <p>Parrafo desde una funcion</p>
  }

  componentDidMount(){
    console.log("Did Mount");
    axios.get('https://pokeapi.co/api/v1/pokedex/1/') //
    .then(response => {
      this.setState({
        pokemons : response.data.pokemon
      })
    })
    .catch(err => console.log(err));
  }

  updateCardPokemon(){
    if(this.state.pokemons.length == 0){
      return <div>Cargando</div>
    }
    else{
      let pokemons = this.state.pokemons.map((ele,ix,arra) => {
        let idPokemon = ele.resource_uri.slice(15,ele.resource_uri.length-1);
        
        let pokemon = {
          id_pokemon : idPokemon,
          nombre_pokemon : ele.name
        }
        
        
          return pokemon;
      });

      pokemons = pokemons.sort(function(a, b) {
        return a.id_pokemon - b.id_pokemon;
      });

      return pokemons.map((ele,ix,arr) => {
        return <Card pokemon={ele.nombre_pokemon} idPokemon={ele.id_pokemon}/>
      })


    }
  }

  componentWillMount(){
    console.log("Will Mount");
  }

  cambiarEstadoMas = (e) => {
    this.setState({
      text:'Cambie el text a: Nuevo texto' + this.state.numero ++
    });
  }

  cambiarEstadoMenos = (e) => {
    this.setState({
      text:'Cambie el text a: Nuevo texto' + this.state.numero --
    });
  }

  render() {
    console.log("Ejecuto render");
    return (
    //  {/* <div className="App">
    //   <Navbar/>
      <div className="row" style={{"margin-right": "0px","margin-left": "0px"}}>
      {this.updateCardPokemon()}
      </div>
      
    //    <Saludo saludo={this.state.numero}/>
      
    //   <button onClick={this.cambiarEstadoMas}>+</button>
    //   <button onClick={this.cambiarEstadoMenos}>-</button> 

    //    {this.updateComponent()}

    //   {this.retronaParrafo()} 
    //   </div>*/}

      <BrowserRouter>
          <main>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/login" component={Card} />
          </main>
      </BrowserRouter>
    );

  }
}

export default App;
