
var studentData=JSON.parse(localStorage.getItem("studentData"))
console.log(studentData)

function display(studentData)
{
    document.getElementById("table").value="";

    studentData.map(function(el,index,arr){

        var tr=document.createElement("tr");

        var col1=document.createElement("td")
        col1.innerText=el.name;
        var col2=document.createElement("td")
        col2.innerText=el.number;
        var col3=document.createElement("td")
        col3.innerText=el.city;

        tr.append(col1,col2,col3)

        document.querySelector("tbody").append(tr)
    })
}
display(studentData)