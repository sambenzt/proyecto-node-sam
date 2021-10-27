module.exports=(sequelize, DataTypes) => {
    let alias= "Posteo"
    let cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        imagen:{
            type: DataTypes.STRING
        },
        descripcion:{
            type: DataTypes.STRING
        },
        fecha_de_creacion:{
            type: DataTypes.DATE
        },
        
        usuario_id:{
            type: DataTypes.INTEGER
        },
        
    }
    let config= {
        tableName:"posteos",
        timestamps: false
    }
    const Posteo=sequelize.define(alias, cols, config)
    return Posteo
}