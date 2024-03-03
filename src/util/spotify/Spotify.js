let accessToken;
const clientID = "d13c3fff478c4d6185686f672a64ae44";
const redirectUrl = "http://localhost:3001/jammming";
const Spotify = {
    getAccessToken() {
        // Check if we already have an access token
        if (accessToken) return accessToken;
    
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
    
        // Fetching the access token
        if (tokenInURL && expiryTime) {
          // setting access token and expiry time variables
          accessToken = tokenInURL[1];
          const expiresIn = Number(expiryTime[1]);
    
          // Setting the access token to expire at the value for expiration time
          window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
          // clearing the url after the access token expires
          window.history.pushState("Access token", null, "/");
          return accessToken;
        }
    
        // If we got the access token, we will be redirected to spotify
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
      },
    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}`},
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            if (!jsonResponse) {
              console.error("Response error");
            }
            console.log(accessToken);
            return jsonResponse.tracks.items.map((t) => ({
              id: t.id,
              name: t.name,
              artist: t.artists[0].name,
              album: t.album.name,
              uri: t.uri,
            }));
          });
      },
    savePlaylist(name, trackUris){
        if(!name || !trackUris) return;
        const newAccessToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${newAccessToken}`};
        let userID;
        return fetch(`https://api.spotify.com/v1/me`, {headers: header})
        .then((response) => response.json())
        .then((jsonResponse) => {
            userID = jsonResponse.id;
            let playlistID;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
                headers: header,
                method: "POST",
                body: JSON.stringify({name: name}),
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,{
                    headers: header,
                    method: "POST",
                    body: JSON.stringify({uris: trackUris}),
                })
            });
        });
    }
};

export { Spotify };