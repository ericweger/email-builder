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


var email = {
	id: "test0001",
	styles: {},
	breakpoints: {},
	idCounter: 3,
	components: [{
		type: "fullWidth",
		id: "0001",
		styles: [
			{name: "background-color", value: "#039BE5"}
		],
		tableAttributes: [
			{name: "height", value: "100%"},
			{name: "width", value: "100%"},
			{name: "cellspacing", value: "0"},
			{name: "cellpadding", value: "0"},
			{name: "border", value: "0"}
		],
		cellAttributes: [
			{name: "align", value: "center"},
			{name: "valign", value: "top"}
		],
		children: [{
			type: "setWidth",
			id: "0002",
			styles: [
				{name: "background-color", value: "#f0f0f0"},
				{name: "max-width", value: "100%"}
			],
			tableAttributes: [
				{name: "width", value: "600px"},
				{name: "cellspacing", value: "0"},
				{name: "cellpadding", value: "0"},
				{name: "border", value: "0"}
			],
			cellAttributes: [
				{name: "height", value: "200px"},
				{name: "align", value: "center"},
				{name: "valign", value: "top"}
			],
			children: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aliquam, ea voluptatem delectus, fugiat quidem possimus ab dignissimos vitae placeat dolores rerum minima laudantium pariatur magni consectetur aut facere sapiente."
			]
		},
			{
			type: "setWidth",
			id: "0003",
			styles: [
				{name: "background-color", value: "#f0f0f0"},
				{name: "max-width", value: "100%"}
			],
			tableAttributes: [
				{name: "width", value: "600px"},
				{name: "cellspacing", value: "0"},
				{name: "cellpadding", value: "0"},
				{name: "border", value: "0"}
			],
			cellAttributes: [
				{name: "height", value: "200px"},
				{name: "align", value: "center"},
				{name: "valign", value: "top"}
			],
			children: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			]
			}]
	}]
}

function buildEmail(content) {
	var preview = $(".preview.page-section:first");

}

function buildSection(content) {
	if (content.type) {
		switch (content.type) {
			case "fullWidth":
				var elem = buildFullWidth(content);
				break;
			case "setWidth":
				var elem = buildSetWidth(content);
				break;
			default:
				var elem = undefined;
							}
	} else {
		return buildText(content);
	}
}

function childrenCheck(content) {
	if (content.children) {
		if (Array.isArray(content.children) && content.children.length > 0) {
			for (var i = 0; i < content.children.length; i++) {
				var elem = buildSection(content.children[i]);
				// Move this whole section into each build function if actions will change on each.
			}
		}
	}
}

function buildFullWidth(content) {

}

function buildSetWidth(content) {

}

function buildText(content) {

}


buildEmail(email);
