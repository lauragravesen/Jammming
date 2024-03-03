import styles from './Tracklist.module.css';
import Track from '../track/Track';

function Tracklist (props) {
    return (
    <div className={styles.TrackList}>
        {props.userSearchResults.map((track) => (
            <Track track={track} key={track.id} isRemoved={props.isRemoved} onAdd={props.onAdd} onRemove={props.onRemove}/>
        ))}
    </div>
    );
}

export default Tracklist;