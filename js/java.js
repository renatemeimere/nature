	const template = document.querySelector("template").content;
	const main = document.querySelector("main");
    const nav = document.querySelector("nav");
	const modal = document.querySelector(".modal-bg");
	modal.addEventListener("click", () => modal.classList.add("hide"));

	const wonderlistLink = "https://spreadsheets.google.com/feeds/list/1mY0R6Pxy4YpeXaJK08oZxdxriVnXJ-eCfPnbu6iskUc/od6/public/values?alt=json"

	function loadJSON(link) {
	    fetch(link).then(e => e.json()).then(data => {
            data.feed.entry.forEach(createCategory)
            data.feed.entry.forEach(showSingleCard)
        });
	}
    function createCategory(row){
        /*<section id='nature'>
            <h2 class="nature">Nature</h2>
        </section>*/
        const oldSection=document.querySelector('#'+row.gsx$category.$t)
        if(oldSection){
            console.log(row.gsx$category.$t + ' already exists')
        } else {
            const section = document.createElement("section");
            section.id=row.gsx$category.$t;
            const header = document.createElement('h2');
            header.textContent=row.gsx$category.$t;
            section.appendChild(header);
            main.appendChild(section)

            const link = document.createElement('a');
            link.textContent=row.gsx$category.$t;
            link.href="#"+row.gsx$category.$t;
            nav.appendChild(link)
        }


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

        const section = document.querySelector("#"+oneObject.gsx$category.$t);
        section.appendChild(clone);

    }
loadJSON(wonderlistLink);
