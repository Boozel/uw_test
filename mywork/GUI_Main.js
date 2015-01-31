

var context = null;

function Init()
{
	var canvas = document.getElementById("maincanvas");
	context = canvas.getContext("2d");

	//Event Listeners
	canvas.addEventListener('mousedown', 	MouseEvent.bind(null, OnMouseDown), false);	
	canvas.addEventListener('mouseup',   	MouseEvent.bind(null, OnMouseUp), false);	
	canvas.addEventListener('mousemove',   	MouseEvent.bind(null, OnMouseMove), false);

	test = new actionButton();
	test.initialize(10, 10, 50, 50, false, "rgb(100,100,100)");	
}
function Update()
{
	ClearRect(0, 0, 400, 400);	
	test.draw();
	DrawGUI();
}

setInterval(Update, 20);

