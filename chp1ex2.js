#!usr/env/node

//Hands on Node exercise pg 36
//Ex1: create a tick every 1 second in an event
var EventEmitter = require('events').EventEmitter,
    util         = require('util');

var Ticker = function() {
  var self = this;
  setInterval(function() {
    self.emit('tick');
    }, 1000);
};

//Ex2: inherit and bind to the tick event, print to screen 

util.inherits(Ticker, EventEmitter);  
var ticker= new Ticker();
ticker.on('tick', function() {
  console.log('TICK');
});
