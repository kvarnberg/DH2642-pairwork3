class SearchView{
	constructor(model, root){
        this.root=root;
        this.model=model;
    }
    render(){
    	h("div",
    		h("div",       
            	this.textControl = h("input"),   
            	this.typeControl = h("select", 
                    h("option", {value:""}, "Choose:"), 
                    ["starter", "main course", "dessert"].map(opt=>(h("option", {value:opt}, opt)))),
            	h("button", {id:"button"}, "Search!") 
            ),  
       		this.resultDiv= h("div")
       	).render(this.root);

    	this.updateSearchResults();
    }

    updateSearchResults(){
        renderPromise(
            this.model.searchDishes(this.typeControl.value, this.textControl.value), 
            dishes=>(h("div", {className:"dishDiv"}, dishes.map(dish => this.createDishDisplay(dish)))),
            this.resultDiv)
    }
    
    /*createSpinner(){
        return h("div", {className:"spinnerClass"}, h("img", {src:"https://assets.eu.content-cdn.io/css/themes/mjt02012595/images/main/show_loader.gif"}))
    }*/

    createDishDisplay(dish){
        return h("span", {className:"dishDisplay"}, h("img",{src:"https://spoonacular.com/recipeImages/" + dish.image}), dish.title);
        
    }
}