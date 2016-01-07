(function () {
    var app = angular.module('store-products', []);
    
    app.directive("productDescriptions", function () {
        return {
            restrict: 'E',
            templateUrl: "product-descriptions.html"
        };
    });

    app.directive("productReviews", function () {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });

    app.directive("productSpecs", function () {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive("productPanels", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.panel = 1;

                this.isSet = function (checkPanel) {
                    return this.panel === checkPanel;
                };

                this.setPanel = function (setPanel) {
                    this.panel = setPanel;
                };
            },
            controllerAs: 'panels'
        }
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();