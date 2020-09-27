module.exports = (sequalize,type)=>{
    return sequalize.define('film',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title: type.STRING,
        description: type.STRING,
        score:type.INTEGER,
        director:type.STRING
    })
}