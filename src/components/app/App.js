import { useState } from 'react';
import styles from './App.module.css';
import SearchResults from '../search_results/SearchResults';
import Playlist from '../playlist/Playlist';
import SearchBar from '../search_bar/SearchBar';
import { Spotify } from '../../util/Spotify';

function App(props) {
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
      id: 3,
    }
  ]);
  const [playlistName, setPlaylistName] = useState("Example playlist name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example | Name 1",
      artist: "Example | Artist 1",
      album: "Example | Album 1",
      id: 1,
    },
    {
      name: "Example | Name 2",
      artist: "Example | Artist 2",
      album: "Example | Album 2",
      id: 2,
    },
    {
      name: "Example | Name 3",
      artist: "Example | Artist 3",
      album: "Example | Album 3",
      id: 3,
    },
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylist(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
  }

  function search(term) {
    Spotify.search(term).then((result) => searchResults(result));
    console.log(term);
  }

  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles.AppPlaylist}>
          <SearchResults 
          userSearchResults={searchResults} 
          onAdd={addTrack} />
          <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylist} 
          onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
