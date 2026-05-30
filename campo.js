
// ===== DADOS DOS JOGADORES (TITULARES E RESERVAS INTEGRADOS) =====
const jogadores = {
  // Titulares
  goleiro: { nome: "Alisson", numero: 1, clube: "Liverpool", posicao: "Goleiro", overall: 89, atributos: { velocidade: 63, passe: 82, chute: 65, defesa: 92 } },
  
  lateralDir: { nome: "Éder Militão", numero: 5, clube: "Real Madrid", posicao: "Lateral Dir.", overall: 85, atributos: { velocidade: 85, passe: 78, chute: 66, defesa: 84 } },
  
  zageiroDir: { nome: "Marquinhos", numero: 2, clube: "PSG", posicao: "Zagueiro Dir.", overall: 84, atributos: { velocidade: 78, passe: 80, chute: 65, defesa: 90 } },
  
  zageiroEsq: { nome: "Gabriel Magalhães", numero: 3, clube: "Arsenal", posicao: "Zagueiro Esq.", overall: 85, atributos: { velocidade: 80, passe: 75, chute: 62, defesa: 88 } },
  
  lateralEsq: { nome: "Wesley", numero: 4, clube: "AS Roma", posicao: "Lateral Esq.", overall: 81, atributos: { velocidade: 91, passe: 76, chute: 64, defesa: 85 } },
  
  meioDir: { nome: "Raphinha", numero: 8, clube: "Barcelona", posicao: "Meia Arm.", overall: 89, atributos: { velocidade: 90, passe: 86, chute: 89, defesa: 55 } },
  
  meioCentro: { nome: "Casemiro", numero: 6, clube: "Manchester United", posicao: "Volante", overall: 88, atributos: { velocidade: 72, passe: 89, chute: 75, defesa: 90 } },
  
  meioEsq: { nome: "Neymar Jr", numero: 10, clube: "Santos", posicao: "Meia Arm.", overall: 92, atributos: { velocidade: 82, passe: 95, chute: 91, defesa: 60 } },
  
  atacanteDir: { nome: "Luiz Henrique", numero: 7, clube: "Zenit", posicao: "Ala Dir.", overall: 89, atributos: { velocidade: 93, passe: 85, chute: 86, defesa: 42 } },
  
  centroAvante: { nome: "Pedro Guilherme", numero: 9, clube: "Flamengo", posicao: "Centroavante", overall: 83, atributos: { velocidade: 85, passe: 81, chute: 86, defesa: 45 } },
  
  atacanteEsq: { nome: "Vinícius Jr", numero: 11, clube: "Real Madrid", posicao: "Atacante", overall: 93, atributos: { velocidade: 97, passe: 86, chute: 90, defesa: 38 } },
  
  // Reservas
  reserva1: { nome: "Weverton", numero: 12, clube: "Palmeiras", posicao: "Goleiro", overall: 80, atributos: { velocidade: 58, passe: 70, chute: 60, defesa: 82 } },
  
  reserva2: { nome: "Danilo", numero: 13, clube: "Juventus", posicao: "Lateral", overall: 81, atributos: { velocidade: 79, passe: 78, chute: 68, defesa: 81 } },
  
  reserva3: { nome: "Bremer", numero: 14, clube: "Juventus", posicao: "Zagueiro", overall: 84, atributos: { velocidade: 81, passe: 68, chute: 55, defesa: 85 } },
  
  reserva4: { nome: "Andreas Pereira", numero: 15, clube: "Fulham", posicao: "Volante", overall: 80, atributos: { velocidade: 76, passe: 82, chute: 75, defesa: 70 } },
  
  reserva5: { nome: "Gerson", numero: 16, clube: "Flamengo", posicao: "Meia", overall: 82, atributos: { velocidade: 75, passe: 84, chute: 78, defesa: 74 } },
  
  reserva6: { nome: "Endrick", numero: 17, clube: "Real Madrid", posicao: "Atacante", overall: 80, atributos: { velocidade: 89, passe: 72, chute: 81, defesa: 35 } }
};

// ===== MOTOR DE TEMAS =====
const botoesTema = document.querySelectorAll(".botao-tema");
const campo = document.querySelector(".campo");

const temas = {
  classico: { grama: "#2d8a2d", fundo: "#0a0a0a", borda: "rgba(255,255,255,0.8)" },
  noturno: { grama: "#1a3a1a", fundo: "#000510", borda: "rgba(255,255,200,0.8)" },
  chuvoso: { grama: "#1d5c1d", fundo: "#0a0f1a", borda: "rgba(150,200,255,0.8)" },
  neon: { grama: "#0a1a0a", fundo: "#000a05", borda: "#00ff88" },
  retro: { grama: "#4a7a2a", fundo: "#1a1000", borda: "#ffcc00" }
};

botoesTema.forEach(function(botao) {
  botao.addEventListener("click", function() {
    const tema = botao.dataset.tema;
    botoesTema.forEach(function(b) {
      b.classList.remove("ativo");
      campo.classList.remove("tema-" + b.dataset.tema);
    });
    botao.classList.add("ativo");
    campo.classList.add("tema-" + tema);

    document.querySelector(".campo-grama").style.backgroundColor = temas[tema].grama;
    document.body.style.backgroundColor = temas[tema].fundo;
    campo.style.borderColor = temas[tema].borda;
  });
});

// ===== FUNÇÃO UTILITÁRIA DE COR POR DESEMPENHO =====
function corBarra(valor) {
  if (valor >= 78) return "#00ff88"; // Verde (Excelente)
  if (valor >= 65) return "#ffd700"; // Amarelo (Médio)
  return "#ff4444"; // Vermelho (Baixo)
}

