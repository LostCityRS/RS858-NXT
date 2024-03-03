import { Class421 } from 'Class421.js';
import { Class423 } from 'Class423.js';
import { Class302 } from 'Class302.js';
import { Class492 } from 'Class492.js';
import { Class317 } from 'Class317.js';
export var Class597 = function () {
    var d = {};
    var a;
    var c;
    var b = '<'.charCodeAt(0);
    var e = '>'.charCodeAt(0);
    var h = function (i, j) {
        a = i;
        c = j;
    };
    d.member25 = h;
    Class421.member5658.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        var k = j.member6100[--j.member6099];
        j.member6142[j.member6143++] = i + k;
    };
    Class421.member5659.member867 = function (i) {
        i.member6143 -= 2;
        var k = i.member6142[i.member6143];
        var j = i.member6142[i.member6143 + 1];
        i.member6142[i.member6143++] = k + j;
    };
    Class421.member5660.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        var k = j.member6100[--j.member6099];
        j.member6142[j.member6143++] = i + k;
    };
    Class421.member5665.member867 = function (j) {
        var i = j.member6100[--j.member6099];
        j.member6142[j.member6143++] = '' + i;
    };
    Class421.member5666.member867 = function (i) {
        i.member6143 -= 2;
        i.member6100[i.member6099++] = i.member6142[i.member6143].localeCompare(i.member6142[i.member6143 + 1]);
    };
    Class421.member5667.member867 = function (k) {
        var o = k.member6142[--k.member6143];
        k.member6099 -= 2;
        var m = k.member6100[k.member6099];
        var j = k.member6100[k.member6099 + 1];
        var i = c.member3639(j);
        if (i === null) {
            k.member6143++;
            k.member6099 += 2;
            return true;
        }
        var n;
        if (true) {
            n = Class423.member6130(Class423.member6115.member6111);
            if (n === member47) {
                n = null;
            }
        } else {
        }
        k.member6100[k.member6099++] = Class302.member3610(o, m, i, n);
    };
    Class421.member5668.member867 = function (k) {
        var o = k.member6142[--k.member6143];
        k.member6099 -= 2;
        var m = k.member6100[k.member6099];
        var j = k.member6100[k.member6099 + 1];
        var i = c.member3639(j);
        if (i === null) {
            k.member6143++;
            k.member6099 += 2;
            return true;
        }
        var n;
        if (true) {
            n = Class423.member6130(Class423.member6115.member6111);
            if (n === member47) {
                n = null;
            }
        } else {
        }
        k.member6100[k.member6099++] = Class302.member3613(o, m, i, n);
    };
    Class421.member5669.member867 = function (k) {
        var q = k.member6142[--k.member6143];
        k.member6099 -= 3;
        var m = k.member6100[k.member6099];
        var j = k.member6100[k.member6099 + 1];
        var o = k.member6100[k.member6099 + 2];
        var i = c.member3639(j);
        if (i === null) {
            k.member6143++;
            k.member6099 += 3;
            return true;
        }
        var n;
        if (true) {
            n = Class423.member6130(Class423.member6115.member6111);
            if (n === member47) {
                n = null;
            }
        } else {
        }
        var r = Class302.member3611(q, m, i, n, o);
        k.member6142[k.member6143++] = r !== undefined ? r : '';
    };
    Class421.member5670.member867 = function (j) {
        j.member6143 -= 2;
        var k = j.member6142[j.member6143];
        var i = j.member6142[j.member6143 + 1];
        if (j.member6100[--j.member6099] === 1) {
            j.member6142[j.member6143++] = k;
        } else {
            j.member6142[j.member6143++] = i;
        }
    };
    Class421.member5664.member867 = function (n) {
        n.member6143 -= 2;
        var j = n.member6142[n.member6143];
        var m = n.member6142[n.member6143 + 1];
        var o;
        var k;
        var i = a.member7135();
        if (i !== undefined) {
            var q = i.member6453();
            if (q !== undefined) {
                o = q.member7136();
                if (o !== member47) {
                    k = o.member7917();
                }
            } else {
                k = i.member8217();
            }
        }
        if (k === Class492.member7899) {
            n.member6142[n.member6143++] = m;
        } else {
            n.member6142[n.member6143++] = j;
        }
    };
    Class421.member5671.member867 = function (i) {
        var j = i.member6142[--i.member6143];
        i.member6142[i.member6143++] = Class302.member3614(j);
    };
    Class421.member5672.member867 = function (i) {
        var k = i.member6142[--i.member6143];
        var j = i.member6100[--i.member6099];
        if (j === -1) {
            throw new Error('910 ');
        }
        i.member6142[i.member6143++] = k + String.fromCharCode(j);
    };
    Class421.member5673.member867 = function (i) {
        var j = i.member6100[--i.member6099];
        i.member6100[i.member6099++] = Class317.member3725(j) ? 1 : 0;
    };
    Class421.member5674.member867 = function (i) {
        var j = i.member6100[--i.member6099];
        i.member6100[i.member6099++] = Class317.member3723(j) ? 1 : 0;
    };
    Class421.member5675.member867 = function (i) {
        var j = i.member6100[--i.member6099];
        i.member6100[i.member6099++] = Class317.member3721(j) ? 1 : 0;
    };
    Class421.member5676.member867 = function (i) {
        var j = i.member6100[--i.member6099];
        i.member6100[i.member6099++] = Class317.member3722(j) ? 1 : 0;
    };
    Class421.member5677.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        if (i !== null) {
            j.member6100[j.member6099++] = i.length;
        } else {
            j.member6100[j.member6099++] = 0;
        }
    };
    Class421.member5678.member867 = function (m) {
        var i = m.member6142[--m.member6143];
        m.member6099 -= 2;
        var k = m.member6100[m.member6099];
        var j = m.member6100[m.member6099 + 1];
        m.member6142[m.member6143++] = i.substring(k, j);
    };
    Class421.member5679.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        j.member6142[j.member6143++] = g(i);
    };
    var g = function (i) {
        var j = '';
        var o = false;
        for (var m = 0; m < i.length; m++) {
            var k = i.charAt(m);
            if (k === '<') {
                o = true;
            } else if (k === '>') {
                o = false;
            } else if (!o) {
                j += k;
            }
        }
        return j;
    };
    d.member9086 = g;
    Class421.member5680.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        j.member6099 -= 2;
        var k = j.member6100[j.member6099];
        k = String.fromCharCode(k);
        var m = j.member6100[j.member6099 + 1];
        j.member6100[j.member6099++] = i.indexOf(k, m);
    };
    Class421.member5681.member867 = function (k) {
        k.member6143 -= 2;
        var i = k.member6142[k.member6143];
        var j = k.member6142[k.member6143 + 1];
        var m = k.member6100[--k.member6099];
        k.member6100[k.member6099++] = i.indexOf(j, m);
    };
    Class421.member5682.member867 = function (i) {
        var j = i.member6100[--i.member6099];
        i.member6100[i.member6099++] = String.fromCharCode(j).toLowerCase().charCodeAt(0);
    };
    Class421.member5683.member867 = function (i) {
        var j = i.member6100[--i.member6099];
        i.member6100[i.member6099++] = String.fromCharCode(j).toUpperCase().charCodeAt(0);
    };
    Class421.member5684.member867 = function (j) {
        var i = j.member6100[--j.member6099] !== 0;
        var k = j.member6100[--j.member6099];
        j.member6142[j.member6143++] = Class317.member3726(k, 0, i, a.clientParameters.member7138.value.id);
    };
    Class421.member5685.member867 = function (k) {
        var n = k.member6142[--k.member6143];
        var j = k.member6100[--k.member6099];
        var i = c.member3639(j);
        if (i === member47) {
            k.member6099++;
            k.member6143++;
            return true;
        }
        var m;
        if (true) {
            m = Class423.member6130(Class423.member6115.member6111);
            if (m === member47) {
                m = null;
            }
        } else {
        }
        k.member6100[k.member6099++] = Class302.member3609(n, i, m);
    };
    Class421.member5686.member867 = function (k) {
        k.member6143 -= 2;
        var j = k.member6142[k.member6143];
        var i = k.member6142[k.member6143 + 1];
        k.member6100[k.member6099++] = Class317.member3729(j, i);
    };
    Class421.member5661.member867 = function (j) {
        var i = j.member6100[--j.member6099];
        j.member6142[j.member6143++] = '<col=' + i.toString(16) + '>';
    };
    Class421.member5662.member867 = function (i) {
        var j = i.member6142[--i.member6143];
        i.member6142[i.member6143++] = j.toLowerCase();
    };
    return d;
}();