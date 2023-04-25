<template>
    <NewTaskModal @new-task-submit="submitTask" />
    <button 
            id="openModalBtn" 
            class="d-none" 
            data-bs-toggle="modal" 
            data-bs-target="#NewTaskModal"
           ></button>
    <TaskItems :tasks="tasks" @handle-delete-task="deleteTask" />
</template>

<script>
    import NewTaskModal from '../components/NewTaskModal.vue'
    import TaskItems from '../components/TaskItems.vue'

    export default {
        name: 'HomeView',
        data() {
            return {
                tasks: []
            }
        },
        components: {
            NewTaskModal,
            TaskItems
        },
        methods: {
            async getTasks() {
                let fetchedData = await fetch("http://localhost:5000/tasks")
                let data = await fetchedData.json()
                return data
            },
            async submitTask(data) {
                let reqData = {
                    "title": data.title,
                    "date": data.date,
                    "reminded": data.reminded,
                }
                let res = await fetch("http://localhost:5000/tasks/",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(reqData)
                    }
                )
                let fetchedData = await res.json()
                this.tasks = [...this.tasks, fetchedData]
            },
            async deleteTask(id) {
                await fetch(`http://localhost:5000/tasks/${id}/`,
                    {
                        method: "DELETE"
                    })
                this.tasks = this.tasks.filter((task) => { return task.id !== id })
            }
        },
        async created() {
            this.tasks = await this.getTasks()
        }
    }
</script>