//返回&退出
function fanhui(){
document.getElementById("jump").style="display:none;";
document.getElementById("page").style="display:block;";
}
/*****GET配置*****/
function GET(url){
var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url, true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText;alert(json);
                localStorage.setItem("GET", json);
    }
  }
}

/*****提示*****/
let ts = 5;let ts2 = ts;
while(ts>0){
document.write("<div id='TS"+ts+"'></div>")
ts--;
}
function TS(a,b){
if(ts2==0){ts2 = 5;}
if(ts2==1){img = "http://suol.cc/JNjCB3";}
if(ts2==2){img = "http://suol.cc/lkm0K3";}
if(ts2==3){img = "http://suol.cc/UVojq2";}
if(ts2==4){img = "http://suol.cc/Ityjw1";}
if(ts2==5){img = "http://suol.cc/42bJl";}
let TS = document.getElementById("TS"+ts2);
TS.style="display:block;position:fixed;left:15%;right:15%;bottom:-100px;color:rgba(88,86,123);font-size:45px;animation:TS 3s ease 0s 1 alternate forwards;";
TS.innerHTML="<div><img src='"+img+"' height='133px' style='border-top-left-radius:20px;border-bottom-left-radius:20px;float:left'></div>"+
             "<div style='background:rgba(246,149,182);border-top-right-radius:20px;border-bottom-right-radius:20px;float:left;width:430px;'><i>&nbsp&nbsp"+a+"<br>&nbsp&nbsp"+b+"</i></div>";
ts2--;
setTimeout(()=>{TS.style="",TS.innerHTML=""},3000);
}

/*****标题页面*****/
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
localStorage.setItem("website", "shouye");
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
  "<video src='"+video[a].vsrc+"' id='"+a+"' controlslist='nodownload' onclick='VideoDetails("+a+",1)'></video><br>"+
  "<xx>"+video[a].xtext+"</xx>"+d;  
   //
  }
   if(s==1)break;
o=0;
i++;
}
document.getElementById("nr").innerHTML=videonr;
//
if(document.getElementById(0)==null){
  s = 0;o = n;
  }else{
  s = -1;o = n;
  }
while(o>s){
document.getElementById(o).currentTime=1;
o--;
}
//
}
//漫剪
if(bt=="manjian"){
localStorage.setItem("website", "manjian");
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
  "<video src='"+video[a].vsrc+"' id='"+a+"' controlslist='nodownload' onclick='VideoDetails("+a+",1)'></video><br>"+
  "<xx>"+video[a].xtext+"</xx>"+d;  
   //
  }
   if(s==1)break;
o=0;
i++;
}
document.getElementById("nr").innerHTML=videonr;
//
if(document.getElementById(0)==null){
  s = 0;o = n;
  }else{
  s = -1;o = n;
  }
while(o>s){
document.getElementById(o).currentTime=1;
o--;
}
//
}
//番剧
if(bt=="fanju"){
localStorage.setItem("website", "fanju");
document.getElementById("nr").innerHTML="作者累了，请下载App吧";
}
//电影
if(bt=="dianying"){
localStorage.setItem("website", "dianying");
document.getElementById("nr").innerHTML="作者累了，请下载App吧";
}
//漫梗
if(bt=="mangeng"){
localStorage.setItem("website", "mangeng");
document.getElementById("nr").innerHTML="";
}
//点击标题动画特效
document.getElementById("btxz").style="animation:btxz_"+bt+" 1s ease 0s 1 alternate forwards;";
}
//VideoDetails视频详情
function VideoDetails(a,b){
  localStorage.setItem("dmID", a);
  document.getElementById("jump").innerHTML=("<span class='LOGO1'>ZYDS</span><span class='LOGO2'>动漫</span><br><br>&nbsp&nbsp<b onclick='fanhui_pd("+b+")'>返回</b><br>"+
  "&nbsp&nbsp<video src="+video[a].vsrc+" id='"+a+"' controlslist='nodownload' width='100%' controls='true' poster='https://api.ixiaowai.cn/mcapi/mcapi.php'></video>"+
  "<br><br><div style='background:rgba(248,115,152);border-radius:50px;height:100px;'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+
  "<a href='index.html' style='text-decoration:none;color:white;'>打开App，流畅又高清</a></br></div>"+
  "<br><br>&nbsp<i style='float:left'>"+video[a].xtext+"</i><b><br>&nbspID："+a+"</b><b style='float:right;margin-right:40px;' onclick='userdata_create(1,3)'>收藏</b><b style='float:right;margin-right:80px;' onclick='userdata_create(1,2)'>点赞</b><br><br>"
  );
document.getElementById("jump").style="display:block";
}
//用户数据
function userdata_create(a,b){
let ms = ["","m-j","f-j","d-y","m-g"];
let dmID = localStorage.getItem("dmID");
let xx = localStorage.getItem("userxx");
if(b==2){
like1 = xx.match(/like:(\S*)4;/)[1];
like2 = like1.replace(","+ms[a]+dmID+",", ",");
if(like2==like1){
  localStorage.setItem("userxx",xx.replace(like1,like1+ms[a]+dmID+","));
  TS("点赞成功~"," ");
}
if(like2!==like1){
  localStorage.setItem("userxx",xx.replace(like1,like2));
  TS("取消点赞~"," "); 
}
}
if(b==3){
collection1 = xx.match(/collection:(\S*)5;/)[1];
collection2 = collection1.replace("."+ms[a]+dmID+".", ".");
if(collection2==collection1){
  localStorage.setItem("userxx",xx.replace(collection1,collection1+ms[a]+dmID+"."));
  TS("收藏成功~"," ");
}
if(collection2!==collection1){
  localStorage.setItem("userxx",xx.replace(collection1,collection2));
  TS("取消收藏~"," "); 
}
}
}

