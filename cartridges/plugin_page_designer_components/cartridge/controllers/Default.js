"use strict";

/**
 * @namespace Default
 */

const server = require("server");
const consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
const pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");

const base = module.superModule;
server.extend(base);

/** when sitepath is defined in the site aliases from business manager, homepage will be rendered directly */
/**
 * Default-Start : This end point is the root of the site, when opening from the BM this is the end point executed
 * @name Base/Default-Start
 * @function
 * @memberof Default
 * @param {middleware} - consentTracking.consent
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.replace(
    "Start",
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
