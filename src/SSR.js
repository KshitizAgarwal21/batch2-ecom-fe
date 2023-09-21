const express = require("express");

const app = express();

const React = require("react");

const ReactDomServer = require("react-dom/server");
const App = require("./App");

app.get("/", (req, res) => {
  const jsx = React.createElement(App);
  const html = ReactDomServer.renderToString(jsx);

  res.sendFile(html);
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("server started successfully");
});
