import React from 'react';
import Form from './Form';

function App() {
  function onChange(data) {
    console.log(data);
  }
  return (
    <React.Fragment>
      <Form onChange={onChange} />
      <Form onChange={onChange} />      
    </React.Fragment>
  );
}

export default App;
