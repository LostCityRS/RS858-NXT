import { Class433 } from 'Class433.js';
import { Class451 } from 'Class451.js';
import { Class642 } from 'Class642.js';
import { Class315 } from 'Class315.js';
export var Class649 = function () {
    var g = {};
    var c;
    var i = function (j) {
        c = j;
    };
    g.member25 = i;
    Class433.member6292.member6428 = function (n, r) {
        var q = n.gjstr();
        var j = c.clientParameters.member9628.value;
        var k = c.clientParameters.member8255.value;
        var m = 3 * 365 * 24 * 60 * 60;
        var o = j + 'settings=' + q + '; version=1; path=/; domain=' + k;
        if (q.length === 0) {
            o = o + '; Expires=Thu, 01-Jan-1970 00:00:00 GMT; Max-Age=0';
        } else {
            o = o + '; Expires=' + new Date(Class451.member7178() + m * 1000).toUTCString() + '; Max-Age=' + m;
        }
        document.member8256 = '"' + o + '"';
    };
    Class433.member6293.member6428 = function (m, n) {
        var o = m.g1() === 1;
        var k = m.member1091(n - 1);
        if (o) {
            var j = m.member1091(n - k.length - 1);
            if (j.length === 0) {
                j = k;
            }
            h(j);
        } else {
            h(k);
        }
    };
    Class433.member6373 = function (k, m) {
        var j = k.member1091(m);
        h(j);
    };
    var h = function (j) {
        b(window.open(j, '_blank'), j);
        window.focus();
    };
    var d = function (k, j) {
        var m;
        if (k !== undefined && k.document !== undefined) {
            m = k.document.title;
        }
        Class642.member9618(Class642.member9616, [
            j,
            m
        ]);
    };
    var b = function (k, j) {
        if (k !== undefined && !k.closed) {
            setTimeout(function () {
                if (k.innerHeight === undefined || k.innerHeight === 0) {
                    d(k, j);
                }
            }, 1000);
        } else {
            d(k, j);
        }
    };
    var e = function (k, j) {
        var m;
        if (j) {
            m = window.open(k, '_blank', 'height=' + screen.height + ',width=' + screen.width);
        } else {
            m = window.open(k, '_top', 'height=' + screen.height + ',width=' + screen.width);
        }
        b(m, k);
        window.focus();
    };
    g.member9629 = e;
    var a = function (o, m) {
        if (o === undefined) {
            o = 'www';
        }
        var j = c.clientParameters.member8025.value;
        if (j === Class315.member3694) {
            o += '-wtrc';
        } else if (j === Class315.member3693) {
            o += '-wtqa';
        } else if (j === Class315.member3691) {
            o += '-wtwip';
        } else if (j === Class315.member3692) {
            o += '-wti';
        } else if (j === Class315.member3697) {
            o += '-demo';
        } else if (j === Class315.member3689) {
            o = 'local';
        }
        var r = '';
        var k = c.clientParameters.member9630.value;
        if (k !== undefined) {
            r = '/p=' + k;
        }
        var n = c.clientParameters.member7256.value.member7205 + '.com';
        var q = m ? 'https://' : 'http://';
        return q + o + '.' + n + '/l=' + c.clientParameters.member7138.value.id + '/a=' + c.clientParameters.affiliate.value + r + '/';
    };
    g.member7142 = a;
    return g;
}();