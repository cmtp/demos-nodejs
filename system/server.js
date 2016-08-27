const os = require('os');

console.log( 'System: ' + os.platform() );
console.log(os.arch());
console.log( 'TotalMem: ' + os.totalmem()/1024 );
console.log( 'FreeMem: ' + os.freemem()/1024 );
