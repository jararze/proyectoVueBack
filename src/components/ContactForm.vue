<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Nombre:</label>
      <input v-model="form.name" required />
    </div>
    <div>
      <label>Email:</label>
      <input v-model="form.email" type="email" required />
    </div>
    <div>
      <label>Teléfono:</label>
      <input v-model="form.phone" required />
    </div>
    <div>
      <label>Dirección:</label>
      <input v-model="form.address" required />
    </div>
    <div>
      <label>País:</label>
      <input v-model="form.country" required />
    </div>
    <div>
      <label>Ciudad:</label>
      <input v-model="form.city" required />
    </div>
    <button type="submit">Guardar</button>
  </form>
</template>

<script>
export default {
  props: ["contact"],
  data() {
    return {
      form: { ...this.contact },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("save", this.form);
    },
  },
};
</script>
