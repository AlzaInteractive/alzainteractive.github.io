var omega = '\u03A9';
var alpha = '\u03B1';
var beta = '\u03B2';
function drawLineDash (x1, y1, x2, y2, canvasID, color){
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false
    context.strokeStyle = color;
    context.lineWidth = 3;
    context.setLineDash([12, 4]);/*dashes are 5px and spaces are 3px*/
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.beginPath();
}
function drawPolygonStroke (points,canvasID,color) {
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.setLineDash([1, 0]);
    context.beginPath();
    context.imageSmoothingEnabled = false
    context.moveTo(points[0],points[1]);
    for (i = 0; i < (points.length-1); i+=2){
        // console.log(points[i] + ','+ points[i+1])
        context.lineTo(points[i],points[i+1]);
    }
    context.lineWidth = 1;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();    
}
function drawPolygon (points,canvasID,color) {
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.beginPath();
    context.imageSmoothingEnabled = false
    context.moveTo(points[0],points[1]);
    for (i = 0; i < (points.length-1); i+=2){
        // console.log(points[i] + ','+ points[i+1])
        context.lineTo(points[i],points[i+1]);
    }
    context.closePath();        
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = color;
    context.stroke();
}
function drawCircle (radius,canvasID,color) {
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);      
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = color;
    context.stroke();
}
function drawArc(startAngle,endAngle,radius,canvasID,color) {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    drawArcGivenCenter(centerX, centerY,  startAngle, endAngle, radius,canvasID, color);      
}
function drawArcGivenCenter(centerX,centerY,startAngle,endAngle,radius,canvasID,color) {
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle, false);      
    //context.fillStyle = color;
    //context.fill();
    context.lineWidth = 3;
    context.strokeStyle = color;
    context.stroke();
}
function drawText (text, x, y, canvasID, color) {
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true
    context.font = "30px Arial";
    context.fillStyle = color;
    context.fillText(text,x,y)
}
function drawTextSmaller (text, x, y, canvasID, color) {
    canvas = document.getElementById(canvasID); // right
    context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true
    context.font = "25px Arial";
    context.fillStyle = color;
    context.fillText(text,x,y)
}