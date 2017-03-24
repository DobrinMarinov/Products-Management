// (function () {
//     'use strict';
//
//     angular
//         .module('common.services')
//         .factory('productService', productService)
//
//     function productService() {
//
//         function calculateMarginPercent(price, cost) {
//             var margin = 0;
//             if(price && cost) {
//                 margin = (100 * (price - cost)) / price;
//             }
//             margin = Math.round(margin);
//             return margin;
//         }
//
//         function calculateMarginAmount(price, cost) {
//             var amount = 0;
//             if(price && cost) {
//                 amount = price - cost;
//             }
//             return amount;
//         }
//
//         function calculatePrice(cost, markup) {
//             var price = 0;
//             if(cost && markup) {
//                 price = cost * (1 + 100% + markup);
//             }
//             return price;
//         }
//
//     }
//
//     return {
//         calculateMarginPercent: calculateMarginPercent,
//         calculateMarginAmount: calculateMarginAmount,
//         calculatePrice: calculatePrice
//     }
//
//
// }());