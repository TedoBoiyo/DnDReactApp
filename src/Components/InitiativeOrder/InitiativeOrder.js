import React from 'react';
import CharacterBox from './CharacterBox/CharacterBox';

const InitiativeOrder = props => (
    props.Characters
    .sort((a, b) => a.InitiativeOrder > b.InitiativeOrder)
    .map(Character => (
        <CharacterBox key={Character.CharacterGuid} Character={Character} />
    ))
)

export default InitiativeOrder;
