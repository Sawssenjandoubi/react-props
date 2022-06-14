import React from 'react'
import PropTypes from 'prop-types';

function Profil(props) {
  return (
    <div>
      {props.children}
<h1 >I'm {props.name}</h1>
<h4>{props.bio}</h4>
<h5>{props.profession}</h5>

    </div>
  )
}
Profil.defaultProps={
  name:"soumaya"
}
Profil.propTypes = {
  name:PropTypes.string,
  profession:PropTypes.string,
  bio:PropTypes.string
};


export default Profil