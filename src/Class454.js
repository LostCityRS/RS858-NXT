export var Class454 = function () {
    var a = {
        member3713: {
            member7205: 'runescape',
            title: 'RuneScape',
            id: 0
        },
        member7206: {
            member7205: 'stellardawn',
            title: 'Stellar Dawn',
            id: 1
        },
        member7207: {
            member7205: 'alternatereality',
            title: 'Alternate Reality',
            id: 2
        },
        member3714: {
            member7205: 'transformers',
            title: 'Transformers',
            id: 3
        },
        member7208: {
            member7205: 'scratch',
            title: 'Scratch',
            id: 4
        }
    };
    a.getByID = function (c) {
        for (var b in a) {
            var d = a[b];
            if (d.id === c) {
                return d;
            }
        }
        return null;
    };
    return a;
}();