import styles from './Track.module.css';


function Track (props) {
  function renderAction() {
    return  (
    <button className="TrackAction">{props.isRemoved ? "-" : "+"}</button>
    );
  }
  return (
    <div className={styles.Track}>
    <div className={styles.TrackInformation}>
      <h3>{props.track.name}</h3>
      <p>{props.track.artist} | {props.track.album}</p>
    </div>
    <button className={styles.TrackAction}></button>
  </div>
  );
}

export default Track;