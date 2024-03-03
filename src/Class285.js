import { Class279 } from 'Class279.js';
import { Class262 } from 'Class262.js';
import { Class283 } from 'Class283.js';
import { Class276 } from 'Class276.js';
import { Class284 } from 'Class284.js';
import { Class280 } from 'Class280.js';
import { Class282 } from 'Class282.js';
import { Class278 } from 'Class278.js';
import { Class281 } from 'Class281.js';
export var Class285 = function () {
    var a = function (h) {
        var Q = {};
        var v = false;
        var r = undefined;
        var o = new Array();
        var i = new Array();
        var af = new Array();
        var ad = [];
        var d = true;
        var c;
        var j;
        var T = function () {
            return v;
        };
        Q.member3373 = T;
        var ac = function () {
            if (r !== undefined) {
            }
        };
        Q.member497 = ac;
        var n = function () {
        };
        var R = function () {
            if (!v) {
                return undefined;
            }
            return j;
        };
        Q.member3374 = R;
        Q.member3375 = function (al, ak) {
            if (!v) {
                return undefined;
            }
            if (ak === undefined || ak === null) {
                return undefined;
            }
            for (var ag = 0; ag < c.length; ag++) {
                if (c[ag].length > 0) {
                    var ai = c[ag][0];
                    if (ai.member3361() !== al) {
                        continue;
                    }
                    for (var ah = 0; ah < c[ag].length; ah++) {
                        var aj = c[ag][ah];
                        var am = aj.member3360();
                        if (am === Class279.member3305) {
                            aj.member3331(ak);
                            return aj;
                        }
                    }
                }
            }
            return undefined;
        };
        Q.member3376 = function (ak) {
            if (!v) {
                return undefined;
            }
            if (ak === undefined || ak === null) {
                return undefined;
            }
            for (var ag = 0; ag < c.length; ag++) {
                if (c[ag].length > 0) {
                    var ai = c[ag][0];
                    if (ai.member3361() !== Class262.member3039) {
                        continue;
                    }
                    for (var ah = 0; ah < c[ag].length; ah++) {
                        var aj = c[ag][ah];
                        var al = aj.member3360();
                        if (al === Class279.member3305) {
                            aj.member3331(ak);
                            return aj;
                        }
                    }
                }
            }
            return undefined;
        };
        var J = function () {
            if (!v) {
                return undefined;
            }
            var ag = r.createPanner();
            ag.panningModel = 'equalpower';
            return ag;
        };
        Q.createPanner = J;
        var b = function (ag, ah) {
            if (!v) {
                return undefined;
            }
            var ai = r.createChannelSplitter(ag);
            return ai;
        };
        Q.createChannelSplitter = b;
        var q = function (ag, ah) {
            if (!v) {
                return undefined;
            }
            var ai = r.createChannelMerger(ag);
            return ai;
        };
        Q.createChannelMerger = q;
        var ae = function () {
            if (!v) {
                return undefined;
            }
            var ag;
            if (r.createGain !== undefined) {
                ag = r.createGain();
            } else {
                ag = r.createGainNode();
            }
            return ag;
        };
        Q.createGain = ae;
        var N = function () {
            if (!v) {
                return undefined;
            }
            var ag;
            if (r.createBiquadFilter !== undefined) {
                ag = r.createBiquadFilter();
                if (ag !== undefined) {
                    ag.type = 'lowpass';
                    ag.frequency.value = 22000;
                }
            } else {
                return undefined;
            }
            return ag;
        };
        Q.member3377 = N;
        var ab = function () {
            if (!v) {
                return undefined;
            }
            var ag;
            if (r.createBiquadFilter !== undefined) {
                ag = r.createBiquadFilter();
                if (ag !== undefined) {
                    ag.type = 'highpass';
                    ag.frequency.value = 0;
                }
            } else {
                return undefined;
            }
            return ag;
        };
        Q.member3377 = N;
        var L = function (at, ax, aq, av, ak, an, az, am, ai, aj, aw) {
            if (!v) {
                return;
            }
            if (r == null) {
                return null;
            }
            var al = ae();
            al.connect(am.member3286().member3320());
            al.gain.setValueAtTime(ai, u());
            if (aj) {
                var au = J();
                au.connect(al);
            }
            var ap = r.createBufferSource();
            ap.buffer = at;
            ap.connect(aj ? au : al);
            if (ak) {
                ap.loop = true;
                ap.loopStart = an;
                ap.loopEnd = az;
            }
            ap.playbackRate.value = aw;
            if (ap.start !== undefined) {
                ap.start(ax, av);
            } else {
                ap.noteOn(ax);
            }
            ap.member3323 = ax;
            ap.endTime = aq;
            if (aq >= 0 && ak) {
                if (ap.stop !== undefined) {
                    ap.stop(aq);
                } else {
                    ap.noteOff(aq);
                }
            }
            var ao = [];
            var ar = Class283(Class276.member3269, al);
            var ay = Class283(Class276.member3267, ap);
            ao.push(ar);
            if (aj) {
                var ag = Class283(Class276.member3268, au);
                ao.push(ag);
            }
            ao.push(ay);
            var ah = Class284(ao);
            return ah;
        };
        Q.member3354 = L;
        var H = function (aG, ai, aS, ag, aP, ah, aR, at, aE, am, aF, aC, az, ay, aw) {
            if (!v) {
                return;
            }
            if (r === undefined || am === undefined) {
                return undefined;
            }
            var aj = ae();
            var aM = N();
            if (aC) {
                var aA = ab();
                aA.connect(at.member3286().member3320());
                aM.connect(aA);
            } else {
                aM.connect(at.member3286().member3320());
            }
            aj.connect(aM);
            aj.gain.setValueAtTime(aE, u());
            var ak = am.member3352 ? 2 : aG.numberOfChannels;
            var aI = 2;
            am.member3378 = aI;
            var ao = b(aI);
            var an = q(aI);
            var aO = [];
            var aq = 0;
            for (var aQ = 0; aQ < aI; aQ++) {
                var aN = ae();
                ao.connect(aN, aq, 0);
                aN.connect(an, 0, aQ);
                aN.gain.setValueAtTime(0, u());
                aO.push(aN);
                ++aq;
                if (aq >= ak) {
                    aq = ak - 1;
                }
            }
            var av = undefined;
            if (am.member3352) {
                av = J();
                av.connect(ao);
            }
            an.connect(aj);
            var ar = r.createBufferSource();
            ar.buffer = aG;
            ar.connect(av !== undefined ? av : ao);
            if (aP) {
                ar.loop = true;
                ar.loopStart = ah;
                ar.loopEnd = aR;
            }
            ar.playbackRate.value = aF;
            if (ar.start !== undefined) {
                ar.start(ai, ag);
            } else {
                ar.noteOn(ai);
            }
            if (aS >= 0 && aP) {
                if (ar.stop !== undefined) {
                    ar.stop(aS);
                } else {
                    ar.noteOff(aS);
                }
            }
            var aH = [];
            var al = Class283(Class276.member3273, aM);
            if (aC) {
                var aJ = Class283(Class276.member3274, aA);
            }
            var aL = Class283(Class276.member3269, aj);
            var au = Class283(Class276.member3267, ar);
            var aB = Class283(Class276.member3275, ao);
            var ap = Class283(Class276.member3276, an);
            if (av !== undefined) {
                var ax = Class283(Class276.member3268, av);
                aH.push(ax);
            }
            for (var aQ = 0; aQ < aI; aQ++) {
                var aK = Class283(Class276.member3277, aO[aQ]);
                aH.push(aK);
            }
            aH.push(al);
            if (aC) {
                aH.push(aJ);
            }
            aH.push(aL);
            aH.push(aB);
            aH.push(ap);
            aH.push(au);
            var aD = Class284(aH);
            return aD;
        };
        Q.member3353 = H;
        var F = function (au, aq, al, ak, at, ar) {
            if (!v) {
                return;
            }
            if (r == undefined) {
                return undefined;
            }
            var ap = ae();
            ap.connect(ak.member3320());
            ap.gain.setValueAtTime(at, u());
            if (ar) {
                var ai = J();
                ai.connect(ap);
            }
            var ah;
            if (r.createScriptProcessor !== undefined) {
                ah = r.createScriptProcessor(16384, au, aq);
            } else {
                ah = r.createJavaScriptNode(16384, au, aq);
            }
            ah.onaudioprocess = al;
            ah.connect(ar ? ai : ap);
            var aj = [];
            var ao = Class283(Class276.member3269, ap);
            var an = Class283(Class276.member3268, ai);
            var am = Class283(Class276.member3267, ah);
            aj.push(ao);
            if (ar) {
                var an = Class283(Class276.member3268, ai);
                aj.push(an);
            }
            aj.push(am);
            var ag = Class284(aj);
            return ag;
        };
        Q.member3356 = F;
        var E = function (ai, ag) {
            if (!v) {
                return;
            }
            if (ai === undefined) {
                return;
            }
            var ah = ai.member3319(Class276.member3267).member3320();
            if (ah !== undefined) {
                if (ah.start !== undefined) {
                    ah.start(ag);
                } else {
                    ah.noteOn(ag);
                }
            }
        };
        Q.member3379 = E;
        var A = function (ai, ag) {
            if (!v) {
                return;
            }
            if (ai === undefined) {
                return;
            }
            var ah = ai.member3319(Class276.member3267).member3320();
            if (ah !== undefined) {
                if (ah.stop !== undefined) {
                    ah.stop(ag);
                } else {
                    ah.noteOff(ag);
                }
            }
        };
        Q.member3321 = A;
        var z = function (ah) {
            if (!v) {
                return false;
            }
            if (ah === undefined) {
                return false;
            }
            var aj = ah.member3319(Class276.member3267);
            if (aj === undefined) {
                return false;
            }
            var an = ah.member3319(Class276.member3269);
            var ao = ah.member3372(Class276.member3277);
            var ak = aj.member3320().member3351 === Class280.member3313;
            if (an === undefined && (ao === undefined || ao.length <= 0)) {
                return ak;
            }
            var ai = an.member3320().gain.value;
            var al = false;
            for (var am = 0; am < ao.length; am++) {
                var ag = an.member3320().gain.value * ao[am].member3320().gain.value;
                if (ag > ai || al === false) {
                    ai = ag;
                    al = true;
                }
            }
            return ak && ai > 0.01;
        };
        Q.member3314 = z;
        var y = function (ah) {
            if (!v) {
                return;
            }
            if (ah === undefined) {
                return;
            }
            var ag = ah.member3319(Class276.member3267);
            return ag === undefined ? true : ag.member3320().member3351 === Class280.FINISHED_STATE;
        };
        Q.member3325 = y;
        var x = function (ah) {
            if (!v) {
                return;
            }
            if (ah === undefined) {
                return;
            }
            var ag = ah.member3319(Class276.member3267);
            return ag === undefined ? false : ag.member3320().member3351 === Class280.member3313;
        };
        Q.member3326 = x;
        var aa = function (ak) {
            if (!v) {
                return;
            }
            if (r == undefined) {
                return undefined;
            }
            var ai = [];
            var aj = ae();
            var ah = undefined;
            if (ak !== undefined) {
                ah = ak.member3285();
            }
            aj.connect(ah !== undefined ? ah.member3320() : r.destination);
            var ag = Class283(Class276.member3269, aj);
            ai.push(ag);
            return ai;
        };
        Q.member3301 = aa;
        var Z = function (aj, ah) {
            if (!v) {
                return;
            }
            if (aj !== undefined) {
                var ai = undefined;
                for (var ag = 0; ag < aj.length; ag++) {
                    if (aj[ag].member2794() === Class276.member3269) {
                        ai = aj[ag];
                        break;
                    }
                }
                if (ai !== undefined) {
                    ai.member3320().gain.setValueAtTime(ah, u());
                }
            }
        };
        Q.member3299 = Z;
        Q.member3289 = function (ak, ah) {
            if (!v) {
                return;
            }
            if (ak !== undefined) {
                var ai = undefined;
                ai = ak[ak.length - 1].member3320();
                var aj = N();
                ai.connect(aj);
                if (ah !== undefined) {
                    var ag = ah.member3285();
                    aj.connect(ag.member3320());
                } else {
                    aj.connect(r.destination);
                }
                var al = Class283(Class276.member3273, aj);
                ak.push(al);
            }
        };
        var Y = function (aj, ai, ah, ag) {
            aj.member3320().Q.value = ah;
            aj.member3320().frequency.value = ai;
            aj.member3320().gain.value = ag;
        };
        Q.member3291 = Y;
        var X = function (ah, ag, ai) {
            if (!v) {
                return;
            }
            if (ah === undefined || ag === undefined) {
                return;
            }
            var aj = ah.member3319(Class276.member3269);
            if (aj !== undefined) {
                var ak = aj.member3370();
                if (ak !== ag) {
                    if (ai !== undefined && ai > 0) {
                        aj.member3320().gain.linearRampToValueAtTime(ag, u() + ai);
                    } else {
                        aj.member3320().gain.setValueAtTime(ag, u());
                    }
                    aj.member3371(ag);
                }
            }
        };
        Q.member3330 = X;
        var W = function (ag) {
            if (!v) {
                return;
            }
            if (ag === undefined) {
                return;
            }
            var ah = ag.member3319(Class276.member3269);
            if (ah !== undefined) {
                return ah.member3370();
            }
        };
        Q.member3380 = W;
        var V = function (ah, aj, al, ak) {
            if (!v) {
                return;
            }
            if (ah === null || ah === undefined) {
                return;
            }
            var ai = ah.member3372(Class276.member3273);
            if (ai !== null && ai != undefined) {
                for (var ag = 0; ag < ai.length; ag++) {
                    ai[ag].member3320().frequency.value = aj;
                    ai[ag].member3320().Q.value = al;
                    ai[ag].member3320().gain.value = ak;
                }
            }
        };
        Q.member3348 = V;
        var U = function (ag, ai, ak, aj) {
            if (!v) {
                return;
            }
            if (ag === null || ag === undefined) {
                return;
            }
            var ah = ag.member3319(Class276.member3274);
            if (ah !== null && ah != undefined) {
                ah.member3320().frequency.value = ai;
                ah.member3320().Q.value = ak;
                ah.member3320().gain.value = aj;
            }
        };
        Q.member3349 = U;
        var S = function (ah, ag) {
            if (!v) {
                return;
            }
            if (ah === null || ah === undefined || ag === null) {
                return;
            }
            var aj = ah.member3319(Class276.member3268);
            if (aj !== null && aj != undefined) {
                var ai = aj.member3370();
                if (ai != ag) {
                    aj.member3320().setPosition(ag[0], ag[1], ag[2]);
                    aj.member3371(ag);
                }
            }
        };
        Q.member3338 = S;
        var P = function (ag, aj) {
            if (!v) {
                return;
            }
            if (ag === undefined || aj === undefined) {
                return;
            }
            var ai = ag.member3319(Class276.member3268);
            if (ai !== undefined) {
                var ah = ai.member3370();
                if (ah !== aj) {
                    ai.member3320().setVelocity(aj[0], aj[1], aj[2]);
                    ai.member3371(aj);
                }
            }
        };
        Q.member3339 = P;
        var O = function (ag) {
            if (!v) {
                return;
            }
            if (ag === undefined) {
                return;
            }
            var ah = ag.member3319(Class276.member3268);
            if (ah !== undefined && ah !== undefined) {
                ah.member3320().distanceModel = 'exponential';
            }
        };
        Q.member3381 = O;
        var M = function (ag) {
            if (!v) {
                return;
            }
            if (ag === undefined) {
                return;
            }
            var ah = ag.member3319(Class276.member3268);
            if (ah !== null && ah !== undefined) {
                ah.member3320().distanceModel = 'linear';
            }
        };
        Q.member3340 = M;
        var K = function (ag) {
            if (!v) {
                return;
            }
            if (ag === undefined) {
                return;
            }
            var ah = ag.member3319(Class276.member3268);
            if (ah !== undefined && ah !== undefined) {
                ah.member3320().distanceModel = 'inverse';
            }
        };
        Q.member3382 = K;
        var I = function (ag, ak, ai, ah) {
            if (!v) {
                return;
            }
            if (ag === undefined || ak === undefined || ai === undefined) {
                return;
            }
            var aj = ag.member3319(Class276.member3268);
            if (aj !== undefined) {
                aj.member3320().refDistance = ak;
                aj.member3320().maxDistance = ai;
                aj.member3320().rolloffFactor = ah;
            }
        };
        Q.member3341 = I;
        var G = function (ah, am, ai, al) {
            if (!v) {
                return;
            }
            if (ah === undefined || am === undefined) {
                return;
            }
            var aj = ah.member3372(Class276.member3277);
            if (aj.length > 0) {
                for (var ag = 0; ag < am.length; ag++) {
                    var ak = aj[ag].member3370();
                    if (ak !== am[ag]) {
                        if (al !== undefined && al > 0) {
                            aj[ag].member3320().gain.linearRampToValueAtTime(am[ag], u() + al);
                        } else {
                            aj[ag].member3320().gain.setValueAtTime(am[ag], u());
                        }
                        aj[ag].member3371(am[ag]);
                    }
                }
            }
        };
        Q.member3343 = G;
        Q.member3336 = function (ai) {
            var ah = ai.member3372(Class276.member3269);
            var al = ai.member3372(Class276.member3277);
            var aj = 1;
            if (ah !== undefined) {
                for (var ag = 0; ag < ah.length; ag++) {
                    aj *= ah[ag].member3320().gain.value;
                }
            }
            if (al !== undefined) {
                var ak = 0;
                for (var ag = 0; ag < al.length; ag++) {
                    ak += al[ag].member3320().gain.value;
                }
                ak /= al.length;
                aj *= ak;
            }
            return aj;
        };
        var g = function () {
            if (!v) {
                return;
            }
            if (j != undefined) {
                j.member3295();
            }
            for (var ak = 0; ak < c.length; ak++) {
                if (c[ak].length > 0) {
                    var ap = false;
                    for (var aj = 0; aj < c[ak].length; aj++) {
                        c[ak][aj].member3295();
                        ap |= c[ak][aj].member3334();
                    }
                    if (ap) {
                        c[ak].sort(B);
                    }
                    var an = 3;
                    var ag = false;
                    var aj = c[ak].length - 1;
                    while (ag == false) {
                        var am = c[ak][aj].getPriority();
                        var ah = c[ak][aj].member3360();
                        if (am < 0) {
                            if (ah === Class279.member3309) {
                                c[ak][aj].member3327();
                                c[ak][aj].member33();
                            }
                        } else {
                            ag = true;
                        }
                        --aj;
                        if (aj < 0) {
                            ag = true;
                        }
                    }
                    if (aj >= c[ak].length - an) {
                        while (aj >= c[ak].length - an) {
                            var am = c[ak][aj].getPriority();
                            var ah = c[ak][aj].member3360();
                            if (ah === Class279.member3309) {
                                c[ak][aj].member3327();
                                c[ak][aj].member33();
                            }
                            aj--;
                        }
                    }
                }
            }
            if (o.length <= 0) {
                if (d && ad.length > 0) {
                    d = false;
                    var al = ad[0];
                    r.decodeAudioData(al.member3367(), al.member3368(), al.member3369());
                    ad.shift();
                }
            } else {
                for (var ak = 0; ak < o.length; ak++) {
                    if (ad.length > 0 && i[ak]) {
                        i[ak] = false;
                        var ao = -1;
                        for (var aj = 0; aj < ad.length; aj++) {
                            var ai = true;
                            var al = ad[aj];
                            al.member3363(o[ak]);
                            r.decodeAudioData(al.member3367(), al.member3368(), al.member3369());
                            af.push(al);
                            ao = aj;
                            break;
                        }
                        if (ao >= 0) {
                            ad.splice(aj, 1);
                        }
                    }
                }
            }
        };
        Q.member3383 = g;
        var k = function (ai, al, ag, ah, ak) {
            var aj = Class282();
            aj.member25(ai, al, ag, ah, ak);
            ad.push(aj);
        };
        Q.decodeAudioData = k;
        var D = function (ai) {
            for (var ag = 0; ag < ad.length; ag++) {
                var aj = ad[ag];
                if (aj.member3365() === ai) {
                    ad.splice(ag, 1);
                    --ag;
                }
            }
            for (var ag = 0; ag < af.length; ag++) {
                var ah = af[ag];
                if (ah.member3365() === ai) {
                    return false;
                }
            }
            return true;
        };
        Q.member3337 = D;
        var C = function () {
            return af.length;
        };
        Q.member3384 = C;
        var u = function () {
            return r.currentTime;
        };
        Q.member3282 = u;
        var t = function (aj) {
            if (o.length <= 0) {
                return undefined;
            } else {
                for (var ag = 0; ag < af.length; ag++) {
                    var ah = af[ag];
                    var ai = ah.member3365();
                    if (ai === aj) {
                        return ah.member3366();
                    }
                }
            }
        };
        Q.member3357 = t;
        var s = function (ak) {
            if (o.length <= 0) {
                d = true;
            } else {
                var al = -1;
                for (var ag = 0; ag < af.length; ag++) {
                    var ai = af[ag];
                    var aj = ai.member3365();
                    if (aj === ak) {
                        for (var ah = 0; ah < o.length; ah++) {
                            if (ai.member3364() == o[ah]) {
                                i[ah] = true;
                            }
                        }
                        al = ag;
                        break;
                    }
                }
                if (al >= 0) {
                    af.splice(al, 1);
                }
            }
        };
        Q.member3358 = s;
        var e = function (ah, ag) {
            r.listener.setPosition(ah[0], ah[1], ah[2]);
            r.listener.setOrientation(ag[0], ag[1], ag[2], 0, -1, 0);
        };
        Q.member3385 = e;
        var B = function (ai, ah) {
            var ag = ai.getPriority();
            var aj = ah.getPriority();
            return aj - ag;
        };
        var m = function (ao) {
            if (v === true) {
                return;
            }
            j = Class278();
            if (j.member25(Q) === false) {
                return;
            }
            try {
                r = AudioContext !== undefined ? new AudioContext() : new webkitAudioContext();
                if (r.sampleRate <= 0) {
                    if (false) {
                    }
                    r = undefined;
                }
            } catch (an) {
                if (false) {
                }
            }
            if (r !== undefined) {
                if (false) {
                }
            } else {
                if (false) {
                }
                return;
            }
            for (var ak = 0; ak < ao.member3043; ak++) {
                var al = undefined;
                try {
                    al = webkitAudioContext !== undefined ? new webkitAudioContext() : new AudioContext();
                } catch (an) {
                }
                if (al !== undefined) {
                    if (false) {
                    }
                    o.push(al);
                    i.push(true);
                }
            }
            n();
            Q.member3386 = r;
            var am = ao.member3040[Class262.member3035];
            var aq = ao.member3040[Class262.member3036];
            var ah = ao.member3040[Class262.member3037];
            var ag = Class262.member3038 + ao.member3041;
            c = new Array(ag);
            c[Class262.member3035] = new Array(am);
            c[Class262.member3036] = new Array(aq);
            c[Class262.member3037] = new Array(ah);
            for (var ak = 0; ak < ao.member3041; ak++) {
                c[Class262.member3038 + ak] = new Array(ao.member3042[ak]);
            }
            for (var ak = 0; ak < ag; ak++) {
                var ai = c[ak];
                for (var aj = 0; aj < ai.length; aj++) {
                    var ap = ak;
                    if (ap >= Class262.member3038) {
                        ap = Class262.member3039;
                    }
                    ai[aj] = Class281();
                    ai[aj].member25(3, ap, Q, false);
                }
            }
            v = true;
        };
        if (h.member3387 !== undefined) {
            m(h.member3387);
        }
        return Q;
    };
    return a;
}();