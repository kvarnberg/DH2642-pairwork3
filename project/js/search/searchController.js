class SearchController{
    constructor(model, root){
        const view= new SearchView(model, root);
		view.render();
		document.getElementById("button").addEventListener("click", e=>{view.updateSearchResults()});

		root.lastElementChild.firstElementChild.nextElementSibling.addEventListener("click", e=>{
			
			var id = view.isDishRepresentation(event.target); 
			if (typeof id == "string"){

				model.getDishDetails(id)
				.then(dish =>{model.addToMenu(dish)})};
			})	
    }
   
}
