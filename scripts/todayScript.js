var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("todayNews").innerHTML = `<span>${today}</span>`