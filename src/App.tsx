import { useState, useEffect} from 'react';

import './App.css'

interface Phrase {
  phrase: string | undefined
}

function App() {

  const [quote, setQuote] = useState<Phrase | undefined>();

  useEffect(()=> {
    fetch("https://corporatebs-generator.sameerkumar.website/")
    .then((res)=>res.json())
    .then(json=> {setQuote(json)});
  }, []);

  return(
    <>
    <div>
      <h1>This is my Hello World App</h1>
      <p>I have {quote?.phrase} please hire me</p>

      <button onClick={() => methodDoesNotExist()}>Break the world</button>;

    </div>

    </>
  )
  
}

export default App
