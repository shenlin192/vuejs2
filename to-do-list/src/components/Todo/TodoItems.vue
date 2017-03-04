<template>
  <div class="">
    <pre>{{$data}}</pre>
    <ul class="list-group" v-if="todos.length > 0" >
      <li class="list-group-item"
        v-for="todo in todos" track-by="$index">
          <span class="col-md-9" v-bind:class="{'completed':todo.completed}">{{todo.title| uppercase}}</span>
          <button class="btn btn-warning btn-xs margin-right-10"
          v-on:click='deleteTodo(todo)'>Delete</button>
          <button class="btn btn-xs"
          v-bind:class="{'btn-success': todo.completed, 'btn-danger': !todo.completed}"
          v-on:click='todoCompleted(todo)'>{{todo.completed ? 'completed':'Pending'}}</button>
      </li>
    </ul>
  </div>
</template>


<script>
export default{
  /*
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
          console.log(response);
        if(response.status == 200){
          this.todos_=response
        }

      },(response) => {
        // error callback
        //console.log(response);
      });

      this.$http.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
        console.log(response);
      },(response) => {
        // error callback
        //console.log(response);
      })

    },
*/
    props:['todos'],

    data(){
      return {
        todos_:{}
      }
    },

    methods: {

      deleteTodo(todo){

        let index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
      },

      todoCompleted(todo){
        todo.completed = !todo.completed
      }
    },

    filters: {
      'uppercase': function(value){
        return value.toUpperCase();
      }
    }
}
</script>

<style scoped>
span.completed{
  text-decoration: line-through;
}

.margin-right-10{
  margin-right: 10px
}

</style>
