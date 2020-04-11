import React, {Component} from 'react';
import Character from './Components/Character/Character';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Components/Shared/CharacterImage.scss';

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
      <Character Character={this.state} />
    );
  }
}

export default App;