function userdata(a){
let c = ["","zuopin","dianzan","shoucang"];
let xx = localStorage.getItem("userxx");
let collection = xx.match(/collection:(\S*)5;/)[1].split(".");
let like = xx.match(/like:(\S*)4;/)[1].split(",");
let i = 0;let o = i;let likejg = "<br>";collectionjg = "<br>";
while(true){
i++;
if(like[i]==undefined){break};
let likeid = like[i].slice(3);
if(likeid!==""){
likejg = likejg +
"<div style='float:left;width:48%;margin-right:15px'><video src='"+video[likeid].vsrc+"' id='"+likeid+"' controlslist='nodownload' onclick='VideoDetails("+likeid+",2)'></video><br>"+
"<xx>"+video[likeid].xtext+"</xx></div>";
}
}
while(true){
o++;
if(collection[o]==undefined){break};
let collectionid = collection[o].slice(3);
if(collectionid!==""){
collectionjg = collectionjg +
"<div style='float:left;width:48%;margin-right:15px'><video src='"+video[collectionid].vsrc+"' id='"+collectionid+"' controlslist='nodownload' onclick='VideoDetails("+collectionid+",3)'></video><br>"+
"<xx>"+video[collectionid].xtext+"</xx></div>";
}
}

if(c[a]=="zuopin"){
document.getElementById("jump").innerHTML=("<table style='margin:30px;' width='95%'><tr><th style='border-radius:20px;background:rgba(18,214,188);color:white;font-size:60px'>&nbsp作&nbsp&nbsp&nbsp品&nbsp</th></tr>"+
"<tr><td onclick='user_login_website()'><b>返回</b></td></tr>"+
"<tr><td id='user_zuopin' style='border-radius:20px;background:rgba(18,214,188,0.2);width:95%;height:200%;font-size:40px'></td></tr></table>")
}
if(c[a]=="dianzan"){
document.getElementById("jump").innerHTML=("<table style='margin:30px;' width='95%'><tr><th style='border-radius:20px;background:rgba(229,93,116);color:white;font-size:60px'>&nbsp点&nbsp&nbsp&nbsp赞&nbsp</th></tr>"+
"<tr><td onclick='user_login_website()'><b>返回</b></td></tr>"+
"<tr><td id='user_dianzan' style='border-radius:20px;background:rgba(229,93,116,0.2);width:95%;height:200%;font-size:40px'>你好</td></tr></table>")
document.getElementById("user_dianzan").innerHTML=likejg;
}
if(c[a]=="shoucang"){
document.getElementById("jump").innerHTML=("<table style='margin:30px;' width='95%'><tr><th style='border-radius:20px;background:rgba(243,208,155);color:white;font-size:60px'>&nbsp收&nbsp&nbsp&nbsp藏&nbsp</th></tr>"+
"<tr><td onclick='user_login_website()'><b>返回</b></td></tr>"+
"<tr><td id='user_shoucang' style='border-radius:20px;background:rgba(243,208,155,0.2);width:95%;height:200%;font-size:40px'>你好</td></tr></table>")
document.getElementById("user_shoucang").innerHTML=collectionjg;
}
document.getElementById("page").style="display:none;";
document.getElementById("jump").style="display:block;opacity:0.85;";
}

