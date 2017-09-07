class MainController {
    constructor($resource) {
        this.message = $resource.getProducts();
    }

    getProducts() {
        
    }
}