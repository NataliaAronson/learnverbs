import React, { Component } from 'react';
import Navelem from './Navelem';


class Navlist extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navelem item="Home" tolink="/"  activec={this.activeitem}></Navelem>
            <Navelem  item="Voclist" tolink="/voclist"  activec={this.activeitem}></Navelem>
            <Navelem  item="Verbs" tolink="/verbs"  activec={this.activeitem}></Navelem>
            <Navelem  item="Something" tolink="/something"  activec={this.activeitem}></Navelem>
           
            </ul>
            </nav>
            )
        }
    }
    
    export default Navlist;