// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import TodoItems from './components/Todo/TodoItems.vue';
import TodoAddForm from './components/Todo/TodoAddForm.vue';

Vue.use(VueResource);
Vue.component('todo-item',TodoItems);
Vue.component('todo-add',TodoAddForm);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div class="container" id="vue-app">
      <div class="row">
        <div class="col-sm-12">
          <h1>My Todos</h1>
          <todo-item :todos="todos"></todo-item>
        </div>
        <todo-add v-model="newTodo" v-on:add-to-do-parent="addNewTodo"></todo-add>
      </div>
    </div>`,
  data: {
    todos: [{id: 1, title: 'Go shopping', completed: true}],
    newTodo: {}
  },


  methods:{
  addNewTodo: function(value) {
      this.todos.push({
        id: Math.floor(Date.now()),title: value, completed: false
      })
    }
  },

  filters:{
    'uppercase': function(value){
      return this.value.toUpperCase();
    }
  }

})
