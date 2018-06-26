function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);

    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.careeer);
  fun_education(data.education);
  fun_achivements(data.achivements);
  fun_skills(data.skills);
});
var div2=document.getElementById("child2");
function fun_career(car){
  var c1=document.createElement("h2");
  c1.textContent="CAREER OBJECTIVE";
  div2.appendChild(c1);
  var p=document.createElement("p");
  p.textContent=car.info;
  div2.appendChild(p);
}


function fun_education(edu){
   var head=document.createElement("h1");
   head.textContent="EDUCATION QUALIFICATION";
   div2.appendChild(head);
   var hr=document.createElement("hr");
   div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0; i<edu.length; i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem=document.createElement("p");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
    var listItem=document.createElement("p");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);


  }
}
 function fun_achivements(ach){
   var a1=document.createElement("h2");
   a1.textContent="ACHIVEMENTS";
   div2.appendChild(a1);
   for(var i=0; i<ach.length; i++){
   var p1=document.createElement("p");
   p1.innerHTML=ach[i].name;
   div2.appendChild(p1);
 }
}
function fun_skills(skill){
  var a1=document.createElement("h2");
  a1.textContent="SKILLS";
  div2.appendChild(a1);
  var hr=document.createElement("hr");
  a1.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
  table.border="1";
  div2.appendChild(table);
  for(var i=0; i<skill.length; i++)
{
  tr+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].data+"</td></tr>";
}
table.innerHTML=tr;
}
