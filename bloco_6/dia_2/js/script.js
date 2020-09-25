const estados = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins',
    DF: 'Distrito Federal',
}

function geraEstados(estados){
    const elemPai = document.getElementById('estado')
    const opt = document.createElement('option');
    for(const index in estados){
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = estados[index];
        elemPai.appendChild(opt);  
    }
}

geraEstados(estados);

function paradaFuncao(event){
    event.preventDefault();
}