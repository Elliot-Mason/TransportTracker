require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/trains', async (req, res) => {
    try {
        const { name_origin, name_destination } = req.query;

        if (!name_origin || !name_destination) {
            return res.status(400).json({ error: 'Missing required query parameters: name_origin and name_destination' });
        }

        const now = new Date();
        const itdDate = now.toISOString().split('T')[0].replace(/-/g, ''); // Format: YYYYMMDD
        const itdTime = now.toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4); // Format: HHMM

        const response = await axios.get(
            'https://api.transport.nsw.gov.au/v1/tp/trip',
            {
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
                    cycleSpeed: 16
                }
            }
        );
        const trains = response.data.journeys.slice(0, 5);
        res.json(trains);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch train data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