/*****用户登录*****/
//登录后页面
function user_login_website(){
let i = 0;let o = i;let likecs = i-1;let collectioncs = i-1;
let xx = localStorage.getItem("userxx");
let collection = xx.match(/collection:(\S*)5;/)[1];
let like = xx.match(/like:(\S*)4;/)[1];
while(true){
if(like[i]==undefined){break};
if(like[i]==","){likecs = likecs+1};
i++;
}
while(true){
if(collection[o]==undefined){break};
if(collection[o]=="."){collectioncs = collectioncs+1};
o++
}
document.getElementById("jump").innerHTML=("<div style='position:absolute;top:0px;left:0px;margin-top:660px;margin-left:30px;margin-right:30px;' id='activity'>"+
"<div style='background:pink;width:250px;height:250px;float:left'></div>"+
"<div style='background:pink;width:250px;height:250px;float:left'></div>"+
"</div>"+
"<div style='margin:30px;position:fixed;top:0px;left:0px;right:0px;background:white'>"+
"<div style='float:left' onclick='fanhui()'><b>返回</b></div>"+
"<div style='float:right'><svg onclick='sy_website(1)' t='1671703964404' class='icon' viewBox='0 0 1135 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4395' width='60' height='60'><path d='M1050.774261 544.513391c11.489391-19.952696 11.489391-45.074087 0-65.026782L836.076522 106.630957c-10.690783-18.568348-29.55687-29.630609-49.6-29.630609H348.827826c-20.04313 0-38.909217 11.062261-49.6 29.629217L84.530087 479.486609c-11.489391 19.952696-11.489391 45.074087 0 65.026782l214.697739 372.855652c10.690783 18.568348 29.55687 29.630609 49.6 29.630609h437.648696c20.04313 0 38.909217-11.062261 49.6-29.629217l214.697739-372.857044z m60.90713 54.263652L913.499826 939.213913c-30.110609 51.72313-84.791652 83.439304-143.855304 83.439304H365.659826c-59.063652 0-113.744696-31.716174-143.855304-83.439304L23.624348 598.775652c-31.149913-53.506783-31.149913-120.047304 0-173.554087L221.804522 84.786087C251.91513 33.064348 306.596174 1.349565 365.659826 1.349565h403.984696c59.063652 0 113.744696 31.716174 143.855304 83.439305L1111.68 425.224348c31.149913 53.506783 31.149913 120.047304 0 173.554087zM567.652174 663.304348c83.56313 0 151.304348-67.741217 151.304348-151.304348S651.215304 360.695652 567.652174 360.695652 416.347826 428.43687 416.347826 512 484.089043 663.304348 567.652174 663.304348z m0 75.652174c-125.344 0-226.956522-101.612522-226.956522-226.956522S442.308174 285.043478 567.652174 285.043478 794.608696 386.656 794.608696 512 692.996174 738.956522 567.652174 738.956522z' fill='#707070' p-id='4396'></path></svg></div>"+
"<div style='float:right;margin-right:55px'><svg onclick='sy_website(2)' t='1671702843450' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2436' width='60' height='60'><path d='M958.6 362.5l-0.1-0.5-0.1-0.5c-0.1-0.6-0.1-2.2-0.1-3.1v-1.2l-1.7-7.5-0.2-0.6c-5.8-16.5-16-26.7-23.4-34.1l-5.4-5.4c-5.6-6.4-11.9-12.3-18.1-18.1-5.2-4.8-10.1-9.3-15.1-14.6l-0.2-0.2-132-128.9-1.4-1.4c-6.9-7-14.8-14.9-26.4-20.9-12.6-6.8-28.2-8.2-47.8-8.2-1.1 0-4 0-8-0.1-8.7-0.1-21.8-0.3-32.4-0.3-12.4 0-15.8 0.2-17.5 0.5-4.6 0.7-12.7 3.4-15.7 4.5l-1.2 0.4-16.9 11.3-0.2 0.1c-7.7 5.7-12.8 12.6-16.5 17.7l-0.4 0.5-0.1 0.2c-1.2 1.8-2.7 3.6-3.6 4.6-13.5 10.8-22.8 13.8-49 19.3l-0.3 0.1-0.3 0.1c-4.3 1.2-7.7 1.3-9.2 1.4l-16-0.8c-13.8-2.6-24.1-5-32.8-8.8l-0.3-0.1c-7.6-3-15.2-8.5-17.7-11.8l-1.3-1.7c-4.9-6.7-11.2-14.6-20.2-21.6-6.6-5.4-20.1-12.7-28.5-14.4-6.3-1.3-16.3-2-30.3-2-22.7 0-47.9 1.7-49 1.8l-0.9 0.1-22.6 5.6-0.7 0.3c-15.1 6-25.5 16.4-32.4 23.3L122.9 284.7c-4.1 3.6-7.7 7.2-11.2 10.7-3 3-5.9 5.9-10 9.6-12.2 10.5-30.6 26.4-36.2 55.8-3.2 16.6 3.2 31.3 6.7 39.2l0.2 0.4c6.3 14.1 16 23.1 23 29.7l1.3 1.2 0.5 0.4c1.1 0.8 2.6 2.3 3.7 3.4l5.1 5.1c5 5.5 10.4 10.4 15.6 15.2l17.3 17.3 31.9 30.6 9.1 9.1c0.6 0.6 1.2 1.3 1.9 1.9 3.6 3.6 8 8.1 13.9 12.3l0.2 0.2c13.1 8.8 29.4 13.9 44.7 13.9 6.8 0 13.2-0.9 19.1-2.8V823.7c0 11.5-0.1 24.4 4.7 36.7 6.5 16.8 20 29.5 29.6 35.3 15.8 10.3 35.1 11.7 53.7 11.7h296.2l26.7 0.4c22.1 0 47.3-1.2 67.1-16.1 12.7-9.7 22.5-25.6 26.2-42.5l0.1-0.5 0.6-5v-0.5c0.4-27.1 0.4-53.3 0.4-80.9v-225c6.8 2.1 13.8 3.2 21 3.2 4.7 0 9.5-0.5 14.3-1.4 27.3-5.1 44.7-25.1 55.1-37.2l83.9-81.3 2.3-2.9 0.9-1.3c6.1-8 20.1-26.8 16.1-53.9z m-147.1 94.2l-2.8 3.3-0.8 0.9c-5.8 6.4-13.6 15.2-18.9 16.2-0.9 0.2-1.8 0.3-2.6 0.3-4.2 0-7.8-2.9-16.8-11.4l-29-27.9-38.5 26.5v297.6c0 13.1-0.1 26.4-0.2 39.3-0.1 12.1-0.2 24.5-0.2 36.7-0.8 1.6-2 3.2-2.5 3.7-4.3 3-21.5 3.4-28.7 3.4l-305.6-0.4-17 0.4c-14.7 0-18.8-1.3-19.8-1.8l-0.1-0.1c-1.4-0.9-3.6-3.4-4.4-4.8-0.6-3.1-0.6-11.8-0.6-16.7V464l-42.6-25-5.8 6.6c-3.6 4.1-13.5 15.2-16.1 17.8l-0.2 0.2c-6.2 6.5-11.3 11.7-17 13.9h-0.4c-2.5 0-6.6-1.5-8.4-2.7l-0.4-0.3-0.4-0.2c-1.1-0.6-2.9-2.4-4.5-4.2-0.6-0.6-1.3-1.3-1.9-2l-41.8-40.4a336.7 336.7 0 0 1-16.9-16.9l-0.7-0.7-2.3-1.7c-3.1-2.5-5.9-5.4-8.8-8.4-1-1.1-2.1-2.2-3.2-3.2l-5.7-6.1-0.1-0.1c-2.3-2.3-4.3-4.3-6.8-6.3-5.4-4.6-7.3-6.8-8.5-9.4-0.3-1-0.7-2.1-1.2-3.2-0.2-0.4-0.4-0.9-0.5-1.3 1.4-5.5 5-9.2 16.2-19.2l0.2-0.2 11.6-11.6c1.3-1.3 2.7-2.6 4.2-4 1.7-1.6 3.4-3.2 5.3-5.1l116.1-113.5 25.3-24.9 0.3-0.3c7.9-8.4 9.4-9.1 13.3-9.3l12-0.9h50.5c0.3 0.1 0.6 0.2 0.8 0.3 0.9 0.3 1.6 0.5 2 0.8l0.7 0.3 0.7 0.2c0.5 0.2 1.1 0.4 1.7 0.5 2.5 2.4 5 5.3 8 9.3l1.3 1.7 0.2 0.2c14.1 17.8 36.5 28.3 43 31.1l0.2 0.1c13.5 5.5 27.8 9.3 48 12.8l0.4 0.1 14.5 1.3c2.9 0.5 6 0.7 9.4 0.7 6.4 0 13.8-0.8 22.8-2.6 32.1-6.2 51.8-12.7 76.6-32.2 6.7-5.2 11.1-10.8 14.8-16 1.3-1.4 2.4-2.8 3.4-4 0.1-0.2 0.3-0.4 0.5-0.6l6-3.4c1-0.2 2.3-0.4 3.9-0.8h15c2.3 0 4.7-0.1 7-0.2 2.4-0.1 4.9-0.2 7.4-0.2h0.8c4.8-0.4 9.7-0.4 14.8-0.4 12.1 0 17 0.8 18.5 1.1 3.4 2 8.2 6.8 12.4 11l131.3 127.8c5.3 5.7 11 11 17.5 17 4.4 4 10.4 9.5 15.1 14.6l0.2 0.2 6 6 0.2 0.1c3.8 3.5 6 5.9 7.5 8.1v0.1l0.6 4v0.2c0.1 0.4 0.3 1.4-3.3 6.3l-82.2 79.8z' fill='#707070' p-id='2437'></path></svg></div>"+
"<div style='margin-top:150px;opacity:0.85;'>"+
"<div onclick='user_information(1)' style='position:absolute;left:0;width:230px;height:230px;border-radius:150px;border-style:solid;'><br><br><br>&nbsp</div><div style='float:left;width:25%;'><img src='"+localStorage.getItem("userxx").match(/headimage:(\S*)3;/)[1]+"' alt='' style='float:left;width:230px;border-radius:150px;'/><br><br><br>&nbsp</div>"+
"<div onclick='user_information(2)'><b style='font-size:50px'><br>&nbsp&nbsp&nbsp&nbsp&nbsp"+localStorage.getItem("userxx").match(/username:(\S*)1;/)[1]+"</b>"+
"<b style='float:right;font-size:40px;color:grey'>︴</b></div></div>"+
"<br><br><br><table width='100%' bordercolor='#FFF05993'>"+
"<tr><th onclick='userdata(1)' id='zuopin'><p style='font-size:50px;color:rgba(18,214,188)'>作品</p><o style='color:grey;font-size:30px'>0</o></th>"+
"<th onclick='userdata(2)' id='dianzan'><p style='font-size:50px;color:rgba(229,93,116)'>点赞</p><o style='color:grey;font-size:30px'>"+likecs+"</o></th>"+
"<th onclick='userdata(3)' id='shoucang'><p style='font-size:50px;color:rgba(243,208,155)'>收藏</p><o style='color:grey;font-size:30px'>"+collectioncs+"</o></th></tr>"+
"</table></div>");
document.getElementById("page").style="display:none;";
document.getElementById("jump").style="display:block;opacity:0.85;";

let nr = "";
let b = 3;
let a = ["","","",""] 
while(b){
let c = "30";
if(b==1){
c = "0";
}
nr=nr+"<div style='background:pink;width:285px;height:285px;border-radius:15px;float:left;margin-right:"+c+"px'>"+a[b]+"</div>";
b--;
}
document.getElementById("activity").innerHTML=nr;
}
//登录Login
function login(){
document.getElementById("jump").innerHTML=("<div style='float:right;' onclick='fanhui()'>✘&nbsp</div>"+
"<table width='100%' height='50%'>"+
"<tr><th style='font-size:80px;'>登录<br><br></th></tr>"+
"<tr><td style='font-size:55px;color:grey;'><b>卡密</b>&nbsp<input type='text' id='user_password' style='border:0;font-size:50px' size='13' placeholder='请输入卡密进行登录'><br><hr><br></td></tr>"+
"<tr><th style='color:white;background:rgba(248,115,152);border-radius:50px;width:80%;height:120px;' onclick='login_result()'>Login</th></tr>"+
"<tr><th><br><span style='font-size:35px;color:grey;' onclick='forgetpassword()'>忘记卡密？</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style='font-size:35px;color:rgba(248,115,152);' onclick='register(0,0,0)'>没有账号？点我注册</span></th></tr>"+
"</table>");
document.getElementById("page").style="display:none;";
document.getElementById("jump").style="animation:login_open 1s ease 0s 1 alternate forwards;display:block;position:fixed;left:15%;right:15%;width:70%;height:800px;border-radius:20px;opacity:0.8;";
}
//注册Register
function register(a,b,c){
document.getElementById("jump").innerHTML=("<div style='float:right;' onclick='fanhui()'>✘&nbsp</div>"+
"<table width='100%' height='50%'>"+
"<tr><th style='font-size:80px;'>注册<br></th></tr>"+
"<tr><td style='font-size:50px;color:grey;'><b>用户名</b>&nbsp&nbsp&nbsp<input type='text' id='user_yhm' style='border:0;font-size:45px;' size='12' placeholder='请输入用户名'><br><hr></td></tr>"+
"<tr><td><span style='font-size:50px;color:pink;'><b>QQ邮箱</b>&nbsp<input type='text' id='user_qqmail' style='border:0;font-size:45px;margin-top:40px' size='8' placeholder='请输入QQ邮箱'></span><span style='background:rgba(248,115,152);border-radius:20px;color:white;font-size:30px;' onclick='yzm_get()' id='yzm_get'>&nbsp获取验证码&nbsp</span><br><hr></td></tr>"+
"<tr><td style='font-size:50px;color:skyblue;'><b>验证码</b>&nbsp&nbsp&nbsp<input type='text' id='user_yzm' style='border:0;font-size:45px;margin-top:40px;' size='12' placeholder='请输入验证码'><br><hr><br></td></tr>"+
"<tr><th style='color:white;background:rgba(248,115,152);border-radius:50px;width:80%;height:120px;' onclick='register_result(0)'>Register</th></tr>"+
"<tr><th><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style='font-size:35px;color:rgba(248,115,152);' onclick='login()'>我有账号？点我登录</span></th></tr>"+
"</table>");
if(a!==0&&b!==0&&c!==0){
document.getElementById("user_yhm").value=a;
document.getElementById("user_qqmail").value=b;
document.getElementById("user_yzm").value=c;
}
}
//忘记卡密
function forgetpassword(){
TS("忘记卡密？","等待更新~");
}
//登录配置
function login_result(){
let password = document.getElementById("user_password");
if(password.value==""){
  TS("请输入卡密内容！","ヾ(◍°∇°◍)ﾉﾞ");
  }
if(password.value.length=="5"){
  TS("五位数卡密","要在App内使用哦~");
}
if(password.value.length!=="5"||password.value!==""){
  if(confirm("错误的卡密会导致问题的产生哦")==true){
  localStorage.setItem("userxx", password.value);
  localStorage.setItem("loginxx", "true");
  user_login_website()
  TS("登录成功~","ฅ՞•ﻌ•՞ฅ")
  }else{
  TS("用户取消输入卡密","˃ ˄ ˂̥̥");
  }
}
}
//退出登录
function quit_login(){
TS("退出成功~","꒦ິ^꒦ິ");
document.getElementById("cbl_login").innerHTML="&nbsp&nbsp&nbsp登<br>&nbsp&nbsp&nbsp录&nbsp&nbsp&nbsp";
localStorage.setItem("loginxx", "0");
localStorage.setItem("userxx", "username:空1;qqemail:空2;headimage:http://suol.cc/fyvqA13;like:空,4;collection:空.5;");
window.close();
login();
}
//判断是否登录
function judge_login(){
if(localStorage.getItem("loginxx")=="true"){
TS("登录成功","˗ˋˏ♡ˎˊ˗");user_login_website();
document.getElementById("cbl_login").innerHTML="&nbsp&nbsp&nbsp我<br>&nbsp&nbsp&nbsp的&nbsp&nbsp&nbsp";
}else{
localStorage.setItem("loginxx", "0");
login();
}
}
function yzm_get(){
//验证码
let sjs = Math.round(Math.random()*(999999));
let yhm = document.getElementById("user_yhm");
let qqyx = document.getElementById("user_qqmail");
let yzm = document.getElementById("user_yzm");
let qqyx_jc = qqyx.value.substring(qqyx.value.length-7,qqyx.value.length);

if(qqyx.value.length>15&&qqyx.value.length<20&&qqyx_jc=="@qq.com"){
let sendnr = "%3c!DOCTYPE+html%3e%0d%0a%3chtml%3e%0d%0a%3chead%3e%0d%0a++%3cmeta+charset%3d%22utf-8%22+name%3d%22viewport%22+content%3d%22width%3ddevice-width%2c+initial-scale%3d1%2c+maximum-scale%3d1%2c+user-scalable%3dno%22%3e%0d%0a++%3ctitle%3eZYDS%e5%8a%a8%e6%bc%ab%3c%2ftitle%3e%0d%0a%3c%2fhead%3e%0d%0a%3cbody%3e%0d%0a%3ctable+cellspacing%3d%220%22+cellpadding%3d%220%22+bordercolor%3d%22pink%22+align%3d%22center%22+style%3d%22border-radius%3a5px%3bwidth%3a95%25%3bheight%3a80%25%3bbackground%3awhite%3bbox-shadow%3a+20px+20px+blur+spread+color+inset%3b%22%3e%0d%0a%3ctr%3e%3ctd%3e%3cimg+src%3d%22https://xiaobapi.top/api/xb/api/ecyimage.php%22+width%3d%22100%25%22+style%3d%22border-top-left-radius%3a4px%3bborder-top-right-radius%3a4px%3b%22%2f%3e%0d%0a%3cdiv+style%3d%22padding%3a18px%3bmargin%3a-8px%3bfont-size%3a8px%3bweight%3a400px%22%3e%3cb+style%3d%22color%3askyblue%22%3e%e2%9e%a4%3c%2fb%3e%26nbsp%e9%aa%8c%e8%af%81%e7%a0%81%e6%9d%a5%e4%ba%86%e5%93%9f%7e%0d%0a%3chr+style%3d%22opacity%3a0.1%3b%22%3e%0d%0a%3cbr%3e%e2%84%8d%f0%9d%95%92%f0%9d%95%a7%f0%9d%95%96+%f0%9d%95%92+%f0%9d%95%9f%f0%9d%95%9a%f0%9d%95%94%f0%9d%95%96+%f0%9d%95%95%f0%9d%95%92%f0%9d%95%aa%3cbr%3e%0d%0a%3cbr%3e%26nbsp%e7%bb%99%e6%82%a8%e7%9a%84%e9%aa%8c%e8%af%81%e7%a0%81%ef%bc%9a%3cbr%3e%0d%0a%3c%2fdiv%3e%0d%0a%3c%2ftd%3e%3c%2ftr%3e%0d%0a%3ctr%3e%3cth%3e%3cdiv+style%3d%22margin%3a0+auto%3bbackground%3apink%3bweight%3a400%3bfont-size%3a10px%3bheight%3a20px%3bwidth%3a90%25%22%3e"+
sjs+"%3c%2fdiv%3e%3c%2fth%3e%3c%2ftr%3e%0d%0a%3ctr%3e%3ctd+style%3d%22color%3agrey%3bweight%3a400%3bfont-size%3a10px%22%3e%3cbr%3e%3cbr%3e%0d%0a%3ci%3e%e7%a5%9d%e8%b4%ba%e6%82%a8%e8%8e%b7%e5%be%97%e4%ba%86%e4%b8%80%e6%9e%9a%e9%aa%8c%e8%af%81%e7%a0%81%e5%93%a6%7e%3c%2fi%3e%3cbr%3e%3cbr%3e%0d%0a%3cb%3eZYDS%e5%8a%a8%e6%bc%ab+-+%e5%8a%a8%e6%bc%ab%e7%88%b1%e5%a5%bd%e8%80%85%e7%9a%84%e4%b8%96%e7%95%8c%3cbr%3e%0d%0a%e7%bd%91%e7%ab%99%ef%bc%9ahttp%3a%2f%2fsuol.cc%2fOKSuz%3cbr%3e%0d%0a%e8%81%94%e7%b3%bb%e6%88%91%e4%bb%ac%ef%bc%9a2506317236%40qq.com%3cbr%3e%0d%0a%3c%2fb%3e%3c%2ftd%3e%3c%2ftr%3e%0d%0a%3c%2ftable%3e%0d%0a%3c%2fbody%3e%0d%0a%3c%2fhtml%3e";
localStorage.setItem("loginxx", sjs+qqyx.value); 
GET("https://api.wer.plus/api/qqmail?name=ZYDS动漫&me=2506317236@qq.com&to="+qqyx.value+"&title=ZYDS动漫&text="+sendnr+"&key=rgzyfemepjxgdjjd")
TS("验证码已发送","请检查QQ邮箱~");

document.getElementById("yzm_get").onclick="冷却中";
let time = 60;
let timerId = setInterval(() =>{
  document.getElementById("yzm_get").innerText=time+"秒重新获取";
  time=time-1;},1000);
setTimeout(() =>{
  clearInterval(timerId);
  register(yhm.value,qqyx.value,yzm.value);}, 60000);
}else{
TS("请输入正确的","QQ邮箱~");
}
}
//注册配置
function register_result(){
let yhm = document.getElementById("user_yhm");
let qqyx = document.getElementById("user_qqmail");
let yzm = document.getElementById("user_yzm");
if(yhm.value==""||qqyx.value==""){
  TS("请输入正确的信息~","‎દ ᵕ̈ ૩")
  }
if(qqyx.value!==""||yzm.value!==""){
if(yzm.value+qqyx.value!==localStorage.getItem("loginxx")){
  TS("QQ邮箱或者","验证码错误！");
}
}
if(yzm.value+qqyx.value==localStorage.getItem("loginxx")){
  TS("注册成功~",yhm.value+";"+qqyx.value);
  localStorage.setItem("loginxx", "true");
  judge_login();
let username = localStorage.getItem("userxx");
username1 = username.match(/username:(\S*)1;/)[1];
let username2 = username.replace("username:"+username1, "username:"+yhm.value);
localStorage.setItem("userxx", username2);
let qqemail = localStorage.getItem("userxx");
qqemail1 = qqemail.match(/qqemail:(\S*)2;/)[1];
let qqemail2 = qqemail.replace("qqemail:"+qqemail1, "qqemail:"+qqyx.value);
localStorage.setItem("userxx", qqemail2);
  }
}

