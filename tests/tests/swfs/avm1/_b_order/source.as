// Test made with JPEXS Free Flash Decompiler.

function createMC(name, parent, x, y, depth) {
	var mc = parent.createEmptyMovieClip(name, depth);
	mc._x = x;
	mc._y = y;
	mc.beginFill(0xFF0000);
	mc.moveTo(10, 10);
	mc.lineTo(100, 10);
	mc.lineTo(100, 100);
	mc.lineTo(10, 100);
	mc.lineTo(10, 10);
	mc.endFill();
	setFunctions(mc);
}

function setFunctions(mc) {
	trace("");
	trace("// Mouse events set on " + mc);
	if(mc._name == "square1" || mc._name == "square3" || mc == _root) {
		trace("// Button events set on " + mc);
		mc.onPress = function() {
			trace(this + ".onPress");
		};
		mc.onRelease = function() {
			trace(this + ".onRelease");
			trace("");
		};
	}
	mc.onMouseDown = function() {
		trace(this + ".onMouseDown");
		if(this == _root) { this.skippedFirst = true; } // See below.
	};
	mc.onMouseUp = function() {
		if(this == _root && !this.skippedFirst) {
			// Skip trace due to unrelated bug (`onMouseUp` shouldn't trigger at all here).
			this.skippedFirst = true;
			return;
		}
		trace(this + ".onMouseUp");
		if(this._name != "square1") {
			return;
		}
		switch(_root.step) {
			case 0:
				createMC("square2", _root, 100, 100, 40);
				break;
			case 1:
				setFunctions(_root);
				break;
			case 2:
				createMC("square3", _root.square1, 100, 0, 20);
				break;
			case 5:
				createMC("square4", _root, 0, 100, 30);
				break;
		}
		_root.step++;
	};
}

step = 0;
createMC("square1", _root, 0, 0, 10);
