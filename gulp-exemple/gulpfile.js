const {src, dest, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// exports.default = async () => {
//     console.log('gulp')
// }

// exports.default = (done) => {
//     console.log('gulp')
//     done()
// }

exports.copy = async () => {
    return src('./styles/*.scss').pipe(dest('output'))
}
exports.transform = async () => {
    return src('./styles/*.scss').pipe(sass()).pipe(dest('output'))
}
function styles(){
    return src('./styles/*.scss').pipe(sass()).pipe(dest('output'))
}
exports["build:watch"] =  () => {
    return watch('./styles/*.scss', styles)
}