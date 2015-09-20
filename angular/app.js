(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Description of Dodecahedron',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'gem-01-full.gif',
					thumb: 'gem-01-thumb.gif'
				},
				{
					full: 'gem-02-full.gif',
					thumb: 'gem-02-thumb.gif'
				}
			],
			reviews: [
				{
					stars: 4,
					author: "Jim",
					body: "This is a review from Jim."					
				},
				{
					stars: 3,
					author: "Uwe",
					body: "This is a review from Uwe."
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Description of Pentagonal Gem',
			canPurchase: false,
			soldOut: false,
			images: [
				{
					full: 'gem-03-full.gif',
					thumb: 'gem-03-thumb.gif'
				}
			],
			reviews: [
				{
					stars: 4,
					author: "John",
					body: "This is a review from John."
				},
				{
					stars: 5,
					author: "Jerry",
					body: "This is a review from Jerry."
				}
			]			
		}
	];
	
	app.controller("PanelController", function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	
	app.controller('GalleryController', function() {
    this.current = 0;
    this.setCurrent = function(theCurrentValue) {
      if(theCurrentValue === null || typeof theCurrentValue === 'undefined')
      {
        this.current = 0;
      }
      else
      {
      	this.current = theCurrentValue;
      }
    };
  });

	app.controller('ReviewController', function() {
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			
			// after pushing the existing review unto the right product,
			// reset the current review object (this will reset the form fields also!)
			this.review = {};
		};
	});

	// dash in HTML directive translates to camelCase in JavaScript
	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
})();
