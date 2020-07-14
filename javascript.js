var today = new Date();
var year = today.getFullYear();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ymth = monthName[today.getMonth()];
var el1 = document.getElementById('ft');
el1.innerHTML =  '<h3>' + ymth + "  " +   year + '</h3>';



if (today.getMonth() === 11) {
                   document.getElementById('x').style.display='block';
} else {
          document.getElementById('x').style.display='none';
}  





