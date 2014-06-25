require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"../libs/jquery/dist/jquery.min",
        "jqueryui":"../libs/jqueryui",
        "underscore":"../libs/lodash/dist/lodash.min",
        "backbone":"../libs/backbone/backbone",
        "marionette":"../libs/marionette/lib/backbone.marionette.min",
        "handlebars":"../libs/handlebars/handlebars.min",
        "bootstrap": "../libs/bootstrap/dist/js/bootstrap.min",
        "text":"../libs/plugins/text",
        "jquery-validation" : "../libs/jquery.validation/dist/jquery.validate",
        "parse": "http://www.parsecdn.com/js/parse-1.2.16.min"

    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        "bootstrap":["jquery"],
        "jqueryui":["jquery"],
        "jquery-validation":{
            "deps": ["jquery"]
        },
        "backbone":{
            "deps":["underscore"],
            "exports":"Backbone"
        },
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            "exports":"Marionette"
        },
        "handlebars":{
            "exports":"Handlebars"
        },
        "parse": {
            deps: ['jquery', 'underscore'],
            exports: 'Parse'
        },
        "backbone.validateAll":["backbone"]
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["App", "routers/AppRouter", "controllers/Controller", "config/ParseInit",
         "jquery", "jqueryui","bootstrap"],
    function (App, AppRouter, Controller, ParseInit) {
        ParseInit.init();
        
        App.appRouter = new AppRouter({
            controller:new Controller()
        });
        
        App.start();
    });