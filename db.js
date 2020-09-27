const Sequelize = require('sequelize');

const FilmModel = require('./models/film');
const UserModel = require('./models/users');


const sequalize= new Sequelize('sequalize_db','root','',{
    host:'localhost',
    dialect:'mysql'
});


const Film = FilmModel(sequalize,Sequelize);
const User = UserModel(sequalize,Sequelize);


sequalize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronisadas')
})

module.exports ={
    Film,
    User
}