class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome   = nome;
        this.idade  = idade;
        this.peso   = peso;
        this.altura = altura;
        this.notas  = notas;
    }

    calcularCategoria() {
        if (this.idade > 30 || this.idade < 9) {
            //Sem categoria
            let categoria = "Sem categoria";
        }else if (this.idade >= 16) {
            //Adulto
            let categoria = "Adulto";
        }else if (this.idade >= 14) {
            //Intermediario
            let categoria = "Intermediario";
        }else if (this.idade >= 12) {
            //Juvenil
            let categoria = "Juvenil";
        }else {
            let categoria = "Infantil";
            //Infantil
        }
        this.categoria = categoria;
    }

    calcularIMC() {
        this.imc = this.peso/(this.altura * this.altura);
    }

    ordenarNotasCrescente() {
        let ordenado = this.notas;
        let aux;
        for(let i = 0; i < ordenado.length - 1; i++) {
            for(let j = i + 1; j < ordenado.length; j++) {
                if (ordenado[i] > ordenado[j]) {
                    aux = ordenado[i];
                    ordenado[i] = ordenado[j];
                    ordenado[j] = aux;
                }
            }
        }
        return ordenado;
    }

    calcularMediaValida() {
        let notasOrdenadas = this.ordenarNotasCrescente().slice(1,4);
        let soma = notasOrdenadas.reduce(function(total, atual) {
            return total + atual;
        }, 0);
        this.media = soma/3;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemNomeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        this.calcularCategoria();
        this.categoria;
    }

    obtemIMC() {
        this.calcularIMC();
        return this.imc;
    }

    obtemMediaValida() {
        this.calcularMediaValida();
        return this.media;
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);