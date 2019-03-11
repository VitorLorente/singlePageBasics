function ativarGreen(){
    $("#blue-container").addClass("escolha-inativo");
    $("#blue-container").removeClass("escolha-ativo");
    $("#btn-green").removeClass("btn-green-inativo");
    $("#btn-green").addClass("btn-green-ativo");
    $("#btn-blue").addClass("btn-blue-inativo");
    $("#btn-blue").removeClass("btn-blue-ativo");
    $("#green-container").addClass("escolha-ativo");
    $("#green-container").removeClass("escolha-inativo");
    $("#btn-add-quadrado").addClass("btn-add-green");
    $("#btn-add-quadrado").removeClass("btn-add-blue");
}

function ativarBlue(){
    $("#green-container").addClass("escolha-inativo");
    $("#green-container").removeClass("escolha-ativo");
    $("#btn-blue").addClass("btn-blue-ativo");
    $("#btn-blue").removeClass("btn-blue-inativo");
    $("#btn-green").removeClass("btn-green-ativo");
    $("#btn-green").addClass("btn-green-inativo");
    $("#blue-container").addClass("escolha-ativo");
    $("#blue-container").removeClass("escolha-inativo");
    $("#btn-add-quadrado").addClass("btn-add-blue");
    $("#btn-add-quadrado").removeClass("btn-add-green");

}

function addGreen(){
    $("#container-quadrados-green").append(
        "<div class='quadrado quadrado-green'><div class='quadrado-header'><span class='deletar-quadrado' title='deletar'><i class='fas fa-times'></i></span></div></div>"
    );
}

function addBlue(){
    $("#container-quadrados-blue").append(
        "<div class='quadrado quadrado-blue'><div class='quadrado-header'><span class='deletar-quadrado' title='deletar'><i class='fas fa-times'></i></span></div></div>"
    );
}

$(document).ready(function(){
    ativarGreen();
});

$("#btn-green").click(function(){
    if ($(this).hasClass("btn-green-ativo")){
        console.log("Já ativo");
    }
    else {
        ativarGreen();
    }
});

$("#btn-blue").click(function(){
    if ($(this).hasClass("btn-blue-ativo")){
        console.log("Já ativo");
    }
    else {
        ativarBlue();
    }
});

$("#btn-add-quadrado-green").click(function(){
    addGreen();
});

$("#btn-add-quadrado-blue").click(function(){
    addBlue();
});

$(".container-escolha").on("click", ".deletar-quadrado", function(){
    $(this).parent().parent().remove();
    console.log("ahoy");
});