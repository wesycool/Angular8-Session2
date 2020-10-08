function log(message, userId) {
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded'); //Logs "12 PM Page loaded Not signed in"
log('User signed in', 'da763be'); // logs User signed in da763b3
