const model= new DinnerModel();  
                                               
function onModelChange(payload){
	document.body.textContent= payload.guests;}

//
// initialize the view as before
//document.body.textContent= model.getNumberOfGuests();

// const model= new DinnerModel();

new SidebarController(model, document.body.querySelector("#sidebar"));
new SummaryController(model, document.body.querySelector("#summary"));