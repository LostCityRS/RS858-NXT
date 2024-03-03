import { Class122 } from 'Class122.js';
import { Class123 } from 'Class123.js';
export var Class124 = function () {
    var b = 0;
    var h = [
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
    var e = function (i, j, k) {
        this.data = undefined;
        this.member1044 = undefined;
        this.member1045 = 0;
        this.member1046 = undefined;
        if (i !== undefined) {
            this.data = new ArrayBuffer(i);
            this.member1044 = new Uint8Array(this.data);
        } else if (j !== undefined) {
            this.data = j;
            this.member1044 = new Uint8Array(this.data);
        } else {
            throw new Error('1172 ');
        }
        if (k !== undefined) {
            this.member1046 = k;
        }
    };
    e.prototype.getSize = function () {
        return this.data.byteLength;
    };
    e.prototype.member906 = function () {
        return this.data.byteLength - this.member1045;
    };
    e.prototype.member607 = function (i) {
        this.member1045 = i;
    };
    e.prototype.member1047 = function () {
        return this.member1045;
    };
    e.prototype.getData = function () {
        return this.data;
    };
    e.prototype.member1048 = function () {
        return this.member1044;
    };
    e.prototype.member1049 = function (i) {
        this.member1046 = i;
    };
    e.prototype.member1050 = function (j) {
        for (var i = j; i < this.member1045; i++) {
            if (i >= this.data.byteLength) {
                break;
            }
            this.member1044[i - j] = this.member1044[i];
        }
        this.member1045 -= j;
    };
    e.prototype.member1051 = function (i) {
        this.member1044[this.member1045++] = i & 255;
    };
    e.prototype.member1052 = function (i) {
        this.member1044[this.member1045++] = i + this.member1046.member1053() & 255;
    };
    e.prototype.member1054 = function (i) {
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i & 255;
    };
    e.prototype.member1055 = function (i) {
        this.member1044[this.member1045++] = i >> 16 & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i & 255;
    };
    e.prototype.member1056 = function (i) {
        this.member1044[this.member1045++] = i >> 24 & 255;
        this.member1044[this.member1045++] = i >> 16 & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i & 255;
    };
    e.prototype.member1057 = function (i) {
        this.member1056(i.member1058);
        this.member1056(i.member1059);
    };
    e.prototype.member1060 = function (i) {
        if (i >= 0 && i < 128) {
            this.member1051(i);
            return;
        }
        if (i >= 0 && i < 32768) {
            this.member1054(i + 32768);
            return;
        }
        throw new Error('1173 ' + i);
    };
    e.prototype.member1061 = function (i) {
        if (i < 64 && i >= -64) {
            this.member1051(i + 64);
            return;
        }
        if (i < 16384 && i >= 16384) {
            this.member1054(i + 49152);
            return;
        }
        throw new Error('1174 ' + i);
    };
    e.prototype.member1062 = function (k, j) {
        if (j < 1 || j > 4) {
            throw new Error('1175 ' + j);
        }
        j--;
        var i = j * 8;
        while (i >= 0) {
            this.member1044[this.member1045++] = k >> i;
            i -= 8;
        }
    };
    e.prototype.member1063 = function (j) {
        var i = new DataView(this.data);
        var j = i.setFloat32(this.member1045, j);
        this.member1045 += 4;
    };
    e.prototype.member1064 = function (k, n, j) {
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
            m.setFloat32(this.member1045, k[i]);
            this.member1045 += 4;
        }
    };
    e.prototype.member1065 = function (k, j) {
        if (j) {
            this.member1044[this.member1045++] = b;
        }
        for (var i = 0; i < k.length; i++) {
            this.member1044[this.member1045++] = k.charCodeAt(i) & 255;
        }
        this.member1044[this.member1045++] = 0;
    };
    e.prototype.member1066 = function (k) {
        var j;
        for (var i = 0; i < k.length; i++) {
            character = k.charCodeAt(i);
            this.member1044[this.member1045++] = character >> 8 & 255;
            this.member1044[this.member1045++] = character & 255;
        }
        this.member1044[this.member1045++] = 0;
        this.member1044[this.member1045++] = 0;
    };
    e.prototype.member1067 = function (m, k, j) {
        var i = new Uint8Array(m, k, j);
        this.member1044.set(i, this.member1045);
        this.member1045 += j;
    };
    e.prototype.member1068 = function (i) {
        this.member1044[this.member1045 - i - 1] = i;
    };
    e.prototype.member1069 = function (i) {
        this.member1044[this.member1045 - i - 2] = i >> 8 & 255;
        this.member1044[this.member1045 - i - 1] = i & 255;
    };
    e.prototype.member609 = function () {
        return this.member1044[this.member1045++];
    };
    e.prototype.member1070 = function () {
        var i = this.member1044[this.member1045++];
        return i > 127 ? i - 256 : i;
    };
    e.prototype.member608 = function () {
        this.member1045 += 2;
        return (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
    };
    e.prototype.member1071 = function () {
        this.member1045 += 2;
        var i = (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
        return i > 32767 ? i - 65536 : i;
    };
    e.prototype.g3 = function () {
        this.member1045 += 3;
        return (this.member1044[this.member1045 - 3] << 16) + (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
    };
    e.prototype.member1072 = function () {
        this.member1045 += 3;
        var i = (this.member1044[this.member1045 - 3] << 16) + (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
        return i > 16777215 ? i - 16777216 : i;
    };
    var g = Math.pow(2, 24);
    var a = Math.pow(2, 32);
    var c = Math.pow(2, 40);
    e.prototype.member1073 = function () {
        this.member1045 += 4;
        return this.member1044[this.member1045 - 4] * g + (this.member1044[this.member1045 - 3] << 16) + (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
    };
    e.prototype.member1074 = function () {
        this.member1045 += 4;
        var i = this.member1044[this.member1045 - 4] * g + (this.member1044[this.member1045 - 3] << 16) + (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
        return i > 2147483647 ? i - 4294967296 : i;
    };
    e.prototype.member1075 = function () {
        this.member1045 += 5;
        return this.member1044[this.member1045 - 5] * a + this.member1044[this.member1045 - 4] * g + (this.member1044[this.member1045 - 3] << 16) + (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
    };
    e.prototype.member1076 = function () {
        this.member1045 += 6;
        return this.member1044[this.member1045 - 6] * c + this.member1044[this.member1045 - 5] * a + this.member1044[this.member1045 - 4] * g + (this.member1044[this.member1045 - 3] << 16) + (this.member1044[this.member1045 - 2] << 8) + this.member1044[this.member1045 - 1];
    };
    e.prototype.member1077 = function () {
        return {
            member1058: this.member1073(),
            member1059: this.member1073()
        };
    };
    e.prototype.member1078 = function () {
        var i = this.member1044[this.member1045];
        if (i < 128) {
            return this.member609();
        } else {
            return this.member608() - 32768;
        }
    };
    e.prototype.member1079 = function () {
        var i = this.member1044[this.member1045] & 255;
        if (i < 128) {
            return false;
        }
        return true;
    };
    e.prototype.member1080 = function () {
        var i = this.member1044[this.member1045];
        if (i < 128) {
            return this.member609() - 64;
        } else {
            return this.member608() - 49152;
        }
    };
    e.prototype.member1081 = function () {
        var i = this.member1044[this.member1045] & 255;
        if (i < 128) {
            return this.member609() - 1;
        } else {
            return this.member608() - 32769;
        }
    };
    e.prototype.member1082 = function () {
        var i = this.member1044[this.member1045++] - this.member1046.member1053() & 255;
        if (i < 128) {
            return i;
        }
        return (i - 128 << 8) + (this.member1044[this.member1045++] - this.member1046.member1053() & 255);
    };
    e.prototype.member1083 = function () {
        var i = this.member1044[this.member1045] - this.member1046.member1084() & 255;
        if (i < 128) {
            return false;
        }
        return true;
    };
    e.prototype.member1085 = function () {
        if (this.member1044[this.member1045] > 127) {
            return this.member1073() & 2147483647;
        } else {
            return this.member608();
        }
    };
    e.prototype.member1086 = function () {
        if (this.member1044[this.member1045] > 127) {
            return this.member1073() & 2147483647;
        }
        var i = this.member608();
        if (i === 32767) {
            return -1;
        } else {
            return i;
        }
    };
    e.prototype.member1087 = function (j) {
        if (j < 1 || j > 4) {
            throw new Error('1177 ' + j);
        }
        j--;
        var i = j * 8;
        var k = 0;
        while (i >= 0) {
            k += (this.member1044[this.member1045++] & 255) << i;
            i -= 8;
        }
        return k;
    };
    e.prototype.member320 = function () {
        var j = new DataView(this.data);
        var i = j.getFloat32(this.member1045);
        this.member1045 += 4;
        return i;
    };
    e.prototype.member1088 = function (k, n, j) {
        if (n === undefined) {
            n = 0;
        }
        if (j === undefined) {
            j = k.length - n;
        }
        var m = new DataView(this.data);
        for (var i = n; i < n + j; i++) {
            k[i] = m.getFloat32(this.member1045);
            this.member1045 += 4;
        }
    };
    e.prototype.member1089 = function (k) {
        if (k) {
            var i = this.member609();
            if (i !== b) {
                throw new Error('1178 ' + i);
            }
        }
        var j = this.member1045;
        while (true) {
            if (this.member609() === 0) {
                break;
            }
        }
        return Class122.member1038(new Uint8Array(this.data, j, this.member1045 - j - 1));
    };
    e.prototype.member1090 = function (m) {
        if (m) {
            var j = this.member609();
            if (j !== b) {
                throw new Error('1179 ' + j);
            }
        }
        var k = this.member1045;
        var n = 0;
        while (true) {
            if (this.member608() === 0) {
                break;
            } else {
                n++;
            }
        }
        this.member1045 = k;
        var o = new Array(n);
        for (var i = 0; i < n; i++) {
            o[i] = String.fromCharCode(Class122.member1036(this.member608()));
        }
        this.member1045 += 2;
        return o.join('');
    };
    e.prototype.member1091 = function (m) {
        var j = '';
        var k;
        for (var i = 0; i < m; i++) {
            k = this.member609() - this.member1046.member1053() & 255;
            if (k === 0) {
                return j;
            }
            j = j + String.fromCharCode(Class122.member1036(k));
        }
        return j;
    };
    e.prototype.member1092 = function (m, k, j) {
        var i = new Uint8Array(m, k, j);
        i.set(new Uint8Array(this.data, this.member1045, j));
        this.member1045 += j;
    };
    e.prototype.member1093 = function (n, m, k) {
        var j = new Uint8Array(n, m, k);
        for (var i = 0; i < k; i++) {
            j[m + i] = this.member609() - this.member1046.member1053() & 255;
        }
    };
    e.prototype.member1094 = function () {
        return this.member609();
    };
    e.prototype.member1095 = function () {
        return this.member608();
    };
    e.prototype.member1096 = function () {
        this.member1097 = this.member1045 * 8;
    };
    e.prototype.member1098 = function (k) {
        if (k > 31) {
            throw new Error('1180 ');
        }
        var i = this.member1097 >> 3, j = 8 - (this.member1097 & 7), m = 0;
        this.member1097 += k;
        while (k > j) {
            m += (this.member1044[i++] & h[j]) << k - j;
            k -= j;
            j = 8;
        }
        if (k === j) {
            m += this.member1044[i] & h[j];
        } else {
            m += this.member1044[i] >> j - k & h[k];
        }
        return m;
    };
    e.prototype.member1099 = function (i) {
        return i * 8 - this.member1097;
    };
    e.prototype.member1100 = function () {
        this.member1045 = Math.floor((this.member1097 + 7) / 8);
    };
    e.prototype.member1101 = function (t, u) {
        var q = '';
        for (var n = 0; n < this.member1045; n++) {
            q += (this.member1044[n] >> 4 & 15).toString(16);
            q += (this.member1044[n] & 15).toString(16);
        }
        var k = Class123.member1042(q, 16, 0);
        var i = Class123.member1041(k, t, u);
        var j = Class123.member1043(i, 16);
        this.member1045 = 0;
        if (j.length % 2 !== 0) {
            j = '0' + j;
        } else if (j.length > 0 && parseInt(j[0], 16) >= 8) {
            j = '00' + j;
        }
        var s = j.length / 2;
        this.member1054(s);
        for (var n = 0; n < s; n++) {
            var r = j.charAt(n * 2);
            var o = j.charAt(n * 2 + 1);
            this.member1051(parseInt(r, 16) << 4 | parseInt(o, 16));
        }
    };
    e.prototype.member1102 = function (u, i, m) {
        var o = this.member1045;
        this.member1045 = i;
        var v = Math.floor((m - i) / 8);
        for (var k = 0; k < v; k++) {
            var s = this.member1074();
            var j = this.member1074();
            var q = 0;
            var t = 2654435769;
            var r = 32;
            while (r-- > 0) {
                s += (j << 4 ^ j >>> 5) + j ^ q + u[q & 3];
                q += t;
                j += (s << 4 ^ s >>> 5) + s ^ q + u[q >>> 11 & 3];
            }
            this.member1045 -= 8;
            this.member1056(s);
            this.member1056(j);
        }
        this.member1045 = o;
    };
    e.prototype.member1103 = function (u, i, m) {
        var o = this.member1045;
        this.member1045 = i;
        var v = Math.floor((m - i) / 8);
        for (var k = 0; k < v; k++) {
            var s = this.member1074();
            var j = this.member1074();
            var q = 3337565984;
            var t = 2654435769;
            var r = 32;
            while (r-- > 0) {
                j -= (s << 4 ^ s >>> 5) + s ^ q + u[q >>> 11 & 3];
                q -= t;
                s -= (j << 4 ^ j >>> 5) + j ^ q + u[q & 3];
            }
            this.member1045 -= 8;
            this.member1056(s);
            this.member1056(j);
        }
        this.member1045 = o;
    };
    e.prototype.print = function () {
        for (var i = 0; i < this.member1045; i++) {
            console.log(i + ': ' + this.member1044[i]);
        }
    };
    e.prototype.member1104 = function (i) {
        this.member1044[this.member1045++] = i + 128 & 255;
    };
    e.prototype.member1105 = function (i) {
        this.member1044[this.member1045++] = 0 - i & 255;
    };
    e.prototype.member1106 = function (i) {
        this.member1044[this.member1045++] = 128 - i & 255;
    };
    e.prototype.member1107 = function () {
        return this.member1044[this.member1045++] - 128 & 255;
    };
    e.prototype.member1108 = function () {
        return 0 - this.member1044[this.member1045++] & 255;
    };
    e.prototype.member1109 = function () {
        return 128 - this.member1044[this.member1045++] & 255;
    };
    e.prototype.member1110 = function () {
        var i = this.member1044[this.member1045++] - 128 & 255;
        return i > 127 ? i - 256 : i;
    };
    e.prototype.member1111 = function () {
        var i = 0 - this.member1044[this.member1045++] & 255;
        return i > 127 ? i - 256 : i;
    };
    e.prototype.member1112 = function () {
        var i = 128 - this.member1044[this.member1045++] & 255;
        return i > 127 ? i - 256 : i;
    };
    e.prototype.member1113 = function (i) {
        this.member1044[this.member1045++] = i & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
    };
    e.prototype.member1114 = function (i) {
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i + 128 & 255;
    };
    e.prototype.member1115 = function (i) {
        this.member1044[this.member1045++] = i + 128 & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
    };
    e.prototype.member1116 = function () {
        this.member1045 += 2;
        return (this.member1044[this.member1045 - 1] << 8) + this.member1044[this.member1045 - 2];
    };
    e.prototype.member1117 = function () {
        this.member1045 += 2;
        return (this.member1044[this.member1045 - 2] << 8) + (this.member1044[this.member1045 - 1] - 128 & 255);
    };
    e.prototype.member1118 = function () {
        this.member1045 += 2;
        return (this.member1044[this.member1045 - 1] << 8) + (this.member1044[this.member1045 - 2] - 128 & 255);
    };
    e.prototype.member1119 = function () {
        this.member1045 += 2;
        var i = (this.member1044[this.member1045 - 1] << 8) + this.member1044[this.member1045 - 2];
        return i > 32767 ? i - 65536 : i;
    };
    e.prototype.member1120 = function () {
        this.member1045 += 2;
        var i = (this.member1044[this.member1045 - 2] << 8) + (this.member1044[this.member1045 - 1] - 128 & 255);
        return i > 32767 ? i - 65536 : i;
    };
    e.prototype.member1121 = function () {
        this.member1045 += 2;
        var i = (this.member1044[this.member1045 - 1] << 8) + (this.member1044[this.member1045 - 2] - 128 & 255);
        return i > 32767 ? i - 65536 : i;
    };
    e.prototype.member1122 = function (i) {
        this.member1044[this.member1045++] = i & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i >> 16 & 255;
    };
    e.prototype.member1123 = function (i) {
        this.member1044[this.member1045++] = i >> 16 & 255;
        this.member1044[this.member1045++] = i & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
    };
    e.prototype.member1124 = function (i) {
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i >> 16 & 255;
        this.member1044[this.member1045++] = i & 255;
    };
    e.prototype.member1125 = function () {
        this.member1045 += 3;
        return ((this.member1044[this.member1045 - 1] & 255) << 16) + ((this.member1044[this.member1045 - 2] & 255) << 8) + (this.member1044[this.member1045 - 3] & 255);
    };
    e.prototype.member1126 = function () {
        this.member1045 += 3;
        return ((this.member1044[this.member1045 - 3] & 255) << 16) + ((this.member1044[this.member1045 - 1] & 255) << 8) + (this.member1044[this.member1045 - 2] & 255);
    };
    e.prototype.member1127 = function () {
        this.member1045 += 3;
        return ((this.member1044[this.member1045 - 2] & 255) << 16) + ((this.member1044[this.member1045 - 3] & 255) << 8) + (this.member1044[this.member1045 - 1] & 255);
    };
    e.prototype.member1128 = function () {
        this.member1045 += 3;
        var i = ((this.member1044[this.member1045 - 1] & 255) << 16) + ((this.member1044[this.member1045 - 2] & 255) << 8) + (this.member1044[this.member1045 - 3] & 255);
        return i > 16777215 ? i - 16777216 : i;
    };
    e.prototype.member1129 = function () {
        this.member1045 += 3;
        var i = ((this.member1044[this.member1045 - 3] & 255) << 16) + ((this.member1044[this.member1045 - 1] & 255) << 8) + (this.member1044[this.member1045 - 2] & 255);
        return i > 16777215 ? i - 16777216 : i;
    };
    e.prototype.member1130 = function () {
        this.member1045 += 3;
        var i = ((this.member1044[this.member1045 - 2] & 255) << 16) + ((this.member1044[this.member1045 - 3] & 255) << 8) + (this.member1044[this.member1045 - 1] & 255);
        return i > 16777215 ? i - 16777216 : i;
    };
    e.prototype.member1131 = function (i) {
        this.member1044[this.member1045++] = i & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i >> 16 & 255;
        this.member1044[this.member1045++] = i >> 24 & 255;
    };
    e.prototype.member1132 = function (i) {
        this.member1044[this.member1045++] = i >> 8 & 255;
        this.member1044[this.member1045++] = i & 255;
        this.member1044[this.member1045++] = i >> 24 & 255;
        this.member1044[this.member1045++] = i >> 16 & 255;
    };
    e.prototype.member1133 = function (i) {
        this.member1044[this.member1045++] = i >> 16 & 255;
        this.member1044[this.member1045++] = i >> 24 & 255;
        this.member1044[this.member1045++] = i & 255;
        this.member1044[this.member1045++] = i >> 8 & 255;
    };
    e.prototype.member1134 = function () {
        this.member1045 += 4;
        return ((this.member1044[this.member1045 - 1] & 255) << 24) + ((this.member1044[this.member1045 - 2] & 255) << 16) + ((this.member1044[this.member1045 - 3] & 255) << 8) + (this.member1044[this.member1045 - 4] & 255);
    };
    e.prototype.member1135 = function () {
        this.member1045 += 4;
        return ((this.member1044[this.member1045 - 2] & 255) << 24) + ((this.member1044[this.member1045 - 1] & 255) << 16) + ((this.member1044[this.member1045 - 4] & 255) << 8) + (this.member1044[this.member1045 - 3] & 255);
    };
    e.prototype.member1136 = function () {
        this.member1045 += 4;
        return ((this.member1044[this.member1045 - 3] & 255) << 24) + ((this.member1044[this.member1045 - 4] & 255) << 16) + ((this.member1044[this.member1045 - 1] & 255) << 8) + (this.member1044[this.member1045 - 2] & 255);
    };
    e.prototype.member1137 = function () {
        this.member1045 += 4;
        var i = ((this.member1044[this.member1045 - 1] & 255) << 24) + ((this.member1044[this.member1045 - 2] & 255) << 16) + ((this.member1044[this.member1045 - 3] & 255) << 8) + (this.member1044[this.member1045 - 4] & 255);
        return i > 2147483647 ? i - 4294967296 : i;
    };
    e.prototype.member1138 = function () {
        this.member1045 += 4;
        var i = ((this.member1044[this.member1045 - 2] & 255) << 24) + ((this.member1044[this.member1045 - 1] & 255) << 16) + ((this.member1044[this.member1045 - 4] & 255) << 8) + (this.member1044[this.member1045 - 3] & 255);
        return i > 2147483647 ? i - 4294967296 : i;
    };
    e.prototype.member1139 = function () {
        this.member1045 += 4;
        var i = ((this.member1044[this.member1045 - 3] & 255) << 24) + ((this.member1044[this.member1045 - 4] & 255) << 16) + ((this.member1044[this.member1045 - 1] & 255) << 8) + (this.member1044[this.member1045 - 2] & 255);
        return i > 2147483647 ? i - 4294967296 : i;
    };
    e.prototype.member1140 = function (i) {
        this.member1131(i.member1058);
        this.member1131(i.member1059);
    };
    e.prototype.member1141 = function (i) {
        this.member1132(i.member1058);
        this.member1132(i.member1059);
    };
    e.prototype.member1142 = function (i) {
        this.member1133(i.member1058);
        this.member1133(i.member1059);
    };
    e.prototype.member1143 = function () {
        return {
            member1058: this.member1134(),
            member1059: this.member1134()
        };
    };
    e.prototype.member1144 = function () {
        return {
            member1058: this.member1135(),
            member1059: this.member1135()
        };
    };
    e.prototype.member1145 = function () {
        return {
            member1058: this.member1136(),
            member1059: this.member1136()
        };
    };
    e.prototype.member1146 = function (m, k, j) {
        var i = new Uint8Array(m);
        for (var o = k + j - 1; o >= k; o--) {
            this.member1044[this.member1045++] = i[o];
        }
    };
    e.prototype.member1147 = function (m, k, j) {
        var i = new Uint8Array(m);
        for (var o = k; o < k + j; o++) {
            this.member1044[this.member1045++] = i[o] + 128 & 255;
        }
    };
    e.prototype.member1148 = function (m, k, j) {
        var i = new Uint8Array(m);
        for (var o = k + j - 1; o >= k; o--) {
            this.member1044[this.member1045++] = i[o] + 128 & 255;
        }
    };
    e.prototype.member1149 = function (n, m, k) {
        var j = new Uint8Array(n, m, k);
        for (var i = k - 1; i >= 0; i--) {
            j[i] = this.member1044[this.member1045++];
        }
    };
    e.prototype.member1150 = function (n, m, k) {
        var j = new Uint8Array(n, m, k);
        for (var i = 0; i < k; i++) {
            j[i] = this.member1044[this.member1045++] - 128 & 255;
        }
    };
    e.prototype.member1151 = function (n, m, k) {
        var j = new Uint8Array(n, m, k);
        for (var i = k - 1; i >= 0; i--) {
            j[i] = this.member1044[this.member1045++] - 128 & 255;
        }
    };
    var d = function (i, j, k) {
        return new e(i, j, k);
    };
    d.member1152 = function (j, i) {
        return j.length + (i ? 1 : 0) + 1;
    };
    d.member1153 = function (i) {
        return i.length * 2 + 2;
    };
    return d;
}();