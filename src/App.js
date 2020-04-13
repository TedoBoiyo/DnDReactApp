import React, {Component} from 'react';
import Character from './Components/Character/Character';
import InitiativeOrder from './Components/InitiativeOrder/InitiativeOrder';
import MarchingOrder from './Components/MarchingOrder/MarchingOrder';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    this.state = {
      'InBattle': true,
      'Party': [
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
          'MarchingOrder': 2,
          'InitiativeOrder': 1,
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
          'MarchingOrder': 1,
          'InitiativeOrder': 2,
          'HP': 100,
          'DisplayHP': true
        }
      ]
    }

    return (
      <Container style={{paddingTop: '20px'}}> 
        <Character Character={this.state.Party} />
        <hr />
        {
          this.state.InBattle 
          ? <InitiativeOrder Characters={this.state.Party} />
          : <MarchingOrder Characters={this.state.Party} />
        }
        
        <hr />
      </Container>
    );
  }
}

export default App;
