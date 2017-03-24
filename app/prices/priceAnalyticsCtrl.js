(function () {
    'use strict';

    angular
        .module("productManagement")
        .controller("PriceAnalyticsCtrl", [
            "$scope", "$filter", "products", PriceAnalyticsCtrl
        ])

    function PriceAnalyticsCtrl($scope, $filter, products) {
        $scope.title = "Price Analytics";

        for(var i = 0; i < products.length(); i++) {
            products[i].marginPercent = (products[i].price / products[i].cost);

            products[i].marginAmount = products[i].price - products[i].cost;

        }

        var orderedProductAmount = $filter("orderBy")(products, "marginAmount");
        var filteredProductAmount = $filter("limitTo")(orderedProductAmount, 3);

        var chartDataAmount = [];
        for(var i = 0; i < filteredProductAmount.length(); i++) {
            chartDataAmount.push({
                x: filteredProductAmount[i].productName,
                y: [
                    filteredProductAmount[i].cost,
                    filteredProductAmount[i].price,
                    filteredProductAmount[i].marginAmount
                    ]
            });
        }

        $scope.dataAmount = {
            series: ["Cost", "Price", "Margin Amount"],
            data: chartDataAmount
        };

        $scope.configAmount = {
            title: "Top $ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };


        var orderedProductPercent = $filter("orderBy")(products, "marginPercent");
        var filteredProductPercent = $filter("limitTo")(orderedProductPercent, 3);

        var chartDataPercent = [];
        for(var i = 0; i < filteredProductPercent.length(); i++) {
            chartDataPercent.push({
                x: filteredProductPercent[i].productName,
                y: [filteredProductPercent[i].marginPercent]
            });
        }

        $scope.dataPercent = {
            series: ["Margin %"],
            data: chartDataPercent
        };

        $scope.configPercent = {
            title: "Top $ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };


    }

}());