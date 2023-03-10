"use strict";

const PageRenderHelper = require("*/cartridge/experience/utilities/PageRenderHelper.js");

/**
 * Helper to encapsulate common code for building a carousel
 *
 * @param {Object} model - model object for a component
 * @param {Object} context - model object for a component
 * @return {Object} model - prepared model
 */
function init(model, context) {
    model.regions = PageRenderHelper.getRegionModelRegistry(context.component);

    const xsColSize = 12 / parseInt(2, 10);
    const mdColSize = 12 / parseInt(3, 10);

    const sizeExtraSmall = " col-" + xsColSize;
    const sizeMedium = " col-md-" + mdColSize;

    model.regions.slides.setClassName("carousel-inner row");
    model.regions.slides.setComponentClassName(
        "carousel-item" + sizeExtraSmall + sizeMedium
    );
    model.regions.slides.setComponentClassName(
        "carousel-item active" + sizeExtraSmall + sizeMedium,
        { position: 0 }
    );

    const numberOfSlides = model.regions.slides.region.size;
    for (let i = 0; i < numberOfSlides; i++) {
        model.regions.slides.setComponentAttribute("data-position", i, {
            position: i,
        });
    }
    model.id = "carousel-" + context.component.getID();
    model.numberOfSlides = model.regions.slides.region.size;
    model.title = context.content.carouselTitle;
    return model;
}

module.exports = {
    init: init,
};
