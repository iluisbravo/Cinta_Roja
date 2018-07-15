import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div className="col-sm-3">
            <div className="card" style={{"text-align":"-webkit-center"}} >
            <img className="card-img-top" src="https://picsum.photos/200/200/?random" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.pokemon}</h5>
                <p className="card-text">{this.props.idPokemon}</p>
                <Link to={"/Update/"}>
                   <a href="#" className="btn btn-primary" >Editar</a>
                </Link>
            </div>
            </div>
            </div>
        );
    }
}

export default Card;