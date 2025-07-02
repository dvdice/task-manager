<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="flex flex-col gap-8 items-center">
            <h1 class="text-3xl font-bold">Вход</h1>
            <v-text-field
                v-model="form.email"
                class="w-[700px]"
                label="Email"
                :error-messages="$v.email.$errors.map(e => String(e.$message))"
                @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                class="w-[700px]"
                type="password"
                label="Пароль"
                :error-messages="$v.password.$errors.map(e => String(e.$message))"
                @blur="$v.password.$touch()"
            ></v-text-field>
            <v-btn
                class="w-25 h-55"
                :disabled="$v.$invalid"
                :loading="isSubmitting"
                @click="login"
            >
                Войти
            </v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import {email, helpers, minLength, required} from '@vuelidate/validators'
import {computed, type Ref} from "vue";
import type {LoginForm} from "@/types/LoginForm.ts";
import { useUserStore } from "@/stores/userList";

const userStore = useUserStore();

const rules = computed(() => ({
    email: {
        required: helpers.withMessage('Введите почту', required),
        email: helpers.withMessage('Введите существующую почту', email)
    },
    password: {
        required: helpers.withMessage('Введите пароль', required),
        minLength: helpers.withMessage('Минимальная длина пароля - 8 символов', minLength(8))
    }
}));

const form = ref<LoginForm>({
    id: crypto.randomUUID(),
    email: '',
    password: ''
})

const $v = useVuelidate(rules, form);
const isSubmitting: Ref<boolean> = ref(false);


const login = (async () => {
    try {
        isSubmitting.value = true;
        const isValid = await $v.value.$validate()
        if (!isValid) return

        console.log('Форма валидна')
        if (!userStore.getUserById(form.value.id)){
            userStore.add({email: form.value.email, id: form.value.id})
        }

    } finally {
        isSubmitting.value = false;
    }
});

</script>

<style scoped lang="sass">

</style>