// ===== RENDERIZAR CARD INTERNO DO JOGADOR (SE HOUVER NO HTML) =====
function renderizarCard(elemento, dados) {
  const card = elemento.querySelector(".card");
  if (!card || !dados) return;

  card.innerHTML = `
    <span class="card-overall">${dados.overall}</span>
    <span class="card-posicao-tag">${dados.posicao}</span>
    <img class="foto-jogador" src="imagens/${dados.nome.toLowerCase().replaceAll(" ", "-")}.png" alt="${dados.nome}">
    <p class="nome">${dados.nome}</p>
    <p class="clube">${dados.clube}</p>
    <div class="card-atributos">
      ${Object.entries(dados.atributos).map(function([label, valor]) {
        return `
          <div class="atributo-linha">
            <span class="atributo-label">${label.substring(0,3).toUpperCase()}</span>
            <div class="atributo-barra-fundo">
              <div class="atributo-barra" style="width:${valor}%; background-color:${corBarra(valor)}"></div>
            </div>
            <span class="atributo-valor">${valor}</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// ===== ENGINE DO CARD SHOWCASE LATERAL FIXO =====
const cardFixo = document.getElementById("cardFifaFixo");
const placeholder = document.getElementById("placeholderMensagem");

function exibirCardLateral(dados) {
  if (!dados) return

  const siglas = {
    velocidade: "VEL",
    passe: "PAS",
    chute: "FIN",
    defesa: "DEF"
  }

  cardFixo.innerHTML = `
    <span class="card-lateral-overall">${dados.overall}</span>
    <span class="card-lateral-posicao">${dados.posicao}</span>
    <img class="foto-jogador" src="imagens/${dados.nome.toLowerCase().replaceAll(" ", "-")}.png" alt="${dados.nome}">
    <p class="card-lateral-nome">${dados.nome}</p>
    <p class="card-lateral-clube">${dados.clube}</p>
    <div class="card-lateral-atributos">
      ${Object.entries(dados.atributos).map(function([label, valor]) {
        return `
          <div class="card-lateral-linha">
            <span class="card-lateral-label">${siglas[label] || label.substring(0,3).toUpperCase()}</span>
            <div class="card-lateral-barra-fundo">
              <div class="atributo-barra" data-target="${valor}%" style="background-color:${corBarra(valor)}"></div>
            </div>
            <span class="card-lateral-valor">${valor}</span>
          </div>
        `
      }).join("")}
    </div>
  `

  placeholder.style.display = "none"
  cardFixo.classList.add("visivel")

  setTimeout(function() {
    cardFixo.querySelectorAll(".atributo-barra").forEach(function(barra) {
      barra.style.setProperty("width", barra.dataset.target, "important")
    })
  }, 50)
}
function esconderCardLateral() {
  cardFixo.classList.remove("visivel")
  placeholder.style.display = "block"
  cardFixo.innerHTML = ""
}

// ===== SISTEMA DINÂMICO DE ESCUTA DO MOUSE =====
function vincularEventosCards() {
  document.querySelectorAll(".jogador").forEach(function(el) {
    // Remove listeners antigos para evitar acúmulo pós-substituição
    el.removeEventListener("mouseenter", el._mouseEnterHandler);
    el.removeEventListener("mouseleave", esconderCardLateral);

    el._mouseEnterHandler = function() { exibirCardLateral(jogadores[el.dataset.jogador]); };
    el.addEventListener("mouseenter", el._mouseEnterHandler);
    el.addEventListener("mouseleave", esconderCardLateral);
  });

  document.querySelectorAll(".reserva").forEach(function(el) {
    el.removeEventListener("mouseenter", el._mouseEnterHandler);
    el.removeEventListener("mouseleave", esconderCardLateral);

    el._mouseEnterHandler = function() { exibirCardLateral(jogadores[el.dataset.reserva]); };
    el.addEventListener("mouseenter", el._mouseEnterHandler);
    el.addEventListener("mouseleave", esconderCardLateral);
  });
}

function atualizarTodosOsCards() {
  document.querySelectorAll(".jogador").forEach(function(el) {
    const chave = el.dataset.jogador;
    renderizarCard(el, jogadores[chave]);
  });
  vincularEventosCards();
}
// Inicializa os cards e listeners na primeira carga da página
atualizarTodosOsCards();

// ===== SISTEMA DE FORMAÇÕES (% RESPONSIVA) =====
const formacoes = {
  "4-3-3": {
    goleiro: { left: 2.5, top: 42.4 }, lateralDir: { left: 27.5, top: 79 }, zageiroEsq: { left: 18.75, top: 28 }, zageiroDir: { left: 18.75, top: 56 }, lateralEsq: { left: 27.5, top: 6 },
    meioDir: { left: 51.25, top: 62 }, meioCentro: { left: 45, top: 42.4 }, meioEsq: { left: 51.25, top: 22 },
    atacanteDir: { left: 71.25, top: 74 }, centroAvante: { left: 81.25, top: 42.4 }, atacanteEsq: { left: 71.25, top: 14 }
  },
  "4-4-2": {
    goleiro: { left: 2.5, top: 42.4 }, lateralEsq: { left: 18.75, top: 10 }, zageiroEsq: { left: 22.5, top: 30 }, zageiroDir: { left: 22.5, top: 58 }, lateralDir: { left: 18.75, top: 78 },
    meioEsq: { left: 48.75, top: 10 }, meioCentro: { left: 43.75, top: 34 }, meioDir: { left: 43.75, top: 56 }, atacanteDir: { left: 48.75, top: 78 },
    atacanteEsq: { left: 71.25, top: 30 }, centroAvante: { left: 71.25, top: 52 }
  },
  "3-5-2": {
    goleiro: { left: 2.5, top: 42.4 }, zageiroEsq: { left: 22.5, top: 17 }, zageiroDir: { left: 21.25, top: 42.4 }, lateralDir: { left: 22.5, top: 67 }, lateralEsq: { left: 47.5, top: 6 },
    meioEsq: { left: 56.25, top: 26 }, meioCentro: { left: 42.5, top: 42.4 }, meioDir: { left: 47.5, top: 78 }, atacanteDir: { left: 56.25, top: 58 },
    atacanteEsq: { left: 75, top: 30 }, centroAvante: { left: 75, top: 52 }
  },
  "5-3-2": {
    goleiro: { left: 2.5, top: 42.4 }, lateralEsq: { left: 17.5, top: 6 }, zageiroEsq: { left: 20, top: 22 }, meioCentro: { left: 22.5, top: 42.4 }, zageiroDir: { left: 20, top: 62 }, lateralDir: { left: 17.5, top: 78 },
    meioEsq: { left: 45, top: 20 }, meioDir: { left: 45, top: 42.4 }, atacanteDir: { left: 45, top: 66 },
    atacanteEsq: { left: 75, top: 30 }, centroAvante: { left: 75, top: 52 }
  }
};

const selectFormacao = document.querySelector(".select-formacao");

function aplicarFormacao(formacao) {
  const posicoes = formacoes[formacao];
  Object.keys(posicoes).forEach(function(chave) {
    const jogadorEl = document.querySelector(`[data-jogador="${chave}"]`);
    if (!jogadorEl) return;
    jogadorEl.style.left = posicoes[chave].left + "%";
    jogadorEl.style.top = posicoes[chave].top + "%";
  });
}
selectFormacao.addEventListener("change", function() { aplicarFormacao(selectFormacao.value); });

// ===== PROCESSAMENTO REAL DE SUBSTITUIÇÕES DE ELENCO =====
let jogadorSelecionado = null;
let reservaSelecionada = null;

const animacaoSub = document.getElementById("animacaoSub");
const subSaindo = document.getElementById("subSaindo");
const subEntrando = document.getElementById("subEntrando");

document.querySelectorAll(".jogador").forEach(function(jogador) {
  jogador.addEventListener("dblclick", function() {
    if (jogadorSelecionado === jogador) {
      jogador.classList.remove("selecionado");
      jogadorSelecionado = null;
      return;
    }
    document.querySelectorAll(".jogador").forEach(j => j.classList.remove("selecionado"));
    jogador.classList.add("selecionado");
    jogadorSelecionado = jogador;

    if (reservaSelecionada) realizarSubstituicao();
  });
});


document.querySelectorAll(".reserva").forEach(function(reserva) {
  reserva.addEventListener("click", function() {
    if (reservaSelecionada === reserva) {
      reserva.classList.remove("selecionado");
      reservaSelecionada = null;
      return;
    }
    document.querySelectorAll(".reserva").forEach(r => r.classList.remove("selecionado"));
    reserva.classList.add("selecionado");
    reservaSelecionada = reserva;

    if (jogadorSelecionado) realizarSubstituicao();
  });
});

function realizarSubstituicao() {
  const chaveTitular = jogadorSelecionado.dataset.jogador;
  const chaveReserva = reservaSelecionada.dataset.reserva;

  const dadosTitular = jogadores[chaveTitular];
  const dadosReserva = jogadores[chaveReserva];

  subSaindo.textContent = dadosTitular.nome;
  subEntrando.textContent = dadosReserva.nome;
  animacaoSub.classList.add("ativo");

  // Apito do Juiz via Web Audio API (Otimizado)
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.stop(ctx.currentTime + 0.4);
  } catch (err) {
    console.log("AudioContext não pôde ser iniciado antes da interação do usuário.");
  }

  setTimeout(function() {
    // Permuta lógica profunda dos objetos
    jogadores[chaveTitular] = dadosReserva;
    jogadores[chaveReserva] = dadosTitular;

    // Atualiza número e elementos gráficos da camisa em campo
    const numeroTitularEl = jogadorSelecionado.querySelector(".numero");
    if (numeroTitularEl) numeroTitularEl.textContent = dadosReserva.numero;

    // Atualiza o HTML visual do bloco de reservas
    reservaSelecionada.querySelector(".nome-reserva").textContent = dadosTitular.nome;
    reservaSelecionada.querySelector(".numero-reserva").textContent = dadosTitular.numero;
    reservaSelecionada.querySelector(".posicao-reserva").textContent = dadosTitular.posicao;

    // Atualiza os dados de mouse e re-renderiza os nós modificados
    atualizarTodosOsCards();

    // Reseta flags de seleção e fecha janelas de efeitos
    jogadorSelecionado.classList.remove("selecionado");
    reservaSelecionada.classList.remove("selecionado");
    jogadorSelecionado = null;
    reservaSelecionada = null;
    animacaoSub.classList.remove("ativo");
    
    esconderCardLateral();
  }, 2000);
}
// ===== SISTEMA DE DRAG AND DROP (ARRASTAR E SOLTAR EM %) =====
let jogadorArrastando = null;

// Função que ativa o movimento ao clicar e segurar o jogador
document.querySelectorAll(".jogador").forEach(function(jogador) {
  jogador.addEventListener("mousedown", function(e) {
    // Só ativa o arrastar se o clique for com o botão esquerdo do mouse
    if (e.button !== 0) return;
    
    jogadorArrastando = jogador;
    jogador.classList.add("arrastando");
    
    // Evita comportamentos padrão indesejados (como selecionar textos)
    e.preventDefault();
  });
});

// Evento global que escuta o movimento do mouse pela tela
document.addEventListener("mousemove", function(e) {
  if (!jogadorArrastando) return;

  // Pega as dimensões e posicionamento atuais do campo na tela
  const rectCampo = campo.getBoundingClientRect();

  // Calcula a posição do mouse relativa ao campo (em pixels)
  let xPixels = e.clientX - rectCampo.left;
  let yPixels = e.clientY - rectCampo.top;

  // Converte os pixels para porcentagem (%) baseada no tamanho do campo
  let xPorcentagem = (xPixels / rectCampo.width) * 100;
  let yPorcentagem = (yPixels / rectCampo.height) * 100;

  // Limita o movimento para o jogador não sair de dentro das quatro linhas
  if (xPorcentagem < 0) xPorcentagem = 0;
  if (xPorcentagem > 100) xPorcentagem = 100;
  if (yPorcentagem < 0) yPorcentagem = 0;
  if (yPorcentagem > 100) yPorcentagem = 100;

  // Aplica a nova posição diretamente no elemento do jogador
  jogadorArrastando.style.left = xPorcentagem + "%";
  jogadorArrastando.style.top = yPorcentagem + "%";
});

