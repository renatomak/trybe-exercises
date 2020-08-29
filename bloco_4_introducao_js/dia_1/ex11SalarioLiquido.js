let salarioBruto = 3000;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;

if(salarioBruto <= 1556.94){

    inss = salarioBruto * 0.08;

}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    
    inss = salarioBruto * 0.09;

}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){

    inss = salarioBruto * 0.11;

}else{

    inss = salarioBruto - 570.88;

}

salarioBruto -= inss;

/*IR */
if( salarioBruto <= 1903.98){
    ir = 0;
}else if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65 ){

    ir = (salarioBruto * 0.075) - 142.80;

}else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05 ){

    ir = (salarioBruto * 0.15) - 354.80;

}else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68 ){

    ir = (salarioBruto * 0.225) - 636.13;

}else{

    ir = (salarioBruto * 0.275) - 869.36;
}

salarioLiquido = salarioBruto - ir;

console.log("Salário Liquido: "+salarioLiquido.toFixed(2));