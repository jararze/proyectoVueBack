<template>
  <v-container>
    <h2 class="mb-4">Lista de Contactos</h2>
    <v-data-table
        :headers="headers"
        :items="contacts"
        :items-per-page="15"
        class="elevation-1"
        :search="search"
    >
      <template #top>
        <v-text-field
            v-model="search"
            label="Buscar contactos"
            class="mx-4"
            clearable
        ></v-text-field>
      </template>
      <template #item.actions="{ item }">
        <v-btn color="primary" @click="$emit('edit', item)">Editar</v-btn>
        <v-btn color="error" @click="$emit('delete', item.id)">Eliminar</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
// import "vue-loading-overlay/dist/css/index.css";
// import { Loading } from "vue-loading-overlay";

export default {
  // components: { Loading },
  props: ["contacts"],
  data() {
    return {

      search: '', // Search filter
      headers: [
        { value: "id", text: "ID" },
        { value: "name", text: "Nombre" },
        { value: "email", text: "Email" },
        { value: "phone", text: "Teléfono" },
        { value: "city", text: "Ciudad" },
        { value: "country", text: "País" },
        { value: "address", text: "Dirección" },
        // { value: "created_at", text: "Creado" },
        // { value: "updated_at", text: "Actualizado" },
        { value: "actions", text: "Acciones", sortable: false },
      ],
    };
  },
  mounted() {
    console.log("Contacts prop:", this.contacts);
  },
};
</script>

<!--<style>-->
<!--/* Estilización personalizada */-->
<!--.edit-btn {-->
<!--  background-color: #3498db;-->
<!--  color: white;-->
<!--  border: none;-->
<!--  border-radius: 5px;-->
<!--  padding: 5px 10px;-->
<!--  cursor: pointer;-->
<!--  margin-right: 5px;-->
<!--}-->

<!--.edit-btn:hover {-->
<!--  background-color: #2980b9;-->
<!--}-->

<!--.delete-btn {-->
<!--  background-color: #e74c3c;-->
<!--  color: white;-->
<!--  border: none;-->
<!--  border-radius: 5px;-->
<!--  padding: 5px 10px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.delete-btn:hover {-->
<!--  background-color: #c0392b;-->
<!--}-->
<!--</style>-->
