import { Class421 } from 'Class421.js';
import { VarDomainType } from 'Class465.js';
import { BaseVarType } from 'Class462.js';
export var Class466 = function () {
    var a = function (b) {
        this.scriptID;
        this.member6150 = null;
        this.member7382 = null;
        this.member7383 = null;
        this.member7384 = null;
        this.member7385 = 0;
        this.member7386 = 0;
        this.member7387 = 0;
        this.member7388 = 0;
        this.member7389 = 0;
        this.member7390 = 0;
        this.member7391 = null;
        this.member7392 = this.load(b);
    };
    a.prototype.load = function (h) {
        var j = true;
        if (h.scriptID !== undefined && h.data !== undefined && h.member2970 !== undefined) {
            this.scriptID = h.scriptID;
            var x = h.data;
            var e = h.member2970;
            x.setPos(x.getSize() - 2);
            var q = x.g2();
            var r = x.getSize() - 2 - q - 16;
            x.setPos(r);
            var g = x.g4();
            this.member7385 = x.g2();
            this.member7386 = x.g2();
            this.member7387 = x.g2();
            this.member7388 = x.g2();
            this.member7389 = x.g2();
            this.member7390 = x.g2();
            var o = x.g1();
            if (o > 0) {
                this.member7391 = new Array(o);
                for (var v = 0; v < o; v++) {
                    var n = x.g2();
                    var s = {};
                    this.member7391[v] = s;
                    while (n-- > 0) {
                        var z = x.g4s();
                        var y = x.g4s();
                        s[z] = y;
                    }
                }
            }
            x.setPos(0);
            this.member6150 = x.gjstr();
            this.member7382 = new Array(g);
            var d = 0;
            while (x.getPos() < r) {
                var i = x.g2();
                if (i < 0 || i > Class421.member6096) {
                    throw new Error('873 ' + i + '873 ' + this.member6150);
                }
                var b = Class421.member6097[i];
                if (b === Class421.member4873 || b === Class421.member4874) {
                    var c = VarDomainType.getByID(x.g1());
                    if (c === null) {
                        throw new Error('874 ');
                    }
                    var u = x.g2();
                    if (this.member7384 === null) {
                        this.member7384 = new Array(g);
                    }
                    var m = e.getVarType(c, u);
                    if (m === NULL) {
                        j = false;
                    }
                    this.member7384[d] = m;
                    if (this.member7383 === null) {
                        this.member7383 = new Int32Array(g);
                    }
                    this.member7383[d] = x.g1();
                } else if (b === Class421.member4877) {
                    var t = BaseVarType.getByID(x.g1());
                    if (t === null) {
                        throw new Error('875 ');
                    }
                    if (t === BaseVarType.INTEGER) {
                        if (this.member7383 === null) {
                            this.member7383 = new Int32Array(g);
                        }
                        b = Class421.member4870;
                        this.member7383[d] = x.g4s();
                    } else if (t === BaseVarType.LONG) {
                        if (this.member7384 === null) {
                            this.member7384 = new Array(g);
                        }
                        b = Class421.member4897;
                        this.member7384[d] = x.g8();
                    } else if (t === BaseVarType.STRING) {
                        if (this.member7384 === null) {
                            this.member7384 = new Array(g);
                        }
                        this.member7384[d] = x.gjstr();
                    } else if (t === BaseVarType.COORDFINE) {
                        if (this.member7384 === null) {
                            this.member7384 = new Array(g);
                        }
                        throw new Error('876 ');
                    }
                } else if (b === Class421.member4875 || b === Class421.member4876) {
                    var u = x.g2();
                    if (this.member7384 === null) {
                        this.member7384 = new Array(g);
                    }
                    var k = e.getVarBitType(u);
                    if (k === NULL) {
                        j = false;
                    }
                    this.member7384[d] = k;
                    if (this.member7383 === null) {
                        this.member7383 = new Int32Array(g);
                    }
                    this.member7383[d] = x.g1();
                } else {
                    if (this.member7383 === null) {
                        this.member7383 = new Int32Array(g);
                    }
                    if (b.member4872) {
                        this.member7383[d] = x.g4s();
                    } else {
                        this.member7383[d] = x.g1();
                    }
                }
                if (b.member7395 !== undefined) {
                    b.member7395(d, this.member7383);
                }
                this.member7382[d] = b;
                d++;
            }
        } else {
            throw new Error('877 ');
        }
        return j;
    };
    a.prototype.member7396 = function () {
        return this.scriptID;
    };
    a.prototype.member6193 = function () {
        return this.member6150;
    };
    a.prototype.member7397 = function () {
        return this.member7382;
    };
    a.prototype.member7398 = function () {
        return this.member7383;
    };
    a.prototype.member7399 = function () {
        return this.member7384;
    };
    a.prototype.member7400 = function () {
        return this.member7385;
    };
    a.prototype.member7401 = function () {
        return this.member7386;
    };
    a.prototype.member7402 = function () {
        return this.member7387;
    };
    a.prototype.member7403 = function () {
        return this.member7388;
    };
    a.prototype.member7404 = function () {
        return this.member7389;
    };
    a.prototype.member7405 = function () {
        return this.member7390;
    };
    a.prototype.member7406 = function () {
        return this.member7391;
    };
    return function (b) {
        var c = new a(b);
        if (c.member7392) {
            return c;
        } else {
            return NULL;
        }
    };
}();