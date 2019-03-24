module.exports = function(grunt) {
    const babel = require('rollup-plugin-babel');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        rollup: {
            options: {
                plugins: [
                    babel({
                        exclude: ['./node_modules/**', './lib/**']
                    })
                ]
            },
            files: {
                'dest':'dist/<%= pkg.name %>.js',
                'src' : 'src/main.js',
            },
        }
    });
  
    grunt.loadNpmTasks('grunt-rollup');
  
    grunt.registerTask('default', ['rollup']);
};