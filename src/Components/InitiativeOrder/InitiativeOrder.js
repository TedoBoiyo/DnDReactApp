import React from 'react';
import CharacterBox from '../Shared/CharacterBox/CharacterBox';

const InitiativeOrder = props => (
    <div>
        <h3>Initiative Order</h3>
        {
            props.Characters
            .sort((a, b) => a.InitiativeOrder > b.InitiativeOrder)
            .map(Character => (
                <CharacterBox key={Character.CharacterGuid} Character={Character} InBattle={props.InBattle} />
            ))
        }
    </div>
)

export default InitiativeOrder;
