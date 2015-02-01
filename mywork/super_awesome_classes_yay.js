/*	DESCRIPTION
	CLASS ACTION_BOX

	static outline for action
	plates.
*/

function ACTION_BOX()
{
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.fill = 0;
	this.rgb = "NULL";
}

ACTION_BOX.prototype.initialize = function(x, y, w, h, fill, rgb)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.fill = fill;
	this.rgb = rgb;
}

ACTION_BOX.prototype.draw = function()
{
	DrawRect(this.x, this.y, this.width, this.height, this.fill, this.rgb);
}

/*	DESCRIPTION
	CLASS ACTION (lawsuit, teehee)

	The inside of each hotkey plate.
	Holds the image of the action assigned
	to this plate.
*/

function ACTION()
{
	this.img = 0;
	this.x = 0;
	this.y = 0;
	this.width;
	this.height;
}

ACTION.prototype.initialize = function(x, y, w, h, imgSource)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.img = loadImage(imgSource);
}

ACTION.prototype.draw = function()
{
	//Don't draw if load is incomplete
	if(this.img.complete && this.img)
	{
		context.drawImage(this.img, this.x, this.y, this.width, this.height);
	}
}


/*	DESCRIPTION
	HOTKEY_PLATE

	The macro-class for the border and
	action image. Also points to the
	hotkey's currently assigned action.
*/

function HOTKEY_PLATE()
{
	this.currentAction = 0;		//Function Pointer
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.box = 0;
	this.act = 0;	
}

HOTKEY_PLATE.prototype.initialize = function(x, y, w, h, fill, rgb, imgsrc)
{
	this.box = new ACTION_BOX();
	this.box.initialize(x, y, w, h, fill, rgb);

	this.act = new ACTION();
	this.act.initialize( (x + 3), (y + 3), (w - 6), (h - 6), imgsrc );
}

HOTKEY_PLATE.prototype.draw = function()
{
	this.box.draw();
	this.act.draw();
}