// detecta quando o usuário solta o botão do mouse
document.addEventListener("mouseup", function() {
  if (jogadorArrastando) {
    jogadorArrastando.classList.remove("arrastando");
    jogadorArrastando = null;
  }
});
// ===== LINHAS DE PASSE E ENTROSAMENTO =====
const canvas = document.getElementById("canvasLinhas")
const ctx2d = canvas.getContext("2d", { willReadFrequently: true })

function redimensionarCanvas() {
  canvas.width = campo.offsetWidth
  canvas.height = campo.offsetHeight
}
redimensionarCanvas()
window.addEventListener("resize", redimensionarCanvas)

function posicaoJogador(el) {
  const campoBounds = campo.getBoundingClientRect()
  const elBounds = el.getBoundingClientRect()
  return {
    x: elBounds.left + elBounds.width / 2 - campoBounds.left,
    y: elBounds.top + elBounds.height / 2 - campoBounds.top
  }
}

function calcularEntrosamento(chave1, chave2) {
  const j1 = jogadores[chave1]
  const j2 = jogadores[chave2]
  if (!j1 || !j2) return 0

  let pontos = 0

  if (j1.clube === j2.clube) pontos += 40
  
  const mediaAtributos1 = Object.values(j1.atributos).reduce((a, b) => a + b, 0) / 4
  const mediaAtributos2 = Object.values(j2.atributos).reduce((a, b) => a + b, 0) / 4
  const diferenca = Math.abs(mediaAtributos1 - mediaAtributos2)
  
  if (diferenca < 5) pontos += 40
  else if (diferenca < 15) pontos += 20
  else pontos += 5

  pontos += Math.floor(Math.random() * 20)

  return Math.min(pontos, 100)
}

function corEntrosamento(valor) {
  if (valor >= 65) return { linha: "#00ff88", brilho: "rgba(0,255,136,0.3)" }
  if (valor >= 35) return { linha: "#ffd700", brilho: "rgba(255,215,0,0.3)" }
  return { linha: "#ff4444", brilho: "rgba(255,68,68,0.3)" }
}

function desenharLinhas(chaveAtiva) {
  ctx2d.clearRect(0, 0, canvas.width, canvas.height)

  const elAtivo = document.querySelector(`[data-jogador="${chaveAtiva}"]`)
  if (!elAtivo) return

  const posAtiva = posicaoJogador(elAtivo)

  document.querySelectorAll(".jogador").forEach(function(el) {
    const chave = el.dataset.jogador
    if (chave === chaveAtiva) return

    const pos = posicaoJogador(el)
    const distancia = Math.sqrt(
      Math.pow(pos.x - posAtiva.x, 2) +
      Math.pow(pos.y - posAtiva.y, 2)
    )

    if (distancia > 280) return

    const entrosamento = calcularEntrosamento(chaveAtiva, chave)
    const cores = corEntrosamento(entrosamento)

    ctx2d.beginPath()
    ctx2d.moveTo(posAtiva.x, posAtiva.y)
    ctx2d.lineTo(pos.x, pos.y)
    ctx2d.strokeStyle = cores.linha
    ctx2d.lineWidth = 2
    ctx2d.globalAlpha = 0.7
    ctx2d.shadowColor = cores.brilho
    ctx2d.shadowBlur = 10
    ctx2d.stroke()

    const midX = (posAtiva.x + pos.x) / 2
    const midY = (posAtiva.y + pos.y) / 2
    ctx2d.globalAlpha = 1
    ctx2d.fillStyle = cores.linha
    ctx2d.font = "bold 11px Oswald"
    ctx2d.textAlign = "center"
    ctx2d.fillText(entrosamento + "%", midX, midY - 5)
  })

  ctx2d.globalAlpha = 1
  ctx2d.shadowBlur = 0
}

function limparLinhas() {
  ctx2d.clearRect(0, 0, canvas.width, canvas.height)
}
let linhasAtivas = false
let chaveLinhasAtiva = null

let cliqueFoiArraste = false

document.addEventListener("mousedown", function() {
  cliqueFoiArraste = false
})

document.addEventListener("mousemove", function() {
  cliqueFoiArraste = true
})

document.querySelectorAll(".jogador").forEach(function(el) {
  el.addEventListener("mouseup", function(e) {
    if (cliqueFoiArraste) return

    const chave = el.dataset.jogador
    if (mapaAtivo === chave) {
      limparMapa()
      mapaAtivo = null
      return
    }
    mapaAtivo = chave
    desenharMapa(chave)
  })
})
// ===== MAPA DE CALOR =====
const canvasCalor = document.getElementById("canvasCalor")
const ctxCalor = canvasCalor.getContext("2d", { willReadFrequently: true })

function redimensionarCanvasCalor() {
  canvasCalor.width = campo.offsetWidth
  canvasCalor.height = campo.offsetHeight
}
redimensionarCanvasCalor()
window.addEventListener("resize", redimensionarCanvasCalor)

const zonasPorPosicao = {
  goleiro:      { x: 0.05, y: 0.5,  raioX: 0.08, raioY: 0.35 },
  lateralDir:   { x: 0.25, y: 0.85, raioX: 0.15, raioY: 0.25 },
  lateralEsq:   { x: 0.25, y: 0.15, raioX: 0.15, raioY: 0.25 },
  zageiroDir:   { x: 0.2,  y: 0.65, raioX: 0.15, raioY: 0.25 },
  zageiroEsq:   { x: 0.2,  y: 0.35, raioX: 0.15, raioY: 0.25 },
  meioCentro:   { x: 0.45, y: 0.5,  raioX: 0.18, raioY: 0.4  },
  meioDir:      { x: 0.55, y: 0.7,  raioX: 0.2,  raioY: 0.3  },
  meioEsq:      { x: 0.55, y: 0.3,  raioX: 0.2,  raioY: 0.3  },
  atacanteDir:  { x: 0.75, y: 0.8,  raioX: 0.18, raioY: 0.25 },
  atacanteEsq:  { x: 0.75, y: 0.2,  raioX: 0.18, raioY: 0.25 },
  centroAvante: { x: 0.85, y: 0.5,  raioX: 0.15, raioY: 0.35 }
}

let mapaAtivo = null

function desenharMapa(chave) {
  ctxCalor.clearRect(0, 0, canvasCalor.width, canvasCalor.height)

  const jogadorEl = document.querySelector(`[data-jogador="${chave}"]`)
  if (!jogadorEl) return

  const leftPercent = parseFloat(jogadorEl.style.left) / 100
  const topPercent = parseFloat(jogadorEl.style.top) / 100

  const cx = leftPercent * canvasCalor.width
  const cy = topPercent * canvasCalor.height

  const posicao = jogadores[chave] ? jogadores[chave].posicao : ""
  let raioX, raioY

  if (posicao === "Goleiro") {
    raioX = canvasCalor.width * 0.08
    raioY = canvasCalor.height * 0.35
  } else if (posicao.includes("Lateral")) {
    raioX = canvasCalor.width * 0.18
    raioY = canvasCalor.height * 0.22
  } else if (posicao.includes("Zagueiro")) {
    raioX = canvasCalor.width * 0.14
    raioY = canvasCalor.height * 0.28
  } else if (posicao.includes("Volante")) {
    raioX = canvasCalor.width * 0.20
    raioY = canvasCalor.height * 0.38
  } else if (posicao.includes("Meia")) {
    raioX = canvasCalor.width * 0.22
    raioY = canvasCalor.height * 0.30
  } else if (posicao.includes("Ala")) {
    raioX = canvasCalor.width * 0.18
    raioY = canvasCalor.height * 0.25
  } else if (posicao.includes("Atacante") || posicao.includes("Centroavante")) {
    raioX = canvasCalor.width * 0.16
    raioY = canvasCalor.height * 0.32
  } else {
    raioX = canvasCalor.width * 0.18
    raioY = canvasCalor.height * 0.28
  }

  ctxCalor.save()
  ctxCalor.scale(1, raioY / raioX)

  const gradiente = ctxCalor.createRadialGradient(
    cx, cy * (raioX / raioY), 0,
    cx, cy * (raioX / raioY), raioX
  )
  gradiente.addColorStop(0,   "rgba(255, 50,  0, 0.60)")
  gradiente.addColorStop(0.4, "rgba(255, 150, 0, 0.38)")
  gradiente.addColorStop(0.7, "rgba(255, 220, 0, 0.20)")
  gradiente.addColorStop(1,   "rgba(255, 255, 0, 0)")

  ctxCalor.beginPath()
  ctxCalor.arc(cx, cy * (raioX / raioY), raioX, 0, Math.PI * 2)
  ctxCalor.fillStyle = gradiente
  ctxCalor.fill()
  ctxCalor.restore()
}
// ===== MODO TÁTICO — DESENHO =====
const canvasDesenho = document.getElementById("canvasDesenho")
const ctxDesenho = canvasDesenho.getContext("2d", { willReadFrequently: true })

