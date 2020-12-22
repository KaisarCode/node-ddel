// Delete dir recursively
var fs = require('fs');
function ddel(path) {
    if(fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) {
                // recurse
                ddel(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        }); fs.rmdirSync(path);
    }
}

// Export
module.exports = ddel;
