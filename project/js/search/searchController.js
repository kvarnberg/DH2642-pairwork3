class SearchController{
    constructor(model, root){
        const view= new SearchView(model, root);
		view.render();
		document.getElementById("button").addEventListener("click", e=>{view.updateSearchResults()});

		root.lastElementChild.firstElementChild.nextElementSibling.addEventListener("click", e=>{
			var x = view.isDishRepresentation(event.target); 
			if (typeof x == "string"){
				model.getDishDetails(x)
				.then(dish =>{model.addToMenu(dish)})};
			})	
    }
   
}
