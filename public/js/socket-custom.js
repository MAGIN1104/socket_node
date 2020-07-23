var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor.')
});

//listen
socket.on('disconnect',function(){
    console.log('Se perdio la conexion con el servidor');
});

//Send Info
socket.emit('enviarMensaje',{
    usuario: 'Magin',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Respuesta server: ',resp)
});

//listen
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje) ;
});