import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist';

function Playlist () {
 return (
<div className={styles.Playlist}>
  <input defaultValue={"New Playlist"}/>
  <Tracklist/>
  <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
</div>
 );
}

export default Playlist;