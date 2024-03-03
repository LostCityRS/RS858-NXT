import { Class315 } from 'Class315.js';
export var Class316 = function () {
    var a = {
        member3699: {
            member3700: 'en',
            member3690: false ? {} : 'en',
            member3701: Class315.member3696,
            id: 0,
            member3702: 'GB'
        },
        member3703: {
            member3700: 'de',
            member3690: false ? {} : 'de',
            member3701: Class315.member3696,
            id: 1,
            member3702: 'DE'
        },
        member3704: {
            member3700: 'fr',
            member3690: false ? {} : 'fr',
            member3701: Class315.member3696,
            id: 2,
            member3702: 'FR'
        },
        member3705: {
            member3700: 'pt',
            member3690: false ? {} : 'pt',
            member3701: Class315.member3696,
            id: 3,
            member3702: 'BR'
        },
        member3706: {
            member3700: 'nl',
            member3690: false ? {} : 'nl',
            member3701: Class315.member3691,
            id: 4,
            member3702: 'NL'
        },
        member3707: {
            member3700: 'es',
            member3690: false ? {} : 'es',
            member3701: Class315.member3691,
            id: 5,
            member3702: 'ES'
        },
        member3708: {
            member3700: 'es-mx',
            member3690: false ? {} : 'es-mx',
            member3701: Class315.member3696,
            id: 6,
            member3702: 'MX'
        }
    };
    a.getByID = function (c) {
        for (var d in a) {
            var b = a[d];
            if (b.id === c) {
                return b;
            }
        }
        return null;
    };
    return a;
}();