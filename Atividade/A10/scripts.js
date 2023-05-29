const masks = {
    cpf(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },

    rg(value){
        return value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1-$2')
          .replace(/(-\d{1})\d+?$/, '$1');
    },

    phone(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(\d{4})\d+?$/, '$1')
    },

    cep(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },

    cartao(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})\d+?$/, '$1');
     },
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('button')

button.addEventListener('click', () => {
    event.preventDefault()

    const cpf = document.getElementById('cpf')
    const rg = document.getElementById('rg')
    const phone = document.getElementById('phone')
    const cep = document.getElementById('cep')
    const cartao = document.getElementById('cartao')

    if (cpf.value == ''){
        cpf.classList.add("errorInput")
    }

    //Validação do RG
    if (rg.value == '' | rg.value.length < 12){
        rg.classList.add("errorInput")
    } else {
        rg.classList.remove("errorInput")
    }

    //Validação do Telefone
    if (phone.value == '' | phone.value.length < 14){
        phone.classList.add("errorInput")
    } else {
        phone.classList.remove("errorInput")
    }

    //Validação do CEP
    if (cep.value == '' | cep.value.length < 9){
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    //Validação do Cartão
    if (cartao.value == '' | cartao.value.length < 19){
        cartao.classList.add("errorInput")
    } else {
        cartao.classList.remove("errorInput")
    }

    if (cpf.value.length <= 11){
        cpf.classList.add('errorInput')
    }

    //Validação do CPF
    var validarCpf = cpf.value.replaceAll('.', '').replace('-', '')
    var cpfValido = TestaCPF(validarCpf)

    if (!cpfValido) {
            cpf.classList.add("errorInput")
    } else {
            cpf.classList.remove("errorInput")
    };

})

function TestaCPF(validarCpf) {
    var Soma;
    var Resto;
    Soma = 0;
    if (validarCpf == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(validarCpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(validarCpf.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validarCpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(validarCpf.substring(10, 11))) return false;
    return true;
}
