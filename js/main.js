$(function () {
	window.App = {};
	App.Views = {};
	App.Models = {};
	App.Collections = {};

	var persons = [];

	for (var i = 0; i < 100; i++) {
		persons.push(Faker.Helpers.userCard());
		persons[i].avatar = Faker.random.avatar_uri();
	}


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