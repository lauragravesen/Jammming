import { useState } from 'react';
import styles from './App.module.css';
import SearchResults from '../search_results/SearchResults';


function App() {
  const [searchResults, setSearchResults] = useState([
    {
    name: "track name 1",
    artist: "artist name 1",
    album: "album name 1",
    id: 1,
  },
  {
    name: "track name 2",
    artist: "artist name 2",
    album: "album name 2",
    id: 2,
  },
  {
    name: "track name 3",
    artist: "artist name 3",
    album: "album name 3",
    id: 2,
  }
]);
return (
    <div>
    <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
    <div className={styles.App}>
      <div className={styles.AppPlaylist}>
        <SearchResults userSearchResults={searchResults}/>
      </div>
    </div>
  </div>
  );
}

export default App;
