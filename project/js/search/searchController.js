class SearchController{
    constructor(model, root){
        const view= new SearchView(model, root);
		view.render();
		root.addEventListener("click", e=>{view.updateSearchResults()});
    }
}