function redimensionarCanvasDesenho() {
  const imgAntes = ctxDesenho.getImageData(0, 0, canvasDesenho.width, canvasDesenho.height)
  canvasDesenho.width = campo.offsetWidth
  canvasDesenho.height = campo.offsetHeight
  ctxDesenho.putImageData(imgAntes, 0, 0)
}
redimensionarCanvasDesenho()
window.addEventListener("resize", redimensionarCanvasDesenho)

let ferramentaAtiva = "cursor"
let desenhando = false
let inicioX = 0
let inicioY = 0
let snapshotDesenho = null

// Seta curva — armazena ponto de controle
let pontoControleX = 0
let pontoControleY = 0
let etapaCurva = 0

const btnsFerramenta = document.querySelectorAll(".btn-ferramenta")

btnsFerramenta.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (btn.id === "btnLimparDesenho") {
      ctxDesenho.clearRect(0, 0, canvasDesenho.width, canvasDesenho.height)
      return
    }

    btnsFerramenta.forEach(function(b) { b.classList.remove("ativo") })
    btn.classList.add("ativo")
    ferramentaAtiva = btn.dataset.ferramenta

    canvasDesenho.classList.remove("modo-desenho", "modo-borracha")

    if (ferramentaAtiva === "borracha") {
      canvasDesenho.classList.add("modo-borracha")
    } else if (ferramentaAtiva !== "cursor") {
      canvasDesenho.classList.add("modo-desenho")
    }

    etapaCurva = 0
  })
})

function posicaoNoCanvas(e) {
  const rect = canvasDesenho.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

function estiloPadrao() {
  ctxDesenho.strokeStyle = "#FFDF00"
  ctxDesenho.fillStyle = "rgba(255,223,0,0.15)"
  ctxDesenho.lineWidth = 2.5
  ctxDesenho.shadowColor = "rgba(255,223,0,0.5)"
  ctxDesenho.shadowBlur = 6
  ctxDesenho.lineCap = "round"
}

function desenharSeta(x1, y1, x2, y2) {
  const angulo = Math.atan2(y2 - y1, x2 - x1)
  const tamanho = 15

  ctxDesenho.beginPath()
  ctxDesenho.moveTo(x1, y1)
  ctxDesenho.lineTo(x2, y2)
  ctxDesenho.stroke()

  ctxDesenho.beginPath()
  ctxDesenho.moveTo(x2, y2)
  ctxDesenho.lineTo(
    x2 - tamanho * Math.cos(angulo - Math.PI / 6),
    y2 - tamanho * Math.sin(angulo - Math.PI / 6)
  )
  ctxDesenho.lineTo(
    x2 - tamanho * Math.cos(angulo + Math.PI / 6),
    y2 - tamanho * Math.sin(angulo + Math.PI / 6)
  )
  ctxDesenho.closePath()
  ctxDesenho.fillStyle = "#FFDF00"
  ctxDesenho.fill()
}
function desenharSetaCurva(x1, y1, cpx, cpy, x2, y2) {
  ctxDesenho.beginPath()
  ctxDesenho.moveTo(x1, y1)
  ctxDesenho.quadraticCurveTo(cpx, cpy, x2, y2)
  ctxDesenho.stroke()

  const angulo = Math.atan2(y2 - cpy, x2 - cpx)
  const tamanho = 15

  ctxDesenho.beginPath()
  ctxDesenho.moveTo(x2, y2)
  ctxDesenho.lineTo(
    x2 - tamanho * Math.cos(angulo - Math.PI / 6),
    y2 - tamanho * Math.sin(angulo - Math.PI / 6)
  )
  ctxDesenho.lineTo(
    x2 - tamanho * Math.cos(angulo + Math.PI / 6),
    y2 - tamanho * Math.sin(angulo + Math.PI / 6)
  )
  ctxDesenho.closePath()
  ctxDesenho.fillStyle = "#FFDF00"
  ctxDesenho.fill()
}

// Seta curva — novo sistema: clique e arrasta
let setaCurvaInicio = null

canvasDesenho.addEventListener("mousedown", function(e) {
  const pos = posicaoNoCanvas(e)

  if (ferramentaAtiva === "texto") {
    criarInputTexto(pos.x, pos.y)
    return
  }

  if (ferramentaAtiva === "borracha") {
    apagando = true
    ctxDesenho.globalCompositeOperation = "destination-out"
    ctxDesenho.lineWidth = 20
    ctxDesenho.lineCap = "round"
    ctxDesenho.beginPath()
    ctxDesenho.moveTo(pos.x, pos.y)
    return
  }

  if (ferramentaAtiva === "cursor") return

  desenhando = true
  inicioX = pos.x
  inicioY = pos.y
  snapshotDesenho = ctxDesenho.getImageData(0, 0, canvasDesenho.width, canvasDesenho.height)
  estiloPadrao()

  if (ferramentaAtiva === "seta-curva") {
    setaCurvaInicio = { x: pos.x, y: pos.y }
  }
})

canvasDesenho.addEventListener("mousemove", function(e) {
  const pos = posicaoNoCanvas(e)

  if (apagando) {
    ctxDesenho.lineTo(pos.x, pos.y)
    ctxDesenho.stroke()
    return
  }

  if (!desenhando) return

  ctxDesenho.putImageData(snapshotDesenho, 0, 0)
  estiloPadrao()

  if (ferramentaAtiva === "seta") {
    desenharSeta(inicioX, inicioY, pos.x, pos.y)
  }

  if (ferramentaAtiva === "seta-curva" && setaCurvaInicio) {
    const fimX = pos.x
    const fimY = pos.y
    const cpx = (setaCurvaInicio.x + fimX) / 2 - (fimY - setaCurvaInicio.y) * 0.5
    const cpy = (setaCurvaInicio.y + fimY) / 2 + (fimX - setaCurvaInicio.x) * 0.5
    desenharSetaCurva(setaCurvaInicio.x, setaCurvaInicio.y, cpx, cpy, fimX, fimY)
  }

  if (ferramentaAtiva === "circulo") {
    const raio = Math.sqrt(
      Math.pow(pos.x - inicioX, 2) +
      Math.pow(pos.y - inicioY, 2)
    )
    ctxDesenho.beginPath()
    ctxDesenho.arc(inicioX, inicioY, raio, 0, Math.PI * 2)
    ctxDesenho.stroke()
    ctxDesenho.fill()
  }

  if (ferramentaAtiva === "zona") {
    ctxDesenho.beginPath()
    ctxDesenho.rect(inicioX, inicioY, pos.x - inicioX, pos.y - inicioY)
    ctxDesenho.stroke()
    ctxDesenho.fill()
  }
})

canvasDesenho.addEventListener("mouseup", function(e) {
  const pos = posicaoNoCanvas(e)

  if (apagando) {
    apagando = false
    ctxDesenho.globalCompositeOperation = "source-over"
    return
  }

  if (ferramentaAtiva === "seta-curva" && setaCurvaInicio) {
    estiloPadrao()
    const fimX = pos.x
    const fimY = pos.y
    const cpx = (setaCurvaInicio.x + fimX) / 2 - (fimY - setaCurvaInicio.y) * 0.5
    const cpy = (setaCurvaInicio.y + fimY) / 2 + (fimX - setaCurvaInicio.x) * 0.5
    ctxDesenho.putImageData(snapshotDesenho, 0, 0)
    desenharSetaCurva(setaCurvaInicio.x, setaCurvaInicio.y, cpx, cpy, fimX, fimY)
    setaCurvaInicio = null
  }

  desenhando = false
  snapshotDesenho = null
})

canvasDesenho.addEventListener("mouseleave", function() {
  if (apagando) {
    apagando = false
    ctxDesenho.globalCompositeOperation = "source-over"
  }
  desenhando = false
  setaCurvaInicio = null
})
// ===== FERRAMENTA DE TEXTO =====
let inputTextoAtivo = null

function criarInputTexto(x, y) {
  if (inputTextoAtivo) confirmarTexto()

  const canvasBounds = canvasDesenho.getBoundingClientRect()
  const campoBounds = campo.getBoundingClientRect()

  const input = document.createElement("input")
  input.type = "text"
  input.classList.add("input-texto-tatico")
  input.placeholder = "Rótulo tático..."

  const offsetX = canvasBounds.left - campoBounds.left
  const offsetY = canvasBounds.top - campoBounds.top

  input.style.position = "absolute"
  input.style.left = (offsetX + x) + "px"
  input.style.top  = (offsetY + y - 18) + "px"
  input.style.zIndex = "50"

  campo.appendChild(input)

  setTimeout(function() { input.focus() }, 50)

  inputTextoAtivo = { input, x, y }

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault()
      confirmarTexto()
    }
    if (e.key === "Escape") cancelarTexto()
    e.stopPropagation()
  })

  input.addEventListener("blur", function() {
    setTimeout(function() {
      if (inputTextoAtivo) confirmarTexto()
    }, 200)
  })
}

