import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist';

function Playlist (props) {
  function handleNameChange({target}) {
    props.onNameChange(target.value);
  }
 return (
<div className={styles.Playlist}>
  <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
  <Tracklist userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoved={true}/>
  <button className={styles.PlaylistSave} onClick={props.onSave}>SAVE TO SPOTIFY</button>
</div>
 );
}

export default Playlist;