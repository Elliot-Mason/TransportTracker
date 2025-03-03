require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// API endpoint to fetch train data
app.get('/api/trains', async (req, res) => {
    try {
        const { name_origin, name_destination } = req.query;

        if (!name_origin || !name_destination) {
            return res.status(400).json({ error: 'Missing required query parameters: name_origin and name_destination' });
        }

        const now = new Date();
        const itdDate = now.toISOString().split('T')[0].replace(/-/g, ''); // Format: YYYYMMDD
        const itdTime = now.toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4); // Format: HHMM

        const requestConfig = {
            headers: { 'Authorization': `apikey ${process.env.API_KEY}` },
            params: {
                outputFormat: 'rapidJSON',
                coordOutputFormat: 'EPSG:4326',
                depArrMacro: 'dep',
                itdDate: itdDate,
                itdTime: itdTime,
                type_origin: 'any',
                name_origin: name_origin,
                type_destination: 'any',
                name_destination: name_destination,
                calcNumberOfTrips: 6,
                TfNSWTR: true,
                version: '10.2.1.42',
                itOptionsActive: 1,
                cycleSpeed: 16,
                excludedMeans: 'checkbox',
                exclMOT_2:1,
                exclMOT_4:1,
                exclMOT_5:1,
                exclMOT_7:1,
                exclMOT_9:1,
                exclMOT_11:1
            }
        };
        const response = await axios.get('https://api.transport.nsw.gov.au/v1/tp/trip', requestConfig);
        const trains = response.data.journeys.slice(0, 5);
        res.json(trains);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch train data' });
    }
});

// API endpoint to fetch ferry data
app.get('/api/ferries', async (req, res) => {
    try {
        const { name_origin, name_destination } = req.query;

        if (!name_origin || !name_destination) {
            return res.status(400).json({ error: 'Missing required query parameters: name_origin and name_destination' });
        }

        const now = new Date();
        const itdDate = now.toISOString().split('T')[0].replace(/-/g, ''); // Format: YYYYMMDD
        const itdTime = now.toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4); // Format: HHMM

        const requestConfig = {
            headers: { 'Authorization': `apikey ${process.env.API_KEY}` },
            params: {
                outputFormat: 'rapidJSON',
                coordOutputFormat: 'EPSG:4326',
                depArrMacro: 'dep',
                itdDate: itdDate,
                itdTime: itdTime,
                type_origin: 'any',
                name_origin: name_origin,
                type_destination: 'any',
                name_destination: name_destination,
                calcNumberOfTrips: 6,
                TfNSWTR: true,
                version: '10.2.1.42',
                itOptionsActive: 1,
                cycleSpeed: 16,
                excludedMeans: 'checkbox',
                exclMOT_1:1,
                exclMOT_2:1,
                exclMOT_4:1,
                exclMOT_5:1,
                exclMOT_7:1,
                exclMOT_11:1
            }
        };
        const response = await axios.get('https://api.transport.nsw.gov.au/v1/tp/trip', requestConfig);
        const ferries = response.data.journeys.slice(0, 5);
        res.json(ferries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch ferry data' });
    }
});

// API endpoint to fetch lightrail data
app.get('/api/lightrail', async (req, res) => {
    try {
        const { name_origin, name_destination } = req.query;

        if (!name_origin || !name_destination) {
            return res.status(400).json({ error: 'Missing required query parameters: name_origin and name_destination' });
        }

        const now = new Date();
        const itdDate = now.toISOString().split('T')[0].replace(/-/g, ''); // Format: YYYYMMDD
        const itdTime = now.toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4); // Format: HHMM

        const requestConfig = {
            headers: { 'Authorization': `apikey ${process.env.API_KEY}` },
            params: {
                outputFormat: 'rapidJSON',
                coordOutputFormat: 'EPSG:4326',
                depArrMacro: 'dep',
                itdDate: itdDate,
                itdTime: itdTime,
                type_origin: 'any',
                name_origin: name_origin,
                type_destination: 'any',
                name_destination: name_destination,
                calcNumberOfTrips: 6,
                TfNSWTR: true,
                version: '10.2.1.42',
                itOptionsActive: 1,
                cycleSpeed: 16,
                excludedMeans: 'checkbox',
                exclMOT_1:1,
                exclMOT_2:1,
                exclMOT_4:0,
                exclMOT_5:1,
                exclMOT_7:1,
                exclMOT_9:1,
                exclMOT_11:1
            }
        };
        const response = await axios.get('https://api.transport.nsw.gov.au/v1/tp/trip', requestConfig);
        const lightrail = response.data.journeys.slice(0, 5);
        res.json(lightrail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch lightrail data' });
    }
});

// API endpoint to fetch metro data
app.get('/api/metro', async (req, res) => {
    try {
        const { name_origin, name_destination } = req.query;

        if (!name_origin || !name_destination) {
            return res.status(400).json({ error: 'Missing required query parameters: name_origin and name_destination' });
        }

        const now = new Date();
        const itdDate = now.toISOString().split('T')[0].replace(/-/g, ''); // Format: YYYYMMDD
        const itdTime = now.toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4); // Format: HHMM

        const requestConfig = {
            headers: { 'Authorization': `apikey ${process.env.API_KEY}` },
            params: {
                outputFormat: 'rapidJSON',
                coordOutputFormat: 'EPSG:4326',
                depArrMacro: 'dep',
                itdDate: itdDate,
                itdTime: itdTime,
                type_origin: 'any',
                name_origin: 10101100,
                type_destination: 'any',
                name_destination: 10101117,
                calcNumberOfTrips: 6,
                TfNSWTR: true,
                version: '10.2.1.42',
                itOptionsActive: 1,
                cycleSpeed: 16,
                excludedMeans: 'checkbox',
                exclMOT_1:1,
                exclMOT_2:0,
                exclMOT_4:1,
                exclMOT_5:1,
                exclMOT_7:1,
                exclMOT_9:1,
                exclMOT_11:1
            }
        };
        const response = await axios.get('https://api.transport.nsw.gov.au/v1/tp/trip', requestConfig);
        const metro = response.data.journeys.slice(0, 5);
        console.log("metro data" + metro);
        res.json(metro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch metro data' });
    }
});



