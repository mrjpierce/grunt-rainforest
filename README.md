# grunt-rainforest

> A grunt plugin for running rainforest QA tasks

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rainforest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rainforest');
```

## The "rainforest" task

### Overview
In your project's Gruntfile, add a section named `rainforest` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rainforest: {
    options: {
      // Task-specific options go here.
    }
  }
});
```

### Options

#### options.apiBaseUrl
Type: `String`
Default value: `'https://app.rainforestqa.com'`

Specify a different API url

#### options.token
Type: `String`
Default value: `''`

The token provided to you by Rainfoest QA. Available at: [https://app.rainforestqa.com/settings/integrations?showApi=true](https://app.rainforestqa.com/settings/integrations?showApi=true)

#### options.tag
Type: `String`
Default value: `''`

Specify a specific group of tests that have been tagged as such.

#### options.tag
Type: `Boolean`
Default value: `false`

Specify whether the task should upload tests before running them.

#### options.foreground
Type: `Boolean`
Default value: `false`

Results in the foreground. Will not return until the run is complete.

### Usage Examples

## Release History
0.1.3 - Current Release
