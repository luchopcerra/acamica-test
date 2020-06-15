
module.exports = function (app) {
    app.get('/', function (_req, res) {
        res.redirect('/payment-method');
    });

    app.get('/payment-method', function (_req, res) {
        res.render("payment-method", {}, (err, html) => {
            if (err) {
                res.send('Error ocurred while rendering');
            } else {
                res.send(html);
            }
        });
    });

    app.post('/payment-method', function (_req, res) {
        // mock/fake a thank page.
        res.render("thanks", {}, (err, html) => {
            if (err) {
                res.send('Error ocurred while rendering');
            } else {
                res.send(html);
            }
        });
    });
};