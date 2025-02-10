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
            this.categoria = "Sem categoria";
        }else if (this.idade >= 16) {
            //Adulto
            this.categoria = "Adulto";
        }else if (this.idade >= 14) {
            //Intermediario
            this.categoria = "Intermediario";
        }else if (this.idade >= 12) {
            //Juvenil
            this.categoria = "Juvenil";
        }else {
            //Infantil
            this.categoria = "Infantil";
        }
        
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
        return this.categoria;
    }

    obtemIMC() {
        this.calcularIMC();
        return this.imc;
    }

    obtemMediaValida() {
        this.calcularMediaValida();
        return this.media;
    }

    imprimir() {
        return `Nome: ${this.nome}. \nIdade: ${this.idade} \nPeso: ${this.peso}. \nAltura ${this.altura}. \nNotas: ${this.notas}. \nCategoria: ${this.obtemCategoria()}. \nIMC: ${this.obtemIMC()}. \nMédia válida: ${this.obtemMediaValida()}.`
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.imprimir());