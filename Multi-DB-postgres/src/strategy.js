class NotImplementedException extends Error{
    constructor(){
        super("Not implemented Exception")
    }
}
//Interface
class ICrud{
    create(item){
        throw new NotImplementedException()
    }
    
    read(query){
        throw new NotImplementedException()
    }
    update(id, item){
        throw new NotImplementedException()
    }
    delete(id){
        throw new NotImplementedException()
    }
}
//Classe concreta que implenta as funções de fato
class MongoDB extends ICrud {
    constructor (){
        super()
    }

    create(item){
        console.log("O item foi salvo em MongoDB");
        
    }
}

//Classe concreta que implenta as funções de fato
class Postgres extends ICrud {
    constructor (){
        super()
    }

    create(item){
        console.log("O item foi salvo em Postgres");
        
    }
}

//Classe abstrate que chama os metodos de acordo com oque foi passado no construtor
class ContextStrategy{
    constructor(strategy){
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }
    read(query){
        return this._database.read(query)
    }
    update(id, item){
        return this._database.update(id, item)
    }
    delete(id){
        return this._database.delete(id)
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()
const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()