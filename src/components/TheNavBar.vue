<template>
  <nav id="nav" class="nav -shadow">
    <ul class="nav-menu">
      <li class="nav-menu-link">
        <router-link class="nav-menu-link__item" to="/book-list">Каталог книг</router-link>
      </li>
      <li class="nav-menu-link">
        <router-link class="nav-menu-link__item" to="/book-manage">Управление книгами</router-link>
      </li>
      <li class="nav-menu-link">
        <router-link class="nav-menu-link__item" to="/order-list">Заказанные книги</router-link>
      </li>
      <li class="nav-menu-link">
        <router-link class="nav-menu-link__item" to="/Retrieved-boks">Сданные книги</router-link>
      </li>
      <li class="nav-menu-link">
        <router-link class="nav-menu-link__item" to="/Statistics">Статистика</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>
