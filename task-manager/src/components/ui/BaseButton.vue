<template>
    <v-btn
        class="px-4 py-2 rounded transition-all"
        :variant="variant"
    >
        <slot/>
    </v-btn>
</template>

<script setup lang="ts">
import { VBtnVariant } from '@/types/vuetify'
import type {PropType} from "vue";

defineProps({
    variant: {
        type: String as PropType<VBtnVariant>,
        default: 'flat'
    }
});
</script>

<style scoped lang="sass">

</style>
