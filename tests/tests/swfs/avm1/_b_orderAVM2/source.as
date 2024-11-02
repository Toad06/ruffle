// Test made with JPEXS Free Flash Decompiler.


package {
	import flash.display.Sprite;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;

	public class Test extends MovieClip {
		public function Test() {
			super();
			this.init();
		}

	private function init() : void {
		var step:int = 0;
		var skippedFirst = false;
		var createMC = function(name:String, parent:MovieClip, x:Number, y:Number, depth:int):void {
			var mc:MovieClip = new MovieClip();
			mc.name = name;
			mc.x = x;
			mc.y = y;
			parent.addChild(mc);
			mc.graphics.beginFill(0xFF0000);
			mc.graphics.moveTo(10, 10);
			mc.graphics.lineTo(100, 10);
			mc.graphics.lineTo(100, 100);
			mc.graphics.lineTo(10, 100);
			mc.graphics.lineTo(10, 10);
			mc.graphics.endFill();
			setFunctions(mc);
		};

var setFunctions = function(mc:MovieClip):void {
	trace("");
	trace("// Mouse events set on " + mc.name);
	if(mc.name == "square1" || mc.name == "square3" || mc == root) {
		trace("// Button events set on " + mc.name);
		mc.addEventListener(MouseEvent.MOUSE_DOWN, onPressHandler);
		mc.addEventListener(MouseEvent.MOUSE_UP, onReleaseHandler);
	}
	mc.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDownHandler);
	mc.addEventListener(MouseEvent.MOUSE_UP, onMouseUpHandler);
};

var onPressHandler = function(event:MouseEvent):void {
	trace(event.currentTarget.name + ".onPress");
};

var onReleaseHandler = function(event:MouseEvent):void {
	trace(event.currentTarget.name + ".onRelease");
	trace("");
};

var onMouseDownHandler = function(event:MouseEvent):void {
	var mc:MovieClip = event.currentTarget as MovieClip;
	trace(mc.name + ".onMouseDown");
	if(mc == root) { skippedFirst = true; }
};

var onMouseUpHandler = function(event:MouseEvent):void {
	var mc:MovieClip = event.currentTarget as MovieClip;
	if(mc == root && !skippedFirst) {
		skippedFirst = true;
		return;
	}
	trace(mc.name + ".onMouseUp");
	if(mc.name != "square1") {
		return;
	}
	switch(step) {
		case 0:
			createMC("square2", root as MovieClip, 100, 100, 40);
			break;
		case 1:
			setFunctions(root as MovieClip);
			break;
		case 2:
			createMC("square3", root.getChildByName("square1") as MovieClip, 100, 0, 20);
			break;
		case 5:
			createMC("square4", root as MovieClip, 0, 100, 30);
			break;
	}
	step++;
};

createMC("square1", root as MovieClip, 0, 0, 10);
}

}

}