import { Class484 } from 'Class484.js';
import { VarDomainType } from 'Class465.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
export var HitmarkType = function (q) {
    var HitmarkType = {};
    var myList;
    var b;
    if (q.member625 !== undefined && q.myList !== undefined) {
        b = q.member625;
        myList = q.myList;
    } else {
        throw new Error('1008 ');
    }
    var damagecolour_set = false;
    HitmarkType.member10430 = function () {
        return damagecolour_set;
    };
    HitmarkType.member7624 = function (N) {
        damagecolour_set = N;
    };
    var damagefont = -1;
    HitmarkType.getDamageFont = function () {
        return damagefont;
    };
    var damagecolour = Class484.member7705;
    HitmarkType.getDamageColour = function () {
        return damagecolour;
    };
    var sticktime = Class484.member7706;
    HitmarkType.getStickTime = function () {
        return sticktime;
    };
    var classgraphic = -1;
    var middlegraphic = -1;
    var leftgraphic = -1;
    var rightgraphic = -1;
    var scrolltooffsetx = 0;
    HitmarkType.getScrollToOffsetX = function () {
        return scrolltooffsetx;
    };
    var scrolltooffsety = 0;
    HitmarkType.getScrollToOffsetY = function () {
        return scrolltooffsety;
    };
    var fadeout = -1;
    HitmarkType.getFadeOut = function () {
        return fadeout;
    };
    var damageformat = '';
    var replacemode = Class484.member7702;
    HitmarkType.getReplaceMode = function () {
        return replacemode;
    };
    var damageyof = 0;
    HitmarkType.getDamageOffsetY = function () {
        return damageyof;
    };
    var graphicof_x = 0;
    var graphicof_y = 0;
    HitmarkType.getGraphicOffsetX = function () {
        return graphicof_x;
    };
    HitmarkType.getGraphicOffsetY = function () {
        return graphicof_y;
    };
    var multimark = null;
    var multivar = -1;
    var multivarbit = -1;
    var damagescaleto = 1;
    var damagescalefrom = 1;
    HitmarkType.decode = function (O) {
        while (true) {
            var N = O.g1();
            if (N === undefined) {
                throw new Error('1009 ');
                break;
            }
            if (N === 0) {
                break;
            }
            decodeNext(O, N);
        }
    };
    var x = HitmarkType.decode;
    var decodeNext = function (packet, N) {
        if (N === 1) {
            damagefont = packet.gSmart2or4null();
        } else if (N === 2) {
            damagecolour = packet.g3();
            damagecolour_set = true;
        } else if (N === 3) {
            classgraphic = packet.gSmart2or4null();
        } else if (N === 4) {
            leftgraphic = packet.gSmart2or4null();
        } else if (N === 5) {
            middlegraphic = packet.gSmart2or4null();
        } else if (N === 6) {
            rightgraphic = packet.gSmart2or4null();
        } else if (N === 7) {
            scrolltooffsetx = packet.g2s();
        } else if (N === 8) {
            damageformat = packet.gjstr(true);
        } else if (N === 9) {
            sticktime = packet.g2();
        } else if (N === 10) {
            scrolltooffsety = packet.g2s();
        } else if (N === 11) {
            fadeout = 0;
        } else if (N === 12) {
            replacemode = packet.g1();
        } else if (N === 13) {
            damageyof = packet.g2s();
        } else if (N === 14) {
            fadeout = packet.g2();
        } else if (N === 16) {
            graphicof_x = packet.g2s();
            graphicof_y = packet.g2s();
        } else if (N === 17 || N === 18) {
            multivarbit = packet.g2();
            if (multivarbit === 65535) {
                multivarbit = -1;
            }
            multivar = packet.g2();
            if (multivar === 65535) {
                multivar = -1;
            }
            var multidefault = -1;
            if (N === 18) {
                multidefault = packet.g2();
                if (multidefault === 65535) {
                    multidefault = -1;
                }
            }
            var count = packet.g1();
            multimark = new Array(count + 2);
            for (var i = 0; i <= count; i++) {
                multimark[i] = packet.g2();
                if (multimark[i] === 65535) {
                    multimark[i] = -1;
                }
            }
            multimark[count + 1] = multidefault;
        } else if (N === 19) {
            damagescaleto = packet.g2s();
        } else if (N === 20) {
            damagescalefrom = packet.g2s();
        } else if (false) {
        }
    };
    HitmarkType.member3637 = function (P) {
        var O = damageformat;
        P = Math.floor(P * damagescaleto / damagescalefrom);
        while (true) {
            var N = O.indexOf('%1');
            if (N < 0) {
                break;
            }
            O = O.slice(0, N) + String(P) + O.slice(N + 2);
        }
        return O;
    };
    var d = HitmarkType.member3637;
    HitmarkType.member10436 = function (O) {
        if (classgraphic < 0) {
            return null;
        }
        var N = myList.member8753(classgraphic);
        if (N === null) {
            i(O);
            var N = myList.member8753(classgraphic);
        }
        return N;
    };
    var a = HitmarkType.member10436;
    HitmarkType.member10437 = function (O) {
        if (middlegraphic < 0) {
            return null;
        }
        var N = myList.member8753(middlegraphic);
        if (N === null) {
            i(O);
            var N = myList.member8753(middlegraphic);
        }
        return N;
    };
    var M = HitmarkType.member10437;
    HitmarkType.member10438 = function (O) {
        if (leftgraphic < 0) {
            return null;
        }
        var N = myList.member8753(leftgraphic);
        if (N === null) {
            i(O);
            var N = myList.member8753(leftgraphic);
        }
        return N;
    };
    var L = HitmarkType.member10438;
    HitmarkType.member10439 = function (O) {
        if (rightgraphic < 0) {
            return null;
        }
        var N = myList.member8753(rightgraphic);
        if (N === null) {
            i(O);
            var N = myList.member8753(rightgraphic);
        }
        return N;
    };
    var J = HitmarkType.member10439;
    HitmarkType.isMultiMark = function () {
        return multimark !== null;
    };
    var H = HitmarkType.isMultiMark;
    HitmarkType.getMultiMark = function () {
        if (multimark === null || myList.getVarValueProvider() === null) {
            return this;
        }
        var Q = -1;
        if (multivarbit !== -1) {
            var P = myList.getVarTypeProvider().getVarBitType(multivarbit);
            if (P !== NULL && P !== undefined) {
                Q = myList.getVarValueProvider().getVarBit(P);
            }
        } else if (multivar !== -1) {
            var N = myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, multivar);
            if (N !== NULL && N !== undefined) {
                Q = myList.getVarValueProvider().getVarInt(N);
            }
        }
        if (Q < 0 || Q >= multimark.length - 1) {
            var O = multimark[multimark.length - 1];
            if (O !== -1) {
                return myList.list(O);
            } else {
                return undefined;
            }
        }
        if (multimark[Q] === -1) {
            return undefined;
        }
        return myList.list(multimark[Q]);
    };
    var F = HitmarkType.getMultiMark;
    var i = function (O) {
        var T = myList.member7535();
        if (classgraphic >= 0 && myList.member8753(classgraphic) === null) {
            var U = T.getFile(Class95.member811, classgraphic, 0, Priority.member840);
            if (U !== null) {
                var W = Class80.member606(U);
                var V = W[0].getColour();
                var Y = Class76(O, W[0].member556(), W[0].member557(), V, false);
                Y.member563();
                myList.member8754(Y, classgraphic);
            }
        }
        if (middlegraphic >= 0 && myList.member8753(middlegraphic) === null) {
            var P = T.getFile(Class95.member811, middlegraphic, 0, Priority.member840);
            if (P !== null) {
                var X = Class80.member606(P);
                var V = X[0].getColour();
                var Y = Class76(O, X[0].member556(), X[0].member557(), V, false);
                Y.member563();
                myList.member8754(Y, middlegraphic);
            }
        }
        if (leftgraphic >= 0 && myList.member8753(leftgraphic) === null) {
            var N = T.getFile(Class95.member811, leftgraphic, 0, Priority.member840);
            if (N !== null) {
                var Q = Class80.member606(N);
                var V = Q[0].getColour();
                var Y = Class76(O, Q[0].member556(), Q[0].member557(), V, false);
                Y.member563();
                myList.member8754(Y, leftgraphic);
            }
        }
        if (rightgraphic >= 0 && myList.member8753(rightgraphic) === null) {
            var R = T.getFile(Class95.member811, rightgraphic, 0, Priority.member840);
            if (R !== null) {
                var S = Class80.member606(R);
                var V = S[0].getColour();
                var Y = Class76(O, S[0].member556(), S[0].member557(), V, false);
                Y.member563();
                myList.member8754(Y, rightgraphic);
            }
        }
    };
    q = undefined;
    return HitmarkType;
};