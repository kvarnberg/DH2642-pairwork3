class SummaryView{
	constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
        }
        render(){
            this.root.innerHTML=`Dinner for <span>${this.model.getNumberOfGuests()}</span> people`;
        }
        update(whatHappened){
            if(whatHappened.guests !== undefined){
                this.root.firstElementChild.textContent= whatHappened.guests;
            }
        }

    }