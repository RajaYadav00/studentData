
document.getElementById("form").addEventListener("submit",studentData);

var studentarr=JSON.parse(localStorage.getItem("studentData"))||[];


function studentData(event)
{
    event.preventDefault();
    var name=document.getElementById("name").value;
    var number=document.getElementById("number").value;
    var city=document.getElementById("city").value;
    
    console.log(name,number,city)
    function studentData1(name,num,city){
        this.name=name,
        this.number=num,
        this.city=city
    }

    let stData=new studentData1(name,number,city)
    studentarr.push(stData)
    localStorage.setItem("studentData",JSON.stringify(studentarr))
    console.log(stData)

    window.location.href="./display.html"
}
 