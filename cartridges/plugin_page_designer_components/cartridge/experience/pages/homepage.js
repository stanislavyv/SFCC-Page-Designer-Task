"use strict";

const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");
const PageRenderHelper = require("*/cartridge/experience/utilities/PageRenderHelper.js");

/**
 * Render logic for the homepage.
 *
 * @param {dw.experience.PageScriptContext} context The page script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    const model = modelIn || new HashMap();

    const page = context.page;
    model.page = page;
    model.content = context.content;

    model.regions = PageRenderHelper.getRegionModelRegistry(page);

    if (PageRenderHelper.isInEditMode()) {
        const HookManager = require("dw/system/HookMgr");
        HookManager.callHook("app.experience.editmode", "editmode");
        model.resetEditPDMode = true;
    }

    model.CurrentPageMetaData = PageRenderHelper.getPageMetaData(page);

    const setCacheForOneDay = require("~/cartridge/scripts/helpers/setCacheForOneDay.js");
    setCacheForOneDay(response);

    return new Template("experience/pages/homepage").render(model).text;
};
