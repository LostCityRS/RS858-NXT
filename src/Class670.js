import { CP1252 } from 'Class122.js';
import { ScriptVarType } from 'Class463.js';
export var ParamType = function () {
    var a = 's'.charCodeAt(0);
    var b = function (c) {
        this.myList;
        this.member625 = -1;
        if (c.member625 !== undefined && c.myList !== undefined) {
            this.member625 = c.member625;
            this.myList = c.myList;
        } else {
            throw new Error('878 ');
        }
        this.type;
        this.member9774;
        this.member9775 = 0;
        this.member9776 = '';
        this.member9777 = true;
    };
    b.prototype.member2794 = function () {
        return this.type;
    };
    b.prototype.member9778 = function () {
        return this.member9774;
    };
    b.prototype.member6145 = function () {
        return this.member9775;
    };
    b.prototype.member6144 = function () {
        return this.member9776;
    };
    b.prototype.member9779 = function () {
        return this.member9777;
    };
    b.prototype.decode = function (d) {
        while (true) {
            var c = d.g1();
            if (c === undefined) {
                throw new Error('879 ');
                break;
            }
            if (c === 0) {
                break;
            }
            this.decodeNext(d, c);
        }
    };
    b.prototype.decodeNext = function (d, c) {
        if (c === 1) {
            this.member9774 = CP1252.decodeChar(d.g1());
        } else if (c === 2) {
            this.member9775 = d.g4s();
        } else if (c === 4) {
            this.member9777 = false;
        } else if (c === 5) {
            this.member9776 = d.gjstr();
        } else if (c === 101) {
            this.type = ScriptVarType.getByID(d.gSmart1or2());
            if (this.type !== null) {
                this.member9774 = this.type.legacyChar.charCodeAt(0);
            }
        } else if (false) {
        }
    };
    b.prototype.member6141 = function () {
        return this.member9774 === a;
    };
    return function (c) {
        return new b(c);
    };
}();