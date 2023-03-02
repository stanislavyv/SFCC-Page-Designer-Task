/**
 * Returns an object, containing order attributes for a column
 * @param {Object} columnPositionAttributes
 * @returns {Object}
 */
module.exports = function (columnPositionAttributes) {
    const columnOrder = {
        xs: columnPositionAttributes.xs
            ? `order-${columnPositionAttributes.xs} `
            : "",
        sm: columnPositionAttributes.sm
            ? `order-sm-${columnPositionAttributes.sm} `
            : "",
        md: columnPositionAttributes.md
            ? `order-md-${columnPositionAttributes.md} `
            : "",
        lg: columnPositionAttributes.lg
            ? `order-lg-${columnPositionAttributes.lg} `
            : "",
    };

    return columnOrder;
};
