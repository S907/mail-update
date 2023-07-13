const path=require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports={
    entry:path.join(__dirname, "src", "public", "js", "main.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                laoder:"babel-loader",
                query:{
                    presets:["babel-preset-react"]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname, "src", "views","index.html")
        })
    ]
}