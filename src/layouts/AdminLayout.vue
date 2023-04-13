<template>
    <div class="wrapper">
        <navbar/>
        <sidebar/>

        <div class="content-wrapper">

            <router-view />


        </div>

        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
            </div>
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>

        <aside class="control-sidebar control-sidebar-dark"></aside>

    </div>
</template>

<script>
import Navbar from './inc/Navbar.vue'
import Sidebar from './inc/Sidebar.vue'
import 'admin-lte'
export default {
    components: {
        Navbar, Sidebar
    }
}
</script>