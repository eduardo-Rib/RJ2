function Telefone (ddd, numero){
    this.ddd = ddd
    this.numero = numero,

    Object.defineProperty(this, 'getTelefone', {
        get: function(){
            return `(${this.ddd}) ${this.numero}`
        }
    })

    Object.defineProperty(this, 'getDdd', {
        get: function(){
            return this.ddd
        }
    })

    Object.defineProperty(this, 'getNumero', {
        get: function(){
            return this.numero
        }
    })

    Object.defineProperty(this, 'setDdd', {
        set: function(ddd){
            this.ddd = ddd
        }
    })

    Object.defineProperty(this, 'setNumero', {
        set: function(numero){
            this.numero = numero
        }
    })
}

function Endereco (rua, numero, cidade, estado){
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado

    Object.defineProperty(this, 'getRua', {
        get: function(){
            return this.rua
        }
    })

    Object.defineProperty(this, 'getNumero', {
        get: function(){
            return this.numero
        }
    })

    Object.defineProperty(this, 'getCidade', {
        get: function(){
            return this.cidade
        }
    })
    
    Object.defineProperty(this, 'getEstado', {
        get: function(){
            return this.estado
        }
    })

    Object.defineProperty(this, 'setRua', {
        set: function(rua){
            this.rua = rua
        }
    })

    Object.defineProperty(this, 'setNumero', {
        set: function(numero){
            this.numero = numero
        }
    })

    Object.defineProperty(this, 'setCidade', {
        set: function(cidade){
            this.cidade = cidade
        }
    })

    Object.defineProperty(this, 'setEstado', {
        set: function(estado){
            this.estado = estado
        }
    })
}

function Cliente (nome, ddd, numero, email, rua, numCasa, cidade, estado){
    this.nome = nome
    this.telefone = new Telefone(ddd, numero)
    this.email = email
    this.endereco = new Endereco(rua, numCasa, cidade, estado)

    Object.defineProperty(this, 'getNome', {
        get: function(){
            return this.nome
        }
    })

    Object.defineProperty(this, 'getEmail', {
        get: function(){
            return this.email
        }
    })

    Object.defineProperty(this, 'setNome', {
        set: function(nome){
            this.nome = nome
        }
    })

    Object.defineProperty(this, 'setEmail', {
        set: function(email){
            this.email = email
        }
    })

    this.Maiusculo = function(valor){
        return valor.toUpperCase()
    }

    this.Minusculo = function(valor){
        return valor.toLowerCase()
    }

    Object.defineProperty(this, 'descricao', {
        get: function (){
            return `------------
Informações do Cliente:
${this.nome}
------------
Telefone:
DDD: ${this.telefone.ddd}
Numero: ${this.telefone.numero}
------------
Endereço:
Rua: ${this.endereco.rua}
Numero: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
------------`
        }
    })

    

}

function ordenarClientes (clientes) {
    return clientes.sort((a, b) => a.nome.localeCompare(b.nome))
}

let clientes = [
    new Cliente(
        'Carlos Conrado Heinz', '11', '999999999', 'carlos.conrado@app.com', 'Av. Paulista', '987', 'São Paulo', 'SP'
    ),
    new Cliente(
        'Mariana Souza Lima', '21', '988888888', 'mariana.lima@app.com', 'Rua das Flores', '123', 'Rio de Janeiro', 'RJ'
    ),
    new Cliente(
        'Fernando Oliveira Santos', '31', '977777777', 'fernando.santos@app.com', 'Av. do Contorno', '456', 'Belo Horizonte', 'MG'
    ),
    new Cliente(
        'Ana Beatriz Ferreira', '41', '966666666', 'ana.ferreira@app.com', 'Rua XV de Novembro', '789', 'Curitiba', 'PR'
    ),
    new Cliente(
        'Roberto Carlos Mendes', '51', '955555555', 'roberto.mendes@app.com', 'Av. Farrapos', '321', 'Porto Alegre', 'RS'
    ),
    new Cliente(
        'Juliana Prado Rocha', '61', '944444444', 'juliana.rocha@app.com', 'Rua das Palmeiras', '654', 'Brasília', 'DF'
    ),
    new Cliente(
        'Eduardo Tavares Silva', '71', '933333333', 'eduardo.silva@app.com', 'Av. Sete de Setembro', '987', 'Salvador', 'BA'
    ),
    new Cliente(
        'Beatriz Almeida Gomes', '81', '922222222', 'beatriz.gomes@app.com', 'Rua Boa Viagem', '159', 'Recife', 'PE'
    ),
    new Cliente(
        'Rafael Moura Campos', '91', '911111111', 'rafael.campos@app.com', 'Rua Amazonas', '753', 'Manaus', 'AM'
    ),
    new Cliente(
        'Larissa Pereira Duarte', '95', '900000000', 'larissa.duarte@app.com', 'Av. Afonso Pena', '852', 'Campo Grande', 'MS'
    )
];

clientes = ordenarClientes(clientes)
clientes.forEach(cliente => console.log(cliente.descricao))