/*****用户信息*****/
//图片转base64编码
function readAsDataURL()
{
var file=document.getElementById("imagefile").files[0];
if(!/image\/\w+/.test(file.type))           //判断获取的是否为图片文件
{
   TS("请确保文件为","图像文件");
   return false;
}
var reader=new FileReader();
reader.readAsDataURL(file);
reader.onload=function(e)
{
document.getElementById("picture").src=this.result;
let headimage = localStorage.getItem("userxx");
headimage1 = headimage.match(/headimage:(\S*)3;/)[1];
let headimage2 = headimage.replace("headimage:"+headimage1, "headimage:"+this.result);
localStorage.setItem("userxx", headimage2);
TS("提交成功~","(๑‾ ꇴ ‾๑)")
}
}
function changeAvatar(){document.getElementById("imagefile").click();
}
//配置
function user_information(a){
//头像1
if(a==1){
document.getElementById("jump").innerHTML=("<div style='margin:30px;position:fixed;top:0px;left:0px;right:0px;'>"+
"<div style='float:left' onclick='user_login_website();'><b>返回</b></div><br><br>"+
"<br><img src='"+localStorage.getItem("userxx").match(/headimage:(\S*)3;/)[1]+"' style='margin-top:10%;width:100%'>"+
"</div></div>");
document.getElementById("page").style="display:none;";
document.getElementById("jump").style="display:block;";
}
//头像2
if(a==2){
document.getElementById("jump").innerHTML=("<div style='margin:30px;position:fixed;top:0px;left:0px;right:0px;'>"+
"<div style='float:left' onclick='sy_website(1)'><b>返回</b></div><br><br>"+
"<div style='margin-left:20%;'><img src='"+localStorage.getItem("userxx").match(/headimage:(\S*)3;/)[1]+"' id='picture' style='float:left;width:70%;border-radius:250px;'/>"+
"<br><br><br><br><br><br><br><br><br><br><br><br><br><input type='file' id='imagefile' style='display:none'/>"+
"<span onclick='changeAvatar()' style='background:skyblue;border-radius:20px;width:250px;font-size:60px;'><b>&nbsp更换头像&nbsp</b></span>"+
"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span onclick='readAsDataURL()' style='background:pink;border-radius:20px;width:100px;font-size:50px;'><b>&nbsp提交&nbsp</b></span>"+
"</div></div>");
document.getElementById("page").style="display:none;";
document.getElementById("jump").style="display:block;opacity:0.9;";
}
//名字3
if(a==3){
document.getElementById("jump").innerHTML=("<div style='margin:30px;position:fixed;top:0px;left:0px;right:0px;'>"+
"<div style='float:left' onclick='sy_website(1)'><b>返回</b></div><br><br>"+
"<b style='font-size:45px'>你的名字：</b>&nbsp<u style='font-size:70px'>"+localStorage.getItem("userxx").match(/username:(\S*)1;/)[1]+"</u>"+
"<br><b style='font-size:45px'>名字修改为：</b>&nbsp<input type='text' id='xg_username' style='font-size:50px' size='12' value='"+localStorage.getItem("userxx").match(/username:(\S*)1;/)[1]+"'>"+
"<br><br><span onclick='username_xg()' style='background:pink;border-radius:20px;width:100px;font-size:50px;'><b>&nbsp提交&nbsp</b></span>"+
"</div>")
}
//QQ邮箱4
if(a==4){
document.getElementById("jump").innerHTML=("<div style='margin:30px;position:fixed;top:0px;left:0px;right:0px;'>"+
"<div style='float:left' onclick='sy_website(1)'><b>返回</b></div><br><br>"+
"<b style='font-size:45px'>原邮箱：<u>&nbsp"+localStorage.getItem("userxx").match(/qqemail:(\S*)2;/)[1]+"</u></b>"+
"<br><br><b style='font-size:45px'>邮箱修改为：</b>&nbsp<input id='xg_qqemail' placeholder='xxx@qq.com' style='height:50px;font-size:40px' type='text'>"+
"<br><br><b style='font-size:45px'>验证码：</b>&nbsp<input id='xg_yzm' style='height:50px;font-size:40px' type='text'>"+
"<br><br><span id='xg_hqyzm' onclick='qqemail_xg(1)' style='background:skyblue;border-radius:20px;width:80px;font-size:40px;'><b>&nbsp获取验证码&nbsp</b></span>"+
"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span onclick='qqemail_xg(2)' style='background:pink;border-radius:20px;width:100px;font-size:50px;'><b>&nbsp提交&nbsp</b></span>"+
"</div>")
}
//获取卡密5
if(a==5){
userxx = localStorage.getItem("userxx");
headimage = userxx.match(/headimage:(\S*)3;/)[1];
sendnr = userxx.replace("headimage:"+headimage, "headimage:空");
if(prompt("请发送“获取卡密”")=="获取卡密"){
GET("https://api.wer.plus/api/qqmail?name=ZYDS动漫&me=2506317236@qq.com&to="+userxx.match(/qqemail:(\S*)2;/)[1]+"&title=ZYDS动漫&text=请复制卡密内容："+sendnr+"&key=rgzyfemepjxgdjjd");
TS("卡密已生成~","请查看QQ邮箱~");
}
}
//退出登录6
if(a==6){
let jc = prompt("请发送“我要退出登录”，防止误退")
if(jc=="我要退出登录"){
quit_login();
}
}
}

