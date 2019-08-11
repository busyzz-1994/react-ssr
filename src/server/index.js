import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils';
const app = express();
app.use(express.static('public'));
app.use(
  '/api',
  proxy('https://www.easy-mock.com', {
    proxyReqPathResolver: function(req) {
      return `/mock/5cc45d471c5cf260d33ed6ec/api${req.url}`;
    },
  })
);
app.get('*', (req, res) => {
  if (req.url === '/favicon') res.send('');
  render(req, res);
});
app.listen(8888);
