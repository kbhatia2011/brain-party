import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('how-it-works');
    this.route('the-creators');
    this.route('the-idea');
  });
  this.route('events');
  this.route('contact-us', function() {
    this.route('present');
    this.route('feedback');
  });
});

export default Router;
