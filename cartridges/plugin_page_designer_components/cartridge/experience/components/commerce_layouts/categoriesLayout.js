"use strict";

const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");
const PageRenderHelper = require("*/cartridge/experience/utilities/PageRenderHelper.js");

/**
 * Render logic for the categories layout
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    const model = modelIn || new HashMap();
    const component = context.component;
    const content = context.content;

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    const getColumnOrder = require("~/cartridge/experience/utilities/getColumnOrder.js");

    const firstColumnOrder = getColumnOrder({
        xs: content.firstColumnXsPosition,
        sm: content.firstColumnSmPosition,
        md: content.firstColumnMdPosition,
        lg: content.firstColumnLgPosition,
    });

    const secondColumnOrder = getColumnOrder({
        xs: content.secondColumnXsPosition,
        sm: content.secondColumnSmPosition,
        md: content.secondColumnMdPosition,
        lg: content.secondColumnLgPosition,
    });

    const thirdColumnOrder = getColumnOrder({
        xs: content.thirdColumnXsPosition,
        sm: content.thirdColumnSmPosition,
        md: content.thirdColumnMdPosition,
        lg: content.thirdColumnLgPosition,
    });

    model.firstColumnOrder = firstColumnOrder;
    model.secondColumnOrder = secondColumnOrder;
    model.thirdColumnOrder = thirdColumnOrder;

    return new Template(
        "experience/components/commerce_layouts/categoriesLayout"
    ).render(model).text;
};
