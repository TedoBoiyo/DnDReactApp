import React from "react";

const CharacterStats = props => (
    <div className='row'>
        <div className='col-6'>
            <p>Strength: {props.Stats.Strength}</p>
            <p>Constitution: {props.Stats.Constitution}</p>
            <p>Intelligence: {props.Stats.Intelligence}</p>
        </div>
        <div className='col-6'>
            <p>Dexterity: {props.Stats.Dexterity}</p>
            <p>Wisdom: {props.Stats.Wisdom}</p>
            <p>Charisma: {props.Stats.Charisma}</p>
        </div>
    </div>
  )

  export default CharacterStats;