function confirmarTexto() {
  if (!inputTextoAtivo) return
  const { input, x, y } = inputTextoAtivo
  const texto = input.value.trim()

  if (texto) {
    ctxDesenho.save()
    ctxDesenho.font = "bold 14px Oswald"
    ctxDesenho.fillStyle = "#FFDF00"
    ctxDesenho.shadowColor = "rgba(0,0,0,0.9)"
    ctxDesenho.shadowBlur = 4
    ctxDesenho.fillText(texto, x, y)
    ctxDesenho.restore()
  }

  input.remove()
  inputTextoAtivo = null
}

function cancelarTexto() {
  if (!inputTextoAtivo) return
  inputTextoAtivo.input.remove()
  inputTextoAtivo = null
}
// ===== BORRACHA =====
let apagando = false

canvasDesenho.addEventListener("mousedown", function(e) {
  const pos = posicaoNoCanvas(e)

  if (ferramentaAtiva === "borracha") {
    apagando = true
    ctxDesenho.globalCompositeOperation = "destination-out"
    ctxDesenho.lineWidth = 20
    ctxDesenho.lineCap = "round"
    ctxDesenho.beginPath()
    ctxDesenho.moveTo(pos.x, pos.y)
    return
  }

  if (ferramentaAtiva === "cursor") return

  // Seta curva — primeiro clique define início
  if (ferramentaAtiva === "seta-curva") {
    if (etapaCurva === 0) {
      inicioX = pos.x
      inicioY = pos.y
      etapaCurva = 1
      return
    }
  }

  desenhando = true
  inicioX = pos.x
  inicioY = pos.y
  snapshotDesenho = ctxDesenho.getImageData(0, 0, canvasDesenho.width, canvasDesenho.height)
  estiloPadrao()
})

canvasDesenho.addEventListener("mousemove", function(e) {
  const pos = posicaoNoCanvas(e)

  if (apagando) {
    ctxDesenho.lineTo(pos.x, pos.y)
    ctxDesenho.stroke()
    return
  }

  if (!desenhando) {
    // Preview do início da seta curva
    if (ferramentaAtiva === "seta-curva" && etapaCurva === 1) {
      ctxDesenho.putImageData(snapshotDesenho || ctxDesenho.getImageData(0, 0, canvasDesenho.width, canvasDesenho.height), 0, 0)
      estiloPadrao()
      ctxDesenho.setLineDash([5, 5])
      ctxDesenho.beginPath()
      ctxDesenho.moveTo(inicioX, inicioY)
      ctxDesenho.lineTo(pos.x, pos.y)
      ctxDesenho.stroke()
      ctxDesenho.setLineDash([])
    }
    return
  }

  ctxDesenho.putImageData(snapshotDesenho, 0, 0)
  estiloPadrao()

  if (ferramentaAtiva === "seta") {
    desenharSeta(inicioX, inicioY, pos.x, pos.y)
  }

  if (ferramentaAtiva === "seta-curva" && etapaCurva === 2) {
    const cpx = pos.x
    const cpy = pos.y
    desenharSetaCurva(inicioX, inicioY, cpx, cpy, pontoControleX, pontoControleY)
  }

  if (ferramentaAtiva === "circulo") {
    const raio = Math.sqrt(
      Math.pow(pos.x - inicioX, 2) +
      Math.pow(pos.y - inicioY, 2)
    )
    ctxDesenho.beginPath()
    ctxDesenho.arc(inicioX, inicioY, raio, 0, Math.PI * 2)
    ctxDesenho.stroke()
    ctxDesenho.fill()
  }

    canvasDesenho.classList.remove  ("modo-desenho", "modo-borracha",   "modo-texto")

  if (ferramentaAtiva === "borracha") {
    canvasDesenho.classList.add  ("modo-borracha")
  } else if (ferramentaAtiva === "texto")   {
    canvasDesenho.classList.add  ("modo-texto")
  } else if (ferramentaAtiva !==   "cursor") {
    canvasDesenho.classList.add  ("modo-desenho")
  }

  if (ferramentaAtiva === "zona") {
    ctxDesenho.beginPath()
    ctxDesenho.rect(inicioX, inicioY, pos.x - inicioX, pos.y - inicioY)
    ctxDesenho.stroke()
    ctxDesenho.fill()
  }
})

canvasDesenho.addEventListener("mouseup", function(e) {
  const pos = posicaoNoCanvas(e)

  if (apagando) {
    apagando = false
    ctxDesenho.globalCompositeOperation = "source-over"
    return
  }

  // Seta curva — segundo clique define ponto final, terceiro define a curva
  if (ferramentaAtiva === "seta-curva") {
    if (etapaCurva === 1) {
      pontoControleX = pos.x
      pontoControleY = pos.y
      snapshotDesenho = ctxDesenho.getImageData(0, 0, canvasDesenho.width, canvasDesenho.height)
      desenhando = true
      etapaCurva = 2
      return
    }
    if (etapaCurva === 2) {
      estiloPadrao()
      desenharSetaCurva(inicioX, inicioY, pos.x, pos.y, pontoControleX, pontoControleY)
      desenhando = false
      etapaCurva = 0
      snapshotDesenho = null
      return
    }
  }

  desenhando = false
  snapshotDesenho = null
})

