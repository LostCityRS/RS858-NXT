import { Class315 } from 'Class315.js';
import { Class423 } from 'Class423.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
import { Class299 } from 'Class299.js';
export var Class771 = function () {
    var c = {};
    var a;
    var q = false;
    c.member10389 = function (r) {
        q = r;
    };
    c.member10106 = function () {
        q = !q;
    };
    c.member9278 = function () {
        return q;
    };
    var k = 0;
    var g = 0;
    var i = 0;
    var o = 0;
    var n = 'Disconnected';
    c.member10213 = function (r) {
        n = r;
    };
    var m = 'Disconnected';
    c.member10212 = function (r) {
        m = r;
    };
    var j = 'Disconnected';
    c.member10390 = function (r) {
        j = r;
    };
    var h = 'Disconnected';
    var e = '100%';
    c.member25 = function (r) {
        a = r;
        q = a.clientParameters.member8025.value !== Class315.member3696 && a.clientParameters.member8025.value !== Class315.member3697;
    };
    var d = 0;
    var b = 0;
    c.setPos = function (r, s) {
        d = r;
        b = s + 15;
    };
    c.member486 = function () {
        if (!q) {
            return;
        }
        var r = 2;
        var x = Class423.member6115.member6106.member1204;
        if (x === -1) {
            return;
        }
        var t = a.member7137.member3639(x);
        if (t === NULL) {
            return;
        }
        var v = t.member3598().member3599() + t.member3598().member3603();
        var s = b;
        var y = 'FPS : ' + k;
        Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, 4294902015, 255);
        s += v + r;
        if (Class299.member3576() > 0) {
            y = (Class299.member3575() ? 'Filtered FPS' : 'FPS') + ' over ' + Class299.member3576() + ' seconds: Min: ' + g + ', Max: ' + i + ', Mean: ' + o;
            Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, 4294902015, 255);
            s += v + r;
        }
        y = 'Game : ' + n;
        Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, 4294902015, 255);
        s += v + r;
        y = 'Lobby : ' + m;
        Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, 4294902015, 255);
        s += v + r;
        y = 'Cache : ' + j;
        Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, 4294902015, 255);
        s += v + r;
        y = 'Preload : ' + h;
        Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, 4294902015, 255);
        s += v + r;
        y = 'Build state : ' + e;
        var u = 4294902015;
        if (e !== '100%') {
            u = 4278190335;
        }
        Class302.member3601(y, d, s, t, Class302.member3609(y, t), Class301.member3596, u, 255);
    };
    c.member487 = function () {
        if (!q) {
            return;
        }
        k = Math.floor(Class299.member3573());
        o = Math.floor(Class299.member3580());
        g = Math.floor(Class299.member3578());
        i = Math.floor(Class299.member3579());
        j = a.member995.member3266();
        h = a.member9751.member3266();
        e = true ? a.member6101.member8788() + '%' : {};
    };
    return c;
}();