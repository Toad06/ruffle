// Test made with JPEXS Free Flash Decompiler.

function createMC(name, x, y) {
	var mc = _root.createEmptyMovieClip(name, _root.getNextHighestDepth());
	mc._x = x;
	mc._y = y;
	mc.beginFill(0xFF0000);
	mc.moveTo(10, 10);
	mc.lineTo(100, 10);
	mc.lineTo(100, 100);
	mc.lineTo(10, 100);
	mc.lineTo(10, 10);
	mc.endFill();
	return mc;
}

function setFunctions(mc) {
	mc.onMouseDown = function() {
		trace("// Mouse events set on " + this);
		this.onPress = function() {
			trace(this + ".onPress");
		};
		this.onRelease = function() {
			trace(this + ".onRelease");
		};
		this.onMouseDown = function() {
			trace(this + ".onMouseDown");
		};
		this.onMouseUp = function() {
			trace(this + ".onMouseUp");
		};
	};
}

var square = createMC("square", 0, 0);
setFunctions(square);
