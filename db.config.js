module.exports = {
  DBTYPE:"oracle",                
  HOST: 'localhost',
  USER: "SYSTEM",                  
  PASSWORD: "oracle_password!!Q11",  
  DB: "oracleDB",                   
  PORT:1521,                        
  SID:'orcl',                        
  dialect: "oracle",              
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
