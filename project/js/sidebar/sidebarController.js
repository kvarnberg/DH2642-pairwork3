class SidebarController{
    constructor(model, root){
        this.model=model;
        this.root=root;
        const plusButton=this.root.lastElementChild;
    
        plusButton.addEventListener("click", function(event){
        model.setNumberOfGuests(model.getNumberOfGuests()+1)
    });
        const minusButton=this.root.firstElementChild;
    
        minusButton.addEventListener("click", function(event){
        model.setNumberOfGuests(model.getNumberOfGuests()-1)
    });}
}