module.exports=(sequelize, DataTypes) => {
    let alias= "Usuario"
    let cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        nacimiento:{
            type: DataTypes.DATE
        },
        contraseña:{
            type: DataTypes.STRING
        },
        telefono:{
            type: DataTypes.INTEGER
        },
        imagen:{
            type: DataTypes.STRING
        }
    }
    let config= {
        tableName:"usuarios",
        timestamps: false
    }
    const Usuario=sequelize.define(alias, cols, config)
    Usuario.associate=(model)=>{
        Usuario.hasMany(model.Posteo,{
            as:'posteos',
            foreignKey: 'usuario_id'
        })                                                 
        Usuario.hasMany(model.Comentario, {
            as: 'comentarios',      
            foreignKey: 'usuario_id'
        })
    }
    return Usuario
}