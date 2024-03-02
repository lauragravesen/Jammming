import './App.css';
import { useState, useEffect } from 'react';

const clientID = 'd13c3fff478c4d6185686f672a64ae44';
const clientSecret = '9c62504efb1640acba32d1dd3d259057';

function App(props) {
  const [ searchInput, setSearchInput] = useState('');

  return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <div className="App-playlist">
            <div className="App-searchBar">
              <form>
                <input type="input" placeholder='Search for song' onKeyDown={event => {
                  if (event.key == 'Enter') {
                    console.log('Pressed enter');
                  }
                }}
                onChange={event => setSearchInput(event.target.value)}
                ></input>
              </form>
              <button onClick={event => {console.log('Clicked Button')}}>Search</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
