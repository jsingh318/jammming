Jammming

OBJECTIVE

To give users the ability to update all of their Spotify playlists and save them to Spotify.

BACKGROUND

Jammming supports the ability to create one new playlist at a time and save it to Spotify. However, updating an existing playlist is not supported. With over 5 million playlists created or edited daily on Spotify, this is key functionality to support.
    
TECHNICAL DESIGN

Retrieve and Display Playlists
A new component, PlaylistList, should be created. This component, on render, will retrieve a list of the current user's playlists.
We will need to initialize state for PlaylistList to contain a key for playlists that defaults to an empty array.

CAVEATS

App Playlist State
Asynchronous Existing Playlist Save Requests
Excess Playlist Saves
