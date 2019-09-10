'use strict';

const { Router } = require('express');
const router = Router();
const User = require('./../models/user');
const bcryptjs = require('bcryptjs');

const routeGuardMiddleware = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/authentication/sign-in');
  } else {
    next();
  }
};

router.get('/main', (req, res, next) => {
    res.send('/public/images/cat.gif');
});

router.get('/private', (req, res, next) => {
    res.send('private');
});