"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[494],{

/***/ 4494:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CreditScoreOracle": function() { return /* reexport */ CreditScoreOracle; }
});

// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
;// CONCATENATED MODULE: ../contracts/build/src/CreditScoreOracle.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// The public key of our trusted data provider
const ORACLE_PUBLIC_KEY = 'B62qoAE4rBRuTgC42vqvEyUqCGhaZsW58SKVW4Ht8aYqP9UTvxFWBgy';
class CreditScoreOracle extends web/* SmartContract */.C3 {
    constructor() {
        super(...arguments);
        // Define contract state
        this.oraclePublicKey = (0,web/* State */.ZM)();
        // Define contract events
        this.events = {
            verified: web/* Field */.gN,
        };
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...web/* Permissions.default */.Pl["default"](),
            editState: web/* Permissions.proofOrSignature */.Pl.proofOrSignature(),
        });
    }
    init(zkappKey) {
        super.init(zkappKey);
        // Initialize contract state
        this.oraclePublicKey.set(web/* PublicKey.fromBase58 */.nh.fromBase58(ORACLE_PUBLIC_KEY));
        // Specify that caller should include signature with tx instead of proof
        this.requireSignature();
    }
    verify(id, creditScore, signature) {
        // Get the oracle public key from the contract state
        const oraclePublicKey = this.oraclePublicKey.get();
        this.oraclePublicKey.assertEquals(oraclePublicKey);
        // Evaluate whether the signature is valid for the provided data
        const validSignature = signature.verify(oraclePublicKey, [id, creditScore]);
        // Check that the signature is valid
        validSignature.assertTrue();
        // Check that the provided credit score is greater than 700
        creditScore.assertGte((0,web/* Field */.gN)(700));
        // Emit an event containing the verified users id
        this.emitEvent('verified', id);
    }
}
__decorate([
    (0,web/* state */.SB)(web/* PublicKey */.nh),
    __metadata("design:type", Object)
], CreditScoreOracle.prototype, "oraclePublicKey", void 0);
__decorate([
    web/* method */.UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [web/* PrivateKey */._q]),
    __metadata("design:returntype", void 0)
], CreditScoreOracle.prototype, "init", null);
__decorate([
    web/* method */.UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [web/* Field */.gN, web/* Field */.gN, web/* Signature */.Pc]),
    __metadata("design:returntype", void 0)
], CreditScoreOracle.prototype, "verify", null);
//# sourceMappingURL=CreditScoreOracle.js.map
;// CONCATENATED MODULE: ../contracts/build/src/index.js


//# sourceMappingURL=index.js.map

/***/ })

}]);