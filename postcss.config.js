module.exports = {
    plugins: [
        require('postcss-nested'),
        require('autoprefixer')({overrideBrowserslist: ["last 2 versions"]}),
    ],
};