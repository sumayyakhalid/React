import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.js'; // Make sure to update the path to your App.js
import { StaticRouter } from 'react-router-dom/server';

const app = express();

// Serve static files (e.g., JS and CSS files generated from React build)
app.use(express.static('public'));

// The server-side rendering function
app.get('*', (req, res) => {
  // Use StaticRouter for routing support on the server side
  const context = {};

  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // Send the fully rendered HTML back to the client
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

// Start the Express server
app.listen(3001, () => {
  console.log('SSR App is running on http://localhost:3001');
});
