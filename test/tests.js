require(['range-serializer'], function(RangeSerializer) {

	test("it works", function() {
		var testDiv = document.createElement('div');
		testDiv.setAttribute('id', 'qunit-fixture');

		testDiv.innerHTML = "<p>zomg</p>";

		document.body.appendChild(testDiv);

		var textNode = testDiv.childNodes[0].childNodes[0];

		var range = document.createRange();
		range.setStart(textNode, 0);
		range.setEnd(textNode, 4);

		equal(range.toString(), "zomg", "Precond: Range has proper text");

		var result = RangeSerializer.serialize(range);

		deepEqual(result.start, {selector: "html > body > div:nth-of-type(2) > p", childNodeIndex: 0, offset: 0});
		deepEqual(result.end, {selector: "html > body > div:nth-of-type(2) > p", childNodeIndex: 0, offset: 4});

		var deserializeRange = RangeSerializer.deserialize(result);
		equal(deserializeRange.startContainer, textNode);
		equal(deserializeRange.endContainer, textNode);
		equal(deserializeRange.toString(), "zomg");
	});
});