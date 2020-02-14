var stat = [];
var stat2 = [];
var stat3 = [];
var stat4 = [];
var stat5 = [];
var stat6 = [];
var stat7 = [];

var allStat = []


document.getElementById("roll").addEventListener("click", function rollAtt() {
    for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat.push(a)
        } console.log(stat);
        stat.sort();
        console.log(stat);
        stat.shift();
        console.log(stat);
        var statSum = stat.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);

        //Stat2
                for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat2.push(a)
        } console.log(stat2);
        stat2.sort();
        console.log(stat2);
        stat2.shift();
        console.log(stat2);
        var statSum = stat2.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);


        //stat3
                for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat3.push(a)
        } console.log(stat3);
        stat3.sort();
        console.log(stat3);
        stat3.shift();
        console.log(stat3);
        var statSum = stat3.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);


        //stat4
                for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat4.push(a)
        } console.log(stat4);
        stat4.sort();
        console.log(stat4);
        stat4.shift();
        console.log(stat4);
        var statSum = stat4.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);


        //stat5
                for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat5.push(a)
        } console.log(stat5);
        stat5.sort();
        console.log(stat5);
        stat5.shift();
        console.log(stat5);
        var statSum = stat5.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);


        //stat6
                for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat6.push(a)
        } console.log(stat6);
        stat6.sort();
        console.log(stat6);
        stat6.shift();
        console.log(stat6);
        var statSum = stat6.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);


        //stat7
                for(i=1; i<=4; i++) {
        var a = Math.random()
        var a = a * 6
        var a = Math.floor(a)
        a++
        stat7.push(a)
        } console.log(stat7);
        stat7.sort();
        console.log(stat7);
        stat7.shift();
        console.log(stat7);
        var statSum = stat7.reduce(function(a, b) {
            return a + b;}, 0);
            console.log(statSum);
            allStat.push(statSum);
            console.log(allStat);

            allStat.sort((a, b) => a - b)
            console.log(allStat);
            allStat.shift();
            console.log(allStat);

var a = allStat[0];
var b = allStat[1];
var c = allStat[2];
var d = allStat[3];
var e = allStat[4];
var f = allStat[5];

document.getElementById("stats").innerHTML = a + ", " + b + ", " + c + ", " + d + ", " + e + ", and " + f;

stat.splice(0,3);
stat2.splice(0,3);
stat3.splice(0,3);
stat4.splice(0,3);
stat5.splice(0,3);
stat6.splice(0,3);
stat7.splice(0,3);

allStat.splice(0,6);
});

var strength = 0;
var dexterity = 0;
var constitution = 0;
var intelligence = 0;
var wisdom = 0;
var charisma = 0;