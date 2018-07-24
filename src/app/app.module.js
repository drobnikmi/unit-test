'use strict';
import angular from 'angular';
import ThreadController from './thread.controller';
import ThreadService from './thread.service';


/** Style Dependency */
import '../assets/sass/style.scss';

export default (() => {
    angular.module('app', [])
      .controller('ThreadController', ThreadController)
      .service('ThreadService', ThreadService)
})();

