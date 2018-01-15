import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('redenvelopes', function() {
    this.route('create');
  });
  this.route('questions', function() {
    this.route('create');
  });
  this.route('passwords', function() {
    this.route('create');
  });
  this.route('profiles', function() {});
  this.route('shows');
  this.route('menu');
});

export default Router;
