'use strict';

/**
 * internal-link service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::internal-link.internal-link');
