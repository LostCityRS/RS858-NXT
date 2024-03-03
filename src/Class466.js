import { Class421 } from 'Class421.js';
import { Class465 } from 'Class465.js';
import { Class462 } from 'Class462.js';
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
            x.member607(x.getSize() - 2);
            var q = x.member608();
            var r = x.getSize() - 2 - q - 16;
            x.member607(r);
            var g = x.member1073();
            this.member7385 = x.member608();
            this.member7386 = x.member608();
            this.member7387 = x.member608();
            this.member7388 = x.member608();
            this.member7389 = x.member608();
            this.member7390 = x.member608();
            var o = x.member609();
            if (o > 0) {
                this.member7391 = new Array(o);
                for (var v = 0; v < o; v++) {
                    var n = x.member608();
                    var s = {};
                    this.member7391[v] = s;
                    while (n-- > 0) {
                        var z = x.member1074();
                        var y = x.member1074();
                        s[z] = y;
                    }
                }
            }
            x.member607(0);
            this.member6150 = x.member1089();
            this.member7382 = new Array(g);
            var d = 0;
            while (x.member1047() < r) {
                var i = x.member608();
                if (i < 0 || i > Class421.member6096) {
                    throw new Error('873 ' + i + '873 ' + this.member6150);
                }
                var b = Class421.member6097[i];
                if (b === Class421.member4873 || b === Class421.member4874) {
                    var c = Class465.getByID(x.member609());
                    if (c === null) {
                        throw new Error('874 ');
                    }
                    var u = x.member608();
                    if (this.member7384 === null) {
                        this.member7384 = new Array(g);
                    }
                    var m = e.member7393(c, u);
                    if (m === member47) {
                        j = false;
                    }
                    this.member7384[d] = m;
                    if (this.member7383 === null) {
                        this.member7383 = new Int32Array(g);
                    }
                    this.member7383[d] = x.member609();
                } else if (b === Class421.member4877) {
                    var t = Class462.getByID(x.member609());
                    if (t === null) {
                        throw new Error('875 ');
                    }
                    if (t === Class462.member7281) {
                        if (this.member7383 === null) {
                            this.member7383 = new Int32Array(g);
                        }
                        b = Class421.member4870;
                        this.member7383[d] = x.member1074();
                    } else if (t === Class462.member7282) {
                        if (this.member7384 === null) {
                            this.member7384 = new Array(g);
                        }
                        b = Class421.member4897;
                        this.member7384[d] = x.member1077();
                    } else if (t === Class462.member7283) {
                        if (this.member7384 === null) {
                            this.member7384 = new Array(g);
                        }
                        this.member7384[d] = x.member1089();
                    } else if (t === Class462.member7284) {
                        if (this.member7384 === null) {
                            this.member7384 = new Array(g);
                        }
                        throw new Error('876 ');
                    }
                } else if (b === Class421.member4875 || b === Class421.member4876) {
                    var u = x.member608();
                    if (this.member7384 === null) {
                        this.member7384 = new Array(g);
                    }
                    var k = e.member7394(u);
                    if (k === member47) {
                        j = false;
                    }
                    this.member7384[d] = k;
                    if (this.member7383 === null) {
                        this.member7383 = new Int32Array(g);
                    }
                    this.member7383[d] = x.member609();
                } else {
                    if (this.member7383 === null) {
                        this.member7383 = new Int32Array(g);
                    }
                    if (b.member4872) {
                        this.member7383[d] = x.member1074();
                    } else {
                        this.member7383[d] = x.member609();
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
            return member47;
        }
    };
}();