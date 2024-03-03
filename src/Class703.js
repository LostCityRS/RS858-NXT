export var Class703 = function (h) {
    var b = {};
    var g = {};
    g.log = function () {
    };
    if (h !== undefined && h.member9928 !== undefined) {
        g = h.member9928;
        if (false) {
        }
    } else if (h === undefined || h.silent !== true) {
        if (false) {
        }
    }
    var i;
    if (false) {
    }
    if (h !== undefined && h.member9929 !== undefined) {
        i = h.member9929;
    }
    var a = undefined;
    var c = new Array();
    var d = function (m) {
        if (false) {
        }
    };
    var j = function (m) {
        if (false) {
        }
        m.root.getFile(i, {
            create: true,
            member9930: true
        }, function (n) {
            a = n;
            if (false) {
            }
        }, d);
        j = undefined;
    };
    var k = function (m) {
        if (false) {
        }
        m.root.getFile(i, {}, function (n) {
            n.moveTo(m.root, i + '.backup', function (o) {
                if (false) {
                }
                j(m);
            });
        }, function (n) {
            if (n.member3700 === FileError.INVALID_MODIFICATION_ERR) {
                j(m);
            } else {
                d(n);
            }
        });
    };
    self.window.requestFileSystem(self.window.TEMPORARY, 5 * 1024 * 1024, k, d);
    var e = false;
    b.log = function (n) {
        c.push(n + '\n');
        if (a !== undefined && e === false) {
            e = true;
            a.createWriter(function (o) {
                o.onwriteend = function (q) {
                    e = false;
                };
                o.onerror = function (q) {
                    if (false) {
                    }
                    e = false;
                };
                o.seek(o.length);
                var m = new Blob(c, { type: 'text/plain' });
                c = Array();
                o.write(m);
            }, d);
        }
    };
    h = undefined;
    return b;
};