const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.listen(process.env.PORT || 3001, () => {
    console.log('App is ready to load');
});