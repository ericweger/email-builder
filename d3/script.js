var colorSet = ['#CDFFCC', '#0033FF', '#FF9966', '#E2B7C1', '#F8EBEE', '#0C3934', '#340B0B', '#9B8FFF', '#CE7082', '#85CEBA', '#FAEED4', '#3A745F'];

var colors = [
	{color: '#CDFFCC', children: [
		{color: '#0033FF'},
		{color: '#FF9966', children: [
			{color: '#E2B7C1'},
			{color: '#F8EBEE'},
			{color: '#0C3934', children: [
				{color: '#340B0B'}
			]},
			{color: '#9B8FFF'}
		]}
	]},
	{color: '#CE7082', children: [
		{color: '#85CEBA', children: [
			{color: '#FAEED4'}
		]},
		{color: '#3A745F'}
	]}
];

function addColor(parent, elems) {
	if (elems.length > 0) {
		for (var i = 0; i < elems.length; i++) {
			console.log(elems[i].color)
			var div = document.createElement('DIV');
			div.innerHTML = elems[i].color;
			div.style.backgroundColor = elems[i].color;
			div.className = 'outline__layer'
			parent.appendChild(div);
			if (elems[i].children) {
				addColor(div, elems[i].children);
			}
		}
	}
}

function createOutline(colors) {
	var outline = document.getElementsByClassName('outline')[0];
	addColor(outline, colors);
}

createOutline(colors);
