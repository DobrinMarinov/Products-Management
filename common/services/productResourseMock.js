(function () {
    'use strict';

    var app = angular
        .module("productResourceMock", ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [
            {   "product": 1,
                "productName": "Leaf Rake",
                "productCode": "CDN-111",
                "releaseDate": "March 19, 2015",
                "price": 25.95,
                "imageURL": "https://openclipart.org/image/300px/svg_to_png/26215/Leaf-Rake.png"
            },
            {   "product": 10,
                "productName": "Hammer",
                "productCode": "CTF-158",
                "releaseDate": "April 22, 2014",
                "price": 32.45,
                "imageURL": "https://openclipart.org/image/300px/svg_to_png/73/rejon-Hammer.png"
            },
            {
                "product": 20,
                "productName": "Guitar",
                "productCode": "CMG-384",
                "releaseDate": "October 28, 2012",
                "price": 165.48,
                "imageURL": "https://openclipart.org/image/300px/svg_to_png/270/TheresaKnott-electric-guitar.png"
            }
        ];

        var productURL = "/api/products"

        $httpBackend.whenGET(productURL).respond(products);

        var editingRegex = new RegExp(productURL + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = {"productId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if(id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if(products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productURL).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if(!product.productId) {
                // new product Id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            } else {
                // Updated product
                for (var i = 0; i < products.length; i++) {
                    if(products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        //Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
    
}());
