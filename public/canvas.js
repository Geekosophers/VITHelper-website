// https://eloquentjavascript.net/17_canvas.html

var c = document.getElementById("myCanvas");
// console.log('hello');
var ctx = c.getContext("2d");

// c.style.position = "absolute";
// c.style.left = window.innerWidth/2-170;

// var leavespace = window.innerHeight/2;
// var offset = window.pageYOffset;
// var x = ;
// var y = ;


function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 30);
}

// var image1 = document.getElementById("scream1");
// image1.style.position = "absolute";
// image1.style.left = (c.width/2) - Math.sin(((window.pageYOffset/2))*(Math.PI/180)) * 120 +70;
// image1.style.top = window.innerHeight/2 + 50;
// var doorOpen1 = true;

// var image2 = document.getElementById("scream2");
// image2.style.position = "absolute";
// image2.style.left = (c.width/2) - Math.sin(((window.pageYOffset/2))*(Math.PI/180)) * 120 + 740;
// image2.style.top = window.innerHeight/2 +  360;
// var doorOpen2 = true;

// var image3 = document.getElementById("scream3");
// image3.style.position = "absolute";
// image3.style.left = (c.width/2) - Math.sin(((window.pageYOffset/2))*(Math.PI/180)) * 120 - 30;
// image3.style.top = window.innerHeight/2 + 720;
// var doorOpen3 = true;

// setInterval(function(){
//     if(window.pageYOffset<360 && doorOpen1){
//         unfade(image1);
//         fade(image2);
//         doorOpen1 = false;
//         doorOpen2 = true;
//         doorOpen3 = true;
//     }
//     else if(window.pageYOffset>360 && window.pageYOffset<720 && doorOpen2){
//         unfade(image2);
//         fade(image1);
//         fade(image3);
//         doorOpen1 = true;
//         doorOpen2 = false;
//         doorOpen3 = true;
//     }
//     else if(window.pageYOffset>720 && window.pageYOffset<1080 && doorOpen3){
//         unfade(image3);
//         fade(image2);
//         doorOpen1 = true;
//         doorOpen2 = true;
//         doorOpen3 = false;
//     }
//     else if(window.pageYOffset>1080){
//         fade(image3);
//         doorOpen1 = true;
//         doorOpen2 = true;
//         doorOpen3 = true;   
//     }

//     // if(window.pageYOffset<window.innerHeight/2 +90 && doorOpen1){
//     //     unfade(image1);
//     //     doorOpen1=false;
//     // }
//     // else if(window.pageYOffset<window.innerHeight/2 +90 && window.pageYOffset>0 && doorOpen2==false){
//     //     fade(image2);
//     //     doorOpen2 = true;
//     // }
//     // else if(window.pageYOffset>window.innerHeight/2 +90 && doorOpen1==false){
//     //     fade(image1);
//     //     doorOpen1 = true;
//     // }
//     // else if(window.pageYOffset>window.innerHeight/2 +90 && doorOpen2){
//     //     unfade(image2);
//     //     doorOpen2 = false;
//     // }
// },200);


// function scrollingRight(){
//     window.scroll({
//         top: 0,
//         left: window.pageXOffset+720,
//         behavior: 'smooth'
//       });
// }

// function scrollingLeft(){
//     window.scroll({
//         top: 0,
//         left: window.pageXOffset-720,
//         behavior: 'smooth'
//       });
// }

function drawSpokes(x,y,db) {
    var radius = 40;
    var spokeLength = radius + 5;
    var xCoord = spokeLength*Math.cos(Math.PI/4);
    var yCoord = spokeLength*Math.sin(Math.PI/4);

    ctx.translate(x, y);
    ctx.rotate(db *Math.PI / 2);
    ctx.moveTo(0,0);
    ctx.lineTo(spokeLength,0);
    ctx.moveTo(0,0);
    ctx.lineTo(-spokeLength,0);
    ctx.moveTo(0,0);
    ctx.lineTo(0,spokeLength);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-spokeLength);

    ctx.moveTo(0,0);
    ctx.lineTo(xCoord,yCoord);
    ctx.moveTo(0,0);
    ctx.lineTo(-xCoord,yCoord);
    ctx.moveTo(0,0);
    ctx.lineTo(xCoord,-yCoord);
    ctx.moveTo(0,0);
    ctx.lineTo(-xCoord,-yCoord);
    // ctx.strokeStyle = 'black';
    // ctx.stroke();
    ctx.rotate(-db *Math.PI / 2);
    ctx.translate(-x, -y);
}


