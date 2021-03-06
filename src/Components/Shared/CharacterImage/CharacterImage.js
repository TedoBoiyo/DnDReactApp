import React from "react";
import './CharacterImage.scss';

const CharacterImage = props => (
      props.Image ? <img src={props.Image} alt='Character profile' /> : <div className='emptyImage'><div>IMAGE</div></div>
  )

  export default CharacterImage;