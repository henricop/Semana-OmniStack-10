const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);
app.use(express.json());
//Connecting with database

mongoose.connect('mongodb+srv://henrico:250697@omni-jz4wh.mongodb.net/week10?retryWrites=true&w=majority',{
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
//
app.use(cors());
app.use(routes);


server.listen(5555,()=>{
  console.log('Server is running on http://localhost:5555');
});