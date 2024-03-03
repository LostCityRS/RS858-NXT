import { Class122 } from 'Class122.js';
export var Class550 = function () {
    var a = function (c, b) {
        this.member2896;
        this.member625 = -1;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.member2896 = b;
        } else {
            throw new Error('1370 ');
        }
        this.member8736;
        this.member8737;
        this.member8738;
        this.member8739;
        this.member8740;
        this.member8741 = false;
    };
    a.prototype.member8742 = function () {
        return this.member8736;
    };
    a.prototype.member8743 = function (b) {
        if (this.member8737 === undefined) {
            return -1;
        }
        return this.member8737[b];
    };
    a.prototype.member8744 = function (c) {
        if (this.member8737 === undefined) {
            return -1;
        }
        for (var b = 0; b < this.member8737.length; b++) {
            if (this.member8738[b] === c) {
                return this.member8737[b];
            }
        }
        return -1;
    };
    a.prototype.member8584 = function (b) {
        if (this.member8739 === undefined) {
            return -1;
        }
        return this.member8739[b];
    };
    a.prototype.member8745 = function (c) {
        if (this.member8739 === undefined) {
            return -1;
        }
        for (var b = 0; b < this.member8739.length; b++) {
            if (this.member8740[b] === c) {
                return this.member8739[b];
            }
        }
        return -1;
    };
    a.prototype.member8746 = function () {
        return this.member8741;
    };
    a.prototype.member8747 = function () {
        if (this.member8739 === undefined) {
            return 0;
        }
        return this.member8739.length;
    };
    a.prototype.member8748 = function () {
        if (this.member8737 === undefined) {
            return 0;
        }
        return this.member8737.length;
    };
    a.prototype.member8749 = function (b) {
        if (this.member8738 === undefined) {
            return -1;
        }
        return this.member8738[b];
    };
    a.prototype.member8750 = function (b) {
        if (this.member8740 === undefined) {
            return -1;
        }
        return this.member8740[b];
    };
    a.prototype.decode = function (c) {
        while (true) {
            var b = c.member609();
            if (b === undefined) {
                throw new Error('1371 ');
                break;
            }
            if (b === 0) {
                break;
            }
            this.member2932(c, b);
        }
    };
    a.prototype.member2932 = function (g, e) {
        if (e === 1) {
            this.member8736 = g.member1089();
        } else if (e === 2) {
            var d = g.member609();
            this.member8737 = new Uint16Array(d);
            this.member8738 = new Uint16Array(d);
            for (var c = 0; c < d; c++) {
                this.member8737[c] = g.member608();
                var b = g.member1070();
                this.member8738[c] = b === 0 ? 0 : Class122.member1036(b);
            }
        } else if (e === 3) {
            var d = g.member609();
            this.member8739 = new Uint16Array(d);
            this.member8740 = new Uint16Array(d);
            for (var c = 0; c < d; c++) {
                this.member8739[c] = g.member608();
                var b = g.member1070();
                this.member8740[c] = b === 0 ? 0 : Class122.member1036(b);
            }
        } else if (e === 4) {
            this.member8741 = true;
        } else if (false) {
        }
    };
    a.prototype.member2934 = function () {
        var c = this.member2896.member8729();
        if (this.member625 > c) {
            if (member8739 !== undefined) {
                for (var b = 0; b < member8739.length; b++) {
                    member8739[b] += c;
                }
            }
            if (member8737 !== undefined) {
                for (var b = 0; b < member8737.length; b++) {
                    member8737[b] += c;
                }
            }
        }
    };
    return function (c, b) {
        return new a(c, b);
    };
}();