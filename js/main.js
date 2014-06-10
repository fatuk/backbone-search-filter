$(function() {
    window.App = {};
    App.Views = {};
    App.Models = {};
    App.Collections = {};

    var test = {
        name: 'Andrew'
    };

    console.log(_(test));


    App.Views.App = Backbone.View.extend({
        el: '#app',
        events: {
            'blur #searchInput': 'search'
        },
        initialize: function() {
            this.renderSorted(this.collection);
        },
        renderSorted: function(sorted) {
            this.searchCount = sorted._wrapped ? sorted._wrapped.length : sorted.length;
            this.$('#persons').html('');
            sorted.each(function(person) {
                var personView = new App.Views.Person({
                    model: person
                });
                this.$('#persons').append(personView.el);
            }, this);

            this.$('.js-searchCount').html(this.searchCount);
        },
        search: function(e) {
            var request = $(e.target).val();
            this.renderSorted(this.collection.search(request));
        }
    });

    App.Views.Person = Backbone.View.extend({
        tagName: 'li',
        className: 'person__item',
        template: $('#personTemplate').html(),
        initialize: function() {
            this.render();
        },
        render: function() {
            var rendered = Mustache.render(this.template, this.model.toJSON());
            this.$el.append(rendered);
            return this;
        }
    });

    App.Collections.Persons = Backbone.Collection.extend({
        initialize: function() {
            var persons = this;
            for (var i = 0; i < 1000; i++) {
                persons.add(Faker.Helpers.userCard());
                persons.models[i].set('avatar', Faker.random.avatar_uri());
            }
        },
        search: function(letters) {
            if (letters === "") return this;

            var pattern = new RegExp(letters, "gi");
            return _(this.filter(function(data) {
                return pattern.test(data.get("username"));
            }));
        }
    });


    var persons = new App.Collections.Persons();
    var appView = new App.Views.App({
        collection: persons
    });
});