const model= new DinnerModel();

// new SummaryView(model, document.body.querySelector("#summary")).render();
// new SidebarView(model, document.body.querySelector("#sidebar")).render();

new SidebarController(model, document.body.querySelector("#sidebar"));
new SummaryController(model, document.body.querySelector("#summary"));
