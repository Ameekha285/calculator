function buttonClick(val)
{
    document.getElementById("sc1").value=document.getElementById("sc1").value+val
}
function buttonequal(){
    var res=document.getElementById("sc1").value
    var result=eval(res)
    document.getElementById("sc1").value=result
}
function cleared(){
    document.getElementById("sc1").value=""
}