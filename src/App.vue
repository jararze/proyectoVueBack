<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Título y botón para agregar contacto -->
        <div class="d-flex justify-space-between align-center mb-4">
          <h1 class="text-4xl font-bold text-blue-600">Gestor de Contactos</h1>
          <v-btn color="primary" @click="openAddContactForm">
            Agregar Contacto
          </v-btn>
        </div>

        <!-- Modal para agregar o editar contacto -->
        <v-dialog v-model="showAddModal" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h6">
                {{ editingContact ? "Editar Contacto" : "Agregar Contacto" }}
              </span>
            </v-card-title>
            <v-card-text>
              <ContactForm
                  :contact="editingContact || newContact"
                  @save="saveContact"
              />
            </v-card-text>

          </v-card>
        </v-dialog>
        <!-- Snackbar para notificaciones -->
        <v-snackbar
            v-model="snackbar.visible"
            :color="snackbar.color"
            timeout="3000"
            top
        >
          {{ snackbar.message }}
        </v-snackbar>
        <!-- Lista de contactos -->
        <ContactList
            :contacts="contacts"
            @edit="startEditing"
            @delete="confirmDelete"
        />
      </v-container>
    </v-main>
  </v-app>
</template>
<!--<template>-->
<!--  <div>-->
<!--    <pre>{{ contacts }}</pre>-->
<!--  </div>-->
<!--</template>-->

<script>
import ContactList from "./components/ContactList.vue";
import ContactForm from "./components/ContactForm.vue";
import axios from "axios";

export default {
  components: { ContactList, ContactForm },
  data() {
    return {
      contacts: [], // Lista de contactos obtenida del backend
      editingContact: null, // Contacto que se está editando
      newContact: {
        name: "",
        email: "",
        phone: "",
        city: "",
        country: "",
      },
      showAddModal: false, // Controla si el modal está abierto
      snackbar: {
        visible: false, // Controla la visibilidad del snackbar
        message: "", // Mensaje del snackbar
        color: "success", // Color del snackbar (success, error, etc.)
      },
    };
  },
  methods: {
    // Mostrar notificación
    showSnackbar(message, color = "success") {
      this.snackbar.message = message;
      this.snackbar.color = color;
      this.snackbar.visible = true;
    },
    // Abrir el formulario para agregar contacto
    openAddContactForm() {
      this.editingContact = null; // Limpiar el contacto en edición
      this.showAddModal = true;
    },
    // Cerrar el modal
    closeModal() {
      this.showAddModal = false;
      this.resetNewContact();
    },

    // Resetear el nuevo contacto
    resetNewContact() {
      this.newContact = {
        name: "",
        email: "",
        phone: "",
        city: "",
        country: "",
      };
    },
    // Obtener todos los contactos del backend
    fetchContacts() {
      axios
          .get("https://phpstack-1382256-5134768.cloudwaysapps.com/api/contactos")
          .then((response) => {
            // console.log(response);
            // this.$emit("update:contacts", response.data);
            this.contacts = response.data || [];
          })
          .catch((error) => {
            console.error("Error al obtener los contactos:", error);
            this.contacts = []; // Si ocurre un error, inicializa como un array vacío
          })
          .finally(() => {
            this.isLoading = false; // Stop loading
          });
    },

    // Guardar o actualizar un contacto
    // Guardar o actualizar contacto
    saveContact(contact) {
      if (contact.id) {
        // Actualizar contacto
        axios
            .put(
                `https://phpstack-1382256-5134768.cloudwaysapps.com/api/contactos/${contact.id}`,
                contact
            )
            .then(() => {
              this.fetchContacts(); // Actualizar la tabla
              this.showSnackbar("Contacto actualizado correctamente.");
            })
            .catch((error) => {
              console.error("Error al actualizar el contacto:", error);
              this.showSnackbar("Error al actualizar el contacto.", "error");
            });
      } else {
        // Crear nuevo contacto
        axios
            .post("https://phpstack-1382256-5134768.cloudwaysapps.com/api/contactos", contact)
            .then(() => {
              this.fetchContacts(); // Actualizar la tabla
              this.showSnackbar("Contacto agregado correctamente.");
            })
            .catch((error) => {
              console.error("Error al crear el contacto:", error);
              this.showSnackbar("Error al agregar el contacto.", "error");
            });
      }
      this.closeModal();
    },

    // Eliminar un contacto
    deleteContact(id) {
      axios
          .delete(`https://phpstack-1382256-5134768.cloudwaysapps.com/api/contactos/${id}`)
          .then(() => {
            this.fetchContacts(); // Actualizar la lista de contactos
          })
          .catch((error) => {
            console.error("Error al eliminar el contacto:", error);
          });
    },

    // Comenzar a editar un contacto
    startEditing(contact) {
      this.editingContact = contact;
      this.showAddModal = true; // Abrir el modal para editar
    },
    confirmDelete(id) {
      if (confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
        axios
            .delete(`https://phpstack-1382256-5134768.cloudwaysapps.com/api/contactos/${id}`)
            .then(() => {
              this.fetchContacts();
              this.showSnackbar("Contacto eliminado correctamente.");
            })
            .catch((error) => {
              console.error("Error al eliminar el contacto:", error);
              this.showSnackbar("Error al eliminar el contacto.", "error");
            });
      }
    },
  },
  mounted() {
    this.fetchContacts(); // Obtener los contactos al cargar el componente
  },
};
</script>
