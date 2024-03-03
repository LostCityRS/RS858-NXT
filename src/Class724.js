export var Class724 = function () {
    var g = 1 << 0;
    var s = 1 << 1;
    var i = 1 << 2;
    var n = 1 << 3;
    var b = 1 << 4;
    var r = 1 << 5;
    var e = 1 << 6;
    var t = 1 << 7;
    var d = 1 << 8;
    var a = 1 << 9;
    var x = 1 << 10;
    var m = 1 << 11;
    var u = 1 << 12;
    var y = 1 << 13;
    var k = 1 << 14;
    var j = 1 << 15;
    var h = 1 << 16;
    var c = 1 << 17;
    var o = 1 << 18;
    var v = 1 << 19;
    var q = function (A, H, D, E, B, G, C, F, z) {
        this.member2506 = A;
        this.location = H;
        this.flags = D;
        this.member10063 = E;
        this.member10064 = B;
        this.member10065 = G;
        this.activity = C;
        this.member10066 = F;
        this.member10067 = z;
    };
    q.prototype.member4596 = function () {
        return this.member2506;
    };
    q.prototype.member10068 = function () {
        return this.location;
    };
    q.prototype.member304 = function () {
        return this.flags;
    };
    q.prototype.member10069 = function () {
        return this.member10063;
    };
    q.prototype.member10070 = function () {
        return this.member10064;
    };
    q.prototype.member9663 = function () {
        return this.member10065;
    };
    q.prototype.member9654 = function () {
        return this.activity;
    };
    q.prototype.member9659 = function () {
        return this.member10066;
    };
    q.prototype.member9657 = function () {
        return this.member10067;
    };
    q.prototype.member9658 = function () {
        return -1;
    };
    q.prototype.member10071 = function (z) {
        this.member10067 = z;
    };
    q.prototype.member9655 = function () {
        if (this.member10063 !== 0) {
            return this.member10063;
        }
        return this.member10068().member3702;
    };
    q.prototype.member9656 = function () {
        if (this.member10063 !== 0) {
            return this.member10064;
        }
        return this.member10068().member7233;
    };
    q.prototype.member9584 = function () {
        return (this.flags & g) != 0;
    };
    q.prototype.member10072 = function () {
        return (this.flags & s) != 0;
    };
    q.prototype.member10073 = function () {
        return (this.flags & i) != 0;
    };
    q.prototype.member10074 = function () {
        return (this.flags & n) != 0;
    };
    q.prototype.member10075 = function () {
        return (this.flags & b) != 0;
    };
    q.prototype.member10076 = function () {
        return (this.flags & r) != 0;
    };
    q.prototype.member10077 = function () {
        return (this.flags & e) != 0;
    };
    q.prototype.member10078 = function () {
        return (this.flags & d) != 0;
    };
    q.prototype.member10079 = function () {
        return (this.flags & a) != 0;
    };
    q.prototype.member10080 = function () {
        return (this.flags & x) != 0;
    };
    q.prototype.member10081 = function () {
        return (this.flags & m) != 0;
    };
    q.prototype.member10082 = function () {
        return (this.flags & u) != 0;
    };
    q.prototype.member10083 = function () {
        return (this.flags & y) != 0;
    };
    q.prototype.member10084 = function () {
        return (this.flags & k) != 0;
    };
    q.prototype.member10085 = function () {
        return (this.flags & j) != 0;
    };
    q.prototype.member10086 = function () {
        return (this.flags & h) != 0;
    };
    q.prototype.member10087 = function () {
        return (this.flags & c) != 0;
    };
    q.prototype.member10088 = function () {
        return (this.flags & o) != 0;
    };
    q.prototype.member10089 = function () {
        return (this.flags & v) != 0;
    };
    return function (A, H, D, E, B, G, C, F, z) {
        return new q(A, H, D, E, B, G, C, F, z);
    };
}();