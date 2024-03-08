const path = require('path')

module.exports = path.dirname(process.mainModule.filename) //here i am adding export , creting the path with the parent directory, importing path and than we will use dirname not join here dirname returns the directory name of the path . we just have to find out which directory or which file we want to get the directory name well here we can also use global process variable that is also a variable is available in all file we don't need to import it and there we have main module propertythis will refer to the main module property, this will refer to main module that startingur application like )app.js( so basically the module we r creating in app.js and now we can call filename to findoutwhich file this module was spanup

//dirname returns the directory of the path
// mainModule refer to main module like app.js
// and than filename to find which file this module was spunup

// const direction = path.dirname(process.mainModule.filename) 
// console.log('direction',direction);