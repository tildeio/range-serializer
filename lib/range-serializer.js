define('range-serializer', ['selector-generator'], function(SelectorGenerator) {
	function serialize(range) {
		var start = SelectorGenerator.generate(range.startContainer);
		start.offset = range.startOffset;
		var end = SelectorGenerator.generate(range.endContainer);
		end.offset = range.endOffset;

		return {start: start, end: end};
	}

	function deserialize(result) {
		var range = document.createRange(),
		    startNode = SelectorGenerator.find(result.start),
		    endNode = SelectorGenerator.find(result.end);

		range.setStart(startNode, result.start.offset);
		range.setEnd(endNode, result.end.offset);
		
		return range;
	}

	return {serialize: serialize, deserialize: deserialize};
});