let fechaDeHoy = new Date();

document.write("<p>" +fechaDeHoy + "</p>");
document.write("<p>Día: " + fechaDeHoy.getDate() + "</p>");
document.write("<p>Mes: " + (fechaDeHoy.getMonth()+1) + "</p>"); //pon la suma entre parentesis para que sume los numeros y no los concatene como el resto
document.write("<p>Año: " + fechaDeHoy.getFullYear() + "</p>");
document.write("<p>Hora: " + fechaDeHoy.getHours() + "</p>");
document.write("<p>Minutos: " + fechaDeHoy.getMinutes() + "</p>");


let fechaEspecifica = new Date("2023/06/01 20:30");
document.write("<p>Solo Fecha y hora de fecha especifica: " + fechaEspecifica.toLocaleString() + "</p>"); 
document.write("<p>Solo Fecha de fecha especifica: " + fechaEspecifica.toLocaleDateString() + "</p>");
document.write("<p>Solo hora de fecha especifica: " + fechaEspecifica.toLocaleTimeString() + "</p>");