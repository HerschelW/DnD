var output = [];
var botch = [];


document.getElementById("roll2").addEventListener("click", function roll(n) {
    var n = prompt ("How many dice?");
    var DC = prompt("What is the DC?");
    for (i=1;i<=n;i++) {
        var a = (Math.random() * 10) +1;
        var a = Math.floor(a);
        console.log(a)

        if (a == 10) {
            output.push(1);
            n++;            
        }   else if (a >= DC) {
            output.push(1);
        }   else if (a == 1) {
            botch.push(1);
        }   else {
            console.log(output);
        }
    }
    console.log(output.length);
    console.log(botch.length);
    alert(output.length - botch.length);
    document.getElementById("stats2").innerHTML = output.length - botch.length;
    output.length = 0;
    botch.length = 0;
    console.log(output);
    console.log(botch);
}); 



document.getElementById("roll3").addEventListener("click", function roll(n) {
    var n = prompt ("How many dice?");
    var mod = prompt("What is the modifier?");
    for (i=1;i<=n;i++) {
        var a = (Math.random() * 20) +1;
        var a = Math.floor(a);
        console.log(a)

        if (a == 20) {
            alert("Crit!");     
        }   else if (a == 1) {
            alert("Botch!");
        }   else {
            alert(a + " + " + mod);
        }
    }
    document.getElementById("stats3").innerHTML = a + " + " + mod;
});

document.getElementById("roll4").addEventListener("click", function roll(n) {
    var n = prompt ("How many dice?");
    var mod = prompt("What is the modifier?");
    for (i=1;i<=n;i++) {
        var a = (Math.random() * 8) +1;
        var a = Math.floor(a);
        console.log(a)
        alert(a + " + " + mod);
    }
    document.getElementById("stats4").innerHTML = a + " + " + mod;
});

document.getElementById("roll5").addEventListener("click", function roll(n) {
    var n = prompt ("How many dice?");
    var mod = prompt("What is the modifier?");
    for (i=1;i<=n;i++) {
        var a = (Math.random() * 6) +1;
        var a = Math.floor(a);
        console.log(a)
        alert(a + " + " + mod);
    }
    document.getElementById("stats5").innerHTML = a + " + " + mod;
});

document.getElementById("roll6").addEventListener("click", function roll() {
        var a = (Math.random() * 100) +1;
        var a = Math.floor(a);
        console.log(a)
        document.getElementById("stats6").innerHTML = a;
});