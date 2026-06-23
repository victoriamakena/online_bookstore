<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">

        <v-card class="pa-6">

          <!-- Profile Picture -->
          <div class="text-center">
            <v-avatar size="120">
              <v-icon size="80">mdi-account</v-icon>
            </v-avatar>

            <h2 class="mt-4">
              {{ user.firstname }} {{ user.lastname }}
            </h2>
          </div>

          <!-- Statistics -->
          <v-row class="text-center mt-4">
            <v-col>
              <h3>12</h3>
              <p>Wishlist</p>
            </v-col>

            <v-col>
              <h3>5</h3>
              <p>Cart</p>
            </v-col>

            <v-col>
              <h3>8</h3>
              <p>Orders</p>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Profile Information -->
          <div>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Phone:</strong> {{ user.phone }}</p>
            <p><strong>Location:</strong> {{ user.location }}</p>
            <p><strong>Address:</strong> {{ user.address }}</p>
          </div>

          <!-- Buttons -->
          <div class="text-center mt-4">
            <v-btn color="primary" class="mr-2">
              Edit Profile
            </v-btn>

            <v-btn variant="outlined">
              Logout
            </v-btn>
          </div>

        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>