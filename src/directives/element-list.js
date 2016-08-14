/**
 * Created by Oleksandr Tserkovnyi on 8/12/16.
 * kemperomg@gmail.com
 */

class Ctrl {
  constructor (Todos) {
    this.Todos = Todos;
  }

  get todos () {
    return this.Todos.get();
  }

  complete () {
    this.Todos.save();
  }

  remove (key) {
    this.Todos.remove(key);
  }

  edit (todoItem) {
    todoItem.editing = true;
  }

  saveEdit (todoItem) {
    delete todoItem.editing;
    this.complete();
  }
}

class ElementList {
  constructor () {
    this.template = `
      <ul>
        <li ng-repeat="(key, todoItem) in $ctrl.todos"
            ng-class="{completed: todoItem.completed}">
          <label for="todo-{{::$index}}" ng-hide="todoItem.editing">
            <input type="checkbox"
                ng-model="todoItem.completed"
                ng-change="$ctrl.complete(todoItem)" id="todo-{{::$index}}" />
            <span>{{todoItem.title}}</span>
          </label>
          <form ng-submit="$ctrl.saveEdit(todoItem)" ng-show="todoItem.editing">
            <label for="todo-editing-{{::$index}}">
              <span>Editing {{::todoItem.title}}</span>
              <input type="text" ng-model="todoItem.title" id="todo-editing-{{::$index}}" autofocus>
            </label>
          </form>
          <a href="javascript:/*Edit todo item*/" ng-click="$ctrl.edit(todoItem)">Edit this todo</a>
          <span class="u-clickable" ng-click="$ctrl.remove(key)">
            (X)
          </span>
        </li>
      </ul>
    `;
    this.controller = Ctrl;
  }
}

export default {
  get factory () {
    return new ElementList();
  },
  name: 'elementList'
};