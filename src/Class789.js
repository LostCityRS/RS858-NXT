import { VarDomainType } from 'Class465.js';
export var QuestType = function () {
    var a = function (c, b) {
        this.myList;
        this.member625;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.myList = b;
        } else {
            throw new Error('888 ');
        }
        this.name = '';
        this.member10444;
        this.member10445;
        this.member10446;
        this.member10447;
        this.member10448;
        this.member10449;
        this.member10450;
        this.member10451 = -1;
        this.type = 0;
        this.member10452 = 0;
        this.members = false;
        this.member10453 = 0;
        this.member10454;
        this.member10455;
        this.member10456;
        this.member10457;
        this.member10458;
        this.member10459;
        this.member10460;
        this.member10461;
        this.member10462;
        this.member10463;
        this.member10464;
        this.member10465;
        this.member10466;
        this.member10467;
        this.params;
        this.icon = -1;
    };
    a.prototype.getID = function () {
        return this.member625;
    };
    a.prototype.getName = function () {
        return this.name;
    };
    a.prototype.member9631 = function () {
        return this.member10444;
    };
    a.prototype.member10468 = function () {
        return this.member10445;
    };
    a.prototype.member10469 = function () {
        return this.member10446;
    };
    a.prototype.member10470 = function () {
        return this.member10447;
    };
    a.prototype.member10471 = function () {
        return this.member10448;
    };
    a.prototype.member10472 = function () {
        return this.member10449;
    };
    a.prototype.member10473 = function () {
        return this.member10450;
    };
    a.prototype.member10474 = function () {
        return this.member10451;
    };
    a.prototype.member2794 = function () {
        return this.type;
    };
    a.prototype.member9632 = function () {
        return this.member10452;
    };
    a.prototype.member8413 = function () {
        return this.members;
    };
    a.prototype.member2977 = function () {
        return this.member10453;
    };
    a.prototype.member10475 = function () {
        return this.startlocations;
    };
    a.prototype.member10476 = function () {
        return this.member10455;
    };
    a.prototype.member9633 = function () {
        return this.member10456;
    };
    a.prototype.member9637 = function () {
        return this.member10457;
    };
    a.prototype.member9638 = function () {
        return this.member10458;
    };
    a.prototype.member9635 = function () {
        return this.member10459;
    };
    a.prototype.member9640 = function () {
        return this.member10460;
    };
    a.prototype.member10477 = function () {
        return this.member10461;
    };
    a.prototype.member10478 = function () {
        return this.member10462;
    };
    a.prototype.member9641 = function () {
        return this.member10463;
    };
    a.prototype.member9643 = function () {
        return this.member10464;
    };
    a.prototype.member10479 = function () {
        return this.member10465;
    };
    a.prototype.member10480 = function () {
        return this.member10466;
    };
    a.prototype.member9644 = function () {
        return this.member10467;
    };
    a.prototype.getParams = function () {
        return this.params;
    };
    a.prototype.getIcon = function () {
        return this.icon;
    };
    a.prototype.decode = function (d) {
        var c = -1;
        while (true) {
            var b = d.g1();
            if (b === undefined) {
                throw new Error('889 ' + member625 + '889 ' + c);
                break;
            }
            if (b === 0) {
                break;
            }
            this.decodeNext(d, b, c);
            c = b;
        }
    };
    a.prototype.decodeNext = function (d, k, i) {
        switch (k) {
        case 1:
            this.name = d.gjstr(true);
            return;
        case 2:
            this.member10444 = d.gjstr(true);
            return;
        case 3:
            var m = d.g1();
            this.member10445 = new Array(m);
            this.member10446 = new Array(m);
            this.member10447 = new Array(m);
            for (var e = 0; e < m; e++) {
                this.member10445[e] = d.g2();
                this.member10446[e] = d.g4();
                this.member10447[e] = d.g4();
            }
            return;
        case 4:
            var j = d.g1();
            this.member10448 = new Array(j);
            this.member10449 = new Array(j);
            this.member10450 = new Array(j);
            for (var e = 0; e < j; e++) {
                this.member10448[e] = d.g2();
                this.member10449[e] = d.g4();
                this.member10450[e] = d.g4();
            }
            return;
        case 5:
            this.member10451 = d.g2();
            return;
        case 6:
            this.type = d.g1();
            return;
        case 7:
            this.member10452 = d.g1();
            return;
        case 8:
            this.members = true;
            return;
        case 9:
            this.member10453 = d.g1();
            return;
        case 10:
            var o = d.g1();
            this.member10454 = new Array(o);
            for (var h = 0; h < o; h++) {
                this.member10454[h] = d.g4();
            }
            return;
        case 12:
            this.member10455 = d.g4();
            return;
        case 13:
            var o = d.g1();
            this.member10456 = new Array(o);
            for (var h = 0; h < o; h++) {
                this.member10456[h] = d.g2();
            }
            return;
        case 14:
            var o = d.g1();
            this.member10457 = new Array(o);
            this.member10458 = new Array(o);
            for (var h = 0; h < o; h++) {
                this.member10457[h] = d.g1();
                this.member10458[h] = d.g1();
            }
            return;
        case 15:
            this.member10459 = d.g2();
            return;
        case 17:
            this.icon = d.gSmart2or4null();
            return;
        case 18:
            var o = d.g1();
            this.member10460 = new Array(o);
            this.member10461 = new Array(o);
            this.member10462 = new Array(o);
            this.member10463 = new Array(o);
            for (var h = 0; h < o; h++) {
                this.member10460[h] = d.g4();
                this.member10461[h] = d.g4();
                this.member10462[h] = d.g4();
                this.member10463[h] = d.gjstr();
            }
            return;
        case 19:
            var o = d.g1();
            this.member10464 = new Array(o);
            this.member10465 = new Array(o);
            this.member10466 = new Array(o);
            this.member10467 = new Array(o);
            for (var h = 0; h < o; h++) {
                this.member10464[h] = d.g4();
                this.member10465[h] = d.g4();
                this.member10466[h] = d.g4();
                this.member10467[h] = d.gjstr();
            }
            return;
        case 249:
            var q = d.g1();
            this.params = [];
            for (var g = 0; g < q; g++) {
                var c = d.g1() === 1;
                var b = d.g3();
                if (c) {
                    this.params[b] = d.gjstr();
                } else {
                    this.params[b] = d.g4s();
                }
            }
            return;
        default:
            if (false) {
            }
            return;
        }
    };
    a.prototype.postDecode = function () {
        if (this.member10444 === undefined) {
            this.member10444 = this.name;
        }
    };
    a.prototype.getParam = function (d, c) {
        if (this.params === undefined) {
            return c;
        }
        var b = this.params[d];
        if (b === undefined) {
            return c;
        } else {
            return b;
        }
    };
    a.prototype.member9647 = function (e) {
        if (this.member10445 !== undefined) {
            for (var b = 0; b < this.member10445.length; b++) {
                var c = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member10445[b]);
                if (c !== NULL && e.getVarInt(c) >= this.member10446[b]) {
                    return true;
                }
            }
        }
        if (this.member10448 !== undefined) {
            for (var b = 0; b < this.member10448.length; b++) {
                var d = this.myList.getVarTypeProvider().getVarBitType(this.member10448[b]);
                if (d !== NULL && e.getVarBit(d) >= this.member10449[b]) {
                    return true;
                }
            }
        }
        return false;
    };
    a.prototype.member2976 = function (e) {
        if (this.member10445 !== undefined) {
            for (var b = 0; b < this.member10445.length; b++) {
                var c = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member10445[b]);
                if (c !== NULL && e.getVarInt(c) >= this.member10447[b]) {
                    return true;
                }
            }
        }
        if (this.member10448 !== undefined) {
            for (var b = 0; b < this.member10448.length; b++) {
                var d = this.myList.getVarTypeProvider().getVarBitType(this.member10448[b]);
                if (d !== NULL && e.getVarBit(d) >= this.member10450[b]) {
                    return true;
                }
            }
        }
        return false;
    };
    a.prototype.member9646 = function (h, g) {
        if (h.member2978() < this.member10459) {
            return false;
        }
        if (this.member10457 !== undefined) {
            for (var b = 0; b < this.member10457.length; b++) {
                if (g.member9649(this.member10457[b]) < this.member10458[b]) {
                    return false;
                }
            }
        }
        if (this.member10456 !== undefined) {
            for (var b = 0; b < this.member10456.length; b++) {
                if (!this.myList.list(this.member10456[b]).member2976(h)) {
                    return false;
                }
            }
        }
        if (this.member10460 !== undefined) {
            for (var b = 0; b < this.member10460.length; b++) {
                var c = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member10460[b]);
                var e = h.getVarInt(c);
                if (e < this.member10461[b] || e > this.member10462[b]) {
                    return false;
                }
            }
        }
        if (this.member10464 !== undefined) {
            for (var b = 0; b < this.member10464.length; b++) {
                var d = this.myList.getVarTypeProvider().getVarBitType(this.member10464[b]);
                var e = h.getVarBit(d);
                if (e < this.member10465[b] || e > this.member10466[b]) {
                    return false;
                }
            }
        }
        return true;
    };
    a.prototype.member9636 = function (b) {
        if (b.member2978() < this.member10459) {
            return false;
        }
        return true;
    };
    a.prototype.member9639 = function (c, b) {
        if (this.member10457 === undefined || b < 0 || b >= this.member10457.length) {
            return false;
        }
        if (c.member9649(this.member10457[b]) < this.member10458[b]) {
            return false;
        }
        return true;
    };
    a.prototype.member9634 = function (b, c) {
        if (this.member10456 === undefined || c < 0 || c >= this.member10456.length) {
            return false;
        }
        if (!this.myList.list(this.member10456[c]).member2976(b)) {
            return false;
        }
        return true;
    };
    a.prototype.member9642 = function (e, c) {
        if (this.member10460 === undefined || c < 0 || c >= this.member10460.length) {
            return false;
        }
        var b = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member10460[c]);
        var d = e.getVarInt(b);
        if (d < this.member10461[c] || d > this.member10462[c]) {
            return false;
        }
        return true;
    };
    a.prototype.member9645 = function (e, d) {
        if (this.member10464 === undefined || d < 0 || d >= this.member10464.length) {
            return false;
        }
        var c = this.myList.getVarTypeProvider().getVarBitType(this.member10464[d]);
        var b = e.getVarBit(c);
        if (b < this.member10465[d] || b > this.member10466[d]) {
            return false;
        }
        return true;
    };
    return function (c, b) {
        return new a(c, b);
    };
}();