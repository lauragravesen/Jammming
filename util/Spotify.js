const accessToken = "";
const clientID = "d13c3fff478c4d6185686f672a64ae44";
const redirectURI = "http://localhost:3000/";
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
        } else {
            
        }
    }
}

export {Spotify};