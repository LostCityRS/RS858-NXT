export var Class457 = function () {
    var a = {
        member7262: { serialID: 0 },
        member7263: { serialID: 1 },
        member7264: { serialID: 2 }
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