function drawCircle(width, offset, leavespace,db){
    // var imgBall = document.getElementById("scream1");
    y = (width/2) - Math.sin(((offset/2))*(Math.PI/180)) * 120;
    x = leavespace + offset; 
    
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#364051';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    drawSpokes(y,x,db);
    
    // ctx.drawImage(imgBall, x, y,150,150);
    
}

function drawSineCurve(width, leavespace, offset) {
    var x=leavespace;
    var y=width/2;
    ctx.strokeStyle = "#364051";
    for(i=0; i<=2160; i+=1){
        ctx.moveTo(x,y);
        x = leavespace + i;
        y = (width/2) - Math.sin(i/2*(Math.PI/180)) * 120;
        ctx.lineTo(x,y);
    }
    ctx.stroke();
}

function fillCanvas(width, height){
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(0, 0, width, height);
}

function showText(text,x,y){
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(text, x, y);
}

// function intervalInLoop(){
//     var sizes = 12;
//     var interval = setInterval(function(){
//         fillCanvas(c.width, c.height);
//         drawSineCurve(c.width,leavespace);      
//         let offset = window.pageYOffset;
//         // drawCircle(c.width, offset, leavespace);
//         ctx.font = sizes +"px Helvetica";
//         ctx.fillStyle = "purple";
//         if(sizes==40 || offset>360){
//             clearInterval(interval);
//         }
//         ctx.fillText("Hello",c.width/2-120,180+leavespace);
//         sizes += 1;
//     }, 5);
// }

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
        var leavespace = window.innerWidth/2;
        c.width = 2160+2*leavespace;
        c.height = window.innerHeight;// 340;
        var degreeBall = 0;

        fillCanvas(c.width, c.height);
        drawSineCurve(c.height,leavespace,0);

        setInterval(function() {
            // console.log('working');
            fillCanvas(c.width, c.height);
            // window.pageYOffset = window.pageYOffset*0.7;
            let offset = window.pageXOffset;
            // window.scrollTo(offset,offset);
            // window.scroll({
            //     top: offset,
            //     left: offset,
            //     behavior: 'smooth'
            //   });
            console.log(offset);
            degreeBall+=0.1;
            drawCircle(c.height, offset, leavespace,degreeBall);
            drawSineCurve(c.width,leavespace,offset);
            
            textList = ["Question Papers","Placements","Materials","Digital Assignments","Lab Solutions","Blogs"]
            
            // if(offset<360){
            //     // intervalInLoop();
            //     showText(textList[0],c.width/2-120,180+leavespace);
            //     // var img1 = document.getElementById("scream1");
            //     // ctx.drawImage(img1, c.width/2-120-350/2, 180+leavespace-267.8/2,350,267.8);
            // }
            // else if(offset<720){
            //     showText(textList[1],c.width/2+120,540+leavespace);
            //     // var img2 = document.getElementById("scream2");
            //     // ctx.drawImage(img2, c.width/2+120-300, 540+leavespace-300,600,600);
            // }   
            // else if(offset<1080){
            //     showText(textList[2],c.width/2-120,900+leavespace);
            //     // var img3 = document.getElementById("scream3");
            //     // ctx.drawImage(img3, c.width/2-120-130, 900+leavespace-130);
            // }
            // else if(offset<1540)
            //     showText(textList[3],c.width/2+120,1260+leavespace);
            // else if(offset<1900)
            //     showText(textList[4],c.width/2-120,1620+leavespace);
            // else
            //     showText(textList[5],c.width/2+120,1980+leavespace);
        }, 200);
}
resizeCanvas();

// var size = 12;

// function doSomething() {
//     if(window.pageYOffset==0){
//         fillCanvas(c.width, c.height);
//         drawSineCurve(c.width,leavespace);
//         drawCircle(c.width, 0, leavespace);
//     }
// }

// setInterval('doSomething()', 50);