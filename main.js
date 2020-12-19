var p1=[];
var p2=[];
function para1(){
    for(var i=1; i<5; i++){
        var p= document.getElementById("p_"+i).value;
        p1.push(p);
    }
    var remove_commas=p1.join(" ");
    document.getElementById("display_para1").innerHTML=remove_commas;
}
function para2(){
    for(var i=5; i<9; i++){
        var p= document.getElementById("p_"+i).value;
        p2.push(p);
    }
    var remove_commas=p2.join(" ");
    document.getElementById("display_para2").innerHTML=remove_commas;
}