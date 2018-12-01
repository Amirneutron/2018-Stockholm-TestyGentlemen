import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.send({
    status: 'running!'
  });
});

app.get('/platsdata', (req, res) => {
  axios
    .get(`http://api.arbetsformedlingen.se:80/af/v2/forecasts/occupationalArea/shortTerm/15`)
    .then(console.log);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
