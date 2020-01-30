 updateSearchResults(){
        const spinner=this.createSpinner();
        spinner.render(this.resultDiv);  // clears this.resultDiv of all its children, i.e. wipes the previous search results. Then adds the spinner

        console.log(this.typeControl)

        this.model.searchDishes(this.typeControl.value, this.textControl.value)
            .then(dishes=> h("div", {className:"dishDiv"}, dishes.map(dish => this.createDishDisplay(dish))).render(this.resultDiv))
            .catch(err=> render(this.resultDiv))
            .finally(()=> render(this.resultDiv));// 