//名字修改
function username_xg(){
let xg_username = document.getElementById("xg_username").value;
let i = 1;
while(i){
let fh = ["",">","<"," "]
if(fh[i]==undefined){break}
while(true){
if(xg_username.indexOf(fh[i])!=-1){
xg_username = xg_username.replace(fh[i],"");
}else{break}
}
i++
}
if(xg_username==""){
TS("名字不能为空~"," ");
}else{
let username = localStorage.getItem("userxx");
username1 = username.match(/username:(\S*)1;/)[1];
username2 = username.replace("username:"+username1, "username:"+xg_username);
localStorage.setItem("userxx", username2);
TS("名字修改成功~"," ");
}
user_information(3);
}
//邮箱修改
function qqemail_xg(a){
if(a==1){
let sjs = Math.round(Math.random()*(999999));
let xg_qqemail = document.getElementById("xg_qqemail").value;
let qqyx_jc = xg_qqemail.substring(xg_qqemail.length-7,xg_qqemail.length);
if(xg_qqemail.length>15&&xg_qqemail.length<20&&qqyx_jc=="@qq.com"){
let sendnr = "%3c!DOCTYPE+html%3e%0d%0a%3chtml%3e%0d%0a%3chead%3e%0d%0a++%3cmeta+charset%3d%22utf-8%22+name%3d%22viewport%22+content%3d%22width%3ddevice-width%2c+initial-scale%3d1%2c+maximum-scale%3d1%2c+user-scalable%3dno%22%3e%0d%0a++%3ctitle%3eZYDS%e5%8a%a8%e6%bc%ab%3c%2ftitle%3e%0d%0a%3c%2fhead%3e%0d%0a%3cbody%3e%0d%0a%3ctable+cellspacing%3d%220%22+cellpadding%3d%220%22+bordercolor%3d%22pink%22+align%3d%22center%22+style%3d%22border-radius%3a5px%3bwidth%3a95%25%3bheight%3a80%25%3bbackground%3awhite%3bbox-shadow%3a+20px+20px+blur+spread+color+inset%3b%22%3e%0d%0a%3ctr%3e%3ctd%3e%3cimg+src%3d%22https://xiaobapi.top/api/xb/api/ecyimage.php%22+width%3d%22100%25%22+style%3d%22border-top-left-radius%3a4px%3bborder-top-right-radius%3a4px%3b%22%2f%3e%0d%0a%3cdiv+style%3d%22padding%3a18px%3bmargin%3a-8px%3bfont-size%3a8px%3bweight%3a400px%22%3e%3cb+style%3d%22color%3askyblue%22%3e%e2%9e%a4%3c%2fb%3e%26nbsp%e9%aa%8c%e8%af%81%e7%a0%81%e6%9d%a5%e4%ba%86%e5%93%9f%7e%0d%0a%3chr+style%3d%22opacity%3a0.1%3b%22%3e%0d%0a%3cbr%3e%e2%84%8d%f0%9d%95%92%f0%9d%95%a7%f0%9d%95%96+%f0%9d%95%92+%f0%9d%95%9f%f0%9d%95%9a%f0%9d%95%94%f0%9d%95%96+%f0%9d%95%95%f0%9d%95%92%f0%9d%95%aa%3cbr%3e%0d%0a%3cbr%3e%26nbsp%e7%bb%99%e6%82%a8%e7%9a%84%e9%aa%8c%e8%af%81%e7%a0%81%ef%bc%9a%3cbr%3e%0d%0a%3c%2fdiv%3e%0d%0a%3c%2ftd%3e%3c%2ftr%3e%0d%0a%3ctr%3e%3cth%3e%3cdiv+style%3d%22margin%3a0+auto%3bbackground%3apink%3bweight%3a400%3bfont-size%3a10px%3bheight%3a20px%3bwidth%3a90%25%22%3e"+
sjs+"%3c%2fdiv%3e%3c%2fth%3e%3c%2ftr%3e%0d%0a%3ctr%3e%3ctd+style%3d%22color%3agrey%3bweight%3a400%3bfont-size%3a10px%22%3e%3cbr%3e%3cbr%3e%0d%0a%3ci%3e%e7%a5%9d%e8%b4%ba%e6%82%a8%e8%8e%b7%e5%be%97%e4%ba%86%e4%b8%80%e6%9e%9a%e9%aa%8c%e8%af%81%e7%a0%81%e5%93%a6%7e%3c%2fi%3e%3cbr%3e%3cbr%3e%0d%0a%3cb%3eZYDS%e5%8a%a8%e6%bc%ab+-+%e5%8a%a8%e6%bc%ab%e7%88%b1%e5%a5%bd%e8%80%85%e7%9a%84%e4%b8%96%e7%95%8c%3cbr%3e%0d%0a%e7%bd%91%e7%ab%99%ef%bc%9ahttp%3a%2f%2fsuol.cc%2fOKSuz%3cbr%3e%0d%0a%e8%81%94%e7%b3%bb%e6%88%91%e4%bb%ac%ef%bc%9a2506317236%40qq.com%3cbr%3e%0d%0a%3c%2fb%3e%3c%2ftd%3e%3c%2ftr%3e%0d%0a%3c%2ftable%3e%0d%0a%3c%2fbody%3e%0d%0a%3c%2fhtml%3e";
localStorage.setItem("loginxx", sjs+xg_qqemail); 
GET("https://api.wer.plus/api/qqmail?name=ZYDS动漫&me=2506317236@qq.com&to="+xg_qqemail+"&title=ZYDS动漫&text="+sendnr+"&key=rgzyfemepjxgdjjd")
TS("验证码已发送","请检查QQ邮箱~");
document.getElementById("xg_hqyzm").onclick="冷却中";
let time = 60;
let timerId = setInterval(() =>{
  document.getElementById("xg_hqyzm").innerText=time+"秒重新获取";
  time=time-1;},1000);
setTimeout(() =>{
  clearInterval(timerId);
  document.getElementById("xg_hqyzm").onclick="qqemail_xg(1)";
  user_information(4);}, 60000);  
}
}
if(a==2){
let xg_yzm = document.getElementById("xg_yzm").value;
let sjs = localStorage.getItem("loginxx").substring(0,6);
let xg_qqemail = localStorage.getItem("loginxx").slice(6);
if(xg_yzm==sjs){
let qqemail = localStorage.getItem("userxx");
qqemail1 = qqemail.match(/qqemail:(\S*)2;/)[1];
qqemail2 = qqemail.replace("qqemail:"+qqemail1, "qqemail:"+xg_qqemail);
localStorage.setItem("userxx", qqemail2);
TS("修改成功~"," ");
localStorage.setItem("loginxx", "true"); 
}else{
TS("验证码错误~"," ")
}
}
}
function sy_website(ym){
//设置
if(ym==1){
document.getElementById("jump").innerHTML=("<div style='margin:30px' onclick='user_login_website()'><b>返回</b></div><table style='margin:30px;width:95%;'><tr><th style='font-size:50px'>设&nbsp置<br><hr><br></th></tr>"+
"<tr><td><b onclick='user_information(2)'>更换头像 &nbsp︴<br><img width='50%' src='"+localStorage.getItem("userxx").match(/headimage:(\S*)3;/)[1]+"'></b></td></tr>"+
"<tr><td><hr><br></td></tr>"+
"<tr><td><b onclick='user_information(3)'>修改名字 &nbsp︴<br><b>"+localStorage.getItem("userxx").match(/username:(\S*)1;/)[1]+"</b></b></td></tr>"+
"<tr><td><hr><br></td></tr>"+
"<tr><td><b onclick='user_information(4)'>修改QQ邮箱 &nbsp︴<br><b>"+localStorage.getItem("userxx").match(/qqemail:(\S*)2;/)[1]+"</b></b></td></tr>"+
"<tr><td><hr><br></td></tr>"+
"<tr><td><b onclick='user_information(5)'>获取卡密 &nbsp︴<br>卡密是用于登录，点我生成卡密<br>注：请勿频繁生成卡密</b></td></tr>"+
"<tr><td><hr><br></td></tr>"+
"<tr><td><b onclick='user_information(6)'>退出登录 &nbsp︴<br>再次登录需要卡密，点我退出登录<br>注：确保有卡密再退出哦</b></td></tr>"+
"</table>");
}
//个性
if(ym==2){
document.getElementById("jump").innerHTML=("<div style='margin:30px' onclick='user_login_website()'><b>返回</b></div><table style=margin:30px;width:95%;'><tr><th style='font-size:50px'>个&nbsp性<br><hr><br></th></tr>"+
"<tr><th>设置背景图片</th></tr></table>"+
"<div><b>随机竖屏图（默认）</b><br><img src='https://img.paulzzh.com/touhou/random?size=wap' width='70%'/><button onclick='bjt_xg(1)' style='font-size:40px'>选择</button></div>"+
"<div><b>随机横屏图</b><br><img src='https://api.yimian.xyz/img?type=moe&size=1920x1080' width='70%'/><button onclick='bjt_xg(2)' style='font-size:40px'>选择</button></div>"+
"<div><b>随机高清壁纸</b><br><img src='https://api.ixiaowai.cn/gqapi/gqapi.php' width='70%'/><button onclick='bjt_xg(3)' style='font-size:40px'>选择</button></div>"+
"<div><b>自定义图</b><br>请输入图片直链接：<input id='bjt_nr' type='text' size='20' style='font-size:35px;border-color:skyblue'/><br><img src='' id='bjt_xs' width='70%'/><button onclick='bjt_xg(4)' style='font-size:40px'>提交/选择</button></div>"
);
}
document.getElementById("jump").style="display:block;";
}
function bjt_xg(a){
if(a==1){
localStorage.setItem("bjt", "http://fuyhi.top/api/bizhi/api.php?format=2&type=image");
}
if(a==2){
localStorage.setItem("bjt", "https://api.yimian.xyz/img?type=moe&size=1920x1080");
}
if(a==3){
localStorage.setItem("bjt", "https://api.ixiaowai.cn/gqapi/gqapi.php");
}
if(a==4){
let nr = document.getElementById("bjt_nr").value;
document.getElementById("bjt_xs").src=nr;
localStorage.setItem("bjt", nr);
}
TS("设置成功","刷新后可见~")
}

