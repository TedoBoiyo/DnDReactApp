import React from 'react';
import CharacterBox from '../Shared/CharacterBox/CharacterBox';

const MarchingOrders = props => (
    <div>
        <h3>Marching Order</h3>
        {
            props.Session.Party
            .sort((a, b) => a.MarchingOrder > b.MarchingOrder)
            .map(Character => (
                <CharacterBox key={Character.CharacterGuid} Character={Character} InBattle={props.InBattle} />
            ))
        }
    </div>
)

export default MarchingOrders;