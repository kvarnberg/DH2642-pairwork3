class SummaryController{
    constructor(model, root, whenDone){
		const update= ()=> h(SummaryView, {ingredients: model.getIngredients(), guests: model.getNumberOfGuests()}).render(root);  
		model.addObserver(update);
      	update(); 
    }
}