$(document).ready(function(){
    $("#connectors").click(function (){
        var array = ["a","b","c","d","e","f"];
        var connector = $("#connector").val();
        var a = array.join((connector==null)?"":connector);
        $("#conJoin").text(a) ;
    });
    $("#connectorsPop").click(function (){
        var array = ["a","b","c","d","e","f"];
        var last = array.pop();
        $("#connectorPop").text(last);
        console.log(array)
        $("#conPop").text(array) ;
    });
    $("#connectorsDel").click(function (){
        var array = ["a","b","c","d","e","f"];
        var last = array.shift();
        $("#connectorDel").text(last);
        console.log(array)
        $("#conDel").text(array) ;
    });
    $("#connectorsAdd").click(function (){
        var array = ["a","b","c","d","e","f"];
        var connector = $("#connectorAdd").val();
        var a = array.unshift(connector)
        $("#conAdd").text(array) ;
    });
})