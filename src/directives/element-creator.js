/**
 * Created by Oleksandr Tserkovnyi on 8/12/16.
 * kemperomg@gmail.com
 */

import TodoModel from '../models/TodoModel';
  
class Ctrl {
  constructor (Todos) {
    this.Todos = Todos;
  }

  add () {
    const newInstance = angular.extend({}, new TodoModel(), {
      title: this.value
    });
    
    this.Todos.set(newInstance);
  }
}

class ElementCreator {
  constructor () {
    this.template = `
      <form ng-submit="$ctrl.add()">
        <label for="elementCreator">
          <span>Create todo item</span>
          <input type="text" ng-model="$ctrl.value" id="elementCreator" />
        </label>
      </form>
    `;
    this.controller = Ctrl;
  }
}

export default {
  get factory () {
    return new ElementCreator();
  },
  name: 'elementCreator'
};