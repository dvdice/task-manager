<template>
    <header>
        <v-icon icon="$vuetify"></v-icon>
        <v-text-field
            v-model="searchQuery"
            placeholder="Поиск..."
            prepend-inner-icon="mdi-magnify"
            density="compact"
            variant="outlined"
            single-line
            hide-details
            class="search-input"
        ></v-text-field>
        <div class="flex align-center">
            <v-icon icon="mdi-bell"></v-icon>
            <span class="emoji-avatar">{{ randomEmoji }}</span>
        </div>
    </header>
    <aside></aside>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const searchQuery = ref('');
const randomEmoji = ref('👤'); // Дефолтный эмодзи (на случай ошибки)

// Массив эмодзи для аватарок
const emojis = ['😀', '😎', '🤖', '👽', '🦄', '🐶', '🐱', '🦊', '🐻', '🐼', '🦁', '🐯'];

// Функция для выбора случайного эмодзи
const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

// Устанавливаем случайный эмодзи при загрузке компонента
onMounted(() => {
    randomEmoji.value = getRandomEmoji();
});
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
    height: 76px;
    padding: 5px;
    /* background-color: #1E1F25; */
}

.search-input {
    width: 20%;
    max-width: 20%;
    height: 44px;
    max-height: 44px;
}

.emoji-avatar {
    font-size: 40px; /* Размер эмодзи */
    margin-left: 12px; /* Отступ от колокольчика */
    cursor: pointer; /* Курсор-указатель (опционально) */
    user-select: none; /* Запрет выделения текста */
}
</style>
