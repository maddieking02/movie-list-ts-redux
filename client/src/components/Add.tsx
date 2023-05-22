import React from 'react';

const Add = (): React.JSX.Element => {
  return (
    <div>
      <input id='add-input' type='text' placeholder={'Add movie title here'}></input>
      <button id='add-button'>Add</button>
    </div>
  )
}