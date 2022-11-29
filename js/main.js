const {createApp} = Vue;

createApp({
    data(){
        return{
            error: false,
            newTask: '',
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
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
            this.tasks.unshift({text:this.newTask, done:false});
        }
    }
}).mount('#app')