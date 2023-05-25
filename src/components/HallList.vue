<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th class="table__item">Название</th>
                <th class="table__item">Дата создания</th>
                <th class="table__item"></th>
                <th class="table__item"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(halls, i) in hallsList" :key="i">
                <th class="table__item">{{ halls.data[0].title }}</th>
                <th class="table__item">{{ halls.creationDate }}</th>
                <th class="table__item">
                    <router-link :to="`hallCard/${halls.id}`" class="input-group">
                        <i class="fas fa-pencil-alt"></i>
                    </router-link>
                </th>
                <th class="table__item">
                    <i class="far fa-trash-alt pointer" @click="halls.modal = !halls.modal"></i>
                </th>
                <div class="modal-wrap" v-if="halls.modal">
                    <div class="card p-2 modal-body">
                        <h3>Действительно хотите удалить</h3>
                        <div class="actions">
                            <button class="btn btn-primary float-right" @click="deleteFilm(halls.id)">Удалить</button>
                            <button class="btn btn-primary float-right" @click="halls.modal = !halls.modal">Отменить</button>
                        </div>
                    </div>
                </div>
            </tr>
        </tbody>
    </table>
</template>

<script>

</script>