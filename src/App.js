import React, {Component} from 'react';
import Character from './Components/Character/Character';
import InitiativeOrder from './Components/InitiativeOrder/InitiativeOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container} from 'react-bootstrap';

class App extends Component {
  render() {
    this.state = [
      {
        'Name': 'TedoBoiyo',
        'Stats': {
          'Strength': 16,
          'Dexterity': 15,
          'Intelligence': 13,
          'Constitution': 14,
          'Wisdom': 12,
          'Charisma': 16
        },
        'Backstory': 'This is my backstory'
      }
    ]

    return (
      <Container style={{paddingTop: '20px'}}> 
        <Character Character={this.state} />
        <InitiativeOrder Character={this.state} />
      </Container>
    );
  }
}

export default App;
