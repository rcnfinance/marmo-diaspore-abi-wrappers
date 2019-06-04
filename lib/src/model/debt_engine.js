"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var marmojs_1 = require("marmojs");
var DebtEngine = /** @class */ (function (_super) {
    __extends(DebtEngine, _super);
    function DebtEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DebtEngine;
}(marmojs_1.Contract));
exports.DebtEngine = DebtEngine;
//# sourceMappingURL=debt_engine.js.map