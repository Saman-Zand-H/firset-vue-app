<template>
    <nav class="navbar navbar-expand-lg bg-light px-3">
        <a class="navbar-brand" href="#">Reminder</a>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <button 
                        class="btn btn-success mt-2" 
                        type="button" 
                        @click="$emit('open-new-task-modal')"
                        v-if="show_button"
                       >
                    {{ btn_text }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "TaskHeader",
        props: {
            btn_text: String,
            show_button: Boolean
        },
        emits: ["open-new-task-modal"]
    }
</script>
