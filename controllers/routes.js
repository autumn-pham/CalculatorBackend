const express = require('express')
const Result = require('../models/results.js')
const results = express.Router()

module exports = function(server) {
  // testing
  server.route({
    method: 'GET',
    path: '/',
    handler: function(e) {
      let data = {
        msg: 'API calculations';
      }
      return data;
    }
  })

  // get sum
  server.route({
    method: 'GET'.
    path: '/sum/{x}/{y}',
    handler: function(e) {
      const x = parseInt(e.params.x);
      const y = parseInt(e.params.y);

      let data = {
        result: x + y
      }
      return data;
    };
  })

  // get product
  server.route({
    method: 'GET'.
    path: '/max/{a}',
    handler: function(e) {
      const a = parseInt(e.params.a);

      let data = {
        product: a * 2
      }
      return data;
    }
  })

  // get a power
  server.route({
    method: 'GET'.
    path: '/power/{s}',
    handler: function(e) {
      const s = parseInt(e.params.s);

      let data = {
        result: Math.pow(s, 2);
      }
      return data;
    }
  })

}
