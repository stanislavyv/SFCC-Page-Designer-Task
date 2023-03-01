"use strict";

const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");

const carouselBuilder = require("*/cartridge/scripts/experience/utilities/featuredProductsCarouselBuilder.js");

/**
 * Render logic for storefront.carousel layout.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    let model = modelIn || new HashMap();

    model = carouselBuilder.init(model, context);

    return new Template(
        "experience/components/commerce_layouts/featuredProductsCarousel"
    ).render(model).text;
};
