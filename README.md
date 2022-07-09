# DEMO-PACKAGE-NODEJS 
This is a sample package which follows the instructions 
for publishing a NodeJS package to Yarn. Yarn is used for 
both ergonomics and performance. 

This repository can be used as a template for building packages. 
See section `Reusing as Template` for more info on how.

## Outline 
This `README.md` file is organized as follows: 

1. Outline 
2. Full Instructions 
3. Summarized/Compact Instructions
4. Code Structure 
5. Demo Package Installation Instructions
6. Reusing as Template
7. Adding Additional Files

## Full Instructions 
Full instructions for publishing a NodeJS package using 
Yarn can be found here: 
https://classic.yarnpkg.com/en/docs/creating-a-package

I made a `tinyurl.com` shortlinks for the 
tutorial link above:

https://tinyurl.com/how-to-package-nodejs

If you want, you can include the links above to your
bookmarks.

## Summarized/Compact Instructions 
In summary the insructions can be divided into the outline below
if you don't feel clicking the tutorial link again and again.

Full instructions can be found in the tutorials above in case 
the summary doesn't still help in recall.

1. Creating a Package 
    1. Creating the package folder 
        * This involves creating the package folder using 
          `npm init` and supplying related details to the 
          `package.json` file. 
        * A terminal-based form will be provided
          for entering the `package.json` contents.
    1. Making sure that the `package.json` contain essential and extra 
       fields after setting up:
        * Common `package.json` fields: 
            1. name
            1. version
            1. description
            1. main 
            1. repository 
            1. author
            1. license
        * Additional fields for `package.json`: 
            1. keywords
            1. homepage
            1. bugs
            1. contributors 
            1. files
            1. bin
    1. Choosing a License
        * Three common licenses for NodeJS packages as stated in the tutorial
            1. MIT License
            1. Apache License 2.0 
            1. GNU General Public License 
        * The tutorial referenced a more complete list of licenses with 
            comparisons and summaries of their corresponding permissions, conditions, and liabilities:
            * More complete details for LICENSING: https://choosealicense.com/licenses/ 
    1. Code Sharing 
        * GitHub
        * GitLab 
        * BitBucket
    1. Documentation
        * Specify a `README.md` file 
    1. Keeping Packages Small (some tips from Yarn)
        * Break large packages into smaller packages
        * Don't include tests or any other files that aren't necessary for packaging
        * Prefer smaller dependencies unless you have a good reason not to
2. Publishing a Package 
    1. Log in to `yarn` : `yarn login` (only username and email are asked, no password is asked yet)
        * An `npm` account is needed for the credentials
    2. Publish: `yarn publish`
    3. Accessing package: `yarn add [package]` 


## Code Structure 

```bash
demo-package-nodejs 
    src/                              # Package Files
        say-hello-world.js
        say-hi.js 
        random-rainbow-color.js
    tests/                            # Test Files
        main.test 
    index.js                          # Package Entry Point
    README.md                         # This file
    LICENSE.md                        # MIT License 
```


## Demo Package Installation Instructions
The demo package has a simple API of 3 functions. 

* `.sayHelloWorld()`
* `.sayHi(name)`
* `.randomRainbowColor()` - uses the `chance` package 

To use this package: 
`yarn add demo-package-nodejs` (preferred) 
`npm install demo-package-nodejs`

Then: 
```js
const demo_package = require("demo-package-nodejs") 
console.log(".sayHello() => " + demo_package.sayHelloWorld()) 
console.log(".sayHi('John') => " + demo_package.sayHi('John'))
console.log(".randomRainbowColor() => " + demo_package.randomRainbowColor())
```
It should return the following: 
```
.sayHello() => Hello, World! 
.sayHi('John') => Hi, John!
.randomRainbowColor() => blue
```

## Reusing as Template
If you intend to reuse this package as a template for future package projects, use the following command: 

`git clone https://gitlab.com/demo-package/demo-package-nodejs.git`

Edit `package.json` to match your project description.

You can also run delete `package.json` and run `npm init` again.

## Adding Additional Files
Make sure to add additional files to the `files` field of `package.json`. 

Any new files in `bin/` and `src/` are added by default.  
