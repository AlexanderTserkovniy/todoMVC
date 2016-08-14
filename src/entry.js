/**
 * Created by Oleksandr Tserkovnyi on 8/12/16.
 * kemperomg@gmail.com
 */

import Name from './module.name';

import Controller from './controller';

import ElementCreator from './directives/element-creator';
import ElementList from './directives/element-list';

import Todos from './services/Todos'

angular.module(Name, [])
  .controller('Controller', Controller)

  .component(ElementCreator.name, ElementCreator.factory)
  .component(ElementList.name, ElementList.factory)

  .service('Todos', Todos);