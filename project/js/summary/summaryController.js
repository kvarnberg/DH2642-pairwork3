class SummaryController{
    constructor(model, root, whenDone){
    	const update= ()=> SummaryView(model).render(root);  // note: functional, so no more new!
      	model.addObserver(update);
      	update();  // initial rendering
    }
}