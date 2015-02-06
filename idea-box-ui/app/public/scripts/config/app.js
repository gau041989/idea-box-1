'use strict';

// global variable

/* see jshint error http://jslinterrors.com/redefinition-of-a/ */
/*jshint -W079 */
var _APP_         = 'com.cdk.internal.ideaApp',
  _CONTROLLERS_ = _APP_ + '.controllers',
  _DIRECTIVES_  = _APP_ + '.directives',
  _FILTERS_     = _APP_ + '.filters',
  _MODULES_     = _APP_ + '.modules',
  _SERVICES_    = _APP_ + '.services';

// Declare app level module which depends on filters, services, etc
// top-level module
var app = angular.module(_APP_, [
  // Your application's namespaced modules, so they won't conflict with other modules. 
  // You shouldn't have to touch these unless you want to.             
  _CONTROLLERS_,
  _DIRECTIVES_,
  _FILTERS_,
  _MODULES_,
  _SERVICES_,

  'ui.router',// 'ngRoute'
  'ui.bootstrap',//  'ui.bootstrap.tpls',
  'textAngular'
]);

// Create global modules. You shouldn't have to touch these.
angular.module(_CONTROLLERS_, []);
angular.module(_DIRECTIVES_, []);
angular.module(_FILTERS_, []);
angular.module(_MODULES_, []);
angular.module(_SERVICES_, []);

/*
  browser refresh call
*/
angular.module(_APP_).run(function($rootScope, ENV) {
  console.log('angular.module app run ' + app);

  //var emptyRootModel = {user};
  $rootScope.rootUi = angular.copy(ENV.emptyRootUi);
  $rootScope.rootModel = angular.copy(ENV.emptyRootModel);
  $rootScope.rootModel.calDateFormat = ENV.dateFormat;
  $rootScope.rootModel.calDateOptions = ENV.dateOptions;
  
//  AuthenticationService.authCheck();

});
