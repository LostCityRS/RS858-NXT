import { Class131 } from 'Class131.js';
import { Class463 } from 'Class463.js';
export var Class465 = function () {
    var a = {
        member4134: {
            member2385: Class131.member1245,
            serialID: 0,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                if (c.member7377 && c.member7378 === Class463.member7288) {
                    return -1;
                } else {
                    return c.member7378.defaultValue;
                }
            }
        },
        member4133: {
            member2385: Class131.member1246,
            serialID: 1,
            member7375: false,
            member7376: true,
            member2944: function (c) {
                if (c.member7377 && c.member7378 === Class463.member7288) {
                    return -1;
                } else {
                    return c.member7378.defaultValue;
                }
            }
        },
        member7379: {
            member2385: Class131.member1247,
            serialID: 2,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                if (c.member7377 && (c.member7378 === Class463.member7285 || c.member7378 === Class463.member7288)) {
                    return -1;
                } else {
                    return c.member7378.defaultValue;
                }
            }
        },
        member7380: {
            member2385: Class131.member1251,
            serialID: 6,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                return c.member7378.defaultValue;
            }
        },
        member7381: {
            member2385: Class131.member1252,
            serialID: 7,
            member7375: true,
            member7376: false,
            member2944: function (c) {
                return c.member7378.defaultValue;
            }
        },
        member7360: {
            member2385: Class131.member1260,
            serialID: 9,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                return c.member7378.defaultValue;
            }
        }
    };
    var b = function (e) {
        for (var d in a) {
            var c = a[d];
            if (c.serialID === e) {
                return c;
            }
        }
        return null;
    };
    a.getByID = b;
    return a;
}();