"use strict";

/**
 * @namespace Home
 */

const server = require("server");
const consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
const pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");

const base = module.superModule;
server.extend(base);

/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
/**
 * Home-Show : This endpoint is called when a shopper navigates to the home page
 * @name Base/Home-Show
 * @function
 * @memberof Home
 * @param {middleware} - consentTracking.consent
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.replace(
    "Show",
    consentTracking.consent,
    function (req, res, next) {
        const Site = require("dw/system/Site");
        const PageMgr = require("dw/experience/PageMgr");
        const pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        const pageDesignerConfig = require("~/cartridge/pd-config");
        const page = PageMgr.getPage(pageDesignerConfig.PAGE_ID);

        if (page && page.isVisible()) {
            res.page(pageDesignerConfig.PAGE_ID);
        } else {
            res.render("home/homePage");
        }

        next();
    },
    pageMetaData.computedPageMetaData
);

module.exports = server.exports();
