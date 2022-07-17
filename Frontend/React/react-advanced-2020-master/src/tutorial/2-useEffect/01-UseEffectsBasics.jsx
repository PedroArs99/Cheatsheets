import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('This will trigger after every re-render')
    console.log('Number of re-renders', value + 1)
  },[
    // This array is called the dependency list
    // If it´s empty, the whole effect will only run on the initial render

    // If value is here, it will also run when the value prop changes
    value
  ])

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>
      Increase
    </button>
  </>;
};

export default UseEffectBasics;
