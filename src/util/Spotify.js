let accessToken;
const clientID = "d13c3fff478c4d6185686f672a64ae44";
const redirectURI = "http://localhost:3000";
const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        const urlAccessToken = window.location.href.match(/access_token= ([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=( [^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            const expiresIn = Number(urlExpiresIn[1]);
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");
            return accessToken;
        } else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    },
    search(term)  {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: {Authorization: `bearer ${accessToken}`},
          })
          .then(response => response.json())
          .then(jsonResponse => {
            if (!jsonResponse) {
                console.log(error);
            }
            return jsonResponse.tracks.items.map((t) => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri,
            }))
          })
    },
};

export {Spotify};