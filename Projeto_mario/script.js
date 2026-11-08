
// Elementos do personagem e dos controles
const mario = document.getElementById("mario");

const boneColor = document.getElementById("boneColor");
const shirtColor = document.getElementById("shirtColor");
const overallColor = document.getElementById("overallColor");
const skinColor = document.getElementById("skinColor");

const playerName = document.getElementById("playerName");

const sortearBtn = document.getElementById("sortearBtn");
const resetarBtn = document.getElementById("resetarBtn");
const colocarBtn = document.getElementById("colocarBtn");

// Cores originais
const coresOriginais = {
    bone: "#e52521",
    shirt: "#e52521",
    overall: "#1769d2",
    skin: "#f2b27b"
};

// Atualiza as cores do Mario
function atualizarMario() {
    mario.style.setProperty("--bone", boneColor.value);
    mario.style.setProperty("--shirt", shirtColor.value);
    mario.style.setProperty("--overall", overallColor.value);
    mario.style.setProperty("--skin", skinColor.value);
}

// Atualiza o personagem sempre que uma cor mudar
boneColor.addEventListener("input", atualizarMario);
shirtColor.addEventListener("input", atualizarMario);
overallColor.addEventListener("input", atualizarMario);
skinColor.addEventListener("input", atualizarMario);

// Gera uma cor aleatória
function corAleatoria() {
    const letras = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}

// Sorteia novas cores
function sortearMario() {
    boneColor.value = corAleatoria();
    shirtColor.value = corAleatoria();
    overallColor.value = corAleatoria();
    skinColor.value = corAleatoria();

    atualizarMario();
}

// Restaura as cores originais
function resetarMario() {
    boneColor.value = coresOriginais.bone;
    shirtColor.value = coresOriginais.shirt;
    overallColor.value = coresOriginais.overall;
    skinColor.value = coresOriginais.skin;

    atualizarMario();
}

// Coloca uma cópia do personagem dentro da casa
function colocarNoReino() {
    const reino = document.getElementById("reino");
    const localMario = document.getElementById("marioNoReino");

    // Cria uma cópia do Mario com as cores atuais
    const novoMario = mario.cloneNode(true);
    novoMario.removeAttribute("id");

    // Coloca a cópia dentro da sala
    localMario.replaceChildren(novoMario);

    // Atualiza o nome do personagem
    const nomePersonagem = playerName.value.trim() || "Meu personagem";
    document.getElementById("nomeNoReino").textContent = nomePersonagem;

    // Mostra a casa e leva a tela até ela
    reino.hidden = false;

    reino.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Eventos dos botões
sortearBtn.addEventListener("click", sortearMario);
resetarBtn.addEventListener("click", resetarMario);
colocarBtn.addEventListener("click", colocarNoReino);

// Inicializa o personagem com as cores originais
atualizarMario();
