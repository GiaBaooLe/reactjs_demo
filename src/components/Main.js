import React, { Component } from "react";
import { Players } from "../Share/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";
import { render } from "@testing-library/react";
export class Main extends Component {
    constructor(){
        super();
        this.state ={
            players:Players
        };
    }

render(){
    return <PlayersPresentation players ={this.state.players}/>

}
}
export default Main;