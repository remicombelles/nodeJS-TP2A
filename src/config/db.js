module.exports = {
    database: process.env.MYSQL_ADDON_DB,
    username: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    options: {
        host: process.env.MYSQL_ADDON_HOST,
        dialect: 'mysql'
    }
}