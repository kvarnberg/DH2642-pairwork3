class SummaryView{
	constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
        }
        render(){
            h("div", "Dinner for " + this.model.getNumberOfGuests()+ ' people').render(this.root)
        }
        update(whatHappened){
            this.render()
        }

        
}

