
class SimuladorTemperatura {
    constructor(cidade, temperatura) {
        this.cidade = cidade;
        this.temperatura = temperatura;
    }

    verificarCategoria() {
        if (this.temperatura >= 0 && this.temperatura <= 36) {
            return `Na cidade de ${this.cidade}, está no NC1 de calor.`;
        } else if (this.temperatura > 36 && this.temperatura <= 40) {
            return `Na cidade de ${this.cidade}, está no NC2/NC3 de calor.`;
        } else if (this.temperatura > 40 && this.temperatura <= 44) {
            return `Na cidade de ${this.cidade}, está no NC4 de calor.`;
        } else if (this.temperatura >= 45) {
            return `Na cidade de ${this.cidade}, está no NC5 de calor.`;
        } else {
            return "Temperatura inválida!";
        }
    }
}

function iniciarSimulador() {
    let cidade = prompt("Em que cidade você está?");
    let temperatura = Number(prompt("Quantos graus está fazendo na sua cidade?"));

    let simulacao = new SimuladorTemperatura(cidade, temperatura);

    alert(simulacao.verificarCategoria());
}

iniciarSimulador();
