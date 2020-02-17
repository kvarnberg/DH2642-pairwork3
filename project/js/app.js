const model= new DinnerModel();  
                                               
function onModelChange(payload){
	document.body.textContent= payload.guests;}

new SidebarController(model, document.body.querySelector("#sidebar"));
// new SummaryController(model, document.body.querySelector("#summary"));
// new SearchController(model, document.body.querySelector("#search"));

// TW3
const sections=["search", "summary", "details"]

function show(section){
	let sec = sections.filter(s=> s !== section);
	document.body.querySelector("#"+sec[0]).classList.add("hide")
	document.body.querySelector("#"+sec[1]).classList.add("hide")
	document.body.querySelector("#"+section).classList.remove("hide")
	window.location.hash = "#"+section
}
if (!window.location.hash){
	window.location.hash = "#search";
}
window.onhashchange = () => show(window.location.hash.substring(1))

const summaryNav=[()=> show("summary"), "Summary"];
const backToSearch=[()=> show("search"), "Back to search"];

const addToMenu=[()=> show("search"), "Add to menu"];
const details= new DishDetailsContainer(model, document.body.querySelector("#details"), addToMenu, backToSearch);

new SearchController(model, document.body.querySelector("#search"), summaryNav,id=>{
	details.render(id); 
	show("details");
});
new SummaryController(model, document.body.querySelector("#summary"), backToSearch);