# Gulp starter template

Writing up a new gulpfile each time for a new project is very annoying and depressing to me, (cause i'm super lazy)
i decided to make this gulp starter template (that fulfills most of my needs) and hope to relieve some pain.

## setup
- clone this repository then `npm install`
	- for projects that `package.json` already exists
	```
	"devDependencies": {
	    "autoprefixer": "^6.5.3",
	    "browser-sync": "^2.18.2",
	    "gulp": "^3.9.1",
	    "gulp-postcss": "^6.2.0"
	  }
	```
- make sure `gulp` is already installed globally
- setup the `config` file
	- see official document for `browserSync` options [here](https://www.browsersync.io/docs/options)
```js
//config.json
{
	"browserSync": {
		"server": {
            "baseDir": "./"
        }
    },
	"css": {
		"src" : "/path/to/css/src",
		"dest": "/path/to/css/dest"		
	},
	"js": {
		"src": "/path/to/css/js"
	},
	"html": {
		"src": "/path/to/html/pages"
	}
}
```
## tasks
- `serve`
	- add css prefix
	- live reload for css, js and html
- `css-auto-prefixer`
	- add css prefix
