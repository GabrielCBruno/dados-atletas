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

    calcularMediaValida() {
        let notasOrdenadas = this.notas.sort(function(a, b) {
            return (a - b);
        }).slice(1,this.notas.length - 1);
        let soma = notasOrdenadas.reduce(function(total, atual) {
            return total + atual;
        }, 0);
        this.media = soma/notasOrdenadas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas.join(", ");
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
        return `Nome: ${this.obtemNomeAtleta()}. \nIdade: ${this.obtemIdadeAtleta()}. \nPeso: ${this.obtemPesoAtleta()}. \nAltura ${this.altura}. \nNotas: ${this.obtemNotasAtleta()}. \nCategoria: ${this.obtemCategoria()}. \nIMC: ${this.obtemIMC()}. \nMédia válida: ${this.obtemMediaValida()}.`
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.imprimir());