export var Class176 = function () {
    var k = 0;
    var g = 1;
    var c = 2;
    var i = 0;
    var m = 1;
    var h = 2;
    var j = 0;
    var b = 1;
    var n = 0;
    var e = 1;
    var d = function (o) {
        this.member625;
        this.type;
        this.member1946;
        this.member1740;
        this.member1947 = new Array(3);
        this.member1948;
        this.member1949;
        this.member1950 = j;
        this.member1951 = n;
        this.member1952 = false;
        if (o !== undefined) {
            a.call(this, o);
        } else {
            throw new Error('871 ');
        }
    };
    var a = function (q) {
        while (true) {
            var o = q.g1();
            if (o === 0) {
                break;
            } else if (o === 1) {
                this.member1946 = q.g2();
            } else if (o === 2) {
                this.member1740 = q.g1();
            } else if (o === 3) {
                this.member1947[0] = q.g4s();
                this.member1947[1] = q.g4s();
                this.member1947[2] = q.g4s();
            } else if (o === 4) {
                this.member1948 = q.g1();
                this.member1949 = q.g4s();
            } else if (o === 6) {
                this.type = q.g1();
            } else if (o === 8) {
                this.member1950 = b;
            } else if (o === 9) {
                this.member1951 = e;
            } else if (o === 10) {
                this.member1952 = true;
            } else {
                throw new Error('872 ' + type);
            }
        }
    };
    d.prototype.member1953 = function () {
        return this.member1947;
    };
    d.prototype.member1954 = function () {
        return this.member1950;
    };
    return function (o) {
        return new d(o);
    };
}();