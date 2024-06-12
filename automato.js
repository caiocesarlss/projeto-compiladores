const cadeias = ["aabb", "abc", "bbaa", "aacc", "abab", "aabbccc", "adbf", "aaccd", ""];
const q0 = "q1";
const qF = ["q4", "q7"];
let estadoAtual = q0;
let pilha;
let cadeiaAux;
let ehAceita = false;

function processarCadeia(cadeia) {
    estadoAtual = q0;
    cadeiaAux = cadeia.split("");
    pilha = [];

    for (let i = 0; i <= cadeia.length; i++) {
        /*console.log("Estado atual: " + estadoAtual);
        console.log("Cadeia de entrada: " + cadeiaAux.join(""));
        console.log("Conteúdo da pilha: " + pilha);
        console.log("------------------------------------------------");*/

        if (estadoAtual === q0 && pilha.length === 0) {
            pilha.push("$");
            estadoAtual = "q2";
        }

        if (estadoAtual === "q2") {
            if (cadeia[i] === "a") {
                cadeiaAux.shift();
                pilha.push("a");
            } else if (cadeia[i] === "c") {
                estadoAtual = "q5";
            } else {
                estadoAtual = "q3";
            }
        }

        if (estadoAtual === "q3") {
            if (cadeia[i] === "b" && pilha[pilha.length - 1] !== "$") {
                cadeiaAux.shift();
                pilha.pop();
            } else {
                pilha.pop();
                estadoAtual = "q4";
            }
        }

        if (estadoAtual === "q4") {
            if (cadeia[i] === "c") {
                cadeiaAux.shift();
            }
        }

        if (estadoAtual === "q5") {
            if (cadeia[i] === "b") {
                cadeiaAux.shift();
            } else {
                estadoAtual = "q6";
            }
        }

        if (estadoAtual === "q6") {
            if (cadeia[i] === "c" && pilha[pilha.length - 1] !== "$") {
                cadeiaAux.shift();
                pilha.pop();
            } else {
                pilha.pop();
                estadoAtual = "q7";
            }
        }
        /*console.log("Estado atual: " + estadoAtual);
        console.log("Cadeia de entrada: " + cadeiaAux.join(""));
        console.log("Conteúdo da pilha: " + pilha);
        console.log("------------------------------------------------");*/
    }

    return qF.includes(estadoAtual) && cadeiaAux.length === 0 && pilha.length === 0;
}

for (let i = 0; i < cadeias.length; i++) {
    ehAceita = processarCadeia(cadeias[i]);

    console.log("A cadeia {" + cadeias[i] + "} é aceita pelo autômato? " + ehAceita);
}