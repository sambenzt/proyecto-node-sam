module.exports=(sequelize, DataTypes) => {
    let alias= "Comentario"
    let cols= {
            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            comentario:{
                type: DataTypes.STRING
            },
           
            fecha_de_creacion:{
                type: DataTypes.DATE
            },
            
            usuario_id:{
                type: DataTypes.INTEGER
            },
            posteo_id:{
                type: DataTypes.INTEGER
            }
        }
    let config= {
        tableName:"comentarios",
        timestamps: false
    }
    const Comentario=sequelize.define(alias, cols, config)
    return Comentario
}