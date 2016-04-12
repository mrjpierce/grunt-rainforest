/*
 * grunt-rainforest
 * https://github.com/mrjpierce/grunt-rainforest
 *
 * Copyright (c) 2016 James Pierce
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');
module.exports = function(grunt) {

    grunt.registerMultiTask('rainforest', 'A grunt plugin for running rainforest QA tasks', function() {
        var options = this.options({
            apiBaseUrl: 'https://app.rainforestqa.com',
            token: '',
            tag: '',
            browsers: [],
            upload: false,
            foreground: false
        });

        if(options.apiBaseUrl === '') {
            shell.echo('ERROR: \'apiBaseUrl\' option can not be empty');
            return false;
        }

        if(options.token === '') {
            shell.echo('ERROR: \'token\' option can not be empty');
            return false;
        }

        var tokenString = ' --token ' + options.token;

        // Check for rainforest gem install
        shell.echo('Detecting rainforest gem...');

        var checkResult = shell.exec('rainforest', {silent:true});
        if(checkResult.code !== 0) {
            shell.echo('ERROR: Rainforest gem is not installed! :(');
            shell.echo('Install with: \'gem install rainforest-cli\'');
            return false;
        }

        shell.echo('Rainforest gem detected :) \n');

        // Upload tests
        if(options.upload) {
            shell.echo('Uploading tests...');
            var uploadResult = shell.exec('rainforest upload' + tokenString);
            if(uploadResult.code !== 0) {
                shell.echo('ERROR: Upload did not complete successfully');
                return false;
            }
        }

        // Build run command
        var runCmd = 'rainforest run';

        if(options.tag !== '') {
            runCmd += ' --tag ' + options.tag;
        } else {
            runCmd += ' all';
        }

        if(options.foreground) {
            runCmd += ' --fg';
        }

        if (typeof options.browsers !== 'undefined' && options.browsers.length > 0) {
            runCmd += ' --browsers ';
            options.browsers.forEach(function(browser, index) {
                if(index !== 1)
                    runCmd += ',';

                runCmd += browser;
            });
        }

        runCmd += tokenString;

        var runResult = shell.exec(runCmd);

        if(runResult.code !== 0) {
            shell.echo('ERROR: Test run did not complete successfully');
            return false;
        }
    });

};
