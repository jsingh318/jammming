const clientId = '8ef3fdcc4c6c43afbd06e5c66f163ebf';
const redirectUri = 'http://localhost:3000/'
let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        //check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if(accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        //This clears the parameters, allowing to grab new access token on expiration.
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
    } else {
        const accessUrl = `https://accounts.spotify.com/authorize?
                           client_id=${clientId}&response_type=token&
                           scope=playlist-modify-public&redirect_uri=${redirectUri}`
    }
    }
}

export default Spotify;