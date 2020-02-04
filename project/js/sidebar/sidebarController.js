// sidebar controller
class SidebarController{
    constructor(model, root){
        new SidebarView(model, root).render();
        
        const plusButton= document.getElementById("plusButton"); 			// document.getElementById("plusButton");
		plusButton.addEventListener("click", function(event){
    		model.setNumberOfGuests(model.getNumberOfGuests()+1)
		});

		const minusButton= document.getElementById("minusButton"); 				//document.getElementById("minusButton");
		minusButton.addEventListener("click", function(event){
			model.setNumberOfGuests(model.getNumberOfGuests()-1)
		});
    }
}
