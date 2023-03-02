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

    model.categoryLink = URLUtils.url(
        "Search-Show",
        "cgid",
        content.categoryId
    ).toString();
    model.categoryDescription = content.categoryDescription;

    model.image = ImageTransformation.getScaledImage(content.image);
    model.ctaTitle = content.ctaTitle;
    model.isCtaPositionedAtTop = content.ctaPosition === "top";

    return new Template(
        "experience/components/commerce_assets/category"
    ).render(model).text;
};
