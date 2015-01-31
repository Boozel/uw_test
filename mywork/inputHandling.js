function MouseEvent(handler, ev)
{

	var x, y;
	
	// Get the mouse position relative to the canvas element.
	if (ev.layerX || ev.layerX == 0) { // Firefox
		x = ev.layerX;
		y = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera
		x = ev.offsetX;
		y = ev.offsetY;
	}
	
	handler(x, y);

}

function OnMouseDown(x, y)
{
}

function OnMouseUp(x, y)
{
}

function OnMouseMove(x, y)
{
}
