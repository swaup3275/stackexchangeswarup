'use strict';

/**
 * Required modules.
 */
var query = require('../query')
  , post = require('../post')
  , Logger = require('devnull')
  , log = new Logger({ timestamp: false });


/**
 * Gets all the questions on the site or returns the questions identified in [ids].
 *
 * @param {Object} criteria
 * @param {Function} callback return results
 * @param {Array} ids collection of IDs
 * @api public
 */
function users (criteria, callback, ids) {
  ids = ids || [];
  query('users/' + ids.join(';'), criteria, callback);
}

/**
 * Gets the answers to a set of questions identified in [ids].
 *
 * @param {Object} criteria
 * @param {Function} callback return results
 * @param {Array} ids collection of IDs
 * @api public
 */

// Expose commands.
module.exports.users = users;


