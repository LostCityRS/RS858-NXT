import { Class547 } from 'Class547.js';
export var QuickChatPhraseType = function () {
    var a = '...';
    var b = function (d, c) {
        this.myList;
        this.member625 = -1;
        if (d !== undefined && c !== undefined) {
            this.member625 = d;
            this.myList = c;
        } else {
            throw new Error('1410 ');
        }
        this.text;
        this.member8719;
        this.member8720;
        this.member8721;
        this.member8722 = true;
    };
    b.prototype.getID = function () {
        return this.member625;
    };
    b.prototype.member3637 = function () {
        return this.text;
    };
    b.prototype.member8723 = function () {
        return this.member8722;
    };
    b.prototype.member8724 = function () {
        if (this.member8719 === undefined) {
            return 0;
        }
        return this.member8719.length;
    };
    b.prototype.member8725 = function (c) {
        if (this.member8719 === undefined || c < 0 || c >= this.member8719.length) {
            return undefined;
        }
        return Class547.member8718(this.member8719[c]);
    };
    b.prototype.member8726 = function (d, c) {
        if (this.member8719 === undefined || d < 0 || d >= this.member8719.length) {
            return -1;
        }
        if (this.member8720 === undefined || c < 0 || c >= this.member8720.length) {
            return -1;
        }
        return this.member8720[d][c];
    };
    b.prototype.member8727 = function (c) {
        if (this.member8721 === undefined || c < 0 || c >= this.member8721.length) {
            return -1;
        }
        return this.member8721[c];
    };
    b.prototype.member8728 = function () {
        if (this.member8721 === undefined) {
            return 0;
        }
        return this.member8721.length;
    };
    b.prototype.decode = function (d) {
        while (true) {
            var c = d.g1();
            if (c === undefined) {
                throw new Error('1411 ');
                break;
            }
            if (c === 0) {
                break;
            }
            this.decodeNext(d, c);
        }
    };
    b.prototype.decodeNext = function (k, g) {
        if (g === 1) {
            this.text = k.gjstr().split('<');
        } else if (g === 2) {
            var h = k.g1();
            this.member8721 = new Uint16Array(h);
            for (var d = 0; d < h; d++) {
                this.member8721[d] = k.g2();
            }
        } else if (g === 3) {
            var h = k.g1();
            this.member8719 = new Uint16Array(h);
            this.member8720 = new Array(h);
            for (var d = 0; d < h; d++) {
                var c = k.g2();
                var i = Class547.member8718(c);
                if (i !== undefined) {
                    this.member8719[d] = c;
                    this.member8720[d] = new Uint16Array(i.member8704);
                    for (var e = 0; e < i.member8704; e++) {
                        this.member8720[d][e] = k.g2();
                    }
                } else if (false) {
                }
            }
        } else if (g === 4) {
            this.member8722 = false;
        } else if (false) {
        }
    };
    b.prototype.postDecode = function () {
        if (this.member8721 === undefined) {
            return;
        }
        var d = this.myList.member8729();
        if (this.member625 > d) {
            for (var c = 0; c < this.member8721.length; c++) {
                this.member8721[c] += d;
            }
        }
    };
    b.prototype.member3637 = function (e) {
        var d = '';
        if (this.member8719 !== undefined) {
            for (var c = 0; c < this.member8719.length; c++) {
                d += this.text[c];
                d += this.myList.member8730(this.member8725(c), this.member8720[c], e.member1087(Class547.member8718(this.member8719[c]).member8703));
            }
        }
        d += this.text[this.text.length - 1];
        return d;
    };
    b.prototype.member8731 = function () {
        if (this.text === undefined) {
            return '';
        }
        var d = this.text[0];
        for (var c = 1; c < this.text.length; c++) {
            d += a;
            d += this.text[c];
        }
        return d;
    };
    b.prototype.member8732 = function (d, e) {
        if (this.member8719 === undefined) {
            return;
        }
        for (var c = 0; c < this.member8719.length && c < e.length; c++) {
            var g = this.member8725(c).member8702;
            if (g > 0) {
                d.member1062(e[c], g);
            }
        }
    };
    return function (d, c) {
        return new b(d, c);
    };
}();