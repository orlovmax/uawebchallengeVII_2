module.exports = function(grunt) {
    grunt.initConfig({
      // Dev paths
      dev: {
        main: 'dev',
        js: 'dev/js',
        templates: 'dev/templates',
        styles: 'dev/styles',
        css: 'dev/css',
        html: 'dev/html',
        img: 'dev/img',
        fonts: 'dev/fonts',
        helpers: 'dev/helpers',
        devtools: 'dev/devtools'
      },
      // Build paths
      build: {
        main: 'build',
        css: 'build/css',
        fonts: 'build/fonts',
        img: 'build/img',
        js: 'build/js'
      },

      //Assemble *.js files
        concat: {
          main: {
            files: [{
              src: ['<%= dev.js %>/*.js', '!<%= dev.js %>/assembled.js'],
              dest: '<%= dev.js %>/assembled.js'
            }]
          }
        },

      //Uglify assembled *.js file
        uglify: {
          options: {
            mangle: false
          },
          vendor: {
            files: [{
                expand: true,
                cwd: '<%= dev.js %>/vendor',
                src: '**/*.js',
                dest: '<%= build.js %>/vendor',
                ext: '.min.js'
            }]
          },
          main: {
              files: {
                  '<%= build.js %>/assembled.min.js': '<%= dev.js %>/assembled.js'
              }
          },
          ie: {
            files: {
                '<%= build.js %>/ie/ie.min.js': '<%= dev.js %>/ie/ie.js'
            }
          }
        },

      //Compile *.scss files
        sass: {
          main: {
            options: {
              style: 'expanded',
              sourcemap: 'none'
            },
            files: [{
              expand: true,
              cwd: '<%= dev.styles %>',
              src: ['**/*.{sass,scss}', '!components/**/*.*'],
              dest: '<%= dev.css %>',
              ext: '.css'
            }]
          }
        },

      //Combine media queries in result *.css files
        cmq: {
          options: {
            log: false
          },
          main: {
            files: {
              '<%= dev.css %>': ['<%= dev.css %>/*.css']
            }
          }
        },

      //Autoprefixer
        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
            //By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
          },
          main: {
            files:[{
              expand: true,
              flatten: true,
              src: '<%= dev.css %>/*.css',
              dest: '<%= dev.css %>/'
            }]
          }
        },

      //Minify and organize *.css files
        csso: {
          options: {
            keepSpecialComments: '*',
            restructure: false
          },
          main: {
            files:[{
              expand: true,
              cwd: '<%= dev.css %>/',
              src: ['*.css', '!*.min.css'],
              dest: '<%= build.css %>/',
              ext: '.min.css'
            }]
          }
        },

      //Compile *.jade files
        jade: {
          main: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: '<%= dev.templates %>/pages',
              src: ['**/*.jade'],
              dest: '<%= dev.html %>/',
              expand: true,
              ext: '.html'
            } ]
          }
        },

      //Minify *.html files
        htmlmin: {
            main: {
              options: {
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true
              },
              files: [ {
                cwd: '<%= dev.html %>',
                src: '*.html',
                dest: '<%= build.main %>',
                expand: true,
                ext: '.html'
              } ]
            }
        },

      //Minify image files
        imagemin: {
          main: {
            options: {
              optimizationLevel: 7
            },
            files: [{
              expand: true,
              cwd: '<%= dev.img %>',
              src: ['**/*.{png,jpg,gif}'],
              dest: '<%= build.img %>'
            }]
          }
        },

      //Copy some folders or files (ex. *.php) from dev to build
        copy: {
          fonts: {
            files: [{
              expand: true,
              cwd: '<%= dev.fonts %>/',
              src: ['**/*.{eot,svg,ttf,otf,woff,woff2}'],
              dest: '<%= build.fonts %>'
            }]
          },
          js: {
            files: [{
              expand: true,
              cwd: '<%= dev.js %>/',
              src: [
                '**/assembled.js',
                '**/vendor.js',
                '**/ie.js'],
              dest: '<%= build.js %>/'
            }]
          },
          livejs: {
            files: [{
              expand: true,
              cwd: '<%= dev.devtools %>/',
              src: '**/live.js',
              dest: '<%= build.js %>/'
            }]
          },
          css: {
            files: [{
              expand: true,
              cwd: '<%= dev.css %>',
              src: ['**/*.css'],
              dest: '<%= build.css %>/'
            }]
          },
          html: {
            files: [{
              expand: true,
              cwd: '<%= dev.html %>',
              src: ['**/*.html'],
              dest: '<%= build.main %>'
            }]
          },
          helpers: {
            files: [{
              expand: true,
              cwd: '<%= dev.helpers %>',
              src: ['**/*.*', '**/.htaccess'],
              dest: '<%= build.main %>'
            }]
          }
        },

      //Assemble bower components in right order
        bower_concat: {
          vendor: {
            dest: '<%= dev.js %>/vendor/vendor.js',
            exclude: ['respond', 'html5shiv']
          },
          ie: {
            dest: '<%= dev.js %>/ie/ie.js',
            exclude: ['jquery'],
            mainFiles: {
              'html5shiv': 'dist/html5shiv-printshiv.js'
            }
          }
        },

      //Delete .gitkeep files. If you don't use Bower - just run `grunt clean`
        clean: {
          debug: ['<%= build.js %>/**/*.js',
                  '!<%= build.js %>/**/*.min.js',
                  '<%= build.css %>/**/*.css',
                  '!<%= build.css %>/**/*.min.css'],
          bower: 'bower_components'
        },

      //Delete some dev code and references from files
        processhtml: {
          dist: {
            files: [{
              expand: true,
              cwd: '<%= dev.html %>',
              src: ['**/*.html'],
              dest: '<%= dev.html %>',
              ext: '.html'
            }],
          }
        },

      // Run deploy script from Rakefile
        shell: {
            deploy: {
                command: 'rake deploy'
            },
            buildDeploy: {
                command: 'rake buildDeploy'
            }
        },

      //Watch for changes
        watch: {
          all: {
            files: ['<%= dev.html %>/**/*.html',
                    '<%= dev.styles %>/**/*.sass',
                    '<%= dev.css %>/*.css',
                    '<%= dev.js %>/**/*.js',
                    '<%= dev.img %>/**/*.{png,jpg,gif}',
                    '<%= dev.templates %>/pages/**/*.jade',
                    '<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'],
            tasks: ['default'],
            options: {
              spawn: false,
            },
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['newer:concat',
    															 'newer:sass',
                                   'newer:jade',
                                   'newer:imagemin',
                                   'newer:copy',
                                   'watch'
    ]);

    grunt.registerTask('bower-dev', ['bower_concat',
                                     // 'clean:bower'
    ]);

    grunt.registerTask('regen', ['concat',
                                 'sass',
                                 'jade',
                                 'newer:imagemin',
                                 'copy'
    ]);

    grunt.registerTask('build', ['processhtml',
                                 'cmq',
                                 'autoprefixer',
                                 'uglify',
                                 'csso',
                                 'htmlmin',
                                 'clean:debug'
    ]);

    grunt.registerTask('deploy', ['shell:deploy']);

    grunt.registerTask('build-deploy', ['shell:buildDeploy']);
};
