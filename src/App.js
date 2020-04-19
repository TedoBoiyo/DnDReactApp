import React, {Component} from 'react';
import TopNav from './Components/TopNav/TopNav';
import SideNav from './Components/SideNav/SideNav';
import Character from './Components/Character/Character';
import InitiativeOrder from './Components/InitiativeOrder/InitiativeOrder';
import MarchingOrder from './Components/MarchingOrder/MarchingOrder';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    this.state = {
      'SessionGuid': 1,
      'SessionTitle': 'Invasion of the Evil Queen',
      'InBattle': false,
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
          'DisplayHP': false,
          'DisplayHPLabel': false
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
          'HP': 75,
          'DisplayHP': true,
          'DisplayHPLabel': true
        },
        {
          'CharacterGuid': 3,
          'Name': 'Momo',
          'Stats': {
            'Strength': 12,
            'Dexterity': 18,
            'Intelligence': 16,
            'Constitution': 14,
            'Wisdom': 14,
            'Charisma': 12
          },
          'Backstory': 'This is my backstory',
          'MarchingOrder': 3,
          'InitiativeOrder': 4,
          'HP': 100,
          'DisplayHP': true,
          'DisplayHPLabel': false
        },
        {
          'CharacterGuid': 4,
          'Name': 'Kaya',
          'Stats': {
            'Strength': 10,
            'Dexterity': 14,
            'Intelligence': 10,
            'Constitution': 10,
            'Wisdom': 8,
            'Charisma': 6
          },
          'Backstory': 'This is my backstory',
          'MarchingOrder': 4,
          'InitiativeOrder': 3,
          'HP': 99,
          'DisplayHP': true,
          'DisplayHPLabel': false
        }
      ]
    }

    return (
      <Container style={{maxWidth: '100%'}}>
        <TopNav SessionTitle={this.state.SessionTitle} />
        <Row style={{height: '100vh'}}>
          <Col md={2} style={{borderLeft: '5px solid black'}}>
            <SideNav />
          </Col>
          <Col md={8} style={{borderLeft: '5px solid black', borderRight: '5px solid black'}}>
            <Character Character={this.state.Party} />
          </Col>
          <Col md={2} style={{borderRight: '5px solid black'}}>
            {
              this.state.InBattle 
              ? <InitiativeOrder Session={this.state} />
              : <MarchingOrder Session={this.state} />
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
