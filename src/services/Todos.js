/**
 * Created by Oleksandr Tserkovnyi on 8/14/16.
 * kemperomg@gmail.com
 */

import Name from '../module.name';

class Todos {
  constructor () {
    this.todos  = this.getFromDB()  || {};
    this.ID     = this.size()       || 0;
  }

  size () {
    return Object.keys(this.todos).length;
  }

  // Save to "DB"
  saveToDB () {
    const valToSave = angular.toJson(this.todos);
    localStorage.setItem(Name, valToSave);
  }

  // From "DB"
  getFromDB () {
    const data = localStorage.getItem(Name);
    return JSON.parse(data);
  }

  getID () {
    this.ID += 1;
    return this.ID;
  }

  set (val) {
    this.todos[this.getID()] = val;
    this.saveToDB();
  }

  get () {
    return this.size() ? this.todos : this.getFromDB();
  }
  
  remove (key) {
    delete this.todos[key];
    this.saveToDB();
  }
  
  save () {
    this.saveToDB();
  }
}

export default Todos;