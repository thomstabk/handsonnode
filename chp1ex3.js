#!usr/env/node

// Hands on node book - exercises on page 45
// Ex 1 print the size of a.txt file to screen
var fs = require('fs');

fs.stat('a.txt', function(err, stats) {
  if (err) {throw err; return;}
  console.log('Size of file ' + stats.size + ' bytes'); 
});


// Ex 2 print bytes 10 to 14 of file
fs.open('a.txt', 'r', function(err, fd) {
  if (err) {throw err}
  var readBuffer = new Buffer(1024, 'ascii');

  fs.read(fd, readBuffer, 10, 4, 0, function(err, readBytes, reading) {
    if (err) {throw err;}
    console.log('Success reading in '+ readBytes + ' bytes');
    console.log('Read in: ' + reading);
  });
}); 

// Ex 3 read in bytes 5 to 9 and when done 10 to 14

fs.open('a.txt', 'r', function(err, fd) {
  if (err) {throw err;}
  function readinfunc(startingAt, byteCount, callback) {
    var buffer = new Buffer(byteCount);
    var i = 0;
    (function readit() {
      fs.read(fd, buffer, i, buffer.length-i, startingAt-i, function(err, bytesRead) {  
        if (err) {throw err;}
        i += bytesRead;
        if (i == buffer.length) { callback(buffer); }
        else { readit(); }
      });
    })();
  }
});

       
readinfunc(5, 4, function(buffer1) {
  console.log(buffer1);
//  readinfunc(10, 4, function(buffer2) {
//    console.log(buffer2)
//  });
});


/*
fs.open('a.txt', 'r', function(err, fd) {
  if (err) {throw err}
  var readBuffer = new Buffer(1024),
      bufferOffset = 0,
      bufferLength = readBuffer.length,
      filePosition = 0;

  fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes) {
    if (err) {throw err;}
    console.log('just read ' + readBytes + ' bytes');
    if (readBytes > 0 ) {
      console.log(readBuffer.slice(0, readBytes));
    }
  });
});
*/
