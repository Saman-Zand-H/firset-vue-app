<template>
    <div class="modal fade" id="NewTaskModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">New Task</div>
                    <button id="closeModal" class="btn-close" data-bs-dismiss="modal" type="button"></button>
                </div>
                <div class="modal-body">
                    <form id="taskForm">
                        <input 
                               v-model="task_title" 
                               type="text" 
                               class="form-control my-3" 
                               name="taskTitle" 
                               placeholder="what is you task?"
                               required
                              >
                        <input 
                               v-model="task_date" 
                               type="text" 
                               class="form-control my-3" 
                               name="taskDate" 
                               placeholder="and when is it?"
                               required
                              >

                        <div class="form-check my-3">
                            <label for="reminderIn" class="form-check-label">You need reminder?</label>
                            <input v-model="reminded" type="checkbox" class="form-check-input" name="reminded" id="reminderIn">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" type="button" @click="handleSubmit">
                        Submit
                    </button>
                    <button class="btn btn-danger" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery/dist/jquery.js'

    export default {
        data() {
            return {
                "reminded": true,
                "task_title": 'New',
                "task_date": '02/02/2022'
            }
        },
        name: "NewTaskModal",
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                if (this.task_title === '' || this.task_date === '') {
                    alert("You should fill 'Title' field.")
                    return
                }
                let data = {
                    title: this.task_title,
                    date: this.task_date,
                    reminded: this.reminded
                }
                $("#closeModal").click()
                this.$emit("new-task-submit", data)
            }
        },
        emits: ["new-task-submit"]
    }
</script>
