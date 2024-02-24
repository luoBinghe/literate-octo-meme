import React from 'react'

import { Header } from './Header'
import { Main } from './Main'

import './App.css';

const json = {
  header: {
    name: 'Isabela',
    date: '10/10/25'
  }
}

function App() {
  const [header, setHeader] = React.useState(() => json.header)

  return (
    <div className="App">
      <div className='Container'>
        <Header 
          header={header}
          onUpdateHeader={setHeader}
        />
        <Main />
      </div>
    </div>
  );
}

export default App;
