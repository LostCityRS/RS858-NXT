import { Class423 } from 'Class423.js';
import { Class303 } from 'Class303.js';
import { Class757 } from 'Class757.js';
import { Class501 } from 'Class501.js';
import { Class327 } from 'Class327.js';
import { Class132 } from 'Class132.js';
import { Class443 } from 'Class443.js';
import { Class68 } from 'Class68.js';
import { Class293 } from 'Class293.js';
import { Class4 } from 'Class4.js';
export var Class810 = function () {
    var e = {};
    var a;
    var d;
    var c = 0;
    var g = false;
    var b = function (k) {
        a = k;
        if (true) {
            d = a.member433.member3640;
            Class423.member25(a);
            Class303.member25(a.member433, a.member995, a.member7137);
        } else {
        }
    };
    e.member25 = b;
    var i = function (k) {
        Class757.member10221({
            member10222: function () {
                var m = k.member8260(Class501.member8168);
                m.member2698.member1106(a.member4480().member3967.getValue());
                m.member2698.member1104(Math.min(Math.floor(Class327.member3775(Class327.member406)), 255));
                m.member2698.member1104(Math.min(Math.floor(Class327.member3775(Class327.member3768)), 255));
                m.member2698.member1104(Math.min(Math.floor(Class327.member3775(Class327.member3767)), 255));
                m.member2698.member1105(Math.min(Math.floor(Class327.member3775(Class327.member3766)), 255));
                m.member2698.member1114(Math.min(Math.floor(Class327.member3775(Class327.member3769)), 65535));
                m.member2698.member1106(Math.min(Math.floor(Class327.member3775(Class327.member3765)), 255));
                m.member2698.member1104(Math.min(Math.floor(Class327.member3775(Class327.member502)), 255));
                k.member8261(m);
                if (false) {
                }
            }
        });
    };
    var h = function () {
        if (true) {
            Class423.member486();
            a.member433.member486();
            a.member433.member582(0, 0, a.member433.member588(), a.member433.member589());
            a.member433.member1344(0, 0, a.member433.member588(), a.member433.member589());
            if (true) {
                a.member4409.member78();
                a.member8366.member78();
                a.member6101.member7395(c, a.member6116.member7139());
                var k = a.member6444.member6445();
                if (k !== null) {
                    Class132.member1267(k.member6102());
                }
                if (Class327.member3770()) {
                    g = true;
                    Class303.member3635(Class303.member3634, Class443.member2313[a.clientParameters.member7138.value.id]);
                    Class327.member486();
                } else {
                    if (g) {
                        Class303.member3636(Class303.member3634);
                        a.member4480().member3980(a.member433, a.member6101.member6102());
                        i(a.member8252.member9083());
                        g = false;
                    }
                    a.member7619.member486(c);
                }
                if (a.member6101.member9076()) {
                    Class303.member3635(Class303.member3631, Class443.member6914[a.clientParameters.member7138.value.id] + a.member6101.member8788() + '%');
                } else {
                    Class303.member3636(Class303.member3631);
                }
                if (Class68.member477()) {
                    Class303.member3635(Class303.member3632, Class443.member6913[a.clientParameters.member7138.value.id] + Class68.member478() + '%');
                } else {
                    Class303.member3636(Class303.member3632);
                }
                if (Class68.member479()) {
                    Class303.member3635(Class303.member3633, Class443.member6912[a.clientParameters.member7138.value.id]);
                } else {
                    Class303.member3636(Class303.member3633);
                }
                Class303.member486();
                j();
            } else {
            }
            a.member433.member3854();
            c++;
            if (true) {
                if (a.member9767.member10378()) {
                    a.member9767.member10379(a.member433.member3876());
                }
                a.member433.member3875();
            } else {
            }
        } else {
        }
    };
    e.member486 = h;
    var j = function () {
        if (false) {
        }
        if (true) {
            var s = Class293.document.getElementById('gameactivity');
            if (s !== null && c % 20 === 0) {
                var n = Class4.member81();
                var m = 'Tex:' + Math.floor(n.member70 / 1024 / 1024) + ' (' + Math.floor(n.member71 / 1024 / 1024) + ',' + Math.floor(n.member72 / 1024 / 1024) + ')';
                var k = 'VBO:' + Math.floor(n.member73 / 1024 / 1024) + ' (' + Math.floor(n.member74 / 1024 / 1024) + ',' + Math.floor(n.member75 / 1024 / 1024) + ',' + Math.floor(n.member76 / 1024 / 1024) + ')';
                var o = 'FBO:' + Math.floor(n.member77 / 1024 / 1024) + ' (' + n.member83 + ')';
                var r = ' VAttArr: ' + a.member433.member3872() + ' enabled, ' + a.member433.member3873() + ' disabled';
                var q = ' OnCard: ' + m + ' ' + k + ' ' + o + ' MB (Entities: ' + n.member68 + ')';
                var t = ' Particles: ' + a.member433.member2062() + ' (' + a.member433.member1892() + ',' + a.member433.member3871() + ',' + a.member433.member3870() + ',' + a.member433.member3869() + ',' + a.member433.member2046() + ')';
                s.textContent = 'Batches: ' + a.member433.member3866() + '/' + a.member433.member3867() + ' Tris: ' + a.member433.member3868() + ' TexBinds: ' + a.member433.member3865() + t + q + r;
            }
        } else {
        }
    };
    return e;
}();