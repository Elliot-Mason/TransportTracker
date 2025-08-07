
# NSW Transport GTFS React

This project displays real-time NSW train departure information using data from the Transport for NSW API, visualized in a React frontend. It combines a Node.js backend to fetch GTFS-realtime data with a searchable React interface for users to view live departures.

## Features

- Live train departures for NSW trains
- Searchable station and route interface using Fuse.js
- Express backend to handle API requests securely
- Configurable via .env file
- React-based frontend with React Router support

## Tech Stack

- **Frontend**: React 19, React Router DOM 7
- **Backend**: Express, Axios, GTFS (Node.js)
- **Other**: Fuse.js for fuzzy searching, dotenv for configuration

## Prerequisites

- Node.js >= 16.x
- NPM >= 8.x
- A valid Transport for NSW API key

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Elliot-Mason/TransportTracker.git
cd nsw-transport-gtfs-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a file called `.env` in the root of the project with the following contents:

```env
TFNSW_API_KEY=your_api_key_here
```

### 4. Run the project

```bash
npm start
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start`: Starts the development server
- `npm build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm eject`: Ejects from Create React App

## Project Structure

```
.
├── public/             # Static assets
├── src/                # React app source code
│   ├── components/     # React components
│   ├── api/            # Axios and Express integration
│   └── App.js          # Main app file
├── server/             # Express server files (if applicable)
├── .env                # API keys and configuration
├── package.json        # Project metadata and dependencies
└── README.md           # This file
```

## Notes

- This app is designed to work with GTFS-realtime feeds.
- Make sure your API key is valid and that you respect rate limits from TfNSW.

## License

MIT
