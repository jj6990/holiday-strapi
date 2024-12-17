'use strict';

/**
 * internal-link router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::internal-link.internal-link');
