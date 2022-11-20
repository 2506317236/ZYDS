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
    c = "<td>";d = "<br><br></td></tr> <tr><td colspan='2' style='color:grey;opacity:0.2;'><hr><br><td></tr>"
    }else{
    c = "<tr><td>";d = "<br><br></td>"
    }
    //
  videonr = videonr+c+
  "<video src='"+video[a].vsrc+"' id='"+a+"' controlslist='nodownload' onclick='VideoDetails("+a+")'></video><br>"+
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
    c = "<td>";d = "<br><br></td></tr> <tr><td colspan='2' style='color:grey;opacity:0.2;'><hr><br><td></tr>"
    }else{
    c = "<tr><td>";d = "<br><br></td>"
    }
    //
  videonr = videonr+c+
  "<video src='"+video[a].vsrc+"' controlslist='nodownload' controls='true'></video><br>"+
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

//横屏&竖屏美化
window.addEventListener("orientationchange", function() {
   if(window.orientation === 90){
       document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/pc.css";
       Nowstate = "https://2506317236.github.io/ZYDS/pc.css";
    }
   if(window.orientation === 0){
       document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/az.css";
       Nowstate = "https://2506317236.github.io/ZYDS/az.css";
    }
}, true);

document.getElementById("btxz").style="animation:btxz_"+bt+" 1s ease 0s 1 alternate forwards;";
}


//VideoDetails视频详情
function VideoDetails(a){
  document.write("<meta charset='utf-8' name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'>"+
  "<style>*{padding:0px;margin:0px;}.LOGO1{margin:7px;font-size:22px;color:black;font-weight:410;}.LOGO2{margin:2px;font-size:22px;color:pink;font-weight:410;}</style>"+
  "<span class='LOGO1'>ZYDS</span><span class='LOGO2'>动漫</span><br><br><br>"+
  "<video src="+video[a].vsrc+" id='"+a+"' controlslist='nodownload' width='100%' controls='true'></video>"+
  "<br><br><div style='background-color:rgba(248,115,152);border-radius:20px;height:40px;width:95%;position:fixed;top:300px;left:10px'>"+
  "<a href='index.html' style='position:fixed;top:308px;left:30%;text-decoration:none;color:white;'>打开App，流畅又高清</a></div>"+
  "<br><br><br><i>"+video[a].xtext+"</i><br><br>"
  )
  
}




//默认配置
btl("shouye");
document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/az.css";

