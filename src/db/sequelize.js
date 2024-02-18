import Sequelize from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log('Conexao bem sucedida');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados: ', error);
    }
})();

export default sequelize