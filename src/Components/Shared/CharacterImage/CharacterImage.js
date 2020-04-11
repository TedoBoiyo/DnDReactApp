import React from "react";

const CharacterImage = props => (
    props.Image ? <img src={props.Image} /> : <div>IMAGE</div>
  )

  export default CharacterImage;