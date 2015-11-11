var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
// var values = [1, 1024, 1058576, 1073741824, 1099511627776, 1125899906842624, 1152921504606846976, 1180591620717411303424       ];

function byteString(value) {

    for (var i = 0; i < units.length; i++) {
        if(value < 1024) {
            return value.toFixed(2) + ' ' + units[i];
        } else if (i === 8) {
            return value.toFixed(2) + ' ' + units[8];
        } else {
            value = value / 1024;
        }
    }
}

module.exports = byteString;
