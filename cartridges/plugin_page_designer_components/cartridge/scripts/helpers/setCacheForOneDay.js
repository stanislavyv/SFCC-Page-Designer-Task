/**
 * Sets caching for 24 hours
 * @param {dw.system.Response} response
 */
module.exports = function (response) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    response.setExpires(expires);
};
