export var Class691 = function () {
    var a = {
        TEMPORARY: { serialID: 0 },
        PERMANENT: { serialID: 1 },
        member9898: { serialID: 2 }
    };
    var b = function (e) {
        for (var c in a) {
            var d = a[c];
            if (d.serialID === e) {
                return d;
            }
        }
        return null;
    };
    a.getByID = b;
    return a;
}();