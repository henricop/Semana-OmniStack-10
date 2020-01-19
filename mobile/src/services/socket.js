import socketio from 'socket.io-client';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
const socket = socketio('http://192.168.1.2:5555',{
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
  socket.on('new-dev', subscribeFunction);
};

function connect(latitude,longitude,techs){
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };
  socket.connect();

}

function disconnect(){
  if(socket.connect){
    socket.disconnect();
  }
}

export{
  connect,
  disconnect,
  subscribeToNewDevs
};