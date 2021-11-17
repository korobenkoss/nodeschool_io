Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

let date = new Date();

let timestamp = `${date.getFullYear()}-${(date.getMonth() + 1).pad(2)}-${date.getDate().pad(2)} ${date.getHours()}:${date.getMinutes()}`;

console.log(timestamp);