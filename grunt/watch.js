module.exports = {
    options: {
        livereload: true
    },
    stylus: {
        files: 'stylus/*.styl',
        tasks: ['stylus'],
        options: {
            interrupt: true,
            livereload: false
        }
    },
    css: {
        files: 'css/*.css'
    },
    html: {
        files: '*.html'
    },
    js: {
        files: ['js/*.js']
    },
    plugins: {
        files: 'bower_components/**',
        tasks: ['uglify']
    },
    bower: {
        files: 'bower.json',
        tasks: ['shell:bower_update'],
        options: {
            livereload: false
        }
    }
};