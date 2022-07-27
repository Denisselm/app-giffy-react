import React, { useState } from "react";
import "./App.css";

function App() {
  const Gif =
    "https://media3.giphy.com/media/YRtLgsajXrz1FNJ6oy/giphy.gif?cid=ecf05e47xzm7ib7klrqzvq5cv01e2me0lnys95lczant4hy1&rid=giphy.gif&ct=g";

  const differentGifs =
    "https://www.reddit.com/r/gifs/comments/4jks4t/star_wars_cat/";

  const [gifs, setGifs] = useState([Gif]);

  /*const state = useState([]);
    const value = state[0];
    const updateValue = state[1]; esto es lo mismo que la linea 6, el useState devuelve un array de 2 posiciones*/

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
        {/*con map se hace un loop que renderiza todos los gif*/}

        <button onClick={() => setGifs(differentGifs)}>Click</button>
        {/*en onclick se hace una funcion de flecha que transforma la actualizacion del estado y devuelve otro gif*/}
      </section>
    </div>
  );
}

export default App;
