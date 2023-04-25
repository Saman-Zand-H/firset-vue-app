<template>
    <div 
         :class="[reminded ? 
                    'border-5 border-start border-success' : '' , 
                    'card', 
                    'card-body',
                    'my-3',
                    'align-items-start']"
        >
        <div class="d-flex align-items-baseline">
            <div class="d-flex justify-content-start">
                {{ task_title }} at {{ task_date }}
            </div>
            <div class="d-flex justify-content-end align-baseline">
                <button @click="$emit('handle-delete-task', id)" class="btn btn-link d-flex justify-content-end align-items-baseline" type="button">
                    <i class="text-danger fa fa-trash"></i>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "TaskItem",
        props: ["task_title", "task_date", "reminded", "id"],
        emits: ["handle-delete-task"]
    }
</script>
