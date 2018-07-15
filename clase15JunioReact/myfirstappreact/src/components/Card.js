import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div className="col-sm-3">
            <div className="card" style={{"text-align":"-webkit-center"}} >
            <img className="card-img-top" src={"https://pokeres.bastionbot.org/images/pokemon/"+this.props.idPokemon+".png"} alt="Card image cap" style={{width:"10rem",float: 'left'}}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.pokemon}</h5>
                <p className="card-text">{this.props.idPokemon}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        );
    }
}

export default Card;