#!

//Ex1: create a buffer of 100 bytes and fill bytes with values from 0 to 99. Print contents
var buf = new Buffer(100);
for (var i=0; i<buf.length; i++) {
  buf[i]=i;
}; 
console.log(buf);
 
//Ex2: Do previous, then slice buffer with bytes ranging 40 to 60 and print. 
var buf = new Buffer(100);
for (var i=0; i<buf.length; i++) {
  buf[i]=i;
};
var slice = new Buffer(20);
var targetStart = 0,
    sourceStart=40,
    sourceEnd=60;
buf.copy(slice, targetStart, sourceStart, sourceEnd);
console.log(slice);


