function actionButton()
{
	this.currentAction = 0;		//Function Pointer
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.fill = 0;
	this.rgb = "NULL";
}

actionButton.prototype.initialize = function(x, y, w, h, fill, rgb)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.fill = fill;
	this.rgb = rgb;
}

actionButton.prototype.draw = function()
{
    DrawRect(this.x, this.y, this.width, this.height, this.fill, this.rgb);
}
