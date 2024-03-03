export var Class149 = function () {
    var a = function (e, d, c, b, g) {
        this.member1328 = undefined;
        if (g !== undefined) {
            this.member1325 = g.g2();
            this.member745 = g.g2();
            this.member1337 = g.g1() === 1;
            this.member1338 = g.g1();
            this.member1328 = g.g4s();
        } else {
            this.member1325 = e;
            this.member745 = d;
            this.member1337 = c;
            this.member1338 = b;
        }
    };
    a.prototype.member1329 = function (b) {
        this.member1328 = b;
    };
    a.prototype.member1318 = function (b) {
        b.p2(this.member1325);
        b.p2(this.member745);
        b.p1(this.member1337 ? 1 : 0);
        b.p1(this.member1338);
        if (this.member1328 === undefined) {
            b.p4(-1);
        } else {
            b.p4(this.member1328);
        }
    };
    return function (e, d, c, b, g) {
        return new a(e, d, c, b, g);
    };
}();