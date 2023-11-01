(function () {
    // constantes
    const FPS = 300;
    const WIDTH = 1024;
    const HEIGHT = 300;
    const PROB_NUVEM = 5;

    // variáveis globais
    let gameLoop;
    let deserto;
    let dino;
    let nuvens = [];
    let frame = 0;

    function init() {
        // Executa uma função a cada intervalo de tempo
        // Nesse caso é FPS vezes por segundo (300)
        gameLoop = setInterval(run, 1000 / FPS);
        deserto = new Deserto();
        dino = new Dino();
    }

    window.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            if (dino.status === 0) {
                dino.status = 1;
            }
        }
    })

    class Deserto {
        constructor() {
            // Cria o cenário e define a altura e largura usando as constantes
            this.element = document.createElement("div");
            this.element.className = "deserto";
            this.element.style.width = `${WIDTH}px`
            this.element.style.height = `${HEIGHT}px`
            document.getElementById("game").appendChild(this.element);

            // Cria o chão e coloca como filho do cenário
            this.chao = document.createElement("div");
            this.chao.className = "chao";
            this.chao.style.backgroundPositionX = 0;
            this.element.appendChild(this.chao);
        }
        mover() {
            // Move o chão 1px pra esquerda
            this.chao.style.backgroundPositionX = `${parseInt(this.chao.style.backgroundPositionX) - 1}px`
            // parseInt remove o "px" do resultado
        }
    }

    class Dino {
        // Variável privada
        #status
        constructor() {
            // Imagens diferentes
            this.posicoes = {
                correndo1: "-1391px",
                correndo2: "-1457px",
                pulando: "-1259px"
            }

            // Status do pulo
            // 0 - Normal | 1 - Subindo | 2 - Descendo
            this.#status = 0;

            // Alturas do pulo
            this.alturaMinima = 2;
            this.alturaMaxima = 100;

            this.element = document.createElement("div");
            this.element.className = "dino";
            this.element.style.backgroundPositionX = this.posicoes.correndo1;
            this.element.style.backgroundPositionY = "-2px";
            this.element.style.bottom = `${this.alturaMinima}px`;
            deserto.element.appendChild(this.element);
        }

        //Pra funções externas mexerem no valor de status
        set status(value) {
            if (value >= 0 && value <= 2) {
                this.#status = value;
            }
        }

        // Pra funções externas checarem o valor de status
        get status() {
            return this.#status;
        }


        renderizar() {
            // Uma vez a cada X frames
            if (this.#status === 0 && frame % 20 === 0) {
                // Se estiver na posição 1, mude pra 2
                if (this.element.style.backgroundPositionX === this.posicoes.correndo1) {
                    this.element.style.backgroundPositionX = this.posicoes.correndo2;
                }
                else {
                    // Caso esteja na posição 2, mude pra 1
                    this.element.style.backgroundPositionX = this.posicoes.correndo1;
                }
            }
            else if (this.#status === 1) {
                this.element.style.backgroundPositionX = this.posicoes.pulando;
                this.element.style.bottom = `${parseInt(this.element.style.bottom) + 1}px`
                if (parseInt(this.element.style.bottom) >= this.alturaMaxima) {
                    this.#status = 2;
                }
            }
            else if (this.#status === 2) {
                this.element.style.bottom = `${parseInt(this.element.style.bottom) - 1}px`
                if (parseInt(this.element.style.bottom) <= this.alturaMinima) {
                    this.#status = 0;
                }
            }
        }
    }

    class Nuvem {
        constructor() {
            this.element = document.createElement("div");
            this.element.className = "nuvem";
            this.element.style.right = 0;
            this.element.style.top = `${parseInt(Math.random() * 200)}px`
            deserto.element.appendChild(this.element);
        }
        mover() {
            this.element.style.right = `${parseInt(this.element.style.right) + 1}px`
        }
    }
    function run() {
        // Função run é executada 1x por frame
        frame = frame + 1;
        if (frame === FPS) {
            frame = 0;
        }
        console.log("Frames")
        deserto.mover();
        dino.renderizar();
        if (Math.random() * 1000 <= PROB_NUVEM) {
            nuvens.push(new Nuvem());
        }
        // Um a cada dois frames
        if (frame % 2 === 0) {
            nuvens.forEach(nuvem => nuvem.mover());
        }
    }

    init();
})();