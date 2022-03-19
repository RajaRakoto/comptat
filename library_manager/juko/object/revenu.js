"use strict";
exports.__esModule = true;
exports.revenuJournalier = exports.Revenu = void 0;

var Revenu = /** @class */ (function () {
    function Revenu(id_revenu, date, libelle, source, montant) {
        this.id_revenu = id_revenu;
        this.date = date;
        this.libelle = libelle;
        this.source = source;
        this.montant = montant;
    }
    return Revenu;
}());

exports.Revenu = Revenu;
var revenuJournalier = /** @class */ (function () {
    function revenuJournalier(id_revenuJournalier, date, totalJour) {
        this.id_revenuJournalier = id_revenuJournalier;
        this.date = date;
        this.totalJour = totalJour;
    }
    return revenuJournalier;
}());

exports.revenuJournalier = revenuJournalier;
