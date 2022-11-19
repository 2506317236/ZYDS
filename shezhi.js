function btl(bt){
    let gs = 5;
    let _bt_ = ["","shouye","manjian","fanju","dianying","mangeng"];
    
    while(gs){
      document.getElementById(_bt_[gs]).style="";
      gs--;
      }
    
    document.getElementById(bt).style="color:rgba(248,115,152);";
//首页
if(bt=="shouye"){
let videonr = "";
let s = Math.round(Math.random()*(n+1));
if(s==0){s=s+1}
let i = 0;
let o = i;
let b = i;
let c = "";
let d = "";
while(i < s+1){

  while(o < 10){
    o++;
    a = +(s*o);
    if(s==2||s>2){
    a = +(s*o)-i;
    if(a==+(s*o))break;
    }
    if(a>n||a<0)break;  
    b = b+1;if(b%2==0){
    c = "<td>";d = "<br></td></tr> <tr><td colspan='2' style='color:grey;opacity:0.2;'><hr><br><td></tr>"
    }else{
    c = "<tr><td>";d = "<br></td>"
    }
    //
  videonr = videonr+c+
  "<video src='"+video[a].vsrc+"' id='"+a+"' controlslist='nodownload' controls='true'></video><br>"+
  "<xx>"+video[a].xtext+"</xx>"+d;  
   //
  }
   if(s==1)break;
o=0;
i++;
}
document.getElementById("nr").innerHTML=videonr;
}
//漫剪
if(bt=="manjian"){
let videonr = "";
let s = Math.round(Math.random()*(n+1));
if(s==0){s=s+1}
let i = 0;
let o = i;
let b = i;
let c = "";
let d = "";
while(i < s+1){

  while(o < 10){
    o++;
    a = +(s*o);
    if(s==2||s>2){
    a = +(s*o)-i;
    if(a==+(s*o))break;
    }
    if(a>n||a<0)break;  
    b = b+1;if(b%2==0){
    c = "<td>";d = "<br></td></tr> <tr><td colspan='2' style='color:grey;opacity:0.2;'><hr><br><td></tr>"
    }else{
    c = "<tr><td>";d = "<br></td>"
    }
    //
  videonr = videonr+c+
  "<video src='"+video[a].vsrc+"' id='"+a+"' controlslist='nodownload' controls='true'></video><br>"+
  "<xx>"+video[a].xtext+"</xx>"+d;  
   //
  }
   if(s==1)break;
o=0;
i++;
}
document.getElementById("nr").innerHTML=videonr;
}
//番剧
if(bt=="fanju"){
document.getElementById("nr").innerHTML="";
}
//电影
if(bt=="dianying"){
document.getElementById("nr").innerHTML="";
}
//漫梗
if(bt=="mangeng"){
document.getElementById("nr").innerHTML="";
}




}





window.addEventListener("orientationchange", function() {
   if(window.orientation === 90){
       document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/pc.css";
    }
    if(window.orientation === 0){
     document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/az.css";
       
    }
}, true);




//默认配置
btl("shouye");
document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/az.css";
