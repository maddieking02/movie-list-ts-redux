import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import Add from './Add';
import Search from './Search';
import List from './List';

const App = (): React.JSX.Element => {
  return (
    <div>
      <Add />
      <Search/>
      <div>
        <button>Watched</button>
        <button>To Watch</button>
      </div>
      <List/>
    </div>
  )
}

export default App;