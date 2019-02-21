	const template = document.querySelector("template").content;
	const main = document.querySelector("main");


	const wonderlistLink = "https://spreadsheets.google.com/feeds/list/1mY0R6Pxy4YpeXaJK08oZxdxriVnXJ-eCfPnbu6iskUc/od6/public/values?alt=json"

	function loadJSON(wonderlistLink){
	fetch(wonderlistLink).then(e => e.json()).then(data => data.feed.entry.forEach(showData));
}

	function showData(oneObject) {
              console.log(oneObject)
	    let clone = template.cloneNode(true);
	    clone.querySelector(".name").textContent = oneObject.Title;
	    clone.querySelector(".TypeOfWonder").textContent = oneObject.TypeOfWonder;
	    clone.querySelector(".funfact").textContent = oneObject.FunFacts;
          clone.querySelector(".price").textContent = oneObject.Expenses;
	    clone.querySelector("img").src = imgLink + oneObject.category;
	    clone.querySelector("img").alt = oneObject.name;
	    main.appendChild(clone);
	}
