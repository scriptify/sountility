export var baseEffect = Object.create(null, {

	connect: {
		enumerable: true,

		value: function(audioNode) {
			this.output.connect(audioNode);
			return this;
		}
	},

	disconnect: {
		enumerable: true,

		value: function(audioNode) {
			this.output.disconnect(audioNode);
			return this;
		}
	}
});

function isNumber(arg) {
	return toString.call(arg) === '[object Number]' && arg === +arg;
}

export function isInRange(arg, min, max) {
	if (!isNumber(arg) || !isNumber(min) || !isNumber(max))
		return false;

	return arg >= min && arg <= max;
}

export function getWetLevel(mix) {
		if (!isNumber(mix) || mix > 1 || mix < 0)
			return 0;

		if (mix >= 0.5)
			return 1;

		return 1 - ((0.5 - mix) * 2);
	}

export function getDryLevel(mix) {
	if (!isNumber(mix) || mix > 1 || mix < 0)
		return 0;

	if (mix <= 0.5)
		return 1;

	return 1 - ((mix - 0.5) * 2);
}
