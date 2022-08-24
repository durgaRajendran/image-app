import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Search  from './components/Search';
import {useState} from 'react'


// <h1> Image Gallery</h1>
function App() {
  const [word,setWord]=useState("");
  function handleSearchSubmit(e){
    e.preventDefault();
    //console.log(e.target[0].value);
    console.log(word);
    }
    //console.log(word);
  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>

    </div>
  );
}

export default App;
