<template>
  <div class="col-sm-12">
    <form v-on:submit.prevent="addNewTodo($event.target[0].value)">
      <div class="form-group" >
        <input type="text" class="form-control" v-model="tempTodo.title" placeholder="Add a new Todo">
      </div>
      <div class="form-group">
        <button class="btn btn-success" >Add Todo</button>
      </div>
    </form>
  </div>
</template>

<script>
export default{
  data(){
    return{
        tempTodo: {id: null, title: '', completed: false},
    }
  },

  methods: {
      addNewTodo: function (value) {
       this.tempTodo = {id: null, title: '', completed: false},
       this.$emit('add-to-do-parent',value)
     }
   },
}
</script>
