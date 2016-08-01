import React from 'react';

export default (props) => {


  return (
    <article
      style={{
        background: `linear-gradient(${props.colorTop}, ${props.colorBottom})`
      }}
      onClick={() => props.onCardClick(props.id) }
    >
    {props.title}
    </article>
  )
};

