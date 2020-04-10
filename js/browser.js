'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.VC_REVOCATION_LIST_CONTEXT_V1_URL,
  require('../contexts/vc-revocation-list-2020.jsonld'));
