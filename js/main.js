$(function () {
	window.App = {};
	App.Views = {};
	App.Models = {};
	App.Collections = {};

	App.Views.App = Backbone.View.extend({
		el: '#app'
	});

	App.Views.List = Backbone.View.extend({

	});

	App.Collections.Books = Backbone.View.extend({
		url: 'data/persons.json'
	});

	App.Collections.Books = Backbone.View.extend({
		url: 'data/persons.json'
	});
});