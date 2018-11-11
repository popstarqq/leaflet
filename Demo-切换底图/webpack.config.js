const path=require("path");
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,'./static/'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
              }
        ]
    }
}