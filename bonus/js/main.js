const {createApp} = Vue;

createApp({
    data(){
        return{
            error: false,
            newTask: '',
            myClass: 'done',
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTask(){
            
            if(this.newTask.length < 5 || this.newTask === ''){
                
                // error
                this.error = true;

            }else {
                
                this.tasks.unshift({text:this.newTask, done:false});

                this.error = false;
            
            }
            
            this.newTask='';

        },
        deleteTask(indexArray){

            this.tasks.splice(indexArray, 1);

        },
        taskDone(indice){

            this.tasks[indice].done = true;

        }
    }
}).mount('#app')