import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Search  from './components/Search';
import {useState} from 'react'

const UNSPLASH_KEY=process.env.REACT_APP_UNSPLASH_KEY;

// <h1> Image Gallery</h1>
function App() {
  const [word,setWord]=useState("");
  function handleSearchSubmit(e){
    e.preventDefault();
    //console.log(e.target[0].value);
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
     .then((res) =>res.json())
     .then((data)=>{
      console.log(data);
     })
     .catch((err) => {console.log(e); })
     setWord('');
    }
    //console.log(word); console.log(process.env);
  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>

    </div>
  );
}

export default App;
