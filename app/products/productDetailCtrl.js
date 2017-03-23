(function () {
    'use strict';

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ["product",
                                            ProductDetailCtrl]);

    function ProductDetailCtrl(product) {
        var vm = this;

        vm.product = product;

        //     {
        //     "productId": 10,
        //     "productName": "Hammer",
        //     "productCode": "CTF-158",
        //     "releaseDate": "April 22, 2014",
        //     "price": 32.45,
        //     "imageURL": "https://openclipart.org/image/300px/svg_to_png/73/rejon-Hammer.png",
        //     "description": "hammers well",
        //     "availability": "May, 2011",
        //     "cost": 23.82,
        //     "margin": "43%",
        //     "tags": ["some tag", "cart", "wheelbarrow"]
        // };



        vm.title = "Product Detail: " + vm.product.productName;

        if(vm.product.tags) {
            vm.product.tags = vm.product.tags.toString();
        }
    }


}());