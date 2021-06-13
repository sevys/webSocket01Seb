prompt("entrando al script");
console.log("soy sebastian entrando al socket.js");

let websocket = new WebSocket('wss://echo.websocket.org');

websocket.onopen=(e)=>{
  console.log('ya me conecte al servidor ');

  websocket.send("mensaje desde la maquina");
}

websocket.onmessage=(e)=>{
    console.log("recibiendo mensaje del servidor: ", e.data);
websocket.close(3000);
}

websocket.onclose=(e)=>{
    console.log('cerrando el servidor');
}