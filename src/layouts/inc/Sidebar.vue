<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <a href="/" class="brand-link">
            <img src="/adminlte/dist/img/AdminLTELogo.png" :alt="this.$store.state.app.name" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">{{ this.$store.state.app.name }}</span>
        </a>

        <div class="sidebar">

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="/adminlte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <nav-item icon="fas fa-chart-pie" link="/">
                        Статистика
                    </nav-item>
                    
                    <nav-item icon="fas fa-copy" link="/about">
                        Банера/Слайдеры
                    </nav-item>

                    <li class="nav-item">
                        <router-link to="/films" class="nav-link">
                            <i class="nav-icon far fa-image"></i>
                            <p>
                                Фильмы
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/filmsOne">
                                Страница фильма
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            <i class="nav-icon fas fa-columns"></i>
                            <p>
                                Кинотеатры
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/about">
                                Карточка кинотеатра
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                Карточка зала
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            <i class="nav-icon fas fa-table"></i>
                            <p>
                                Новости
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/about">
                                Страница новости
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            <i class="nav-icon fas fa-tree"></i>
                            <p>
                                Акции
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/about">
                                Страница акции
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            <i class="nav-icon fas fa-book"></i>
                            <p>
                                Страницы
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/about">
                                Главная страница
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                О кинотеатре
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                Кафе - Бар
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                Vip - Зал
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                Реклама
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                Детская комната
                            </nav-item>
                            <nav-item icon="fas fa-circle" link="/about">
                                Контакты
                            </nav-item>
                        </ul>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            <i class="nav-icon fas fa-plus-square"></i>
                            <p>
                                Пользователи
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/about">
                                Редактирование пользователя
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            <i class="nav-icon fas fa-envelope"></i>
                            <p>
                                Рассылка
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </router-link>
                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-circle" link="/about">
                                Выбор пользователей
                            </nav-item>
                        </ul>
                    </li>
                </ul>
            </nav>

        </div>

    </aside>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
    components: {
        NavItem
    }
}
</script>