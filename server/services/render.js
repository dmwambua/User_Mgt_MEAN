//this file is used to render files using router helping separate callback functions from the routes that are in router.js for easy maintenance
exports.homeRoutes = (req, res) => {
    res.render('index');
}