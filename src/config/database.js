module.exports = {
    dialect: "postgres",
    protocol: 'postgres',
    host:"ec2-44-199-40-188.compute-1.amazonaws.com",
    username: "fzjrhhvprgcrbj",
    password: "7495950c21c8c330cabccde7fb16396cee7fbd2d3da0b56f3a12415ae92b2f8f",
    port:5432,
    database: "dehifn2t94l4h0",
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