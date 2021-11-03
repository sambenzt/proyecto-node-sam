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
            
            usuario_id:{
                type: DataTypes.INTEGER
            },
            posteo_id:{
                type: DataTypes.INTEGER
            },
            created_at:{
                type: DataTypes.DATE
            },
            updated_at:{
                type: DataTypes.DATE
            },
        }
    let config= {
        tableName:"comentarios",
    }
    const Comentario=sequelize.define(alias, cols, config)
    Comentario.associate=(model)=>{
        Comentario.belongsTo(model.Usuario,{
            as:'usuario',
            foreignKey: 'usuario_id'
        })                                                 
        Comentario.belongsTo(model.Posteo, {
            as: 'posteo',      
            foreignKey: 'posteo_id'
        })
    }
    return Comentario
}