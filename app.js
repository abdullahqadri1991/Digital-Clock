var getP = document.getElementsByTagName('p')
var time  =  new Date().toLocaleTimeString()
 getP[0].innerText = time



setInterval( function () {
    getP[0].innerText = new Date().toLocaleTimeString()
},1000
);
