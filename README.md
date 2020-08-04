<p align="center">
  <img src="screenshot.png" alt="SpotiBrowser running on a smart phone, tablet and laptop" width="600" align="center" />
</p>

<h1 align="center">
  SpotiBrowser
  
  [![Netlify Status](https://api.netlify.com/api/v1/badges/70fa95c0-60ff-4894-b154-6724da1e7fe4/deploy-status)](https://app.netlify.com/sites/spotibrowser/deploys)
  
</h1>

This app will allow you to browse and filter the featured playlists on Spotify.

If you have the Spotify app installed in your computer, clicking a playlist will open it in your app.

The playlists will be updated every 30 seconds so you don't miss any new tunes on the playlists by Spotify.

## Running the service

Create an `.env` file to setup the necessary environment variables.

You can use the following as a base to yours:

```
REACT_APP_SPOTIFY_API_URL=https://api.spotify.com/v1/browse/featured-playlists
REACT_APP_AUTH_API_URL=https://accounts.spotify.com/authorize
REACT_APP_CLIENT_ID=
REACT_APP_URL=
```

You should probably not need to change the Spotify API URLs, just add you client ID (which you can get on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/login)) and your app URL.

If you're running locally, it's likely that your app URL will be http://localhost:3000. Either way, make sure to configure this URL as a callback URL on the Spotify App in the Developer Dashboard.

### Commands

This project uses `npm`, so here are the most common commands you would use:

#### Start your application: `npm start`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

#### Run tests: `npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

#### Run build: `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

## Enhancements and new features

You can watch for new features and enhancements on the [Kanban](https://github.com/yagoag/spotify-featured-browser/projects/1) of the project.
