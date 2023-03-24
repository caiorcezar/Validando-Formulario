export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity(') usuário não é maior de Idade')
    }
}

function validaIdade(data){
    const dataAtula = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtula >= dataMais18
}