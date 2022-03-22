module.exports = {
    dialect: "postgres",
    protocol: 'postgres',
    host:"ec2-3-222-204-187.compute-1.amazonaws.com",
    username: "jxxtgigvlqglyt",
    password: "2dbcfbafdbcbeda35ec56e4638b4861a177a6e9fc4d653dc023ab0b9434b55f7",
    port:5432,
    database: "d8j6ub4c00ierc",
    ssl: true, 
    define: {
        timestamp:true,
        underscored: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
          }
      }
}