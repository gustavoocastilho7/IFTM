window.addEventListener("DOMContentLoaded", function () {

    vet = [10, 1, 1, 54, 11, 60]
    let valorF = prompt("Problema f - Digite um valor para verificar se TODAS as idades são maiores ou iguais a ele:");
    valorF = valorF;
    let valorG = prompt("Problema g - Digite um valor para EXIBIR todas as idades maiores ou iguais a ele:");
    valorG = valorG;
    let valorH = prompt("Problema h - Digite um valor para calcular a MÉDIA das idades maiores ou iguais a ele:");
    valorH = valorH;

    const somarIdades = vet => {
        soma = vet.reduce((total, idade) => total += idade);
        return soma;
    }


    const mediaIdade = vet => {
        soma = vet.reduce((total, elemento) => total += elemento);
        media = soma / vet.length;
        return media
    }

    const maiorIdade = vet => {
        const maior = vet.reduce((max, idade) => idade > max ? idade : max, vet[0]);
        return maior;
    }

    const idadeImpar = vet => {
        impar = vet.filter(num => num % 2 !== 0);
        return impar;
    }

    const verificaMaioresIdade = vet => {
        const maiores = vet.every(idade => idade >= 18);
        return maiores;
    };

    const verificaIdadesVetor = (vet, valorF) => {
        const resultado = vet.every(idade => idade >= valorF);
        return resultado;

    }

    const idadesMaioresQue = (vet, valorG) => {
        const maiores = vet.filter(idade => idade >= valorG);
        return maiores;
    }

    const mediaIdadesMaioresQue = (vet, valor) => {
        const maiores = vet.filter(idade => idade >= valor);
        const soma = maiores.reduce((acc, idade) => acc + idade, 0);
        const media = soma / maiores.length;
        return media;

    }




        document.write(`<p>a)A soma das idades = ${somarIdades(vet)} </p>`)
        document.write(`<p>b)A média aritmética simples das idades = ${mediaIdade(vet)} </p>`)
        document.write(`<p>c)A maior idade = ${maiorIdade(vet)} </p>`)
        document.write(`<p>d)As idades ímpares = ${idadeImpar(vet)} </p>`)
        document.write(`<p>e)Verificar se todos são maiores de idade = ${verificaMaioresIdade(vet)} </p>`)
        document.write(`<p>f)Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário = ${verificaIdadesVetor(vet, valorF)} </p>`)
        document.write(`<p>g)Exibir todas as idades maiores ou iguais a determinada idade = ${idadesMaioresQue(vet, valorG)} </p>`)
        document.write(`<p>h)A média das idades das pessoas com idades maiores ou iguais a determinada idade = ${mediaIdadesMaioresQue(vet, valorH)} </p>`)
    })