(function () {
    'use strict';
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                        ProductListCtrl]);
    
    function ProductListCtrl(productResource) {
        var vm = this;
        // vm.products = [
        // {   "product": 1,
        //     "productName": "Leaf Rake",
        //     "productCode": "CDN-111",
        //     "releaseDate": "March 19, 2015",
        //     "price": 25.95,
        //     "imageURL": "https://openclipart.org/image/300px/svg_to_png/26215/Leaf-Rake.png"
        // },
        // {   "product": 10,
        //     "productName": "Hammer",
        //     "productCode": "CTF-158",
        //     "releaseDate": "April 22, 2014",
        //     "price": 32.45,
        //     "imageURL": "https://openclipart.org/image/300px/svg_to_png/73/rejon-Hammer.png"
        // }]

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
    
}());