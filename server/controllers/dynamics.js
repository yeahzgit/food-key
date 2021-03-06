const HttpError = require('some-http-error');
const Dynamics = require('../models').Dynamics;
const User = require('../models').User;
const Comment = require('../models').Comment;

const dynamicsController = {};

dynamicsController.getDynamicsById = (req, res, next) => {
  const dynamicsId = req.params.dynamicsId;
  Dynamics.findDynamicsById(dynamicsId).then(dynamics => {
    res.success(dynamics);
  }).catch(next);
}

dynamicsController.addDynamics = (req, res, next) => {
  const body = Object.assign(new Dynamics(), req.body);
  Dynamics.addDynamics(body).then(dynamics => {
    res.success(dynamics);
  }).catch(next);
}

dynamicsController.updateDynamicsById = (req, res, next) => {
  const dynamicsId = req.params.dynamicsId;
  Dynamics.updateDynamicsById(dynamicsId, req.body).then(dynamics => {
    return Dynamics.findDynamicsById(dynamics._id);
  }).then(dynamics => {
    res.success(dynamics);
  }).catch(next);
}

dynamicsController.removeDynamicsById = (req, res, next) => {
  const dynamicsId = req.params.dynamicsId;
  Dynamics.removeDynamicsById(dynamicsId).then(() => {
    res.success(null, 204);
  }).catch(next);
}

dynamicsController.getSelfDynamicsByUserId = (req, res, next) => {
  const userId = req.params.userId;
  Dynamics.getSelfDynamicsByUserId(userId).then(dynamics => {
    res.success(dynamics);
  }).catch(next);
}

dynamicsController.getDynamicsByUserId = (req, res, next) => {
  const userId = req.params.userId;
  User.findUserFollow(userId).then(user => {
    const length = user.follow.push(user._id);
    return Dynamics.getDynamicsByFollowId(user.follow);
  }).then(dynamics => {
    res.success(dynamics);
  }).catch(next);
}

dynamicsController.getRecommendDynamics = (req, res, next) => {
  Dynamics.getRecommendDynamics().then(dynamics => {
    res.success(dynamics);
  }).catch(next);
}

module.exports = dynamicsController;