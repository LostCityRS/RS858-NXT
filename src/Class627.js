import { Class421 } from 'Class421.js';
import { Class513 } from 'Class513.js';
import { Class417 } from 'Class417.js';
import { Class626 } from 'Class626.js';
import { Class86 } from 'Class86.js';
import { Class291 } from 'Class291.js';
export var Class627 = function () {
    var b = {};
    var a;
    b.member25 = function (d) {
        a = d;
    };
    Class421.member5252.member867 = function (d) {
        throw new Error('1358 ');
    };
    Class421.member5241.member867 = function (d) {
        throw new Error('1359 ');
    };
    Class421.member5760.member867 = function (d) {
        throw new Error('1360 ');
    };
    Class421.member5233.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        if (Class513.member8333(d) === undefined) {
            throw new Error('1361 ' + d + '1361 ');
        }
        a.member6444.member8385();
        c(d);
    };
    Class421.member5234.member867 = function (g) {
        a.member6444.member8386();
        var e = a.member6444.member8392();
        for (var d = 0; d < e.length; d++) {
            e[d].member4695().member6199();
        }
        a.member6444.member8384();
        e = a.member6444.member8392();
        for (var d = 0; d < e.length; d++) {
            e[d].member4808(false);
        }
        a.member9215.member9378();
    };
    Class421.member5748.member867 = function (e) {
        var d = a.member6444.member6445();
        if (d !== null && d.member4836()) {
            e.member6100[e.member6099++] = 1;
        } else {
            e.member6100[e.member6099++] = 0;
        }
    };
    Class421.member5240.member867 = function (i) {
        i.member6099 -= 5;
        var k = i.member6100[i.member6099] / 100;
        var j = i.member6100[i.member6099 + 1] / 100;
        var h = i.member6100[i.member6099 + 2];
        var e = i.member6100[i.member6099 + 3];
        var d = i.member6100[i.member6099 + 4];
        var g = a.member6444.member6445();
        if (g !== null) {
            g.member8350(k, j, h, e, d);
        }
    };
    Class421.member5235.member867 = function (d) {
        d.member6099 -= 2;
        var e = d.member6100[d.member6099];
        var g = d.member6100[d.member6099 + 1];
        if (e === 0) {
            Class417.member4801(g);
        } else if (e === 1) {
            Class417.member4802(g);
        } else if (e === 2) {
            Class417.member4803(g);
        } else if (false) {
        }
    };
    Class421.member5750.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        if (e === 0) {
            d.member6100[d.member6099++] = Class417.member4798();
        } else if (e === 1) {
            d.member6100[d.member6099++] = Class417.member4799();
        } else if (e === 2) {
            d.member6100[d.member6099++] = Class417.member4800();
        } else {
            if (false) {
            }
            d.member6100[d.member6099++] = -1;
        }
    };
    Class421.member5237.member867 = function (g) {
        g.member6099 -= 2;
        var e = g.member6100[g.member6099];
        var d = g.member6100[g.member6099 + 1];
        if (e === Class626.member9356) {
            a.member9215.member9367(d);
        } else if (e === Class626.member9357) {
            a.member9215.member9368(d);
        } else if (e === Class626.member9358) {
            a.member9215.member9369(d);
        } else if (false) {
        }
    };
    Class421.member5752.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = undefined;
        if (e === Class626.member9356) {
            d = a.member9215.getTextFontIDSmall();
        } else if (e === Class626.member9357) {
            d = a.member9215.getTextFontIDMedium();
        } else if (e === Class626.member9358) {
            d = a.member9215.getTextFontIDLarge();
        } else if (false) {
        }
        if (d === undefined) {
            g.member6100[g.member6099++] = -1;
        } else {
            g.member6100[g.member6099++] = d;
        }
    };
    Class421.member5236.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var d = e.member6100[e.member6099 + 1];
        a.member9215.member9365(g, d);
    };
    Class421.member5751.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member9215.member9366(e);
    };
    Class421.member5749.member867 = function (g) {
        g.member6099 -= 3;
        var e = a.member6444.member6445();
        var h = g.member6100[g.member6099];
        var d = g.member6100[g.member6099 + 1];
        var i = g.member6100[g.member6099 + 2];
        var j = a.member9215.member9417(h, d, i);
        if (j === undefined) {
            if (false) {
            }
            j = null;
        }
        g.member6142[g.member6143++] = j;
    };
    Class421.member5753.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099] * Class86.member718;
        var h = e.member6100[e.member6099 + 1] * Class86.member718;
        var g = Class626.member9416(d, 0, h);
        e.member6100[e.member6099++] = Math.floor(g.x);
        e.member6100[e.member6099++] = Math.floor(g.y);
    };
    Class421.member5766.member867 = function (i) {
        i.member6099 -= 2;
        var j = false;
        var h = i.member6100[i.member6099];
        var g = i.member6100[i.member6099 + 1];
        var h = Class291(0, h >> 14 & 16383, h & 16383);
        var e = Class513.member8330(h);
        if (e === NULL) {
            if (false) {
            }
            i.member6099 += 2;
            return true;
        }
        for (var d = 0; d < e.length; d++) {
            if (e[d].member6191() === g) {
                j = true;
                break;
            }
        }
        if (j) {
            i.member6100[i.member6099++] = 1;
        } else {
            i.member6100[i.member6099++] = 0;
        }
    };
    Class421.member5251.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var h = e.member6100[e.member6099 + 1] === 0;
        var d = a.member2970.getConfigType(Js5ConfigGroup.MELTYPE.member1204, g);
        if (d === NULL) {
            if (false) {
            }
            e.member6099 += 2;
            return true;
        }
        a.member9215.member9361(g, h);
    };
    Class421.member5250.member867 = function (d) {
        d.member6099 -= 2;
        var e = d.member6100[d.member6099];
        var g = d.member6100[d.member6099 + 1] === 0;
        a.member9215.member9363(e, g);
    };
    Class421.member5248.member867 = function (d) {
        var e = d.member6100[--d.member6099] === 0;
        a.member9215.member9359(e);
    };
    Class421.member5776.member867 = function (h) {
        h.member6099 -= 2;
        var i = h.member6100[h.member6099];
        var e = a.member2970.getConfigType(Js5ConfigGroup.MELTYPE.member1204, i);
        if (e === NULL) {
            if (false) {
            }
            h.member6099 += 2;
            return true;
        }
        var g = Class291(h.member6100[h.member6099 + 1]);
        var d = a.member9215.member9424(e, g);
        if (d === undefined) {
            h.member6100[h.member6099++] = -1;
        } else {
            h.member6100[h.member6099++] = d.member3462();
        }
    };
    Class421.member5246.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member2970.getConfigType(Js5ConfigGroup.MELTYPE.member1204, g);
        if (d === NULL) {
            if (false) {
            }
            e.member6099++;
            return true;
        }
        a.member9215.member9420(g);
    };
    Class421.member5249.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        var g = a.member9215.member9421(e);
    };
    Class421.member6016.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        a.member9215.member9370(d);
    };
    Class421.member6017.member867 = function (d) {
        a.member9215.member9370(a.member9215.member9355);
    };
    Class421.member6018.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        a.member9215.member9371(e);
    };
    Class421.member6019.member867 = function (d) {
        a.member9215.member9371(a.member9215.member9354);
    };
    Class421.member6020.member867 = function (d) {
        var e = d.member6100[--d.member6099] === 1;
        a.member9215.member9372(e);
    };
    Class421.member6021.member867 = function (d) {
        a.member9215.member9373();
    };
    Class421.member5761.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = Class513.member8333(e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        if (d === undefined) {
            g.member6100[g.member6099++] = 0;
        } else {
            g.member6100[g.member6099++] = d.member6194().member3462();
        }
    };
    Class421.member5762.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = Class513.member8333(e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        if (d === undefined) {
            g.member6100[g.member6099++] = 0;
            g.member6100[g.member6099++] = 0;
        } else {
            var h = d.member6198();
            g.member6100[g.member6099++] = h.member6163 - h.member6162;
            g.member6100[g.member6099++] = h.member6165 - h.member6164;
        }
    };
    Class421.member5763.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = Class513.member8333(e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        if (d === undefined) {
            g.member6100[g.member6099++] = 0;
            g.member6100[g.member6099++] = 0;
            g.member6100[g.member6099++] = 0;
            g.member6100[g.member6099++] = 0;
        } else {
            var h = d.member6198(true);
            g.member6100[g.member6099++] = h.member6162;
            g.member6100[g.member6099++] = h.member6164;
            g.member6100[g.member6099++] = h.member6163;
            g.member6100[g.member6099++] = h.member6165;
        }
    };
    Class421.member5767.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = Class513.member8333(e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        if (d === undefined) {
            g.member6100[g.member6099++] = -1;
        } else {
            g.member6100[g.member6099++] = d.member6197();
        }
    };
    Class421.member5775.member867 = function (e) {
        var d = a.member6444.member6445();
        e.member6100[e.member6099++] = d !== null ? d.member4695().member6191() : -1;
    };
    Class421.member5774.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member2970.getConfigType(Js5ConfigGroup.MELTYPE.member1204, g);
        if (d === NULL) {
            if (false) {
            }
            e.member6099++;
            return true;
        }
        var h = a.member9215.member9362(g);
        e.member6100[e.member6099++] = h ? 0 : 1;
    };
    Class421.member5773.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        var g = a.member9215.member9364(e);
        d.member6100[d.member6099++] = g ? 0 : 1;
    };
    Class421.member5772.member867 = function (d) {
        d.member6100[d.member6099++] = a.member9215.member9360() ? 0 : 1;
    };
    Class421.member5238.member867 = function (g) {
        g.member6099 -= 2;
        var e = g.member6100[g.member6099];
        var d = g.member6100[g.member6099 + 1] === 1;
        if (e < 0 || e > 2) {
            if (false) {
            }
            return;
        }
        a.member9215.member9374(e, d);
    };
    Class421.member5754.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        if (d < 0 || d > 2) {
            if (false) {
            }
            e.member6100[e.member6099++] = 0;
            return;
        }
        e.member6100[e.member6099++] = a.member9215.member9375(d) ? 1 : 0;
    };
    Class421.member5239.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var d = e.member6100[e.member6099 + 1] === 1;
        if (!a.member9215.member9376(g, d)) {
            if (false) {
            }
            return;
        }
    };
    Class421.member5755.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member9215.member9377(g);
        if (d === undefined) {
            if (false) {
            }
            d = false;
        }
        e.member6100[e.member6099++] = d ? 1 : 0;
    };
    Class421.member5770.member867 = function (e) {
        var d = Class291(e.member6100[--e.member6099]);
        var g = a.member6444.member6445().member4695().member6202(d);
        if (g === undefined) {
            e.member6100[e.member6099++] = -1;
            e.member6100[e.member6099++] = -1;
        } else {
            e.member6100[e.member6099++] = g.x;
            e.member6100[e.member6099++] = g.member756;
        }
    };
    Class421.member5757.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var e = Class291(0, e >> 14 & 16383, e & 16383);
        var d = Class513.member8331(e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        if (d === undefined) {
            g.member6100[g.member6099++] = -1;
        } else {
            g.member6100[g.member6099++] = d.member6191();
        }
    };
    Class421.member5758.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = Class513.member8333(e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        if (d === undefined || d.member6193() === undefined) {
            g.member6142[g.member6143++] = '';
        } else {
            g.member6142[g.member6143++] = d.member6193();
        }
    };
    Class421.member5759.member867 = function (d) {
        throw new Error('1362 ');
    };
    Class421.member5771.member867 = function (d) {
        throw new Error('1363 ');
    };
    Class421.member5769.member867 = function (d) {
        throw new Error('1364 ');
    };
    Class421.member5756.member867 = function (d) {
        throw new Error('1365 ');
    };
    Class421.member5768.member867 = function (d) {
        d.member6100[d.member6099++] = a.member9215.member1540() ? 1 : 0;
    };
    Class421.member5244.member867 = function (d) {
        throw new Error('1366 ');
    };
    Class421.member5243.member867 = function (d) {
        throw new Error('1367 ');
    };
    Class421.member6015.member867 = function (d) {
        throw new Error('1368 ');
    };
    Class421.member6014.member867 = function (d) {
        throw new Error('1369 ');
    };
    Class421.member5765.member867 = function (d) {
        var e = a.member9215.member9423();
        if (e === undefined) {
            d.member6100[d.member6099++] = -1;
            d.member6100[d.member6099++] = -1;
        } else {
            d.member6100[d.member6099++] = e.member9412;
            d.member6100[d.member6099++] = e.member9413;
        }
    };
    Class421.member5764.member867 = function (d) {
        var e = a.member9215.member9422();
        if (e === undefined) {
            d.member6100[d.member6099++] = -1;
            d.member6100[d.member6099++] = -1;
        } else {
            d.member6100[d.member6099++] = e.member9412;
            d.member6100[d.member6099++] = e.member9413;
        }
    };
    Class421.member5242.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        c(d);
    };
    Class421.member5245.member867 = function (g) {
        g.member6099 -= 2;
        var d = g.member6100[g.member6099];
        var e = g.member6100[g.member6099 + 1];
        var e = Class291(e);
        c(d, e);
    };
    Class421.member5247.member867 = function (g) {
        g.member6099 -= 2;
        var d = g.member6100[g.member6099];
        var e = g.member6100[g.member6099 + 1];
        var e = Class291(e);
        c(d, e);
    };
    var c = function (d, k) {
        var h = a.member6101.member6102();
        var j = a.member6444.member8394(d, true);
        if (!j && k !== undefined) {
            j = a.member6444.member8395(k);
        }
        if (!j) {
            if (!a.member6444.member8387(d, h, false, true)) {
                if (k !== undefined) {
                    if (false) {
                    }
                    if (!a.member6444.member8390(member9413, h, false, true)) {
                        if (false) {
                        }
                        return;
                    }
                }
            }
        }
        var g = a.member6444.member6445();
        g.member8346(true);
        g.member4808(true);
        var e = Class513.member8333(d);
        if (e === undefined || e === NULL) {
            if (false) {
            }
            return;
        }
        var i = g.member6102();
        i.member1008(e.member6195(), 0);
        a.member9215.member4086(g);
    };
    return b;
}();