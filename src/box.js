import React from 'react';

export default function Box({value, handleClick, content}) {

  return <button
            className="box"
            onClick={!content && handleClick}
            value={value}
         >
            {content}
         </button>
}