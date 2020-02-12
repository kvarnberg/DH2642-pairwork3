class SummaryController{
    constructor(model, root, whenDone){
		const update= ()=> h(SummaryView, {model}).render(root);  
		model.addObserver(update);
      	update();  // initial rendering
    }
}