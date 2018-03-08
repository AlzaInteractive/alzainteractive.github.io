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