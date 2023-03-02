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
    const content = context.content;
    const component = context.component;

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    model.width =
        content.containerWidth === "full-width"
            ? "container-fluid"
            : "container";

    model.backgroundColor =
        "background-color: " +
        (content.backgroundColor ? content.backgroundColor : "none");

    model.marginX = "mx-" + (content.marginX ? content.marginX : 0);
    model.marginY = "my-" + (content.marginY ? content.marginY : 0);

    model.paddingX = "px-" + (content.paddingX ? content.paddingX : 0);
    model.paddingY = "py-" + (content.paddingY ? content.paddingY : 0);

    return new Template(
        "experience/components/commerce_layouts/container"
    ).render(model).text;
};
