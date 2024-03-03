import { Class86 } from 'Class86.js';
import { Class310 } from 'Class310.js';
import { Class293 } from 'Class293.js';
import { Class41 } from 'Class41.js';
import { Class49 } from 'Class49.js';
import { Class263 } from 'Class263.js';
import { Class370 } from 'Class370.js';
import { Class105 } from 'Class105.js';
import { Class353 } from 'Class353.js';
import { Class347 } from 'Class347.js';
import { Class332 } from 'Class332.js';
import { Class95 } from 'Class95.js';
import { Class368 } from 'Class368.js';
import { Class351 } from 'Class351.js';
export var Class371 = function () {
    var ac = {};
    var N = false;
    var Q = true;
    var F = false;
    var I = false;
    var C = false;
    var q = false;
    var r = false;
    var j = false;
    var ad = false;
    var ai = false;
    var S = false;
    var m;
    var n;
    var V = [];
    var o = false;
    var s;
    var T;
    var ae;
    var E = 4000;
    var c = 2;
    var A = 7 * Class86.member718;
    var ag = 15 * Class86.member718;
    var Y = false;
    var O = null;
    var G = false;
    ac.member4022 = function (am, aj, an, ak, al) {
        Y = am;
        E = aj;
        c = an;
        A = ak;
        ag = al;
    };
    ac.member4023 = function (ak, aj, al) {
        if (!S) {
            return;
        }
        if (aj !== undefined && aj !== null) {
            aj.member4024 = ak;
            if (al !== 0) {
                aj.member3681(al, true);
            }
            U(aj);
        }
    };
    ac.member4025 = function (al) {
        if (!S) {
            return;
        }
        for (var aj = 0; aj < k.length; aj++) {
            var ak = k[aj];
            if (ak.member4024 !== undefined && ak.member4024 == al) {
                if (!ak.member3682()) {
                    ak.start();
                }
            }
        }
    };
    ac.member4026 = function (al) {
        if (!S) {
            return;
        }
        for (var aj = 0; aj < k.length; aj++) {
            var ak = k[aj];
            if (ak.member4024 !== undefined && ak.member4024 == al && ak.member3665() !== Class310.member3311 && ak.member3665() !== Class310.member3310) {
                ak.member3327();
            }
        }
    };
    ac.member4027 = function (al) {
        if (!S) {
            return;
        }
        for (var aj = 0; aj < k.length; aj++) {
            var ak = k[aj];
            if (ak.member4024 !== undefined && ak.member4024 == al) {
                ak.member3678();
            }
        }
    };
    ac.member4028 = function () {
        N = !N;
        Class293.document.getElementById('tab_audio_debug_status').textContent = N ? 'ENABLED' : 'DISABLED';
        Class293.document.getElementById('tab_audio_debug_status').style.color = N ? 'green' : 'red';
    };
    ac.member4029 = function (aj) {
        Q = aj;
    };
    ac.member4030 = function () {
        I = !I;
        F = !F;
        j = !j;
    };
    ac.member4031 = function () {
        C = !C;
        Class293.document.getElementById('tab_audio_debug_locations_button').textContent = C ? 'Hide Audio Locations' : 'Show Audio Locations';
    };
    ac.member4032 = function () {
        r = !r;
    };
    ac.member4033 = function () {
        q = !q;
    };
    ac.member4034 = function () {
        j = !j;
    };
    ac.member4035 = function () {
        ad = !ad;
    };
    ac.member4036 = function () {
        ai = !ai;
        Class293.document.getElementById('tab_audio_debug_instances_freeze').textContent = ai ? 'Unfreeze Instances View' : 'Freeze Instances View';
    };
    var X = new Float32Array(3);
    var af = 32;
    var L = 0;
    var k = [];
    var D = [];
    var h = [];
    var P = undefined;
    var Z;
    var b;
    var aa = undefined;
    var z;
    var R;
    var H;
    var x = -1;
    var J = true;
    ac.member25 = function (am, al, ao, an, ap) {
        var ak = member55(document, 'audioContext');
        af = am;
        Z = ao;
        L = af;
        b = Class41.create();
        z = Class41.create();
        R = Class49.create();
        var aj = Class263();
        aj.member3044();
        S = Class370.member4016(aj);
        if (S) {
            v();
            H = Class105({ member895: al });
        }
        n = an;
        m = ap;
    };
    ac.member3300 = function (aj, al, am) {
        if (Class370.member3303(aj) !== undefined) {
            return;
        }
        var ak = 1 / 65535 * am;
        Class370.member3300(aj, al == 255 ? -1 : al, ak);
    };
    ac.member4037 = function (aj, am) {
        var al = Class370.member3303(aj);
        if (al !== undefined) {
            var ak = 1 / 65535 * am;
            al.member3280(ak);
        }
    };
    ac.member4038 = function (al, am, aj, ak) {
        var an = Class370.member3303(al);
        if (an !== undefined) {
            an.member3288(am, aj, ak, _filterGain);
        }
    };
    ac.member3302 = function (aj) {
    };
    var v = function () {
        Class370.member3300(Class353.member3924, undefined, 0.5, {
            member3297: Z.member3962,
            member3296: Z.member3962.getValue,
            member3298: 255
        });
        Class370.member3300(Class353.member3925, undefined, 1, {
            member3297: Z.member3965,
            member3296: Z.member3965.getValue,
            member3298: 255
        });
        Class370.member3300(Class353.member3926, undefined, 1, {
            member3297: Z.member3966,
            member3296: Z.member3966.getValue,
            member3298: 255
        });
        Class370.member3300(Class353.member3927, undefined, 0.8, {
            member3297: Z.member3963,
            member3296: Z.member3963.getValue,
            member3298: 255
        });
        Class370.member3300(Class353.member3928, undefined, 1, {
            member3297: Z.member3964,
            member3296: Z.member3964.getValue,
            member3298: 255
        });
        Class370.member3300(Class347.member3906, Class353.member3925, 1);
        Class370.member3300(Class347.member3907, Class353.member3928, 1);
        Class370.member3300(Class347.member3905, Class353.member3924, 1);
        Class370.member3300(Class347.member3908, Class353.member3924, 1);
        Class370.member3300(Class347.member3909, Class353.member3924, 1);
        Class370.member3300(Class347.member3910, Class353.member3924, 1);
        Class370.member3300(Class347.member3911, Class353.member3924, 1);
        Class370.member3300(Class347.member3912, Class353.member3927, 1);
        Class370.member3300(Class347.member3914, Class347.member3912, 1);
        Class370.member3300(Class347.member3913, Class347.member3912, 1);
        Class370.member3303(Class347.member3906).member3280(0.75);
        Class370.member3303(Class347.member3907).member3280(0.5);
    };
    ac.member78 = function (aj, aq) {
        if (!S) {
            return;
        }
        aa = aq;
        Class370.member3383();
        if (aj.readyanim()) {
            aj.member3650(b);
            aj.member3649(z);
            aj.member3651(R);
            P = b;
            Class370.member3385(b, z);
        }
        for (var ao = 0; ao < h.length; ao++) {
            h[ao].member4039.member3295();
        }
        if (O !== null && G === false) {
            if (O.member3665() === Class310.member3308) {
                if (n !== undefined) {
                    n(O.member3328().member3687());
                }
                G = true;
            }
        }
        for (var ao = 0; ao < k.length; ao++) {
            var al = k[ao];
            al.member3683();
            al.member3684();
            al.member3295();
            if (al.member3665() === Class310.member3311 || al.member3665() === Class310.member3310) {
                if (al === s) {
                    s = undefined;
                    o = false;
                    al.member3679();
                    k.splice(ao, 1);
                    --ao;
                    if (ae >= 0) {
                        ac.member4040(ae);
                        ae = -1;
                    }
                } else {
                    var ak = al.member3676();
                    var ap = M(ak);
                    if (ak === Class347.member3906) {
                        if (ap) {
                            if (m !== undefined && al.member3328().member3687() === T) {
                                var ar = k[ao].member3671();
                                if (ar !== undefined && ar.type === Class332.member3790) {
                                    m(k[ao].member3328().member3687());
                                }
                            }
                            al.member3679();
                            k.splice(ao, 1);
                            --ao;
                        }
                    } else {
                        al.member3679();
                        k.splice(ao, 1);
                        --ao;
                    }
                }
            } else {
                var ak = al.member3676();
                if (ak === Class347.member3906) {
                    var ap = M(ak);
                    if (ap === false) {
                        al.member3327(0.15);
                    }
                }
            }
        }
        var an = af;
        for (var ao = 0; ao < D.length; ao++) {
            var am = D[ao].member3665();
            if (am !== Class310.member3664) {
                --an;
            }
        }
        if (false) {
        }
    };
    ac.member4041 = function (aj) {
        if (aj === undefined) {
            return;
        }
        var ak = aj.member3671();
        if (ak.type === Class332.member3782) {
            aj.member3327();
        } else {
            aj.member3327();
        }
    };
    ac.member4042 = function (aj) {
        if (aj === undefined) {
            return;
        }
        var ak = aj.member3671();
        if (ak.is3D) {
            if (y(aa, aj.member2026(), ak.maxDistance)) {
                if (aj.member4024 == undefined) {
                    aj.start();
                }
            }
        }
    };
    var y = function (al, ak, aj) {
        Class41.member322(al.member3454, ak, X);
        var am = aj * Class86.member718;
        if (Class41.length(X) > am) {
            return false;
        }
        return true;
    };
    ac.member4043 = function (aj) {
        x = aj;
    };
    var B = function (am) {
        for (var aj = 0; aj < D.length; aj++) {
            var al = D[aj];
            if (al.member3665() === Class310.member3664) {
                al.member3331(am);
                return al;
            }
        }
        if (D.length >= af) {
            if (false) {
            }
            return undefined;
        }
        var ak = am.member3686();
        D.push(ak);
        return ak;
    };
    var M = function (aj) {
        var ak = Class370.member3303(aj);
        if (ak !== undefined) {
            return ak.member3294() > 0.01;
        }
        return false;
    };
    var K = function (ak, am) {
        var al = H.find(ak);
        if (al === null) {
            for (var aj = 0; aj < h.length; aj++) {
                if (h[aj].member4039.member3687() === ak && h[aj].member4044 === am) {
                    return h[aj];
                }
            }
        }
        return al === null ? undefined : al;
    };
    ac.member4045 = function (aj) {
        J = aj;
        if (!J) {
            ac.member4046(true);
        }
    };
    var u = function (ak) {
        if (!S) {
            return;
        }
        if (ak === null || ak === undefined) {
            return;
        }
        for (var aj = 0; aj < ak.length; aj++) {
            t(ak[aj]);
        }
    };
    ac.member4047 = u;
    var t = function (aj) {
        if (!S) {
            return;
        }
        if (aj < 0) {
            return;
        }
        e(aj, false);
    };
    ac.member4048 = t;
    var e = function (ak, am) {
        if (am && !J) {
            return undefined;
        }
        var al = K(ak, am);
        if (al === undefined) {
            var aj;
            if (am) {
                aj = Class95.member836;
            } else {
                aj = Class95.member815;
            }
            al = Class370.member4020(Class368, aj, ak, ah, am);
            al = {
                member4039: al,
                member4044: am
            };
            h.push(al);
        }
        return al;
    };
    var ah = function (an, al, ak, am) {
        for (var aj = 0; aj < h.length; aj++) {
            if (h[aj].member4039 === an) {
                h.splice(aj, 1);
                break;
            }
        }
        if (al !== undefined) {
            H.put({
                member4039: an,
                member4044: am
            }, al, ak);
        }
    };
    var g = function (ak, al) {
        for (var aj = 0; aj < k.length; aj++) {
            if (k[aj].member3328().member3687() === ak && k[aj].member3328().member3680() === al && k[aj] !== O) {
                return true;
            }
        }
        return false;
    };
    var W = function (am) {
        var al = [];
        for (var aj = 0; aj < k.length; aj++) {
            var ak = k[aj].member3671();
            if (ak !== undefined && ak.type === am) {
                al.push(k[aj]);
            }
        }
        return al;
    };
    ac.member4040 = function (ak, aj) {
        ac.member4049(ak, aj, 255, false, 0, 0, 0, 0, 0);
    };
    ac.member4049 = function (ak, az, au, ap, ar, ax, aw, ao, at) {
        if (!S) {
            return;
        }
        if (!Q) {
            return;
        }
        if (o) {
            ae = ak;
            return;
        }
        if (ak === -1) {
            ac.member4046(false);
            return;
        }
        if (g(ak, true)) {
            return;
        }
        var aj = W(Class332.member3790);
        for (var aC = 0; aC < aj.length; aC++) {
            if (aj[aC] !== O) {
                aj[aC].member3327(2);
            }
        }
        if (O != null && O.member3328().member3687() === ak) {
            O.start();
            O = null;
            T = ak;
            return;
        }
        var aA = e(ak, true);
        if (aA === undefined) {
            return;
        }
        var av = aA.member4039;
        var aB = B(av);
        if (aB === undefined) {
            return;
        }
        aB.member3675(az === undefined || az === false ? Class347.member3906 : Class353.member3926);
        aB.member3317(au / 255);
        aB.member3668(false, 0);
        var am = {
            member4050: aB,
            member4051: ac,
            type: Class332.member3790
        };
        aB.member3670(am);
        if (ap) {
            aB.member3666(true);
            var al = Class41.create();
            al[0] = ax;
            al[2] = aw;
            aB.setPosition();
            var an = ao * Class86.member718;
            var aq = at * Class86.member718;
            aB.member3362(an, aq);
            var ay = new ab(aB, inPosition, ar, inSoundShapeParameters);
            aB.member3350(a, ay);
        }
        aB.start();
        T = ak;
        U(aB);
        if (n !== undefined) {
            n(T);
        }
    };
    ac.member4052 = function (al, aj) {
        if (!S) {
            return;
        }
        if (!Q) {
            return;
        }
        var ao = e(al, true);
        if (ao === undefined) {
            return;
        }
        var an = ao.member4039;
        var ak = B(an);
        if (ak === undefined) {
            return;
        }
        ak.member3675(Class347.member3906);
        ak.member3317(aj / 255);
        ak.member3668(false, 0);
        var am = {
            member4050: ak,
            member4051: ac,
            type: Class332.member3790
        };
        ak.member3670(am);
        ak.member3678();
        if (O !== null) {
            O.member3327();
        }
        O = ak;
        G = false;
        U(ak);
    };
    ac.member4046 = function (al) {
        if (!S) {
            return;
        }
        if (!Q) {
            return;
        }
        var ak = W(Class332.member3790);
        for (var aj = 0; aj < ak.length; aj++) {
            var am = ak[aj].member3328().member3687();
            if (false) {
            }
            ak[aj].member3327(2);
            if (m !== undefined && al) {
                m(k[aj].member3328().member3687());
            }
        }
        T = -1;
        ae = -1;
    };
    ac.member4053 = function (al, aq) {
        if (!S) {
            return;
        }
        if (o) {
            return;
        }
        if (aq === undefined) {
            aq = 255;
        }
        if (aq != 0 && al >= 0) {
            var ap = W(Class332.member3790);
            if (ap !== undefined && ap.length > 0) {
                for (var aj = 0; aj < ap.length; aj++) {
                    ap[aj].member3677(150);
                }
            }
            ae = T;
            T = -1;
            var ao = e(al, true);
            if (ao === undefined) {
                return;
            }
            var an = ao.member4039;
            var ak = B(an);
            if (ak === undefined) {
                return;
            }
            ak.member3675(Class347.member3906);
            ak.member3317(1);
            ak.member3668(false, 0);
            var am = {
                member4050: ak,
                member4051: ac,
                type: Class332.member3790
            };
            ak.member3670(am);
            ak.start();
            o = true;
            s = ak;
            U(ak);
        }
    };
    var ab = function (ak, aj, am, al) {
        this.member4050 = ak;
        this.member4054 = aj[0];
        this.member4055 = aj[1];
        this.member4056 = aj[2];
        this.level = am;
        this.width = al !== undefined ? al.member4011 : 0, this.length = al !== undefined ? al.member4013 : 0, this.member4014 = al !== undefined ? al.member4014 : 0, this.maxDistance = al !== undefined ? al.maxDistance : 0, this.member3352 = true;
        this.member4057 = [];
        this.member4058 = true;
    };
    var d = function (ak, aj, al) {
        this.member4050 = ak;
        this.member4051 = ac;
        this.type = aj;
        this.member4014 = al !== undefined ? al.member4014 : 0;
        this.maxDistance = al !== undefined ? al.maxDistance : 0;
    };
    ac.member4059 = function (am, az, au, an, aq, at, al, aw, aA, ap, av) {
        if (!S) {
            return undefined;
        }
        if (ap < 0) {
            ap = 0;
        }
        an = Math.max(0, Math.min(an, 255));
        av = Math.max(0, av);
        if (al === undefined) {
            al = Class351.member3922;
        }
        if (al !== Class351.member3922) {
            if (!y(aa, aA, aw !== undefined ? aw.maxDistance : 0)) {
                return undefined;
            }
        }
        if (av === undefined || av <= 0 || isNaN(av)) {
            av = 1;
        }
        if (aq === undefined) {
            aq = Class347.member3905;
        }
        var ao = e(az, false);
        if (ao === undefined) {
            return undefined;
        }
        var ax = ao.member4039;
        var ar = B(ax);
        if (ar === undefined) {
            return undefined;
        }
        ar.member3675(aq);
        ar.member3673(at);
        if (al !== Class351.member3922) {
            ar.member3666(true);
            ar.setPosition(aA);
            var ak = aw !== undefined ? aw.member4014 * Class86.member718 : 0;
            var aj = aw !== undefined ? aw.maxDistance * Class86.member718 : 0;
            ar.member3362(ak, aj);
            if (al === Class351.member3918) {
                var ay = new ab(ar, aA, ap, aw);
                ar.member3350(a, ay);
            } else if (al === Class351.member3919) {
                var ay = new ab(ar, aA, ap, aw);
                ay.member4058 = false;
                ar.member3350(i, ay);
            } else if (al === Class351.member3920) {
                var ay = new ab(ar, aA, ap, aw);
                ay.member3352 = false;
                ar.member3350(a, ay);
            } else if (al === Class351.member3921) {
                var ay = new ab(ar, aA, ap, aw);
                ay.member4058 = false;
                ay.member3352 = false;
                ar.member3350(i, ay);
            }
        }
        ar.member3317(an / 255);
        ar.member3672(av / 255);
        ar.member3668(au > 1 || au < 0, au > 0 ? au - 1 : au);
        ar.member3670(new d(ar, am, aw));
        return ar;
    };
    ac.member4060 = function (ak, au, ap, al, an, aj, ar, av, am, aq, at) {
        if (!S) {
            return undefined;
        }
        var ao = ac.member4059(ak, au, ap, al, an, ac, aj, ar, av, am, aq);
        if (ao !== null && ao !== undefined) {
            if (at === 0) {
                ao.start();
            } else {
                ao.member3681(at, false);
            }
            U(ao);
        }
    };
    var i = function (aJ, av, ay) {
        if (ay.member3342 === undefined || ay.setPosition === undefined || ay.member4054 === undefined || ay.member4056 === undefined || ay.member4055 === undefined || ay.member4014 === undefined || ay.maxDistance === undefined || ay.width === undefined || ay.length === undefined || ay.setVelocity === undefined || ay.member3343 === undefined || ay.member3378 === undefined) {
            if (false) {
            }
        }
        ay.setPosition(ay.member3342, aJ);
        ay.setVelocity(ay.member3342, av);
        var ar = ay.member4054;
        var ap = ay.member4056;
        var aG = ay.width * Class86.member718;
        var at = ay.length * Class86.member718;
        var au = ay.member4014 * Class86.member718;
        var aw = ay.maxDistance * Class86.member718;
        var aq = au + aw;
        var aC = au + aw;
        var az = 0;
        if (ay.member4061 === undefined) {
            ay.member4061 = Class41.create();
        }
        Class41.set(aa.member3454, ay.member4061);
        if (aa.level === ay.level) {
            if (ay.member4061[0] > ar - aq / 2 && ay.member4061[0] < ar + aq / 2) {
                if (ay.member4061[2] > ap - aC / 2 && ay.member4061[2] < ap + aC / 2) {
                    var an = Math.abs(ay.member4061[0] - (ar + aq / 2));
                    var am = Math.abs(ay.member4061[0] - (ar - aq / 2));
                    var aB = Math.abs(ay.member4061[2] - (ap + aC / 2));
                    var aA = Math.abs(ay.member4061[2] - (ap - aC / 2));
                    var ak = aw - au;
                    var aD = Math.min(an, am);
                    var aI = Math.min(aB, aA);
                    var aF = 1 / ak * aD;
                    var aE = 1 / ak * aI;
                    aF = Math.min(Math.max(aF, 0), 1);
                    aE = Math.min(Math.max(aE, 0), 1);
                    az = Math.min(aF, aE);
                    if (ay.member3344 === true) {
                        var al = ay.member3345;
                        var ao = ay.member3346;
                        var aH = ao + (al - ao) * (1 / az);
                        ay.member3349(ay.member3342, aH, ay.member3347, 0);
                    }
                }
            }
        }
        var aj = ay.member4057;
        aj.splice(0, aj.length);
        for (var aK = 0; aK < ay.member3378; aK++) {
            var ax = az;
            if (aK < aj.length) {
                aj[aK] = ax;
            } else {
                aj.push(ax);
            }
        }
        ay.member3343(ay.member3342, aj, ay);
    };
    var a = function (aA, aw, ak) {
        if (ak.member4050 === undefined || ak.member3342 === undefined || ak.setPosition === undefined || ak.setVelocity === undefined || ak.member3343 === undefined || ak.member4014 === undefined || ak.maxDistance === undefined || ak.member3378 === undefined) {
            if (false) {
            }
        }
        ak.setPosition(ak.member3342, aA);
        ak.setVelocity(ak.member3342, aw);
        if (ak.member4062 === undefined) {
            ak.member4062 = Class41.create();
        }
        if (ak.member4063 === undefined) {
            ak.member4063 = Class41.create();
        }
        if (ak.member4064 === undefined) {
            ak.member4064 = Class41.create();
        }
        if (ak.member4065 === undefined) {
            ak.member4065 = Class41.create();
        }
        var av = 0;
        var ax = 0;
        if (aa.level === ak.level) {
            Class41.set(aa.member3454, ak.member4063);
            Class41.set(P, ak.member4064);
            Class41.set(aA, ak.member4065);
            ak.member4063[1] = 0;
            ak.member4064[1] = 0;
            ak.member4065[1] = 0;
            Class41.member322(ak.member4063, ak.member4065, ak.member4062);
            var au = ak.maxDistance * Class86.member718;
            var aj = Class41.length(ak.member4062);
            var av = 1 - 1 / au * aj;
            if (av < 0 || av > 1) {
                av = Math.min(Math.max(av, 0), 1);
            }
            ax = av * av;
            if (ak.member3344 === true) {
                var am = ak.member3345;
                var ap = ak.member3346;
                var az = ap + (am - ap) * (aj / (ak.maxDistance * Class86.member718));
                ak.member3349(ak.member3342, az, ak.member3347, 0);
            }
            if (Y === true && ak.member4058 === true) {
                if (aj > A) {
                    var az = E;
                    var aq = c;
                    var al = ag;
                    if (aj < A + al) {
                        var at = aj - A;
                        var ao = 22000 - az;
                        az = az + (ao - ao / al * at);
                    }
                    ak.member3348(ak.member3342, az, aq, 0);
                } else {
                    ak.member3348(ak.member3342, 22000, 0, 0);
                }
            }
        } else {
            ak.member3349(ak.member3342, 0, 0, 0);
        }
        var ar = ak.member4057;
        ar.splice(0, ar.length);
        for (var an = 0; an < ak.member3378; an++) {
            if (an < ar.length) {
                ar[an] = av;
            } else {
                ar.push(av);
            }
        }
        var ay = ak.member4050.member3671();
        ak.member3343(ak.member3342, ar, ak, ay !== undefined && ay.type === Class332.member3782 ? 0.25 : undefined);
    };
    var U = function (aj) {
        if (!S) {
            return;
        }
        aj.member3673(ac);
        k.push(aj);
    };
    ac.member4066 = U;
    ac.member4067 = function (ao, aq) {
        if (!S) {
            return;
        }
        var am;
        if (aq === undefined || aq === false) {
            am = k;
        } else {
            am = D;
        }
        for (var aj = 0; aj < am.length; aj++) {
            var ap = am[aj];
            var ak = ap.member3665();
            var an = ap.member3676();
            var al = Class370.member4021(an, ao);
            if (al && ak === Class310.member3309) {
                ap.member3327(0.15);
            }
        }
    };
    ac.member486 = function (al, ak, aj) {
        if (false) {
        }
    };
    if (false) {
    }
    return ac;
}();