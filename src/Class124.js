import { CP1252 } from 'Class122.js';
import { Class123 } from 'Class123.js';
export var Packet = function () {
    var b = 0;
    var MASKS = [
        0,
        1,
        3,
        7,
        15,
        31,
        63,
        127,
        255,
        511,
        1023,
        2047,
        4095,
        8191,
        16383,
        32767,
        65535,
        131071,
        262143,
        524287,
        1048575,
        2097151,
        4194303,
        8388607,
        16777215,
        33554431,
        67108863,
        134217727,
        268435455,
        536870911,
        1073741823,
        2147483647,
        4294967295 | 0
    ];
    var Packet = function (i, j, k) {
        this.data = undefined;
        this.arr = undefined;
        this.pos = 0;
        this.cipher = undefined;
        if (i !== undefined) {
            this.data = new ArrayBuffer(i);
            this.arr = new Uint8Array(this.data);
        } else if (j !== undefined) {
            this.data = j;
            this.arr = new Uint8Array(this.data);
        } else {
            throw new Error('1172 ');
        }
        if (k !== undefined) {
            this.cipher = k;
        }
    };
    Packet.prototype.getSize = function () {
        return this.data.byteLength;
    };
    Packet.prototype.getRemaining = function () {
        return this.data.byteLength - this.pos;
    };
    Packet.prototype.setPos = function (i) {
        this.pos = i;
    };
    Packet.prototype.getPos = function () {
        return this.pos;
    };
    Packet.prototype.getData = function () {
        return this.data;
    };
    Packet.prototype.getArray = function () {
        return this.arr;
    };
    Packet.prototype.member1049 = function (i) {
        this.cipher = i;
    };
    Packet.prototype.member1050 = function (j) {
        for (var i = j; i < this.pos; i++) {
            if (i >= this.data.byteLength) {
                break;
            }
            this.arr[i - j] = this.arr[i];
        }
        this.pos -= j;
    };
    Packet.prototype.p1 = function (i) {
        this.arr[this.pos++] = i & 255;
    };
    Packet.prototype.p1enc = function (i) {
        this.arr[this.pos++] = i + this.cipher.next() & 255;
    };
    Packet.prototype.p2 = function (i) {
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i & 255;
    };
    Packet.prototype.p3 = function (i) {
        this.arr[this.pos++] = i >> 16 & 255;
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i & 255;
    };
    Packet.prototype.p4 = function (i) {
        this.arr[this.pos++] = i >> 24 & 255;
        this.arr[this.pos++] = i >> 16 & 255;
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i & 255;
    };
    Packet.prototype.p8 = function (i) {
        this.p4(i.high);
        this.p4(i.low);
    };
    Packet.prototype.pSmart1or2 = function (i) {
        if (i >= 0 && i < 128) {
            this.p1(i);
            return;
        }
        if (i >= 0 && i < 32768) {
            this.p2(i + 32768);
            return;
        }
        throw new Error('1173 ' + i);
    };
    Packet.prototype.pSmart1or2s = function (i) {
        if (i < 64 && i >= -64) {
            this.p1(i + 64);
            return;
        }
        if (i < 16384 && i >= 16384) {
            this.p2(i + 49152);
            return;
        }
        throw new Error('1174 ' + i);
    };
    Packet.prototype.member1062 = function (k, j) {
        if (j < 1 || j > 4) {
            throw new Error('1175 ' + j);
        }
        j--;
        var i = j * 8;
        while (i >= 0) {
            this.arr[this.pos++] = k >> i;
            i -= 8;
        }
    };
    Packet.prototype.pFloat = function (j) {
        var i = new DataView(this.data);
        var j = i.setFloat32(this.pos, j);
        this.pos += 4;
    };
    Packet.prototype.pFloatArray = function (k, n, j) {
        if (n === undefined) {
            n = 0;
        }
        if (j === undefined) {
            j = k.length - n;
        }
        if (n + j > k.length) {
            throw new Error('1176 ');
        }
        var m = new DataView(this.data);
        for (var i = n; i < n + j; i++) {
            m.setFloat32(this.pos, k[i]);
            this.pos += 4;
        }
    };
    Packet.prototype.pjstr = function (k, j) {
        if (j) {
            this.arr[this.pos++] = b;
        }
        for (var i = 0; i < k.length; i++) {
            this.arr[this.pos++] = k.charCodeAt(i) & 255;
        }
        this.arr[this.pos++] = 0;
    };
    Packet.prototype.member1066 = function (k) {
        var j;
        for (var i = 0; i < k.length; i++) {
            character = k.charCodeAt(i);
            this.arr[this.pos++] = character >> 8 & 255;
            this.arr[this.pos++] = character & 255;
        }
        this.arr[this.pos++] = 0;
        this.arr[this.pos++] = 0;
    };
    Packet.prototype.member1067 = function (m, k, j) {
        var i = new Uint8Array(m, k, j);
        this.arr.set(i, this.pos);
        this.pos += j;
    };
    Packet.prototype.member1068 = function (i) {
        this.arr[this.pos - i - 1] = i;
    };
    Packet.prototype.member1069 = function (i) {
        this.arr[this.pos - i - 2] = i >> 8 & 255;
        this.arr[this.pos - i - 1] = i & 255;
    };
    Packet.prototype.g1 = function () {
        return this.arr[this.pos++];
    };
    Packet.prototype.g1s = function () {
        var i = this.arr[this.pos++];
        return i > 127 ? i - 256 : i;
    };
    Packet.prototype.g2 = function () {
        this.pos += 2;
        return (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
    };
    Packet.prototype.g2s = function () {
        this.pos += 2;
        var i = (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
        return i > 32767 ? i - 65536 : i;
    };
    Packet.prototype.g3 = function () {
        this.pos += 3;
        return (this.arr[this.pos - 3] << 16) + (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
    };
    Packet.prototype.g3s = function () {
        this.pos += 3;
        var i = (this.arr[this.pos - 3] << 16) + (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
        return i > 16777215 ? i - 16777216 : i;
    };
    var g = Math.pow(2, 24);
    var a = Math.pow(2, 32);
    var c = Math.pow(2, 40);
    Packet.prototype.g4 = function () {
        this.pos += 4;
        return this.arr[this.pos - 4] * g + (this.arr[this.pos - 3] << 16) + (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
    };
    Packet.prototype.g4s = function () {
        this.pos += 4;
        var i = this.arr[this.pos - 4] * g + (this.arr[this.pos - 3] << 16) + (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
        return i > 2147483647 ? i - 4294967296 : i;
    };
    Packet.prototype.g5 = function () {
        this.pos += 5;
        return this.arr[this.pos - 5] * a + this.arr[this.pos - 4] * g + (this.arr[this.pos - 3] << 16) + (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
    };
    Packet.prototype.g6 = function () {
        this.pos += 6;
        return this.arr[this.pos - 6] * c + this.arr[this.pos - 5] * a + this.arr[this.pos - 4] * g + (this.arr[this.pos - 3] << 16) + (this.arr[this.pos - 2] << 8) + this.arr[this.pos - 1];
    };
    Packet.prototype.g8 = function () {
        return {
            high: this.g4(),
            low: this.g4()
        };
    };
    Packet.prototype.gSmart1or2 = function () {
        var i = this.arr[this.pos];
        if (i < 128) {
            return this.g1();
        } else {
            return this.g2() - 32768;
        }
    };
    Packet.prototype.checkSmart1or2 = function () {
        var i = this.arr[this.pos] & 255;
        if (i < 128) {
            return false;
        }
        return true;
    };
    Packet.prototype.gSmart1or2s = function () {
        var i = this.arr[this.pos];
        if (i < 128) {
            return this.g1() - 64;
        } else {
            return this.g2() - 49152;
        }
    };
    Packet.prototype.gSmart1or2null = function () {
        var i = this.arr[this.pos] & 255;
        if (i < 128) {
            return this.g1() - 1;
        } else {
            return this.g2() - 32769;
        }
    };
    Packet.prototype.gSmart1or2enc = function () {
        var i = this.arr[this.pos++] - this.cipher.next() & 255;
        if (i < 128) {
            return i;
        }
        return (i - 128 << 8) + (this.arr[this.pos++] - this.cipher.next() & 255);
    };
    Packet.prototype.checkSmart1or2enc = function () {
        var i = this.arr[this.pos] - this.cipher.peek() & 255;
        if (i < 128) {
            return false;
        }
        return true;
    };
    Packet.prototype.gSmart2or4 = function () {
        if (this.arr[this.pos] > 127) {
            return this.g4() & 2147483647;
        } else {
            return this.g2();
        }
    };
    Packet.prototype.gSmart2or4null = function () {
        if (this.arr[this.pos] > 127) {
            return this.g4() & 2147483647;
        }
        var i = this.g2();
        if (i === 32767) {
            return -1;
        } else {
            return i;
        }
    };
    Packet.prototype.member1087 = function (j) {
        if (j < 1 || j > 4) {
            throw new Error('1177 ' + j);
        }
        j--;
        var i = j * 8;
        var k = 0;
        while (i >= 0) {
            k += (this.arr[this.pos++] & 255) << i;
            i -= 8;
        }
        return k;
    };
    Packet.prototype.gFloat = function () {
        var j = new DataView(this.data);
        var i = j.getFloat32(this.pos);
        this.pos += 4;
        return i;
    };
    Packet.prototype.gFloatArray = function (k, n, j) {
        if (n === undefined) {
            n = 0;
        }
        if (j === undefined) {
            j = k.length - n;
        }
        var m = new DataView(this.data);
        for (var i = n; i < n + j; i++) {
            k[i] = m.getFloat32(this.pos);
            this.pos += 4;
        }
    };
    Packet.prototype.gjstr = function (k) {
        if (k) {
            var i = this.g1();
            if (i !== b) {
                throw new Error('1178 ' + i);
            }
        }
        var j = this.pos;
        while (true) {
            if (this.g1() === 0) {
                break;
            }
        }
        return CP1252.member1038(new Uint8Array(this.data, j, this.pos - j - 1));
    };
    Packet.prototype.member1090 = function (m) {
        if (m) {
            var j = this.g1();
            if (j !== b) {
                throw new Error('1179 ' + j);
            }
        }
        var k = this.pos;
        var n = 0;
        while (true) {
            if (this.g2() === 0) {
                break;
            } else {
                n++;
            }
        }
        this.pos = k;
        var o = new Array(n);
        for (var i = 0; i < n; i++) {
            o[i] = String.fromCharCode(CP1252.decodeChar(this.g2()));
        }
        this.pos += 2;
        return o.join('');
    };
    Packet.prototype.member1091 = function (m) {
        var j = '';
        var k;
        for (var i = 0; i < m; i++) {
            k = this.g1() - this.cipher.next() & 255;
            if (k === 0) {
                return j;
            }
            j = j + String.fromCharCode(CP1252.decodeChar(k));
        }
        return j;
    };
    Packet.prototype.gdata = function (data, pos, len) {
        var arr = new Uint8Array(data, pos, len);
        arr.set(new Uint8Array(this.data, this.pos, len));
        this.pos += len;
    };
    Packet.prototype.gdataenc = function (data, pos, len) {
        var arr = new Uint8Array(data, pos, len);
        for (var i = 0; i < len; i++) {
            arr[pos + i] = this.g1() - this.cipher.next() & 255;
        }
    };
    Packet.prototype.gsize1 = function () {
        return this.g1();
    };
    Packet.prototype.gsize2 = function () {
        return this.g2();
    };
    Packet.prototype.enterBitMode = function () {
        this.bitpos = this.pos * 8;
    };
    Packet.prototype.gBit = function (k) {
        if (k > 31) {
            throw new Error('1180 ');
        }
        var i = this.bitpos >> 3, j = 8 - (this.bitpos & 7), m = 0;
        this.bitpos += k;
        while (k > j) {
            m += (this.arr[i++] & MASKS[j]) << k - j;
            k -= j;
            j = 8;
        }
        if (k === j) {
            m += this.arr[i] & MASKS[j];
        } else {
            m += this.arr[i] >> j - k & MASKS[k];
        }
        return m;
    };
    Packet.prototype.getRemainingBits = function (i) {
        return i * 8 - this.bitpos;
    };
    Packet.prototype.leaveBitMode = function () {
        this.pos = Math.floor((this.bitpos + 7) / 8);
    };
    Packet.prototype.member1101 = function (t, u) {
        var q = '';
        for (var n = 0; n < this.pos; n++) {
            q += (this.arr[n] >> 4 & 15).toString(16);
            q += (this.arr[n] & 15).toString(16);
        }
        var k = Class123.member1042(q, 16, 0);
        var i = Class123.member1041(k, t, u);
        var j = Class123.member1043(i, 16);
        this.pos = 0;
        if (j.length % 2 !== 0) {
            j = '0' + j;
        } else if (j.length > 0 && parseInt(j[0], 16) >= 8) {
            j = '00' + j;
        }
        var s = j.length / 2;
        this.p2(s);
        for (var n = 0; n < s; n++) {
            var r = j.charAt(n * 2);
            var o = j.charAt(n * 2 + 1);
            this.p1(parseInt(r, 16) << 4 | parseInt(o, 16));
        }
    };
    Packet.prototype.member1102 = function (u, i, m) {
        var o = this.pos;
        this.pos = i;
        var v = Math.floor((m - i) / 8);
        for (var k = 0; k < v; k++) {
            var s = this.g4s();
            var j = this.g4s();
            var q = 0;
            var t = 2654435769;
            var r = 32;
            while (r-- > 0) {
                s += (j << 4 ^ j >>> 5) + j ^ q + u[q & 3];
                q += t;
                j += (s << 4 ^ s >>> 5) + s ^ q + u[q >>> 11 & 3];
            }
            this.pos -= 8;
            this.p4(s);
            this.p4(j);
        }
        this.pos = o;
    };
    Packet.prototype.member1103 = function (u, i, m) {
        var o = this.pos;
        this.pos = i;
        var v = Math.floor((m - i) / 8);
        for (var k = 0; k < v; k++) {
            var s = this.g4s();
            var j = this.g4s();
            var q = 3337565984;
            var t = 2654435769;
            var r = 32;
            while (r-- > 0) {
                j -= (s << 4 ^ s >>> 5) + s ^ q + u[q >>> 11 & 3];
                q -= t;
                s -= (j << 4 ^ j >>> 5) + j ^ q + u[q & 3];
            }
            this.pos -= 8;
            this.p4(s);
            this.p4(j);
        }
        this.pos = o;
    };
    Packet.prototype.print = function () {
        for (var i = 0; i < this.pos; i++) {
            console.log(i + ': ' + this.arr[i]);
        }
    };
    Packet.prototype.p1_alt1 = function (i) {
        this.arr[this.pos++] = i + 128 & 255;
    };
    Packet.prototype.p1_alt2 = function (i) {
        this.arr[this.pos++] = 0 - i & 255;
    };
    Packet.prototype.p1_alt3 = function (i) {
        this.arr[this.pos++] = 128 - i & 255;
    };
    Packet.prototype.g1_alt1 = function () {
        return this.arr[this.pos++] - 128 & 255;
    };
    Packet.prototype.g1_alt2 = function () {
        return 0 - this.arr[this.pos++] & 255;
    };
    Packet.prototype.g1_alt3 = function () {
        return 128 - this.arr[this.pos++] & 255;
    };
    Packet.prototype.g1s_alt1 = function () {
        var i = this.arr[this.pos++] - 128 & 255;
        return i > 127 ? i - 256 : i;
    };
    Packet.prototype.g1s_alt2 = function () {
        var i = 0 - this.arr[this.pos++] & 255;
        return i > 127 ? i - 256 : i;
    };
    Packet.prototype.g1s_alt3 = function () {
        var i = 128 - this.arr[this.pos++] & 255;
        return i > 127 ? i - 256 : i;
    };
    Packet.prototype.p2_alt1 = function (i) {
        this.arr[this.pos++] = i & 255;
        this.arr[this.pos++] = i >> 8 & 255;
    };
    Packet.prototype.p2_alt2 = function (i) {
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i + 128 & 255;
    };
    Packet.prototype.p2_alt3 = function (i) {
        this.arr[this.pos++] = i + 128 & 255;
        this.arr[this.pos++] = i >> 8 & 255;
    };
    Packet.prototype.g2_alt1 = function () {
        this.pos += 2;
        return (this.arr[this.pos - 1] << 8) + this.arr[this.pos - 2];
    };
    Packet.prototype.g2_alt2 = function () {
        this.pos += 2;
        return (this.arr[this.pos - 2] << 8) + (this.arr[this.pos - 1] - 128 & 255);
    };
    Packet.prototype.g2_alt3 = function () {
        this.pos += 2;
        return (this.arr[this.pos - 1] << 8) + (this.arr[this.pos - 2] - 128 & 255);
    };
    Packet.prototype.g2s_alt1 = function () {
        this.pos += 2;
        var i = (this.arr[this.pos - 1] << 8) + this.arr[this.pos - 2];
        return i > 32767 ? i - 65536 : i;
    };
    Packet.prototype.g2s_alt2 = function () {
        this.pos += 2;
        var i = (this.arr[this.pos - 2] << 8) + (this.arr[this.pos - 1] - 128 & 255);
        return i > 32767 ? i - 65536 : i;
    };
    Packet.prototype.g2s_alt3 = function () {
        this.pos += 2;
        var i = (this.arr[this.pos - 1] << 8) + (this.arr[this.pos - 2] - 128 & 255);
        return i > 32767 ? i - 65536 : i;
    };
    Packet.prototype.p3_alt1 = function (i) {
        this.arr[this.pos++] = i & 255;
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i >> 16 & 255;
    };
    Packet.prototype.p3_alt2 = function (i) {
        this.arr[this.pos++] = i >> 16 & 255;
        this.arr[this.pos++] = i & 255;
        this.arr[this.pos++] = i >> 8 & 255;
    };
    Packet.prototype.p3_alt3 = function (i) {
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i >> 16 & 255;
        this.arr[this.pos++] = i & 255;
    };
    Packet.prototype.g3_alt1 = function () {
        this.pos += 3;
        return ((this.arr[this.pos - 1] & 255) << 16) + ((this.arr[this.pos - 2] & 255) << 8) + (this.arr[this.pos - 3] & 255);
    };
    Packet.prototype.g3_alt2 = function () {
        this.pos += 3;
        return ((this.arr[this.pos - 3] & 255) << 16) + ((this.arr[this.pos - 1] & 255) << 8) + (this.arr[this.pos - 2] & 255);
    };
    Packet.prototype.g3_alt3 = function () {
        this.pos += 3;
        return ((this.arr[this.pos - 2] & 255) << 16) + ((this.arr[this.pos - 3] & 255) << 8) + (this.arr[this.pos - 1] & 255);
    };
    Packet.prototype.g3_alt1s = function () {
        this.pos += 3;
        var i = ((this.arr[this.pos - 1] & 255) << 16) + ((this.arr[this.pos - 2] & 255) << 8) + (this.arr[this.pos - 3] & 255);
        return i > 16777215 ? i - 16777216 : i;
    };
    Packet.prototype.g3_alt2s = function () {
        this.pos += 3;
        var i = ((this.arr[this.pos - 3] & 255) << 16) + ((this.arr[this.pos - 1] & 255) << 8) + (this.arr[this.pos - 2] & 255);
        return i > 16777215 ? i - 16777216 : i;
    };
    Packet.prototype.g3_alt3s = function () {
        this.pos += 3;
        var i = ((this.arr[this.pos - 2] & 255) << 16) + ((this.arr[this.pos - 3] & 255) << 8) + (this.arr[this.pos - 1] & 255);
        return i > 16777215 ? i - 16777216 : i;
    };
    Packet.prototype.p4_alt1 = function (i) {
        this.arr[this.pos++] = i & 255;
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i >> 16 & 255;
        this.arr[this.pos++] = i >> 24 & 255;
    };
    Packet.prototype.p4_alt2 = function (i) {
        this.arr[this.pos++] = i >> 8 & 255;
        this.arr[this.pos++] = i & 255;
        this.arr[this.pos++] = i >> 24 & 255;
        this.arr[this.pos++] = i >> 16 & 255;
    };
    Packet.prototype.p4_alt3 = function (i) {
        this.arr[this.pos++] = i >> 16 & 255;
        this.arr[this.pos++] = i >> 24 & 255;
        this.arr[this.pos++] = i & 255;
        this.arr[this.pos++] = i >> 8 & 255;
    };
    Packet.prototype.g4_alt1 = function () {
        this.pos += 4;
        return ((this.arr[this.pos - 1] & 255) << 24) + ((this.arr[this.pos - 2] & 255) << 16) + ((this.arr[this.pos - 3] & 255) << 8) + (this.arr[this.pos - 4] & 255);
    };
    Packet.prototype.g4_alt2 = function () {
        this.pos += 4;
        return ((this.arr[this.pos - 2] & 255) << 24) + ((this.arr[this.pos - 1] & 255) << 16) + ((this.arr[this.pos - 4] & 255) << 8) + (this.arr[this.pos - 3] & 255);
    };
    Packet.prototype.g4_alt3 = function () {
        this.pos += 4;
        return ((this.arr[this.pos - 3] & 255) << 24) + ((this.arr[this.pos - 4] & 255) << 16) + ((this.arr[this.pos - 1] & 255) << 8) + (this.arr[this.pos - 2] & 255);
    };
    Packet.prototype.g4s_alt1 = function () {
        this.pos += 4;
        var i = ((this.arr[this.pos - 1] & 255) << 24) + ((this.arr[this.pos - 2] & 255) << 16) + ((this.arr[this.pos - 3] & 255) << 8) + (this.arr[this.pos - 4] & 255);
        return i > 2147483647 ? i - 4294967296 : i;
    };
    Packet.prototype.g4s_alt2 = function () {
        this.pos += 4;
        var i = ((this.arr[this.pos - 2] & 255) << 24) + ((this.arr[this.pos - 1] & 255) << 16) + ((this.arr[this.pos - 4] & 255) << 8) + (this.arr[this.pos - 3] & 255);
        return i > 2147483647 ? i - 4294967296 : i;
    };
    Packet.prototype.g4s_alt3 = function () {
        this.pos += 4;
        var i = ((this.arr[this.pos - 3] & 255) << 24) + ((this.arr[this.pos - 4] & 255) << 16) + ((this.arr[this.pos - 1] & 255) << 8) + (this.arr[this.pos - 2] & 255);
        return i > 2147483647 ? i - 4294967296 : i;
    };
    Packet.prototype.p8_alt1 = function (i) {
        this.p4_alt1(i.high);
        this.p4_alt1(i.low);
    };
    Packet.prototype.p8_alt2 = function (i) {
        this.p4_alt2(i.high);
        this.p4_alt2(i.low);
    };
    Packet.prototype.p8_alt3 = function (i) {
        this.p4_alt3(i.high);
        this.p4_alt3(i.low);
    };
    Packet.prototype.g8_alt1 = function () {
        return {
            high: this.g4_alt1(),
            low: this.g4_alt1()
        };
    };
    Packet.prototype.g8_alt2 = function () {
        return {
            high: this.g4_alt2(),
            low: this.g4_alt2()
        };
    };
    Packet.prototype.g8_alt3 = function () {
        return {
            high: this.g4_alt3(),
            low: this.g4_alt3()
        };
    };
    Packet.prototype.pdata_alt1 = function (data, pos, len) {
        var arr = new Uint8Array(data);
        for (var o = pos + len - 1; o >= pos; o--) {
            this.arr[this.pos++] = arr[o];
        }
    };
    Packet.prototype.pdata_alt2 = function (data, pos, len) {
        var i = new Uint8Array(data);
        for (var o = pos; o < pos + len; o++) {
            this.arr[this.pos++] = i[o] + 128 & 255;
        }
    };
    Packet.prototype.pdata_alt3 = function (data, pos, len) {
        var i = new Uint8Array(data);
        for (var o = pos + len - 1; o >= pos; o--) {
            this.arr[this.pos++] = i[o] + 128 & 255;
        }
    };
    Packet.prototype.gdata_alt1 = function (data, pos, len) {
        var arr = new Uint8Array(data, pos, len);
        for (var i = len - 1; i >= 0; i--) {
            arr[i] = this.arr[this.pos++];
        }
    };
    Packet.prototype.gdata_alt2 = function (n, m, k) {
        var j = new Uint8Array(n, m, k);
        for (var i = 0; i < k; i++) {
            j[i] = this.arr[this.pos++] - 128 & 255;
        }
    };
    Packet.prototype.gdata_alt3 = function (n, m, k) {
        var j = new Uint8Array(n, m, k);
        for (var i = k - 1; i >= 0; i--) {
            j[i] = this.arr[this.pos++] - 128 & 255;
        }
    };
    var d = function (i, j, k) {
        return new Packet(i, j, k);
    };
    d.member1152 = function (j, i) {
        return j.length + (i ? 1 : 0) + 1;
    };
    d.member1153 = function (i) {
        return i.length * 2 + 2;
    };
    return d;
}();