/*****APP下载安装包*****/
//下载App
function xzApp(){
TS("下载App？","敬请期待~");
}


/*****搜索模式*****/
//搜索
function sousuo(nr){
let resultnumber = 0;
    localStorage.setItem("searchrecord", localStorage.getItem("searchrecord")+"&nbsp&nbsp&nbsp"+nr);
search("<br><br><b>暂无</b>")
localStorage.setItem("searchresult", ""); 
let g = n;
while(g){
  if(nr==""){
  search("");break;
  }
  let data = video[g].xtext;
  let search_length = nr.length;
  let a = 0;
  while(a<data.length-search_length+1){
  b=a+search_length;
  var key = data.substring(a,b);
  if(key==nr){
  resultnumber = resultnumber+1;
  localStorage.setItem("searchresult", localStorage.getItem("searchresult")+"<br><br><p><b>"+video[g].xtext+"</b></p><video src='"+video[g].vsrc+"' width='100%' controls='true'></video>");
  search(localStorage.getItem("searchresult"));
  break;
  }
  a++
  }
g--
}
TS("搜索成功~","共"+resultnumber+"个结果")
}
function search(search_result){
    if(search_result==""){
    search_result = "<br><br><br><b>热门搜索</b><p onclick='VideoDetails(4,1)'>洁白的婚纱</p><p onclick='VideoDetails(8,1)'>Umbrella</p><p onclick='VideoDetails(2,1)'>Falling Again</p>"+
   "<br><br><div style='background:rgba(188,192,191,0.3);font-size:20px;'>&nbsp</div>"+
   "<br><b>历史搜索</b><p onclick='searchjl()' style='color:grey;float:right;font-size:35px;'>清空记录</p>"+
   "<br>"+localStorage.getItem("searchrecord");
    }
document.getElementById("jump").innerHTML=("<div style='position:absolute;top:30px;left:3%;'>"+
   "<table border='0' style='float:left;background:rgba(188,192,191,0.2);width:80%;height:5%;'><tr>"+
   "<td>&nbsp&nbsp&nbsp<svg t='1668834666806' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2988' width='55' height='55'><path d='M862.609 816.955L726.44 680.785l-0.059-0.056a358.907 358.907 0 0 0 56.43-91.927c18.824-44.507 28.369-91.767 28.369-140.467 0-48.701-9.545-95.96-28.369-140.467-18.176-42.973-44.19-81.56-77.319-114.689-33.13-33.129-71.717-59.144-114.69-77.32-44.507-18.825-91.767-28.37-140.467-28.37-48.701 0-95.96 9.545-140.467 28.37-42.973 18.176-81.56 44.19-114.689 77.32-33.13 33.129-59.144 71.717-77.32 114.689-18.825 44.507-28.37 91.767-28.37 140.467 0 48.7 9.545 95.96 28.37 140.467 18.176 42.974 44.19 81.561 77.32 114.69 33.129 33.129 71.717 59.144 114.689 77.319 44.507 18.824 91.767 28.369 140.467 28.369 48.7 0 95.96-9.545 140.467-28.369 32.78-13.864 62.997-32.303 90.197-54.968 0.063 0.064 0.122 0.132 0.186 0.195l136.169 136.17c6.25 6.25 14.438 9.373 22.628 9.373 8.188 0 16.38-3.125 22.627-9.372 12.496-12.496 12.496-32.758 0-45.254z m-412.274-69.466c-79.907 0-155.031-31.118-211.534-87.62-56.503-56.503-87.62-131.627-87.62-211.534s31.117-155.031 87.62-211.534c56.502-56.503 131.626-87.62 211.534-87.62s155.031 31.117 211.534 87.62c56.502 56.502 87.62 131.626 87.62 211.534s-31.118 155.031-87.62 211.534c-56.503 56.502-131.627 87.62-211.534 87.62z' fill='#bfbfbf' p-id='2989'></path></svg>"+
   "&nbsp<input type='text' id='search' size='35' placeholder='搜搜更健康~'/></td>"+
   "</tr></table>"+
   "<b style='float:left;' onclick='fanhui(n)'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp取消</b>"+
   search_result+"</div>");
   
document.getElementById("jump").style="display:block;";
document.getElementById("jump").style="animation:search_open .8s ease 0s 1 alternate forwards;";

let search1 = document.getElementById("search");
search1.addEventListener("keyup", function(event) {
	event.preventDefault()
	if (event.keyCode === 13) {
        sousuo(search1.value)
	}
})
}
//搜索记录
function searchjl(){
localStorage.removeItem("searchrecord");
localStorage.setItem("searchrecord", ""); 
search("");
}