canvasDesenho.addEventListener("mouseleave", function() {
  if (apagando) {
    apagando = false
    ctxDesenho.globalCompositeOperation = "source-over"
  }
  desenhando = false
})
// ===== ANÁLISE AUTOMÁTICA AVANÇADA =====
document.getElementById("btnAnalisar").addEventListener("click", function() {
  const resultado = document.getElementById("analiseResultado")
  resultado.innerHTML = ""
  const analises = []

  // ===== PASSO 1 — Detectar setores pela posição real no campo =====
  const setorDefesa = []
  const setorMeio = []
  const setorAtaque = []

  document.querySelectorAll(".jogador").forEach(function(el) {
    const chave = el.dataset.jogador
    const left = parseFloat(el.style.left)
    if (left < 30) setorDefesa.push(chave)
    else if (left < 62) setorMeio.push(chave)
    else setorAtaque.push(chave)
  })

  // ===== PASSO 2 — Detectar formação dinamicamente =====
  const numDef = setorDefesa.length > 0 ? setorDefesa.length - 1 : 0
  const numMeio = setorMeio.length
  const numAtq = setorAtaque.length
  const formacaoDetectada = numDef + "-" + numMeio + "-" + numAtq

  // ===== PASSO 3 — Perfil ideal por setor =====
  const perfis = {
    defesa: {
      principal: { atributo: "defesa", peso: 6, minimo: 75 },
      secundario: { atributo: "passe", peso: 2, minimo: 60 },
      terciario: { atributo: "velocidade", peso: 2, minimo: 65 },
      posicoesNativas: ["goleiro", "lateralDir", "lateralEsq", "zageiroDir", "zageiroEsq"]
    },
    meio: {
      principal: { atributo: "passe", peso: 5, minimo: 75 },
      secundario: { atributo: "defesa", peso: 3, minimo: 60 },
      terciario: { atributo: "chute", peso: 2, minimo: 60 },
      posicoesNativas: ["meioCentro", "meioDir", "meioEsq"]
    },
    ataque: {
      principal: { atributo: "chute", peso: 6, minimo: 78 },
      secundario: { atributo: "velocidade", peso: 3, minimo: 75 },
      terciario: { atributo: "passe", peso: 1, minimo: 65 },
      posicoesNativas: ["atacanteDir", "atacanteEsq", "centroAvante"]
    }
  }

  // ===== PASSO 4 — Avaliar cada setor com peso e penalização =====
  function avaliarSetor(jogadoresSetor, nomePerfil) {
    if (jogadoresSetor.length === 0) return { nota: 0, alertas: [], media: 0 }

    const perfil = perfis[nomePerfil]
    const alertas = []
    let somaNotas = 0

    jogadoresSetor.forEach(function(chave) {
      const j = jogadores[chave]
      if (!j) return

      const attrPrincipal = j.atributos[perfil.principal.atributo] || 0
      const attrSecundario = j.atributos[perfil.secundario.atributo] || 0
      const attrTerciario = j.atributos[perfil.terciario.atributo] || 0

      // Nota ponderada do jogador neste setor
      const notaPonderada = (
        attrPrincipal * perfil.principal.peso +
        attrSecundario * perfil.secundario.peso +
        attrTerciario * perfil.terciario.peso
      ) / (perfil.principal.peso + perfil.secundario.peso + perfil.terciario.peso)

      // Penalização por jogador fora de posição
      const eNativo = perfil.posicoesNativas.includes(chave)
      let notaFinal = notaPonderada

      if (!eNativo) {
        notaFinal = notaFinal * 0.65
        alertas.push({
          tipo: "alerta",
          icone: "🚨",
          titulo: `${j.nome} FORA DE POSIÇÃO`,
          texto: `${j.nome} (${j.posicao}) está atuando no setor de ${nomePerfil}. Atributo principal necessário: ${perfil.principal.atributo} — valor do jogador: ${attrPrincipal} (mínimo esperado: ${perfil.principal.minimo}). Isso penaliza severamente o setor!`
        })
      } else if (attrPrincipal < perfil.principal.minimo) {
        alertas.push({
          tipo: "neutro",
          icone: "⚠️",
          titulo: `${j.nome} abaixo do esperado`,
          texto: `${j.nome} tem ${perfil.principal.atributo} ${attrPrincipal} — abaixo do mínimo de ${perfil.principal.minimo} para este setor.`
        })
      }

      somaNotas += notaFinal
    })

    const media = Math.round(somaNotas / jogadoresSetor.length)
    return { nota: media, alertas }
  }

  const resultDefesa = avaliarSetor(setorDefesa, "defesa")
  const resultMeio = avaliarSetor(setorMeio, "meio")
  const resultAtaque = avaliarSetor(setorAtaque, "ataque")

  const notaGeral = Math.round(
    (resultDefesa.nota + resultMeio.nota + resultAtaque.nota) / 3
  )

  // ===== PASSO 5 — Análise da formação detectada =====
  function analisarFormacaoDinamica(def, meio, atq) {
    const total = def + meio + atq

    if (atq >= 5) return {
      tipo: "alerta",
      icone: "⚡",
      titulo: `Formação ${def}-${meio}-${atq} — Ultra Ofensiva`,
      texto: `Volume ofensivo massivo com ${atq} atacantes. O meio de campo ficará sobrecarregado defensivamente e a zaga exposta a contra-ataques. Um treinador inteligente exploraria os espaços deixados na defesa.`
    }
    if (def >= 5) return {
      tipo: "neutro",
      icone: "🛡️",
      titulo: `Formação ${def}-${meio}-${atq} — Ultra Defensiva`,
      texto: `Retranca com ${def} defensores. Difícil de ser penetrada, mas o time terá dificuldade de criar jogadas ofensivas. Ideal para segurar um resultado.`
    }
    if (meio >= 5) return {
      tipo: "positivo",
      icone: "🎯",
      titulo: `Formação ${def}-${meio}-${atq} — Dominância no Meio`,
      texto: `Com ${meio} jogadores no meio, o time terá controle total da posse de bola. Transições rápidas e pressão alta são as principais armas desta escalação.`
    }
    if (def === 2 && atq >= 4) return {
      tipo: "alerta",
      icone: "🚨",
      titulo: `Formação ${def}-${meio}-${atq} — Defesa Exposta`,
      texto: `Apenas ${def} defensores para cobrir todo o campo. Risco altíssimo de tomar gols em transições. Esta escalação exige pressing constante para compensar.`
    }
    if (def >= 3 && meio >= 3 && atq >= 3) return {
      tipo: "positivo",
      icone: "⚖️",
      titulo: `Formação ${def}-${meio}-${atq} — Equilibrada`,
      texto: `Formação balanceada com presença sólida em todos os setores. Permite tanto a posse de bola quanto a marcação organizada.`
    }
    return {
      tipo: "neutro",
      icone: "🧠",
      titulo: `Formação ${def}-${meio}-${atq} — Incomum`,
      texto: `Formação não convencional com ${def} defensores, ${meio} meias e ${atq} atacantes. Exige jogadores muito versáteis e pode surpreender o adversário pela imprevisibilidade.`
    }
  }

  const analiseFormacao = analisarFormacaoDinamica(numDef, numMeio, numAtq)

  // ===== PASSO 6 — Montar todos os cards =====

  // Formação detectada
  analises.push(analiseFormacao)

  // Alertas de jogadores fora de posição
  resultDefesa.alertas.forEach(a => analises.push(a))
  resultMeio.alertas.forEach(a => analises.push(a))
  resultAtaque.alertas.forEach(a => analises.push(a))

  // Análise por setor
  function cardSetor(nome, icone, result, minBom, minOk) {
    let tipo, titulo, texto
    if (result.nota >= minBom) {
      tipo = "positivo"
      titulo = `${icone} ${nome} Sólido`
      texto = `Setor bem estruturado com nota ${result.nota}. Os jogadores posicionados aqui têm os atributos necessários para a função.`
    } else if (result.nota >= minOk) {
      tipo = "neutro"
      titulo = `${icone} ${nome} Razoável`
      texto = `Setor funcional com nota ${result.nota}. Há espaço para melhoria nos atributos necessários para este setor.`
    } else {
      tipo = "alerta"
      titulo = `${icone} ${nome} Vulnerável`
      texto = `Setor comprometido com nota ${result.nota}. Os jogadores posicionados aqui não possuem os atributos mínimos necessários para a função.`
    }
    analises.push({ tipo, icone, titulo, texto, nota: result.nota })
  }

  cardSetor("Defesa", "🛡️", resultDefesa, 80, 68)
  cardSetor("Meio Campo", "⚙️", resultMeio, 80, 68)
  cardSetor("Ataque", "⚽", resultAtaque, 80, 68)

  // Nota geral
  analises.push({
    tipo: notaGeral >= 80 ? "positivo" : notaGeral >= 68 ? "neutro" : "alerta",
    icone: "🇧🇷",
    titulo: "Nota Geral da Escalação",
    texto: `Defesa ${resultDefesa.nota} • Meio ${resultMeio.nota} • Ataque ${resultAtaque.nota} — Formação identificada: ${formacaoDetectada}`,
    nota: notaGeral
  })

  // ===== PASSO 7 — Renderizar com animação em cascata =====
  const corNota = function(n) {
    return n >= 80 ? "#00ff88" : n >= 68 ? "#ffd700" : "#ff4444"
  }

  analises.forEach(function(analise, i) {
    setTimeout(function() {
      const card = document.createElement("div")
      card.classList.add("analise-card", analise.tipo)

      const temNota = analise.nota !== undefined

      card.innerHTML = `
        <div class="analise-titulo-card">
          <span>${analise.icone}</span>
          <span>${analise.titulo}</span>
        </div>
        <p class="analise-texto">${analise.texto}</p>
        ${temNota ? `
        <div class="analise-nota">
          <div class="nota-barra-fundo">
            <div class="nota-barra" id="barra-${i}" style="width:0%; background-color:${corNota(analise.nota)}"></div>
          </div>
          <span class="nota-valor">${analise.nota}</span>
        </div>` : ""}
      `
      resultado.appendChild(card)

      if (temNota) {
        setTimeout(function() {
          document.getElementById("barra-" + i).style.width = analise.nota + "%"
        }, 100)
      }
    }, i * 180)
  })
})
// ===== COMPARTILHAR FORMAÇÃO =====
const btnCompartilhar = document.getElementById("btnCompartilhar")
const overlayExportar = document.getElementById("overlayExportar")
const overlayPreview = document.getElementById("overlayPreview")
const btnSalvarImagem = document.getElementById("btnSalvarImagem")
const btnFecharOverlay = document.getElementById("btnFecharOverlay")
const overlayLoading = document.getElementById("overlayLoading")

let imagemGerada = null

btnCompartilhar.addEventListener("click", function() {
  overlayPreview.innerHTML = ""
  overlayLoading.textContent = "Gerando imagem..."
  overlayExportar.classList.add("ativo")

  const alvo = document.querySelector(".campo-wrapper") || document.querySelector(".campo")

  html2canvas(alvo, {
    backgroundColor: "#0d1f0d",
    scale: 2,
    useCORS: true,
    allowTaint: true,
    logging: false
  }).then(function(canvas) {
    imagemGerada = canvas

    const img = document.createElement("img")
    img.src = canvas.toDataURL("image/png")
    overlayPreview.appendChild(img)
    overlayLoading.textContent = ""
  }).catch(function(err) {
    overlayLoading.textContent = "Erro ao gerar imagem. Tente novamente!"
    console.error(err)
  })
})

