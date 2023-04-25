<template>
    <div class="card card-body border border-1 rounded text-center">
        <h6 class="display-5">Version 1.0.0 (Version Name: BULLSHIT)</h6>
        <router-link 
                     class="btn btn-info my-3 w-25 mx-auto" 
                     :to="{ name: 'home' }"
                    >
            Go Back
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'AboutView'
}
</script>
