module.exports =
production: {
    dialect: "postgres",
    protocol: 'postgres',
    host:"ec2-52-73-64-42.compute-1.amazonaws.com",
    username: "gbdjrqapwbhdns",
    password: "4e290c0b8e92bbfde9e3f3a01ad6ff848b189f23ac162e7676a9676f058a894d",
    port:5432,
    database: "de1h82qe5m1708",
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