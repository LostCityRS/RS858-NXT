import { Class299 } from 'Class299.js';
export var Class723 = function () {
    var a = function (d) {
        var e = {};
        var c;
        e.member7228 = function () {
            return c;
        };
        e.member10053 = function (i) {
            c = i;
        };
        var b;
        e.member8269 = function () {
            return b;
        };
        e.member10054 = function (i) {
            b = i;
        };
        var h;
        e.member10055 = function () {
            return h;
        };
        e.member10056 = function (i) {
            h = i;
        };
        var g;
        e.member10057 = function () {
            return g;
        };
        e.member10058 = function (i) {
            g = i;
        };
        e.member8270 = function () {
            var i = Class299.member3584();
            return i.member3484() ? g : h;
        };
        e.equals = function (i) {
            if (c !== i.member7228()) {
                return false;
            }
            if (b !== i.member8269()) {
                return false;
            }
            if (h !== i.member10055()) {
                return false;
            }
            if (g !== i.member10057()) {
                return false;
            }
            return true;
        };
        if (d.member8439 !== undefined && d.member10059 !== undefined && d.member10060 !== undefined && d.member10061 !== undefined) {
            c = d.member8439;
            b = d.member10059;
            h = d.member10060;
            g = d.member10061;
        } else {
            throw new Error('1530 ');
        }
        e.member7142 = function () {
            return (Class299.member3584().member3484() ? 'https://' : 'http://') + b + ':' + e.member8270();
        };
        e.member10062 = function () {
            return (Class299.member3584().member3484() ? 'wss://' : 'ws://') + b + ':' + e.member8270();
        };
        d = undefined;
        return e;
    };
    return a;
}();