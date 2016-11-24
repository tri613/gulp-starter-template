# Gulp starter template

Writing up a new gulpfile each time for a new project is so annoying and depressing,  
i decided to make this gulp starter template (that fulfills most of my need) and hope to relieve some pain.

## setup
- clone this repository then `npm install`
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