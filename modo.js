var moodpossible  = ['activo' , 'de prueba'];
var activo = moodpossible[1];
var prueba = moodpossible[2];
var a = 'activo'
var b = 'prueba'
var modo = a
if(modo === 'activo'){
    var token ='NzU5MTUzNjgxMzYxNzk3MTQw.X25W9g.WrpxguvECr6Yn4ubpPfXrNdBa_o'
}
else if(modo === 'prueba'){
    var token = 'NzY1OTY2MTAwNzU2MTY4NzA2.X4cfhQ.M6l2_yAW-yxFSLcA14hRAtnQHa8'
}
module.exports = {
    mode : modo,
    tokensito: token
   }