btnSalvarImagem.addEventListener("click", function() {
  if (!imagemGerada) return

  const formacaoAtual = selectFormacao.value
  const dataHoje = new Date()
  const data = dataHoje.getDate() + "-" + (dataHoje.getMonth() + 1) + "-" + dataHoje.getFullYear()
  const nomeArquivo = "selecao-brasileira-" + formacaoAtual + "-" + data + ".png"

  const link = document.createElement("a")
  link.download = nomeArquivo
  link.href = imagemGerada.toDataURL("image/png")
  link.click()
})

btnFecharOverlay.addEventListener("click", function() {
  overlayExportar.classList.remove("ativo")
  overlayPreview.innerHTML = ""
  imagemGerada = null
})

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    overlayExportar.classList.remove("ativo")
    overlayPreview.innerHTML = ""
    imagemGerada = null
  }
})
// ===== NARRAÇÃO TÁTICA =====
const btnNarrar = document.getElementById("btnNarrar")
const selectNarrador = document.getElementById("selectNarrador")
const narracaoResultado = document.getElementById("narracaoResultado")

function coletarDadosEscalacao() {
  const setorDef = []
  const setorMeio = []
  const setorAtq = []

  document.querySelectorAll(".jogador").forEach(function(el) {
    const chave = el.dataset.jogador
    const left = parseFloat(el.style.left)
    const j = jogadores[chave]
    if (!j) return
    if (left < 30) setorDef.push(j)
    else if (left < 62) setorMeio.push(j)
    else setorAtq.push(j)
  })

  const goleiro = setorDef.find(j => j.posicao === "Goleiro") || setorDef[0]
  const melhorAtacante = setorAtq.sort((a, b) => b.overall - a.overall)[0]
  const melhorMeio = setorMeio.sort((a, b) => b.overall - a.overall)[0]
  const maisVeloz = [...setorAtq, ...setorMeio].sort((a, b) =>
    b.atributos.velocidade - a.atributos.velocidade)[0]

  const formacao = (setorDef.length > 0 ? setorDef.length - 1 : 0) + "-" +
    setorMeio.length + "-" + setorAtq.length

  const mediaAtaque = setorAtq.length > 0
    ? Math.round(setorAtq.reduce((acc, j) => acc + j.atributos.chute, 0) / setorAtq.length)
    : 0

  const mediaDefesa = setorDef.length > 0
    ? Math.round(setorDef.reduce((acc, j) => acc + j.atributos.defesa, 0) / setorDef.length)
    : 0

  const mediaPasse = setorMeio.length > 0
    ? Math.round(setorMeio.reduce((acc, j) => acc + j.atributos.passe, 0) / setorMeio.length)
    : 0

  return {
    goleiro, melhorAtacante, melhorMeio, maisVeloz,
    formacao, mediaAtaque, mediaDefesa, mediaPasse,
    setorDef, setorMeio, setorAtq
  }
}

function gerarNarracao(estilo, dados) {
  const {
    goleiro, melhorAtacante, melhorMeio, maisVeloz,
    formacao, mediaAtaque, mediaDefesa, mediaPasse,
    setorDef, setorMeio, setorAtq
  } = dados

  const nomeGoleiro = goleiro ? goleiro.nome : "o goleiro"
  const nomeAtacante = melhorAtacante ? melhorAtacante.nome : "o atacante"
  const nomeMeio = melhorMeio ? melhorMeio.nome : "o meia"
  const nomeVeloz = maisVeloz ? maisVeloz.nome : "o mais veloz"

  const qualidadeAtaque = mediaAtaque >= 85
    ? `<span class="destaque-verde">devastador</span>`
    : mediaAtaque >= 72
    ? `<span class="destaque">consistente</span>`
    : `<span class="destaque-alerta">limitado</span>`

  const qualidadeDefesa = mediaDefesa >= 85
    ? `<span class="destaque-verde">sólida e organizada</span>`
    : mediaDefesa >= 72
    ? `<span class="destaque">razoável</span>`
    : `<span class="destaque-alerta">vulnerável</span>`

  const qualidadeMeio = mediaPasse >= 85
    ? `<span class="destaque-verde">dominante</span>`
    : mediaPasse >= 72
    ? `<span class="destaque">equilibrado</span>`
    : `<span class="destaque-alerta">fraco</span>`

  const narracoes = {
    galvao: `
      É o <span class="destaque">BRASIL</span>! A Canarinho entra em campo com uma formação
      <span class="destaque">${formacao}</span>, numa escalação que promete emocionar
      a torcida brasileira! <br><br>

      Entre os postes, <span class="destaque">${nomeGoleiro}</span> é a última barreira —
      uma defesa ${qualidadeDefesa} que vai dar segurança à equipe!
      No meio de campo ${qualidadeMeio}, destaque para
      <span class="destaque">${nomeMeio}</span>, o maestro da jogada!<br><br>

      E lá na frente? Um ataque ${qualidadeAtaque}!
      <span class="destaque">${nomeAtacante}</span> está inspirado e pronto para fazer
      a festa da galera! A velocidade de <span class="destaque">${nomeVeloz}</span>
      vai deixar a defesa adversária em pânico! <br><br>

      <span class="destaque-verde">QUE TIME, MINHA GENTE! É O BRASIL!</span> 🇧🇷
    `,

    casagrande: `
      Olha, vou ser honesto aqui. O técnico optou pela formação
      <span class="destaque">${formacao}</span> e isso me diz muita coisa
      sobre a estratégia para esse jogo.<br><br>

      A defesa está ${qualidadeDefesa} — com média de ${mediaDefesa} no setor.
      <span class="destaque">${nomeGoleiro}</span> é experiente, mas a linha
      defensiva precisa de atenção nos cruzamentos e bolas paradas.<br><br>

      O meio campo ${qualidadeMeio} com média de passe ${mediaPasse}.
      <span class="destaque">${nomeMeio}</span> vai precisar trabalhar muito para
      equilibrar as responsabilidades ofensivas e defensivas nessa formação.<br><br>

      No ataque, o poder de finalização está ${qualidadeAtaque} — média ${mediaAtaque}.
      <span class="destaque">${nomeAtacante}</span> é o nome que pode decidir,
      mas precisa de serviço. Sem criação no meio, o ataque fica isolado.
      <span class="destaque-alerta">Esse é o risco dessa escalação.</span>
    `,

    caio: `
      Tecnicamente falando, essa formação <span class="destaque">${formacao}</span>
      tem características bem definidas. Vamos analisar setor por setor.<br><br>

      Na defesa — ${qualidadeDefesa}, média ${mediaDefesa}.
      <span class="destaque">${nomeGoleiro}</span> comanda a zaga com autoridade.
      O posicionamento e a saída de bola são os pontos chave aqui.<br><br>

      No meio campo — ${qualidadeMeio}, média de passe ${mediaPasse}.
      <span class="destaque">${nomeMeio}</span> é quem dita o ritmo.
      A capacidade de pressionar e recuperar a bola nesse setor vai definir
      o controle do jogo.<br><br>

      Ofensivamente — ataque ${qualidadeAtaque}, média ${mediaAtaque} de finalização.
      <span class="destaque">${nomeAtacante}</span> e
      <span class="destaque">${nomeVeloz}</span> formam uma dupla
      com velocidade e técnica. A movimentação sem bola vai ser decisiva
      para criar os espaços necessários.
    `,

    jornalista: `
      A Seleção Brasileira divulgou sua escalação para o confronto e optou
      pelo esquema <span class="destaque">${formacao}</span>, numa escolha
      que reflete o momento atual do futebol brasileiro.<br><br>

      Com <span class="destaque">${setorDef.length}</span> jogadores no setor
      defensivo — incluindo <span class="destaque">${nomeGoleiro}</span> no gol —
      a linha de defesa apresenta média ${mediaDefesa}, classificada como
      ${qualidadeDefesa}. A solidez defensiva será testada pelas transições
      rápidas do adversário.<br><br>

      O meio campo, composto por <span class="destaque">${setorMeio.length}</span>
      atletas, tem média de passe ${mediaPasse} — setor ${qualidadeMeio}.
      <span class="destaque">${nomeMeio}</span> surge como principal
      articulador das jogadas ofensivas.<br><br>

      No ataque, os <span class="destaque">${setorAtq.length}</span> jogadores
      apresentam média de finalização ${mediaAtaque} — poder ofensivo ${qualidadeAtaque}.
      <span class="destaque">${nomeAtacante}</span> lidera o setor e
      <span class="destaque">${nomeVeloz}</span>
      (velocidade ${maisVeloz ? maisVeloz.atributos.velocidade : "—"})
      representa a principal ameaça em profundidade.
    `
  }

  return narracoes[estilo] || narracoes.jornalista
}

