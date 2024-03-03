import { Class89 } from 'Class89.js';
import { Class91 } from 'Class91.js';
import { Class93 } from 'Class93.js';
import { Class90 } from 'Class90.js';
import { Class94 } from 'Class94.js';
export var Class95 = function () {
    var c = 1024 * 1024;
    var e = 200 * c;
    var b = 0.25;
    var a = 2 * 512 * c;
    var d = Class89();
    d.member804 = 0;
    d.member805 = d.add(Class91(0, Class93.member797));
    d.member806 = d.add(Class91(1, Class93.member797));
    d.member807 = d.add(Class91(2, Class93.member795, true));
    d.member808 = d.add(Class91(3, Class93.member796, true));
    d.member809 = d.add(Class91(5, Class93.member796));
    d.member810 = d.add(Class91(7, Class93.member797));
    d.member811 = d.add(Class91(8, Class93.member797, true));
    d.member812 = d.add(Class91(10, Class93.member795));
    d.member813 = d.add(Class91(12, Class93.member795, true, undefined, false, 1 << 16));
    d.member814 = d.add(Class91(13, Class93.member795));
    d.member815 = d.add(Class91(14));
    d.member816 = d.add(Class91(16, Class93.member795, true));
    d.member817 = d.add(Class91(17, Class93.member795, true));
    d.member818 = d.add(Class91(18, Class93.member795, true));
    d.member819 = d.add(Class91(19, Class93.member795, true));
    d.member820 = d.add(Class91(20, Class93.member795, true));
    d.member821 = d.add(Class91(21, Class93.member795, true));
    d.member822 = d.add(Class91(22, Class93.member795, true));
    d.member823 = d.add(Class91(23, undefined, true));
    d.member824 = d.add(Class91(24, Class93.member796, true));
    d.member825 = d.add(Class91(25, Class93.member796, true));
    d.member826 = d.add(Class91(26, Class93.member796));
    d.member827 = d.add(Class91(27, Class93.member796));
    d.member828 = d.add(Class91(28, Class93.member795));
    d.member829 = d.add(Class91(29, Class93.member796));
    d.member830 = d.add(Class91(30));
    d.member831 = d.add(Class91(31));
    d.member832 = d.add(Class91(32));
    d.member833 = d.add(Class91(33, undefined, true));
    d.member834 = d.add(Class91(34));
    d.member835 = d.add(Class91(35, undefined, true));
    d.member836 = d.add(Class91(40, undefined, false, undefined, true));
    d.member837 = d.add(Class91(42, undefined, false));
    d.member838 = d.add(Class91(43, Class93.member797, false, Class90.member779));
    d.member839 = d.add(Class91(44, Class93.member797, false, Class90.member779));
    d.member836.member786(150000);
    d.member836.member788(2048 * c);
    d.member772(function (t) {
        if (t === undefined) {
            return;
        }
        if (d.getByID(0).member787() === undefined) {
            return;
        }
        d.member830.member788(0);
        d.member831.member788(0);
        d.member832.member788(0);
        d.member833.member788(0);
        d.member834.member788(0);
        d.member835.member788(0);
        var h = 4294967295;
        var m = 0;
        var j = {};
        for (var i = d.member776(); i !== undefined; i = d.member777()) {
            i.member774(undefined);
            if (i === d.member836) {
                continue;
            }
            var r = i.member787();
            if (r === undefined || r === 0) {
                continue;
            }
            m += r;
            var n = i.member780();
            if (n === undefined) {
                n = h;
            }
            if (j[n] === undefined) {
                j[n] = r;
            } else {
                j[n] += r;
            }
        }
        d.member836.member774(0);
        d.member804 = 0;
        var k = 0;
        for (var n = Class93.member796; n <= Class93.member797; n++) {
            k += j[n];
        }
        k += j[h];
        Class94.member801 = Math.ceil((j[Class93.member795] + k * b) / c);
        Class94.member802 = Math.ceil((m + e + a) / c);
        if (Class94.member803 < Class94.member802) {
            Class94.member803 = Class94.member802;
        }
        if (t === Class94.member799) {
            t = Class94.member801;
        } else if (t === Class94.member798) {
            t = Class94.member802;
        } else if (t === Class94.member800) {
            t = Class94.member803;
        }
        var q = t * c;
        if (q > m) {
            var o = q - m;
            if (o > a) {
                d.member804 = a;
            }
            q -= d.member804;
            var o = q - m;
            if (o > e) {
                d.member836.member774(o);
            }
            return;
        }
        var s = 0;
        var g = (q - j[Class93.member795]) / k;
        if (g < b) {
            if (false) {
            }
            g = b;
        }
        for (var i = d.member776(); i !== undefined; i = d.member777()) {
            if (i === d.member836 || i.member787() === undefined) {
                continue;
            }
            if (i.member780() !== Class93.member795) {
                i.member774(Math.floor(i.member787() * g));
            }
        }
    });
    return d;
}();