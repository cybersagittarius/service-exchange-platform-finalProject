const express = require('express');
const http= require('http');
const io = require('socket.io')(http);

const chatController = async(req, res) => {

const STATIC_CHANNELS = [{
    name: 'Global Chat',
    participants: 0,
    id: 1,
    sockets: []
    }, {
    name: 'Funny',
    participants: 0,
    id: 1,
    sockets: []
    }];

await io.on('connection', (socket) => {
    console.log('new client connected');
    socket.emit('connected', null);
    socket.on('channel-join', id => {
        console.log('channel join', id);
        STATIC_CHANNELS.forEach(c => {
            if(c.id === id) {
                if(c.sockets.indexOf(socket.id) == (-1)) {
                    c.sockets.push(socket.id);
                    c.participants++;
                    io.emit('channel', c);
                }
            }else {
                let index = c.sockets.indexOf(socket.id);
                if(index!=(-1)) {
                    c.sockets.splice(index, 1);
                    c.participants--;
                    io.emit('channel', c);
                }
            }
        })

    return id;

    });

    socket.on('send-message', message => {
        io.emit('message', message);
});

    socket.on('diconnect', () => {
    STATIC_CHANNELS.forEach(c => {
        let index = c.sockets.indexOf(socket.id);
        if(index != (-1)) {
            c.sockets.splice(index, 1);
            c.participants--;
            io.emit('channel', c);
                }
            });
        })

        return res.json({
            channels: STATIC_CHANNELS
        })
    }) 
}

module.exports = chatController