function digitarTexto(elemento, html, velocidade) {
  const temp = document.createElement("div")
  temp.innerHTML = html
  const textoLimpo = temp.innerHTML

  elemento.innerHTML = ""
  const paragrafo = document.createElement("p")
  paragrafo.classList.add("narracao-texto")
  elemento.appendChild(paragrafo)

  const cursor = document.createElement("span")
  cursor.classList.add("narracao-cursor")
  paragrafo.appendChild(cursor)

  let index = 0
  const chars = textoLimpo.split("")
  let dentroTag = false
  let buffer = ""

  const intervaloDigitar = setInterval(function() {
    if (index >= chars.length) {
      clearInterval(intervaloDigitar)
      cursor.remove()
      return
    }

    const char = chars[index]

    if (char === "<") dentroTag = true
    if (dentroTag) {
      buffer += char
      if (char === ">") {
        dentroTag = false
        cursor.insertAdjacentHTML("beforebegin", buffer)
        buffer = ""
      }
    } else {
      cursor.insertAdjacentHTML("beforebegin", char)
    }

    index++
  }, velocidade)
}

btnNarrar.addEventListener("click", function() {
  const estilo = selectNarrador.value
  const dados = coletarDadosEscalacao()
  const texto = gerarNarracao(estilo, dados)

  const velocidades = {
    galvao: 18,
    casagrande: 22,
    caio: 20,
    jornalista: 15
  }

  digitarTexto(narracaoResultado, texto, velocidades[estilo])
})
// ===== TUTORIAL INTERATIVO =====
const passosTutorial = [
  {
    icone: "👋",
    titulo: "Bem-vindo!",
    texto: "Esta é a Prancheta Tática da Seleção Brasileira! Aqui você monta, analisa e visualiza qualquer escalação. Vamos conhecer as funcionalidades!",
    elemento: ".titulo-brasil",
    posicaoCard: "baixo"
  },
  {
    icone: "🖱️",
    titulo: "Arrastar Jogadores",
    texto: "Clique e arraste qualquer camisa para reposicioná-la no campo. Os jogadores ficam limitados dentro das quatro linhas!",
    elemento: ".campo",
    posicaoCard: "direita"
  },
  {
    icone: "📋",
    titulo: "Trocar Formação",
    texto: "Use o dropdown para trocar entre as formações pré-definidas. As camisas se movem suavemente para as novas posições!",
    elemento: ".select-formacao",
    posicaoCard: "baixo"
  },
  {
    icone: "🃏",
    titulo: "Card do Jogador",
    texto: "Passe o mouse sobre qualquer camisa para ver o card FIFA com foto, overall e barras de atributos animadas!",
    elemento: ".jogador",
    posicaoCard: "direita"
  },
  {
    icone: "🔗",
    titulo: "Linhas de Entrosamento",
    texto: "Dê um duplo clique em qualquer jogador para ver as linhas de entrosamento com os companheiros próximos. Verde = ótimo, Amarelo = médio, Vermelho = ruim!",
    elemento: ".campo",
    posicaoCard: "direita"
  },
  {
    icone: "✏️",
    titulo: "Ferramentas Táticas",
    texto: "Use as ferramentas para desenhar setas, círculos e zonas diretamente no campo. Perfeito para ilustrar jogadas e estratégias!",
    elemento: ".ferramentas-taticas",
    posicaoCard: "baixo"
  },
  {
    icone: "🔄",
    titulo: "Substituições",
    texto: "Dê duplo clique em um jogador em campo e depois em um reserva para realizar a substituição. Um apito vai soar e a animação vai aparecer!",
    elemento: ".banco-area",
    posicaoCard: "cima"
  },
  {
    icone: "📊",
    titulo: "Análise e Narração",
    texto: "Use a Análise Tática para avaliar sua escalação com inteligência real. Depois escolha um narrador e ouça sua escalação ganhar vida!",
    elemento: ".analise-area",
    posicaoCard: "cima"
  }
]

let passoAtual = 0
const tutorialOverlay = document.getElementById("tutorialOverlay")
const tutorialSpotlight = document.getElementById("tutorialSpotlight")
const tutorialCard = document.getElementById("tutorialCard")
const tutorialPasso = document.getElementById("tutorialPasso")
const tutorialBarra = document.getElementById("tutorialBarra")
const tutorialIcone = document.getElementById("tutorialIcone")
const tutorialTitulo = document.getElementById("tutorialTitulo")
const tutorialTexto = document.getElementById("tutorialTexto")
const btnAnterior = document.getElementById("btnTutorialAnterior")
const btnPular = document.getElementById("btnTutorialPular")
const btnProximo = document.getElementById("btnTutorialProximo")

function mostrarPasso(indice) {
  const passo = passosTutorial[indice]
  const total = passosTutorial.length

  tutorialPasso.textContent = (indice + 1) + " / " + total
  tutorialBarra.style.width = ((indice + 1) / total * 100) + "%"
  tutorialIcone.textContent = passo.icone
  tutorialTitulo.textContent = passo.titulo
  tutorialTexto.textContent = passo.texto

  btnAnterior.style.opacity = indice === 0 ? "0.3" : "1"
  btnAnterior.disabled = indice === 0
  btnProximo.textContent = indice === total - 1 ? "✅ Concluir" : "Próximo →"

  const alvo = document.querySelector(passo.elemento)
  if (!alvo) return

  alvo.scrollIntoView({ behavior: "smooth", block: "center" })

  setTimeout(function() {
    const rect = alvo.getBoundingClientRect()
    const padding = 10
    const cardWidth = 320
    const margem = 20

    tutorialSpotlight.style.left   = (rect.left - padding) + "px"
    tutorialSpotlight.style.top    = (rect.top - padding) + "px"
    tutorialSpotlight.style.width  = (rect.width + padding * 2) + "px"
    tutorialSpotlight.style.height = (rect.height + padding * 2) + "px"

    let cardTop, cardLeft

    if (passo.posicaoCard === "baixo") {
      cardTop  = rect.bottom + margem
      cardLeft = rect.left + rect.width / 2 - cardWidth / 2
    } else if (passo.posicaoCard === "cima") {
      cardTop  = rect.top - 280 - margem
      cardLeft = rect.left + rect.width / 2 - cardWidth / 2
    } else if (passo.posicaoCard === "direita") {
      cardTop  = rect.top + rect.height / 2 - 140
      cardLeft = rect.right + margem
    } else {
      cardTop  = rect.top + rect.height / 2 - 140
      cardLeft = rect.left - cardWidth - margem
    }

    cardLeft = Math.max(margem, Math.min(cardLeft, window.innerWidth - cardWidth - margem))
    cardTop  = Math.max(margem, Math.min(cardTop, window.innerHeight - 300))

    tutorialCard.style.top  = cardTop + "px"
    tutorialCard.style.left = cardLeft + "px"

  }, 600)
}

function iniciarTutorial() {
  passoAtual = 0
  tutorialOverlay.classList.add("ativo")
  mostrarPasso(0)
}

function encerrarTutorial() {
  tutorialOverlay.classList.remove("ativo")
  tutorialSpotlight.style.width = "0"
  tutorialSpotlight.style.height = "0"
}

btnProximo.addEventListener("click", function() {
  if (passoAtual === passosTutorial.length - 1) {
    encerrarTutorial()
    return
  }
  passoAtual++
  mostrarPasso(passoAtual)
})

btnAnterior.addEventListener("click", function() {
  if (passoAtual === 0) return
  passoAtual--
  mostrarPasso(passoAtual)
})

btnPular.addEventListener("click", encerrarTutorial)

document.addEventListener("keydown", function(e) {
  if (!tutorialOverlay.classList.contains("ativo")) return
  if (e.key === "ArrowRight") btnProximo.click()
  if (e.key === "ArrowLeft") btnAnterior.click()
  if (e.key === "Escape") encerrarTutorial()
})

// Detecta se veio da intro com ?tutorial=true
const params = new URLSearchParams(window.location.search)
if (params.get("tutorial") === "true") {
  setTimeout(iniciarTutorial, 800)
}
// ===== MÉDIA DO TIME EM TEMPO REAL =====
function atualizarMedia() {
  const titulares = Object.keys(jogadores).filter(function(k) {
    return !k.startsWith("reserva")
  })
  const soma = titulares.reduce(function(acc, k) {
    return acc + jogadores[k].overall
  }, 0)
  const media = Math.round(soma / titulares.length)

  const elMedia = document.getElementById("mediaTime")
  if (elMedia) elMedia.textContent = media
}
atualizarMedia()