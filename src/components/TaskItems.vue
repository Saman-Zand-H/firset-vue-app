<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem 
                  @handle-delete-task="$emit('handle-delete-task', task.id)" 
                  :id="task.id" :task_title="task.title" :task_date="task.date" :reminded="task.reminded" />
    </div>
</template>

<script>
    import TaskItem from './TaskItem.vue'
    export default {
        name: 'TaskItems',
        props: {
            tasks: Array
        },
        components: {
            TaskItem
        },
        emits: ["handle-delete-task"]
    }
</script>
