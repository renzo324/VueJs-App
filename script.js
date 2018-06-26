new Vue({
    el: '#app',
    data: {
        tasks: [     
        ],
        newTask: {name : ''},
        editIndex : ''
    },
    methods: {
        remove: function(task, index){
            this.tasks.$remove(task)
            if(this.editIndex == index){
                this.editIndex = ''
                this.newTask = {
                    name : ''
                }
            }
        },
        updateTask: function(){
            return this.editIndex !== ''
        },
        edit: function(task, index){
            this.newTask.name = task.name
            this.editIndex = index
        },
        pushTask: function(task){
            return task.name != '' 
        },
        update: function(){
            var newTask = this.newTask
            if(this.pushTask(newTask)){
                this.newTask = {
                    name : ''
                }
                this.tasks.$set(this.editIndex, newTask)
                this.editIndex = ''
            }
        },
        add: function(){
            var newTask = this.newTask
            if(this.pushTask(newTask)){
                this.tasks.push(newTask)
                this.newTask = {
                    name : ''
                }
            }
        }
    }
})