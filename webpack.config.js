const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js", 
    mode:"development",
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: "[name].js"
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body",
            scriptLoading: "blocking",
        })
    ]
};