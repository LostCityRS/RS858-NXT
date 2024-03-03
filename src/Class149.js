export var Class149 = function () {
    var a = function (e, d, c, b, g) {
        this.member1328 = undefined;
        if (g !== undefined) {
            this.member1325 = g.member608();
            this.member745 = g.member608();
            this.member1337 = g.member609() === 1;
            this.member1338 = g.member609();
            this.member1328 = g.member1074();
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
        b.member1054(this.member1325);
        b.member1054(this.member745);
        b.member1051(this.member1337 ? 1 : 0);
        b.member1051(this.member1338);
        if (this.member1328 === undefined) {
            b.member1056(-1);
        } else {
            b.member1056(this.member1328);
        }
    };
    return function (e, d, c, b, g) {
        return new a(e, d, c, b, g);
    };
}();