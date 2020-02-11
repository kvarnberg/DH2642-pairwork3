// summary controller
class SummaryController{
    constructor(model, root, whenDone){
    	const update= ()=> new SummaryView(model, root).render();
      	model.addObserver(update);
      	update();  // initial rendering
    }
}