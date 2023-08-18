class Category{
    constructor(id, name) {
this.id = id; 
this.name = name;
this.products = [];
    }
}

class Product {
    constructor(id, name, price, category){
        this.id = id;
        this.name  = name;
        this.price = price;
        this.category = category;
    }
    
}

class ProductServirce{
    constructor(){
        this.products = [];
        this.nextProductId = [];
    }

    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);

        this.products.push(product);
        category.products.push(product);
    }
    getProductById(id){
        return this.products.find((product) => product.id === id);
    }
    addProduct(name){
        const id = this.nextProductId;
        this.nextProductId ++;
        
        const product = new Product(id, name);
        this.products.push(product);
            }
}

class CategoryService {
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name){
const id = this.nextCategoryId;
this.nextCategoryId ++;

const category = new Category(id, name);
this.categories.push(category);
    }

    getCategoriaById(id){
        return this.categories.find((category) => category.id === id);
    }

    updateCategory(id, name){
        const category = this.getCategoriaById(id);
        category.name = name;
    }
    deleteCategory(id){
const category = this.getCategoriaById(id);
const index = this.categories.indexOf(category);

this.categories.splice(index, 1)
    }
}

const categoriesList = new CategoryService();
const productList = new ProductServirce();
const category = new Category();

function createCategory() {
    const categoryName1 = "Candies";
    const categoryName2 = "Shoes";
    const categoryName3 = "Books";

    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);
    categoriesList.addCategory(categoryName3);

    console.log(categoriesList.categories);
}
function createCategory(){
    const categoryName = document.getElementById("categoryNameInput").value;
    categoriesList.addCategory(categoryName);
    console.log(categoriesList.categories);

}

function createProduct() {
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0];

    productList.addProduct(productName, productPrice, productCategory);

    console.log(productList.products);
}

function findCategory(id) {
    const category = categoriesList.getCategoriaById(id);

    console.log(category.name);
}

function UpdadeCategory(id, name) {
    categoriesList.updadeCategory(id, name);

    console.log(categoriesList.categories);
}

function editCategory(id, name) {
    
    categoriesList.updateCategory(id, name);
    console.log(category.name);
}

function deleteCategory(id) {
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}

function findProduct(id){
    const product = productList.getProductById(id);

    console.log(product.name);
}
function clear