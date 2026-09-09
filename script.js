// ================================
// SMART FLOW - SCRIPT PRINCIPAL
// ================================


// --------------------------------
// TROCA DE TELAS
// --------------------------------

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    window.scrollTo(0, 0);
}

// --------------------------------
// CAPTURA DE FOTO
// --------------------------------

function takePhoto() {

    // Mostra uma pequena confirmação
    alert("Foto capturada!");

    // Depois da captura, abre a tela da foto
    showScreen("photo-screen");
}

// --------------------------------
// BOTÕES DE OPÇÕES
// --------------------------------

const optionGroups = document.querySelectorAll(".options");

optionGroups.forEach(group => {

    const buttons = group.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });

    });

});

// --------------------------------
// BOTÃO DE FAVORITO
// --------------------------------

const favoriteButton = document.querySelector(".photo-top button:nth-child(2)");

if (favoriteButton) {

    favoriteButton.addEventListener("click", () => {

        favoriteButton.textContent =
            favoriteButton.textContent === "♡" ? "♥" : "♡";

    });

}

// --------------------------------
// EXCLUIR FOTO
// --------------------------------

const deleteButton = document.querySelector(".photo-actions button:first-child");

if (deleteButton) {

    deleteButton.addEventListener("click", () => {

        const confirmDelete = confirm(
            "Deseja realmente excluir esta foto?"
        );

        if (confirmDelete) {
            alert("Foto excluída.");
            showScreen("gallery-screen");
        }

    });

}

// --------------------------------
// COMPARTILHAR
// --------------------------------

const shareButtons = document.querySelectorAll(
    ".photo-actions button:nth-child(2), .memory-card button"
);

shareButtons.forEach(button => {

    button.addEventListener("click", async () => {

        if (navigator.share) {

            try {

                await navigator.share({
                    title: "Smart Flow",
                    text: "Confira esta foto!"
                });

            } catch (error) {

                console.log("Compartilhamento cancelado.");

            }

        } else {

            alert(
                "A função de compartilhamento estará disponível no aplicativo."
            );

        }

    });

});

// --------------------------------
// BOTÃO EDITAR FOTO
// --------------------------------

const editButton = document.querySelector(".photo-actions button:nth-child(3)");

if (editButton) {

    editButton.addEventListener("click", () => {

        alert("Editor de fotos em desenvolvimento.");

    });

}

// --------------------------------
// BOTÃO SUGESTÃO DE IA
// --------------------------------

const aiButton = document.querySelector(".ai-card button");

if (aiButton) {

    aiButton.addEventListener("click", () => {

        aiButton.textContent = "Corrigido ✓";

        setTimeout(() => {
            aiButton.textContent = "Corrigir";
        }, 2000);

    });

}

// --------------------------------
// EXPLORAR MODOS INTELIGENTES
// --------------------------------

const smartCard = document.querySelector(".smart-card");

if (smartCard) {

    smartCard.addEventListener("click", () => {

        showScreen("mode-screen");

    });

    smartCard.style.cursor = "pointer";
}

// --------------------------------
// MENU INFERIOR
// --------------------------------

const bottomButtons = document.querySelectorAll(".bottom-nav button");

if (bottomButtons.length >= 3) {

    // Página inicial
    bottomButtons[0].addEventListener("click", () => {
        showScreen("home-screen");
    });

    // Câmera
    bottomButtons[1].addEventListener("click", () => {
        showScreen("camera-screen");
    });

    // Galeria
    bottomButtons[2].addEventListener("click", () => {
        showScreen("gallery-screen");
    });

}

// --------------------------------
// INICIALIZAÇÃO
// --------------------------------

document.addEventListener("DOMContentLoaded", () => {

    showScreen("camera-screen");

    console.log("Smart Flow iniciado com sucesso.");

});

// ==============================
// AÇÕES DOS BOTÕES
// ==============================

// ================================
// CONTROLES DA CÂMERA
// ================================

let flashAtivo = false;
let zoomAtual = 1;
let modoNoturno = false;
let exposicaoAtual = 0;
let focoAtual = 0;
let hdrAtivo = false;


// FLASH
function toggleFlash() {
    flashAtivo = !flashAtivo;

    alert(
        flashAtivo
            ? "Flash ligado"
            : "Flash desligado"
    );
}


// ZOOM
function changeZoom() {
    if (zoomAtual === 1) {
        zoomAtual = 2;
    } else if (zoomAtual === 2) {
        zoomAtual = 3;
    } else {
        zoomAtual = 1;
    }

    const zoomButton = document.getElementById("zoom-button");
    const zoomBottom = document.getElementById("zoom-bottom");

    if (zoomButton) {
        zoomButton.textContent = zoomAtual + "x";
    }

    if (zoomBottom) {
        zoomBottom.textContent = zoomAtual + "x";
    }
}


// CÂMERA
function changeCamera() {
    alert("Câmera alternada");
}


// MODO NOTURNO
function toggleNightMode() {
    modoNoturno = !modoNoturno;

    alert(
        modoNoturno
            ? "Modo noturno ativado"
            : "Modo noturno desativado"
    );
}


// EXPOSIÇÃO
function changeExposure() {
    exposicaoAtual++;

    if (exposicaoAtual > 2) {
        exposicaoAtual = -2;
    }

    alert("Exposição: " + exposicaoAtual);
}


// FOCO
function changeFocus() {
    focoAtual++;

    if (focoAtual > 3) {
        focoAtual = 0;
    }

    const modos = [
        "Foco automático",
        "Macro",
        "Super",
        "Manual"
    ];

    alert(modos[focoAtual]);
}


// HDR
function toggleHDR() {
    hdrAtivo = !hdrAtivo;

    alert(
        hdrAtivo
            ? "HDR ativado"
            : "HDR desativado"
    );
}

// CONFIGURAÇÕES
function openCameraSettings() {
    alert("Configurações da câmera");
}
function resetCamera() {
    flashAtivo = false;
    zoomAtual = 1;
    modoNoturno = false;
    exposicaoAtual = 0;
    focoAtual = 0;
    hdrAtivo = false;

    const zoomButton = document.getElementById("zoom-button");
    const zoomBottom = document.getElementById("zoom-bottom");

    if (zoomButton) {
        zoomButton.textContent = "1x";
    }

    if (zoomBottom) {
        zoomBottom.textContent = "1x";
    }

    alert("Configurações da câmera restauradas");
}