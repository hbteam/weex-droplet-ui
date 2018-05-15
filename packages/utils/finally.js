// promise添加finally
const promiseFinallyPolyfill = function () {
    if (Promise.prototype.finally) return;
    Object.defineProperty(Promise.prototype, 'finally', {
        configurable: true,
        writable: true,
        value (callback) {
            let P = this.constructor;
            return this.then(
                value => P.resolve(callback()).then(() => value),
                reason => P.resolve(callback()).then(() => {
                    throw reason;
                })
            );
        }
    })
}();
