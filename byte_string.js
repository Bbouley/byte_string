var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

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

function byteString2(value) {
    var factor = Math.pow(10, 2)
    var getUnit = [units[0]];
    var num =  Math.ceil(value / Math.pow(1024, 2) * factor) / factor;
    return num.toFixed(2) + ' ' + getUnit
}

console.log(byteString2(1022));
console.log(byteString2(1022932324));
console.log(byteString2(1022932123237));

module.exports = byteString;
