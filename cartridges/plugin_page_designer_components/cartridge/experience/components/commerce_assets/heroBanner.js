"use strict";
const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");
const URLUtils = require("dw/web/URLUtils");
const ImageTransformation = require("*/cartridge/experience/utilities/ImageTransformation.js");

/**
 * Render logic for the Hero Content asset
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    const model = new HashMap();
    const content = context.content;

    model.title = content.title;
    model.image = ImageTransformation.getScaledImage(content.image);
    model.description = content.shortDescription;
    model.cta = URLUtils.url(
        "Search-Show",
        "cgid",
        content.cta.getID()
    ).toString();

    const cacheForOneDay = require("~/cartridge/scripts/helpers/cacheForOneDay.js");
    cacheForOneDay(response);

    return new Template(
        "experience/components/commerce_assets/heroBanner"
    ).render(model).text;
};
