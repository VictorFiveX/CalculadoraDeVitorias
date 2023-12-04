import prompt from 'readline';
import util from 'util';
const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg?msg+'\n':''}`);

console.log("Digite a quantidade de vitorias");
let vitorias = await read();
console.log("Digite a quantidade de derrotas");
let derrotas = await  read();
let nivel = "";
let saldo = calculateSaldo(vitorias, derrotas)
calculateRank(saldo)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
rl.close();

function calculateSaldo(vitorias, derrotas){

   let saldo = vitorias - derrotas;

    return saldo;
}

function calculateRank(saldo){

    if (saldo <= 10){
        nivel = "Ferro";
    }else if(saldo >= 11 && saldo <= 20){
    
        nivel = "Bronze";
    }else if(saldo >= 21 && saldo <= 50){
    
        nivel = "Prata";
    }else if(saldo >= 51 && saldo <= 80){
    
        nivel = "Ouro";
    }else if(saldo >= 81 && saldo <= 90){
    
        nivel = "Diamante";
    }else if(saldo >= 91 && saldo <= 100){
    
        nivel = "Lendário";
    }else if(saldo >= 101){
    
        nivel = "Imortal";
    }
    
    
}
