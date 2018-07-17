$(document).ready(function(){

    $(".select_annee").select2({
        placeholder: "Année",
        allowClear: true
    });
    $(".select_mois").select2({
        placeholder: "Mois",
        allowClear: true
    });
    $(".select_parution").select2({
        placeholder: "Numéro de parution",
        allowClear: true
    });

    $(".select_rubrique").select2({
        placeholder: "Rubrique",
        allowClear: true
    });

    $(".select_auteur").select2({
        placeholder: "Auteur",
        allowClear: true
    });

    $(".select_index").select2({
        placeholder: "Index",
        allowClear: true
    });

    $(".select_decision").select2({
        placeholder: "Type de décision",
        allowClear: true
    });

});
