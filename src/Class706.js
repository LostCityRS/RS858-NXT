import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class93 } from 'Class93.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class443 } from 'Class443.js';
import { Priority } from 'Class96.js';
import { ObjType } from 'Class705.js';
import { Class704 } from 'Class704.js';
export var ObjTypeList = function (j) {
    var q = {};
    var t = null;
    var r = null;
    var m;
    q.member8695 = function (E) {
        m = E;
        d();
        C();
    };
    var o = null;
    q.member7535 = function () {
        return o;
    };
    var g = 0;
    q.member2975 = function () {
        return g;
    };
    var e = null;
    q.getVarTypeProvider = function () {
        return e;
    };
    var k = Class105({ member895: 64 });
    var n = Class105({
        member895: 1000,
        member898: function (E) {
            E.member510();
        },
        member897: function (E) {
            E.member511();
        }
    });
    var h = Class105({ member895: 1000 });
    var i = undefined;
    q.member9594 = function () {
        return i.length;
    };
    q.member9595 = function (E) {
        return i[E];
    };
    var s = 0;
    var a = 0;
    var A = function () {
        return s >= g && g !== 0;
    };
    q.member9593 = A;
    var x = function () {
        if (i === undefined) {
            i = new Array(g);
        }
        if (a === 2) {
            return;
        }
        if (a === 0) {
            var H = o.member1439(Class95.member819).member3896() + 1;
            for (var F = s, G = 0; F < H && G++ < 1; F++) {
                if (o.member1438(Class95.member819, F, Class93.member796)) {
                    if (F === s) {
                        s++;
                    }
                }
            }
            if (s < H) {
                return;
            }
            a = 1;
            s = 0;
        }
        if (a === 1) {
            for (var F = s, G = 0; F < g && G++ < 200; F++) {
                if (i[F] === undefined) {
                    var E = B(F);
                    if (E === NULL) {
                        continue;
                    }
                    if (E !== undefined) {
                        if (E.getCertTemplate() === -1 && E.getLentTemplate() === -1 && E.getBoughtTemplate() === -1 && E.getDummyItem() === 0) {
                            i[F] = {
                                id: E.getID(),
                                name: E.getName(),
                                getStockMarket: E.getStockMarket()
                            };
                        }
                    }
                }
                if (F === s) {
                    s++;
                }
            }
            if (s < g) {
                return;
            }
            a = 2;
        }
    };
    q.member9983 = x;
    var C = function () {
        i = undefined;
        a = 0;
        s = 0;
    };
    var z;
    var b;
    q.member6822 = undefined;
    q.member6821 = undefined;
    q.member6827 = undefined;
    if (j.member2739 !== undefined && j.member3992 !== undefined && j.member9984 !== undefined && j.member995 !== null && j.member2970 !== undefined) {
        t = j.member2739;
        r = j.member3992;
        m = j.member9984;
        o = j.member995;
        e = j.member2970;
        var v = o.member1439(Class95.member819).member3896();
        g = v * Js5ConfigGroup.getFileBits(Js5ConfigGroup.OBJTYPE.fileBits) + o.member1439(Class95.member819).member1440(v);
        z = [
            null,
            null,
            Class443.member6826[r.id],
            null,
            null,
            Class443.member6944[r.id]
        ];
        b = [
            null,
            null,
            null,
            null,
            Class443.member6827[r.id]
        ];
        q.member6822 = Class443.member6822[r.id];
        q.member6821 = Class443.member6821[r.id];
        q.member6827 = Class443.member6827[r.id];
    } else {
        throw new Error('1320 ');
    }
    var B = function (F) {
        var H = k.find(F);
        if (H === null) {
            var K = o.getFile(Class95.member819, Js5ConfigGroup.getGroupID(F, Js5ConfigGroup.OBJTYPE.fileBits), Js5ConfigGroup.getFileID(F, Js5ConfigGroup.OBJTYPE.fileBits), Priority.member840, Js5ConfigGroup.OBJTYPE.priority);
            if (K === null) {
                return null;
            }
            H = ObjType(F, q, z.slice(0), b.slice(0), r.id);
            if (K !== undefined) {
                H.decode(K);
            }
            H.postDecode();
            if (H.getCertTemplate() !== -1) {
                var L = B(H.getCertTemplate());
                var M = B(H.getCertLink());
                if (L === null || M === null) {
                    return null;
                }
                H.member9982(Class704.member9931, L, M, undefined);
            }
            if (H.getShardTemplate() !== -1) {
                var L = B(H.getShardTemplate());
                var M = B(H.getShardLink());
                if (L === null || M === null) {
                    return null;
                }
                H.member9982(Class704.member9934, L, M, q.member6827);
            }
            if (H.getLentTemplate() !== -1) {
                var L = B(H.getLentTemplate());
                var M = B(H.getLentLink());
                if (L === null || M === null) {
                    return null;
                }
                H.member9982(Class704.member9932, L, M, q.member6821);
            }
            if (H.getBoughtTemplate() !== -1) {
                var L = B(H.getBoughtTemplate());
                var M = B(H.getBoughtLink());
                if (L === null || M === null) {
                    return null;
                }
                H.member9982(Class704.member9933, L, M, q.member6822);
            }
            if (!m && H.members) {
                H.setTeam(0);
                H.member9968(z);
                H.member9969(b);
                H.setStockMarket(false);
                H.setQuests(null);
                var I = H.getParams();
                if (I !== null) {
                    var G = true;
                    for (var J in I) {
                        if (I[J] === undefined) {
                            continue;
                        }
                        var E = e.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, parseInt(J));
                        if (E === NULL) {
                            return NULL;
                        }
                        if (E.member9779()) {
                            delete I[J];
                        } else {
                            G = false;
                        }
                    }
                    if (G) {
                        H.setParams(null);
                    }
                }
            }
            k.put(H, 1, F);
        }
        return H;
    };
    q.list = B;
    var D = function () {
        return member8693;
    };
    q.getAllowMembers = D;
    q.member9978 = function () {
        return n;
    };
    var y = q.member9978;
    q.member9979 = function () {
        return h;
    };
    var u = q.member9979;
    var d = function () {
        k.member301();
        n.member301();
        h.member301();
    };
    q.member8696 = d;
    var c = function (E) {
        k.member905(E);
        n.member905(E);
        h.member905(E);
    };
    q.member8697 = c;
    j = undefined;
    return q;
};