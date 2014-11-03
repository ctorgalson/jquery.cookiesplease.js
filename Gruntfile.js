module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      pack: {
        files: {
          'scripts/jquery.cookiesPlease.min.js': [
            'scripts/jquery.cookiesPlease.js',
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask("package", ["uglify"]);
};
