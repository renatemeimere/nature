	const template = document.querySelector("template").content;
	const main = document.querySelector("main");
	const modal = document.querySelector(".modal-bg");
	modal.addEventListener("click", () => modal.classList.add("hide"));

	const wonderlistLink = "https://spreadsheets.google.com/feeds/list/1mY0R6Pxy4YpeXaJK08oZxdxriVnXJ-eCfPnbu6iskUc/od6/public/values?alt=json"

	function loadJSON(link) {
	    fetch(link).then(e => e.json()).then(data => data.feed.entry.forEach(showSingleCard));
	}

    function showDetails(oneObject){
        modal.querySelector(".modal-name").textContent = oneObject.gsx$title.$t;
        modal.querySelector(".modal-wonderimg").src = "images/" + oneObject.gsx$image.$t;
        modal.querySelector(".modal-size").textContent = "Size: " + oneObject.gsx$size.$t;
	    modal.querySelector(".modal-year").textContent = "Year: " + oneObject.gsx$yearbuild.$t;
	    modal.querySelector(".modal-price").textContent = oneObject.gsx$expenses.$t;
	    modal.querySelector(".modal-funfact").textContent = "Fun Fact: " + oneObject.gsx$funfacts.$t;
        modal.querySelector(".modal-state").src = "images/" + oneObject.gsx$state.$t;
         modal.querySelector(".modal-flag").src = "images/flag/" + oneObject.gsx$location.$t;
        modal.classList.remove("hide");
    }

	function showSingleCard(oneObject) {
	    console.log(oneObject)
	    let clone = template.cloneNode(true);
	    clone.querySelector(".name").textContent = oneObject.gsx$title.$t;
	    clone.querySelector(".TypeOfWonder").textContent = oneObject.gsx$typeofwonder.$t;
	    clone.querySelector(".TypeOfWonder").textContent = oneObject.gsx$typeofwonder.$t;
	    clone.querySelector(".wonderimg").src = "images/" + oneObject.gsx$image.$t;
	    clone.querySelector(".flag").src = "images/flag/" + oneObject.gsx$location.$t;
        clone.querySelector("button").addEventListener("click", () => {
            showDetails(oneObject);
        })
        main.appendChild(clone);

    }
loadJSON(wonderlistLink);
