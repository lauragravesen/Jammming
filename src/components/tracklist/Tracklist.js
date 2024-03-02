import styles from './Tracklist.module.css';
import Track from '../track/Track';

function Tracklist (props) {
    return (
    <div className={styles.TrackList}>
        {props.userSearchResults.map((track) => (
            <Track/>
        ))}
    </div>
    );
}

export default Tracklist;