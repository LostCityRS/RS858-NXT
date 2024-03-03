import { Class3 } from 'Class3.js';
export var Class295 = function () {
    var i = { supported: true };
    var d = { supported: false };
    var c = false;
    var q = {};
    var g = {};
    var n = 0;
    window.setLocalStorageCallbacks = function (C, B) {
        z(C, B);
    };
    var r = function (B, D, F) {
        var C = g[B];
        if (C === undefined) {
            return undefined;
        }
        if (C.result === null) {
            return null;
        }
        if (C.result === undefined || D !== undefined && C.settings !== D) {
            if (false) {
            }
            C.settings = D;
            if (false) {
            }
            try {
                C.result = C(D, F);
            } catch (E) {
                C.result = {
                    supported: false,
                    error: E.member3492
                };
            }
        }
        return C.result;
    };
    var s = function (B, C, D) {
        return function (E) {
            if (false) {
            }
            g[C].result = B[C] = E;
            n--;
            if (n === 0) {
                D(B);
            }
        };
    };
    q.testFeatureSet = function (D, E) {
        if (n > 0) {
            throw new Error('1558 ');
        }
        if (false) {
        }
        var B = {};
        for (var C in g) {
            B[C] = r(C, D !== undefined ? D[C] : undefined, s(B, C, E));
            if (B[C] === null) {
                n++;
            }
        }
        if (n === 0) {
            E(B);
        }
    };
    var e = q.getFeatureSet;
    g.typedArrays = function () {
        if (!window.ArrayBuffer) {
            return d;
        } else {
            return i;
        }
    };
    q.MIN_TEXTURE_SIZE = 2048;
    q.MIN_FRAGMENT_UNIFORM_VECTORS = 221;
    q.MIN_VERTEX_UNIFORM_VECTORS = 251;
    g.webGL = function (Q) {
        if (!window.WebGLRenderingContext) {
            return d;
        }
        var C = document.createElement('canvas');
        var N = C.getContext('webgl', Q) || C.getContext('experimental-webgl', Q);
        if (!N) {
            return d;
        }
        var P = {};
        var K = N.getSupportedExtensions();
        for (var V = 0; V < K.length; V++) {
            P[K[V]] = true;
        }
        if (P.OES_texture_float === true && P.WEBGL_color_buffer_float === undefined) {
            N.getExtension('OES_texture_float');
            var S = N.createTexture();
            N.bindTexture(N.TEXTURE_2D, S);
            N.texImage2D(N.TEXTURE_2D, 0, N.RGBA, 2, 2, 0, N.RGBA, N.FLOAT, null);
            N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.LINEAR);
            N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.LINEAR);
            var L = N.createFramebuffer();
            N.bindFramebuffer(N.FRAMEBUFFER, L);
            N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, S, 0);
            if (N.checkFramebufferStatus(N.FRAMEBUFFER) === N.FRAMEBUFFER_COMPLETE) {
                P.WEBGL_color_buffer_float = true;
            } else {
                console.log('FD: FP FBO render target test failed!');
            }
            if (P.OES_texture_float_linear === undefined) {
                try {
                    var M = N.createProgram();
                    var F = N.createShader(N.VERTEX_SHADER);
                    N.attachShader(M, F);
                    N.shaderSource(F, 'attribute vec2 aPosition;\n void main() {\n gl_Position=vec4(aPosition,0.0,1.0);\n }');
                    N.compileShader(F);
                    if (!N.getShaderParameter(F, N.COMPILE_STATUS)) {
                        throw new Error('1559 ');
                    }
                    var B = N.createShader(N.FRAGMENT_SHADER);
                    N.attachShader(M, B);
                    N.shaderSource(B, 'uniform sampler2D uFPTex;\n void main() {\n gl_FragColor=texture2D(uFPTex,vec2(1.0,1.0));\n }');
                    N.compileShader(B);
                    if (!N.getShaderParameter(B, N.COMPILE_STATUS)) {
                        throw new Error('1560 ');
                    }
                    N.linkProgram(M);
                    if (!N.getProgramParameter(M, N.LINK_STATUS)) {
                        throw new Error('1561 ');
                    }
                    N.useProgram(M);
                    if (Float32Array === undefined) {
                        return d;
                    }
                    var D = new Float32Array([
                        0,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        1
                    ]);
                    var J = N.createTexture();
                    N.bindTexture(N.TEXTURE_2D, J);
                    N.texImage2D(N.TEXTURE_2D, 0, N.RGBA, 2, 2, 0, N.RGBA, N.FLOAT, D);
                    N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.LINEAR);
                    N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.LINEAR);
                    var H = new Float32Array([
                        1,
                        1,
                        -1,
                        1,
                        -1,
                        -1,
                        1,
                        1,
                        -1,
                        -1,
                        1,
                        -1
                    ]);
                    var U = N.createBuffer();
                    N.bindBuffer(N.ARRAY_BUFFER, U);
                    N.bufferData(N.ARRAY_BUFFER, H, N.STATIC_DRAW);
                    var E = N.getAttribLocation(M, 'aPosition');
                    var O = N.getUniformLocation(M, 'uFPTex');
                    N.enableVertexAttribArray(E);
                    N.vertexAttribPointer(E, 2, N.FLOAT, false, 0, 0);
                    N.uniform1i(O, 0);
                    N.drawArrays(N.TRIANGLES, 0, 6);
                    var R = new Uint8Array(4 * 4);
                    N.readPixels(0, 0, 2, 2, N.RGBA, N.UNSIGNED_BYTE, R);
                    if (Math.abs(R[0] - 127) < 10) {
                        P.OES_texture_float_linear = true;
                    }
                } catch (G) {
                    console.log(G);
                    console.log(G.stack);
                }
            }
            N.deleteTexture(S);
            N.deleteFramebuffer(L);
            N.bindTexture(N.TEXTURE_2D, null);
            N.bindFramebuffer(N.FRAMEBUFFER, null);
        }
        var T = {};
        T.maxVertexUniformVectors = N.getParameter(N.MAX_VERTEX_UNIFORM_VECTORS);
        T.maxFragmentUniformVectors = N.getParameter(N.MAX_FRAGMENT_UNIFORM_VECTORS);
        T.maxTextureSize = N.getParameter(N.MAX_TEXTURE_SIZE);
        T.maxVertexTextureImageUnits = N.getParameter(N.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
        T.maxVertexAttribs = N.getParameter(N.MAX_VERTEX_ATTRIBS);
        T.maxVaryingVectors = N.getParameter(N.MAX_VARYING_VECTORS);
        var I = N.getExtension('EXT_texture_filter_anisotropic') || N.getExtension('MOZ_EXT_texture_filter_anisotropic') || N.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        if (I !== null) {
            T.anisotropyMax = N.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        }
        return {
            supported: true,
            data: {
                extensions: P,
                params: T
            }
        };
    };
    g.webWorkers = function () {
        if (!window.Worker) {
            return d;
        } else {
            return i;
        }
    };
    g.blob = function () {
        if (!q.isTypedArraysSupported()) {
            return d;
        }
        var C = member55(window, 'Blob');
        if (C === undefined) {
            return d;
        }
        var D = new ArrayBuffer(1);
        var E = new Uint8Array(D);
        E[0] = 123;
        var B = new C([E], { type: 'application/octet-binary' });
        if (B === undefined) {
            return d;
        }
        if (B.size !== 1) {
            return d;
        }
        return i;
    };
    g.blobBuilder = function () {
        if (!q.isTypedArraysSupported()) {
            return d;
        }
        var D = member55(window, 'BlobBuilder');
        if (D === undefined) {
            return d;
        }
        var B = new ArrayBuffer(1);
        var C = D();
        C.append(B);
        blob = C.getBlob('application/octet-binary');
        if (blob === undefined) {
            return d;
        }
        if (blob.size !== 1) {
            return d;
        }
        return i;
    };
    g.webSockets = function () {
        if (!window.WebSocket) {
            return d;
        }
        if ('binaryType' in WebSocket.prototype) {
            return i;
        }
        try {
            if (!new WebSocket(('https:' == location.protocol ? 'wss' : 'ws') + '://.').binaryType) {
                return d;
            } else {
                return i;
            }
        } catch (B) {
            return d;
        }
    };
    if (true) {
        g.webSocketsOnWebWorkers = function (F, E) {
            if (!q.isWebWorkersSupported()) {
                return d;
            }
            if (!q.isWebSocketsSupported()) {
                return d;
            }
            var C = new Worker(F + 'd.js?1445359120696');
            C.postMessage = member55(C, 'postMessage');
            var B = false;
            var D = window.setTimeout(function () {
                B = true;
                E(d);
            }, 10000);
            C.onmessage = function (G) {
                if (B) {
                    return;
                }
                clearTimeout(D);
                C.terminate();
                if (G.data && G.data.member59 === Class3.member58) {
                    E({
                        supported: G.data.supported,
                        data: G.data.data,
                        error: G.data.error
                    });
                } else {
                    E(d);
                }
            };
            C.postMessage(Class3.member58);
            return null;
        };
    } else {
    }
    var o, A;
    var x = 0;
    var v = 1;
    var m = 2;
    var y = 3;
    var b = false;
    var k = undefined;
    var z = function (C, B) {
        if (b) {
            C();
        }
        o = C;
        if (k !== undefined) {
            B(k);
        }
        A = B;
    };
    var j = function (B) {
        k = B;
        if (A !== undefined) {
            A(B);
        }
    };
    g.fileSystem = function (C, E) {
        if (member55(window, 'requestFileSystem') === undefined) {
            return d;
        }
        if (!q.isBlobSupported() && !q.isBlobBuilderSupported()) {
            return d;
        }
        if (C < 0) {
            return i;
        }
        var D = function (I, G) {
            var F = function (J) {
                if (J < C) {
                    E(d);
                    j(y);
                } else {
                    E(i);
                    j(x);
                }
            };
            var H = function (J) {
                E({
                    supported: false,
                    error: '1 ' + J.member3492
                });
                j(v);
            };
            if (false) {
            }
            if (member55(navigator, 'persistentStorage') !== undefined) {
                member55(navigator, 'persistentStorage').requestQuota(C, F, H);
            } else {
                member55(window, 'storageInfo').requestQuota(member55(window, 'storageInfo').PERSISTENT, C, F, H);
            }
        };
        var B = function (F) {
            E({
                supported: false,
                error: '2 ' + F.member3492
            });
            j(m);
        };
        if (member55(navigator, 'persistentStorage') !== undefined) {
            member55(navigator, 'persistentStorage').queryUsageAndQuota(D, B);
        } else if (member55(window, 'storageInfo') !== undefined) {
            member55(window, 'storageInfo').queryUsageAndQuota(member55(window, 'storageInfo').PERSISTENT, D, B);
        } else {
            setTimeout(function () {
                E(d);
                j(m);
            }, 0);
        }
        b = true;
        if (o !== undefined) {
            o();
        }
        return null;
    };
    g.indexedDB = function () {
        if (member55(window, 'indexedDB') !== undefined) {
            var C = 'jagex-checkModernIdb';
            var B = member55(window, 'indexedDB').open(C, 1).onupgradeneeded === null;
            if (member55(window, 'indexedDB').deleteDatabase) {
                member55(window, 'indexedDB').deleteDatabase(C);
            }
            return B ? i : d;
        } else {
            return d;
        }
    };
    g.webSQL = function () {
        if (member55(window, 'openDatabase') !== undefined) {
            return i;
        } else {
            return d;
        }
    };
    g.localStorage = function () {
        var B = member55(window, 'localStorage');
        if (B === undefined) {
            return d;
        }
        try {
            B.setItem('foo', 'bar');
            B.removeItem('foo');
            return i;
        } catch (C) {
            return d;
        }
    };
    g.sessionStorage = function () {
        var B = member55(window, 'sessionStorage');
        if (B === undefined) {
            return d;
        }
        try {
            B.setItem('foo', 'bar');
            B.removeItem('foo');
            return i;
        } catch (C) {
            return d;
        }
    };
    g.webAudio = function () {
        if (member55(window, 'audioContext') !== undefined) {
            return i;
        } else {
            return d;
        }
    };
    g.oggVorbis = function () {
        var B = document.createElement('audio');
        if (B.canPlayType && B.canPlayType('audio/ogg; codecs="vorbis"') != '') {
            return i;
        } else {
            return d;
        }
    };
    g.fullscreen = function () {
        if (member55(document, 'exitFullscreen') !== undefined || member55(document, 'cancelFullscreen') !== undefined || member55(document, 'cancelFullScreen') !== undefined) {
            return i;
        } else {
            return d;
        }
    };
    g.requestAnimationFrame = function () {
        if (member55(window, 'requestAnimationFrame') !== undefined) {
            return i;
        } else {
            return d;
        }
    };
    var u = function (B) {
        return function (C, D) {
            return r(B, C, D);
        };
    };
    var t = function (B) {
        return function (D) {
            var C = r(B, undefined, D);
            if (C === null) {
                return null;
            } else {
                return C.supported;
            }
        };
    };
    for (var a in g) {
        var h = a.charAt(0).toUpperCase() + a.slice(1);
        q['test' + h] = u(a);
        q['is' + h + 'Supported'] = t(a);
    }
    return q;
}();