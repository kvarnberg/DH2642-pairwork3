class SidebarView{
    constructor(model, root){
        this.root=root;
        this.model=model;
        model.addObserver(x=>this.update(x));
    }

    render(){
        this.root.innerHTML=`
        <button>-</button>
        <span>${this.model.getNumberOfGuests()}</span>
        <button>+</button>`;
    }

    update(whatHappened){
        if(whatHappened.guests !== undefined){
            this.root.firstElementChild.nextElementSibling.textContent= whatHappened.guests;
        }
    }
}