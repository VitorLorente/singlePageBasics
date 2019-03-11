function ativarGreen(){
    // inativa container azul
    $("#blue-container").addClass("escolha-inativo");
    $("#blue-container").removeClass("escolha-ativo");
    // ativa botão verde
    $("#btn-green").removeClass("btn-green-inativo");
    $("#btn-green").addClass("btn-green-ativo");
    // inativa botão azul
    $("#btn-blue").addClass("btn-blue-inativo");
    $("#btn-blue").removeClass("btn-blue-ativo");
    // ativa container verde
    $("#green-container").addClass("escolha-ativo");
    $("#green-container").removeClass("escolha-inativo");
    
}

function ativarBlue(){
    // inativa container verde
    $("#green-container").addClass("escolha-inativo");
    $("#green-container").removeClass("escolha-ativo");
    // ativa botão azul
    $("#btn-blue").addClass("btn-blue-ativo");
    $("#btn-blue").removeClass("btn-blue-inativo");
    // inativa botão verde
    $("#btn-green").removeClass("btn-green-ativo");
    $("#btn-green").addClass("btn-green-inativo");
    // ativa container verde
    $("#blue-container").addClass("escolha-ativo");
    $("#blue-container").removeClass("escolha-inativo");

}

// Função para adicionar quadrado verde
function addGreen(){
    $("#container-quadrados-green").append(
        "<div class='quadrado quadrado-green'><div class='quadrado-header'><span class='deletar-quadrado' title='deletar'><i class='fas fa-times'></i></span></div></div>"
    );
}

// Função para adicionar quadrado azul
function addBlue(){
    $("#container-quadrados-blue").append(
        "<div class='quadrado quadrado-blue'><div class='quadrado-header'><span class='deletar-quadrado' title='deletar'><i class='fas fa-times'></i></span></div></div>"
    );
}

// A página começa com verde ativado
$(document).ready(function(){
    ativarGreen();
});

// Ativar verde
$("#btn-green").click(function(){
    // Se já estiver ativo
    if ($(this).hasClass("btn-green-ativo")){
        console.log("Já ativo");
    }
    else {
        ativarGreen();
    }
});

//Ativar azul
$("#btn-blue").click(function(){
    // Se já estiver ativo
    if ($(this).hasClass("btn-blue-ativo")){
        console.log("Já ativo");
    }
    else {
        ativarBlue();
    }
});

// Adicionar quadrado verde
$("#btn-add-quadrado-green").click(function(){
    addGreen();
});

// Adicionar quadrado azul
$("#btn-add-quadrado-blue").click(function(){
    addBlue();
});

// Deletar quadrado
$(".container-escolha").on("click", ".deletar-quadrado", function(){
    $(this).parent().parent().remove();
});