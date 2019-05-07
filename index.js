// gets first of tag
d3.select();

// gets all of tag
d3.selectAll();

d3.select('h1').style('color', 'red')
.attr('class', 'kendrasheading')
.text('CAT QUANTITY')


var dataset = [20, 40, 60, 80, 75, 55, 35, 99]

d3.select('body')
	.selectAll('p')
	.data(dataset)
	.enter()
	.append('p')
	.text('CATS ARE THE BEST!')
	.text(function(d) {return "I have " +d + " cats in my yard!"; });
