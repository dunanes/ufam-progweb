class Empregado {

    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    get getSalario() {
        console.log(`${this.salario}`);
    };

    setSalario(valor) {
        if (valor < 0) {
            console.log("Erro! Salário não pode ser negativo.")
        }
        else {
            this.salario = valor;
        }
    };

    static somaSalarios = function (array) {
        let soma = 0;
        for (let i = 0; i < array.length; i++) {
            soma = soma + array[i].salario;
            console.log(array[i].salario);
        }
        return soma;
    }
}

const pedro = new Empregado("Pedro", 1200);
pedro.getSalario;

const joana = new Empregado("Joana", 2400);
joana.getSalario;


pedro.setSalario(pedro.salario * 1.1);
pedro.getSalario;

joana.setSalario(joana.salario * 1.1);
joana.getSalario;

let arrayEmpregados = [
    {
        nome: "Clara",
        salario: 2000
    },
    {
        nome: "Mario",
        salario: 1000
    },
    {
        nome: "Silva",
        salario: 3000
    }
];

console.log(Empregado.somaSalarios(arrayEmpregados));