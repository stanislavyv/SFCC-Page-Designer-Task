"use strict";

const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");
const PageRenderHelper = require("*/cartridge/experience/utilities/PageRenderHelper.js");

/**
 * Render logic for the Instagram Post Layout
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    const model = modelIn || new HashMap();
    const component = context.component;

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    const cacheForOneDay = require("~/cartridge/scripts/helpers/cacheForOneDay.js");
    cacheForOneDay(response);

    return new Template(
        "experience/components/commerce_layouts/categoriesLayout"
    ).render(model).text;
};
