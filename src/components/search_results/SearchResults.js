import styles from './SearchResults.module.css';
import TrackList from '../tracklist/Tracklist';

function SearchResults (props) {
    return (
    <div className={styles.SearchResults}>
        <h2>Results</h2>
        <TrackList 
        userSearchResults={props.userSearchResults} 
        isRemoved={false} 
        onAdd={props.onAdd}/>
    </div>
    );
}

export default SearchResults;