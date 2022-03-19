"use strict";
exports.__esModule = true;
exports.depenseJournalier = exports.Depense = void 0;

var Depense = /** @class */ (function () {
    function Depense(id_depense, date, libelle, motif, montant) {
        this.id_depense = id_depense;
        this.date = date;
        this.libelle = libelle;
        this.motif = motif;
        this.montant = montant;
    }
    return Depense;
}());

exports.Depense = Depense;
var depenseJournalier = /** @class */ (function () {
    function depenseJournalier(id_depenseJournalier, date, totalJour) {
        this.id_depenseJournalier = id_depenseJournalier;
        this.date = date;
        this.totalJour = totalJour;
    }
    return depenseJournalier;
}());

exports.depenseJournalier = depenseJournalier;
