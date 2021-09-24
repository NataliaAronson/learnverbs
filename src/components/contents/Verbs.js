import React, { Component } from 'react';
import VerbsCard from '.verbcard/VerbsCard';
class Verbs extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Irregular verbs</h1>
            <VerbsCard />
           
            </div>
            )
        }
    }
    
export default Verbs;