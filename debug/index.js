#!/usr/bin/env node

/* eslint-disable */

require('dotenv').config();

const { VirtualAlexa } = require('virtual-alexa');
const R = require('ramda');
const events = require('./events');

const VOICE_MODEL = `${__dirname}/../models/en-GB.json`;
const EVENT = R.prop('EVENT', process.env);
const ACCESS_TOKEN = R.prop('ACCESS_TOKEN', process.env);

const { intentName, slots } = events[EVENT];

const alexa = VirtualAlexa.Builder()
  .handler('src/index.handler')
  .interactionModelFile(VOICE_MODEL)
  .create();

alexa.dynamoDB().mock();
alexa.filter((payload) => {
  payload.request.locale = 'en-GB';
  payload.session.user.accessToken = ACCESS_TOKEN;
});

const debug = () => alexa.intend(intentName, slots)
  .then(() => alexa.dynamoDB().reset())
  .catch(console.error);

module.exports = debug();
