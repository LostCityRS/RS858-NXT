import { Class222 } from 'Class222.js';
import { Class221 } from 'Class221.js';
import { Class124 } from 'Class124.js';
export var Class223 = function () {
    var a = function (j) {
        var t = {};
        var h = false;
        var b = false;
        var r = 1;
        t.member2720 = r;
        var q = 2;
        t.member2721 = q;
        var o = 3;
        t.member2722 = o;
        var i = r;
        var k;
        var n;
        var m;
        var d = true;
        var u = 0;
        var v = 0;
        var g = 0;
        var c = 0;
        var y = 0;
        var s = 0;
        n = Class222();
        m = Class221({ size: j.outBufferSize });
        if (j.bufferWrites !== undefined) {
            d = j.bufferWrites;
        }
        k = new WebSocket(j.url, j.protocol);
        k.binaryType = 'arraybuffer';
        k.onopen = function () {
            if (false) {
            }
            i = q;
            n.member301();
            m.member301();
        };
        k.onmessage = function (z) {
            if (false) {
            }
            if (n !== undefined) {
                n.member2719(z.data);
                u++;
                c += z.data.byteLength;
                if (false) {
                }
            }
        };
        k.onerror = function () {
            if (false) {
            }
            e();
        };
        k.onclose = function () {
            if (false) {
            }
            e();
        };
        var e = function () {
            if (n !== undefined && n.member2718() === 0) {
                n.member301();
                n = undefined;
            }
            if (m !== undefined) {
                m.member301();
                m = undefined;
            }
            if (k !== undefined) {
                k.close();
                k = undefined;
            }
            i = o;
        };
        t.member2723 = function () {
            return i;
        };
        t.member2718 = function () {
            if (n === undefined) {
                return -1;
            }
            return n.member2718();
        };
        var x = t.member2718;
        t.read = function (z, B) {
            if (n === undefined) {
                return -1;
            }
            v++;
            var A = n.member2718();
            var C = 0;
            if (A >= B) {
                n.getData(z, B);
                C = B;
            } else {
                n.getData(z, A);
                C = A;
            }
            if (i === o && n.member2718() === 0) {
                n.member301();
                n = undefined;
            }
            return C;
        };
        t.write = function (z) {
            if (i === o) {
                return;
            } else if (d) {
                m.member2719(z, z.byteLength);
            } else {
                k.send(z);
            }
        };
        t.member2724 = function (A, z) {
            if (i === o) {
                return;
            } else if (d) {
                m.member2719(A, z);
            } else {
                throw new Error('1779 ');
            }
        };
        t.close = function () {
            e();
        };
        t.member2725 = function () {
            k = undefined;
            i = o;
        };
        t.member2601 = function () {
            if (i === o) {
                return;
            } else {
                var B = m.member2718();
                if (B > 0) {
                    var z = Class124(B);
                    m.getData(z, B);
                    var A = Date.now();
                    k.send(z.getData());
                    s += Date.now() - A;
                    g++;
                    y += B;
                }
            }
        };
        t.member2726 = function () {
            return {
                available: x(),
                writesFromServer: u,
                readsFromClient: v,
                writesFromClient: g,
                sendTime: s,
                member2727: s / g,
                member2728: k === undefined ? 0 : k.bufferedAmount,
                totalBytesRead: c,
                totalBytesWritten: y
            };
        };
        j = undefined;
        return t;
    };
    return a;
}();