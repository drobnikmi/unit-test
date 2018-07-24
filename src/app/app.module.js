'use strict';
import angular from 'angular';
import homeController from './home.controller';
import ThreadService from './thread.service';


/** Style Dependency */
import '../assets/sass/style.scss';

export default (() => {
    angular.module('app', [])
      .controller('homeController', homeController)
      .service('ThreadService', ThreadService)
})();

