"use strict";
exports.__esModule = true;
exports.Depense = exports.Revenu = void 0;

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
function totalReven(revenuTotal) {
    var totalRevenu;
    totalRevenu = 0;
    for (var i = 0; revenuTotal.length; i++) {
        totalRevenu = totalRevenu + revenuTotal[i].montant;
    }
    return totalRevenu;
}

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
function totalDepense(depenseTotal) {
    var totalDepense;
    totalDepense = 0;
    for (var i = 0; depenseTotal.length; i++) {
        totalDepense = totalDepense + depenseTotal[i].montant;
    }
    return totalDepense;
}
