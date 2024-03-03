import { Class421 } from 'Class421.js';
import { Class291 } from 'Class291.js';
import { Class68 } from 'Class68.js';
import { Class317 } from 'Class317.js';
import { Class479 } from 'Class479.js';
import { Class415 } from 'Class415.js';
export var Class559 = function () {
    var c = {};
    var a;
    var b;
    var d;
    var e = function (h, i, g) {
        a = h;
        b = i;
        d = g;
    };
    c.member25 = e;
    Class421.member5489.member867 = function (g) {
        g.member6100[g.member6099++] = b.member7139();
    };
    Class421.member5534.member867 = function (g) {
        g.member6100[g.member6099++] = a.clientParameters.member7138.value.id;
    };
    Class421.member5522.member867 = function (g) {
        g.member6100[g.member6099++] = d.member7227().member7228();
    };
    Class421.member5550.member867 = function (h) {
        var g = h.member6142[--h.member6143];
        var i = a.clientParameters.member8502.value;
        if (i !== undefined && i === g) {
            h.member6100[h.member6099++] = 1;
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5540.member867 = function (g) {
        g.member6100[g.member6099++] = a.clientParameters.member8779.value ? 1 : 0;
    };
    Class421.member5817.member867 = function (g) {
        g.member6100[g.member6099++] = a.clientParameters.member8275.value;
        g.member6100[g.member6099++] = a.clientParameters.member8274.value;
    };
    Class421.member5818.member867 = function (g) {
        g.member6100[g.member6099++] = a.clientParameters.member8780.value;
        g.member6100[g.member6099++] = a.clientParameters.member8781.value;
    };
    Class421.member5521.member867 = function (g) {
        g.member6100[g.member6099++] = a.member8782().member8783();
    };
    Class421.member5588.member867 = function (g) {
        g.member6100[g.member6099++] = a.clientParameters.member8784.value;
    };
    Class421.member5514.member867 = function (g) {
        g.member6100[g.member6099++] = a.member8782().member8785() ? 1 : 0;
    };
    Class421.member5530.member867 = function (g) {
        g.member6100[g.member6099++] = a.member8782().member8786() ? 1 : 0;
    };
    Class421.member5515.member867 = function (h) {
        var g = h.member6100[--h.member6099];
        if (true) {
            if (g !== -1) {
                var i = Class291(g);
                a.member6101.member8787(i);
            }
        } else {
        }
    };
    Class421.member5516.member867 = function (g) {
        g.member6100[g.member6099++] = a.member6101.member8788();
    };
    if (true) {
        Class421.member6008.member867 = function (g) {
            var h = g.member6100[--g.member6099] === 1;
            Class68.member470(h);
        };
        Class421.member6009.member867 = function (g) {
            g.member6100[g.member6099++] = Class68.member478();
        };
        Class421.member6010.member867 = function (g) {
            var h = g.member6100[--g.member6099];
            Class68.member471(h * 10);
        };
    } else {
    }
    Class421.member5527.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8191() ? 1 : 0;
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5899.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined && g.member8175() && !g.member8181()) {
            h.member6100[h.member6099++] = 1;
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5900.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = Math.floor(g.member8195() / 60000);
            h.member6100[h.member6099++] = Math.floor((g.member8195() - Date.now() - a.member7135().member8219()) / 60000);
            h.member6100[h.member6099++] = g.member8193() ? 1 : 0;
        } else {
            h.member6100[h.member6099++] = 0;
            h.member6100[h.member6099++] = 0;
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5901.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8185();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5902.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8187();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5903.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8208();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5904.member867 = function (i) {
        var h = a.member7135();
        var g = '';
        if (h !== undefined) {
            var j = h.member8211();
            if (j !== -1) {
                g = Class317.member3730(j);
            }
        }
        i.member6142[i.member6143++] = g;
    };
    Class421.member5905.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8189();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5906.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8197();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5907.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8199();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5908.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8179() ? 1 : 0;
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5909.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8177() ? 1 : 0;
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5910.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8215();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5911.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8213();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5912.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8201();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5913.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8203();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5727.member867 = function (h) {
        var g = a.member7135();
        var i = undefined;
        if (g !== undefined) {
            i = a.member7135().member3009();
        }
        if (i === undefined) {
            i = '';
        }
        h.member6142[h.member6143++] = i;
    };
    Class421.member5523.member867 = function (g) {
        g.member6100[g.member6099++] = a.member6116.member8789().member8790();
    };
    Class421.member5524.member867 = function (g) {
        g.member6100[g.member6099++] = a.member6116.member8789().member8791();
    };
    Class421.member5528.member867 = function (g) {
        g.member6100[g.member6099++] = a.member7135().member6453().member8016();
    };
    Class421.member5529.member867 = function (i) {
        var h = a.member7135();
        if (h !== undefined) {
            var k = h.member6453();
            if (k !== undefined) {
                var j = k.member7136();
                if (j !== null) {
                    var g = j.member7917(g);
                    i.member6100[i.member6099++] = g;
                    return;
                }
            } else {
                i.member6100[i.member6099++] = h.member8217();
                return;
            }
        }
        i.member6100[i.member6099++] = -1;
    };
    Class421.member5520.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = g.member8026();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5525.member867 = function (h) {
        var g = a.member7135();
        var i = 0;
        if (g !== undefined && g.member8174()) {
            h.member6100[h.member6099++] = 1;
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5526.member867 = function (h) {
        var g = a.member7135();
        var i = 0;
        if (g !== undefined && g.member8174()) {
            h.member6100[h.member6099++] = g.member8172();
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    if (true) {
        Class421.member4922.member867 = function (j) {
            j.member6099 -= 2;
            var m = j.member6100[j.member6099];
            var h = j.member6100[j.member6099 + 1];
            var i = a.member7135();
            if (i === undefined) {
                return;
            }
            var n = i.member6453();
            var k = n === undefined ? null : n.member7136();
            if (k === null) {
                return;
            }
            for (var g = 0; g < Class479.member7664.length; g++) {
                if (Class479.member7664[g] === m) {
                    k.member7913(g, h);
                    return;
                }
            }
            for (var g = 0; g < Class479.member7665.length; g++) {
                if (Class479.member7665[g] === m) {
                    k.member7913(g, h);
                    return;
                }
            }
        };
    } else {
    }
    Class421.member4923.member867 = function (h) {
        h.member6099 -= 2;
        var j = h.member6100[h.member6099];
        var k = h.member6100[h.member6099 + 1];
        var g = a.member7135();
        if (g === undefined) {
            return;
        }
        var m = g.member6453();
        var i = m === undefined ? null : m.member7136();
        if (i === null) {
            return;
        }
        i.member7914(j, k);
    };
    Class421.member4924.member867 = function (h) {
        h.member6099 -= 2;
        var k = h.member6100[h.member6099];
        var i = h.member6100[h.member6099 + 1];
        var g = a.member7135();
        if (g === undefined) {
            return;
        }
        var m = g.member6453();
        var j = m === undefined ? null : m.member7136();
        if (j === null) {
            return;
        }
        j.member7915(k, i);
    };
    Class421.member4925.member867 = function (i) {
        var g = i.member6100[--i.member6099];
        g = g === 1 ? 1 : 0;
        var h = a.member7135();
        if (h === undefined) {
            return;
        }
        var k = h.member6453();
        var j = k === undefined ? null : k.member7136();
        if (j === null) {
            return;
        }
        j.member7916(g);
    };
    Class421.member4926.member867 = function (h) {
        h.member6099 -= 2;
        var j = h.member6100[h.member6099];
        var k = h.member6100[h.member6099 + 1];
        var g = a.member7135();
        if (g === undefined) {
            return;
        }
        var m = g.member6453();
        var i = m === undefined ? null : m.member7136();
        if (i === null) {
            return;
        }
        i.member7918(j, k);
    };
    Class421.member5501.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = Class415.member4774(g.member6453().member7692());
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5549.member867 = function (h) {
        var g = a.member7135();
        if (g !== undefined) {
            h.member6100[h.member6099++] = Class415.member4774(g.member6453().member7692() >> AngleUtils.member4541);
        } else {
            h.member6100[h.member6099++] = 0;
        }
    };
    Class421.member5538.member867 = function (g) {
        g.member6100[g.member6099++] = 0;
    };
    Class421.member5999.member867 = function (h) {
        var g = a.member6444.member6445();
        if (g !== null) {
            h.member6100[h.member6099++] = g.member8345() ? 1 : 0;
            return;
        }
        h.member6100[h.member6099++] = 0;
    };
    return c;
}();