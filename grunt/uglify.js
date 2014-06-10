module.exports = {
    dist: {
        options: {

        },
        files: {
            'js/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/Faker/Faker.js',
                'bower_components/type-watch/jquery.typewatch.js',
                'bower_components/underscore/underscore.js',
                'bower_components/backbone/backbone.js',
                'bower_components/mustache/mustache.js'
            ]
        }
    }
};