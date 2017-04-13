var frameDoc = document.getElementById("result").contentDocument;
var email = {
	id: "test0001",
	styles: {},
	breakpoints: {},
	idCounter: 3,
	components: [{
		type: "fullWidth",
		id: "fullWidth0001",
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
			id: "setWidth0002",
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
		}]
	}]
}



function build(contents) {
	var head = frameDoc.head;
	var title = frameDoc.createElement("title");
	title.innerHTML = contents.id;
	head.appendChild(title);
	var body = frameDoc.body;
	if (contents.components.length >= 1) {
		for (var i=0; i<contents.components.length; i++) {
			body.appendChild(buildComponent(contents.components[i]));
		}
	}

}

function buildComponent(component) {
	if (typeof(component) == "string") {
		return frameDoc.createTextNode(component);
	}
	var newElem = frameDoc.createElement("table");
	newElem.id = component.id;
	for (var i = 0; i < component.tableAttributes.length; i++) {
		newElem.setAttribute(component.tableAttributes[i].name, component.tableAttributes[i].value);
	}
	if (component.styles.length >= 1) {
		var styles = "";
		for (var i = 0; i < component.styles.length; i++) {
			styles += component.styles[i].name + ":" + component.styles[i].value + ";";
		}
		newElem.setAttribute("style", styles);
	}
	var row = frameDoc.createElement("tr");
	var cell = frameDoc.createElement("td");
	if (component.cellAttributes.length >= 1) {
		for (var i=0; i<component.cellAttributes.length; i++) {
			cell.setAttribute(component.cellAttributes[i].name, component.cellAttributes[i].value);
		}
	}
	newElem.appendChild(row);
	row.appendChild(cell);
	if (component.children.length >= 1) {
		for (var i = 0; i < component.children.length; i++) {
			cell.appendChild(buildComponent(component.children[i]));
		}
	}

	return newElem;
}

function showHtml() {
	var html = frameDoc.documentElement.innerHTML;
	var text = document.createTextNode(html);
	var div = document.getElementsByClassName("email-preview--raw-html").item(0);
	div.appendChild(text);
	var iframe = document.getElementById("result");
	iframe.className += " hidden";
	div.classList.remove("hidden");
}


build(email);
