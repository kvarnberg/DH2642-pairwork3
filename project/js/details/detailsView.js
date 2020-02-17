function DishView({dish,
    addControl:[addAction, addMessage], 
    onCancel:[cancelAction, cancelMessage], 
    price, 
    guests, 
    inMenu}){

    return h("p", dish.title)
}