/*****默认配置*****/
//横屏&竖屏美化
window.addEventListener("orientationchange", function() {
   if(window.orientation === 90){
       document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/pe.css";
       Nowstate = "https://2506317236.github.io/ZYDS/pe.css";
    }
   if(window.orientation === 0){
       document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/pe.css";
       Nowstate = "https://2506317236.github.io/ZYDS/pe.css";
    }
}, true);

//萌新入门
if(localStorage.getItem("website")==null||localStorage.getItem("loginxx")==null||localStorage.getItem("userxx")==null){
localStorage.setItem("website", "shouye");TS("欢迎来到动漫世界~","✧(◍˃̶ᗜ˂̶◍)✩");
localStorage.setItem("loginxx", "0");
localStorage.setItem("userxx", "username:空1;qqemail:空2;headimage:http://suol.cc/fyvqA13;like:空,4;collection:空.5;");
localStorage.setItem("bjt", "http://fuyhi.top/api/bizhi/api.php?format=2&type=image");
}
btl(localStorage.getItem("website"));
document.getElementById("MeiHua").href="https://2506317236.github.io/ZYDS/pe.css";
document.getElementById("bjt").src=localStorage.getItem("bjt");

function fanhui_pd(pd){
if(pd==1){
fanhui();
}
if(pd==2){
userdata(2);
}
if(pd==3){
userdata(3);
}
}
