<template>
  <!-- Card inicial-->
  <va-card class="fundo" color="rgb(39, 39, 39)" style="padding: 0.75rem;">
    <div color="primary" gradient>
      <va-card-content class="display-2 hometext" style="color:lightgrey">
        <p>Hello! We are BMWeb</p>
        <p>Web Developers</p>
      </va-card-content>
      <va-button color="info" gradient class="mr-4">About Us</va-button>
    </div>
  </va-card>

  <!-- Navbar-->
  <va-navbar color="primary" class=" primary-danger-gradient">
    <template #left>
      <va-navbar-item >
        <va-chip flat color="gray">
          Home
        </va-chip>
        <va-chip flat color="gray">
          About Us
        </va-chip>
        <va-chip flat color="gray">
          Portfolio
        </va-chip>
        <va-chip flat color="gray">
          Contact
        </va-chip>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.fundo {
  height: 647px;
  border-radius: 0;
}
.hometext {
  margin-top: 8rem;
  color: rgb(63, 63, 63);
}

.primary-danger-gradient {
  width: 100%;
  height: 4rem;
  background: linear-gradient(90deg, var(--va-dark) 0%, var(--va-gray) 100%);
}
</style>
