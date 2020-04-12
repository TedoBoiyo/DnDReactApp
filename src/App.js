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
        'CharacterGuid': 1,
        'Name': 'TedoBoiyo',
        'Stats': {
          'Strength': 16,
          'Dexterity': 15,
          'Intelligence': 13,
          'Constitution': 14,
          'Wisdom': 12,
          'Charisma': 16
        },
        'Backstory': 'This is my backstory',
        'InitiativeOrder': 2,
        'HP': 45,
        'DisplayHP': false
      },
      {
        'CharacterGuid': 2,
        'Name': 'Bob',
        'Stats': {
          'Strength': 18,
          'Dexterity': 14,
          'Intelligence': 8,
          'Constitution': 18,
          'Wisdom': 14,
          'Charisma': 16
        },
        'Backstory': 'This is my backstory',
        'InitiativeOrder': 1,
        'HP': 100,
        'DisplayHP': true
      }
    ]

    return (
      <Container style={{paddingTop: '20px'}}> 
        <Character Character={this.state} />
        <InitiativeOrder Characters={this.state} />
      </Container>
    );
  }
}

export default App;
