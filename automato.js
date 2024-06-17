//const cadeias = ["aabb", "abc", "bbaa", "aacc", "abab", "aabbccc", "adbf", "aaccd", ""];
const q0 = "q1";
const qF = ["q4", "q7"];
let estadoAtual = q0;
let pilha;
let entrada;
let simbolosEntrada;
let ehAceita = false;

function processarEntrada(entrada) {
    estadoAtual = q0;
    simbolosEntrada = entrada.split("");
    pilha = [];

    for (let i = 0; i <= entrada.length; i++) {
        if (estadoAtual === q0 && pilha.length === 0) {
            pilha.push("$");
            estadoAtual = "q2";
        }

        if (estadoAtual === "q2") {
            if (entrada[i] === "a") {
                simbolosEntrada.shift();
                pilha.push("a");
            } else if (entrada[0] === "b" || (entrada[i] === "c" && i > 0)) {
                estadoAtual = "q5";
            } else if (entrada[0] === "c" || entrada.length === 0 || (entrada[i] === "b" && i > 0)) {
                estadoAtual = "q3";
            }
        }

        if (estadoAtual === "q3") {
            if (entrada[i] === "b" && pilha[pilha.length - 1] !== "$") {
                simbolosEntrada.shift();
                pilha.pop();
            } else {
                pilha.pop();
                estadoAtual = "q4";
            }
        }

        if (estadoAtual === "q4") {
            if (entrada[i] === "c") {
                simbolosEntrada.shift();
            }
        }

        if (estadoAtual === "q5") {
            if (entrada[i] === "b") {
                simbolosEntrada.shift();
            } else {
                estadoAtual = "q6";
            }
        }

        if (estadoAtual === "q6") {
            if (entrada[i] === "c" && pilha[pilha.length - 1] !== "$") {
                simbolosEntrada.shift();
                pilha.pop();
            } else {
                pilha.pop();
                estadoAtual = "q7";
            }
        }
    }

    return qF.includes(estadoAtual) && simbolosEntrada.length === 0 && pilha.length === 0;
}

entrada = prompt("Digite uma cadeia de entrada: ");
ehAceita = processarEntrada(entrada);

if (ehAceita) {
    alert("A entrada {" + entrada + "} é aceita pelo autômato");
    
} else {
    alert("A entrada {" + entrada + "} não é aceita pelo autômato");
}
/*for (let i = 0; i < cadeias.length; i++) {
    ehAceita = processarCadeia(cadeias[i]);

    console.log("A cadeia {" + cadeias[i] + "} é aceita pelo autômato? " + ehAceita);
}*/
