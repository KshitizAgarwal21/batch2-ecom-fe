import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import StaticRouter from "react-router-dom";
import App from "./src/App.js"; // Note the relative path to the App component

const server = express();

server.use(express.static("build"));

server.get("/*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Your SSR React App</title>
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="/static/js/bundle.js"></script>
      <script>
        // Hydrate the React app on the client side
        ReactDOM.hydrate(
          React.createElement(
            StaticRouter,
            { location: window.location.pathname, context: {} },
            React.createElement(App)
          ),
          document.getElementById('root')
        );
      </script>
    </body>
    </html>
  `;

  res.status(200).send(html);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
