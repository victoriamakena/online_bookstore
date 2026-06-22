<script setup>
import { useWishlistStore } from '@/stores/wishlist';
const wishlist= useWishlistStore().wishlist
</script>

<template>
   <v-container max-width="100%">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Wishlist
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="book in wishlist">
                 <v-card class="h-100 d-flex flex-column" width="300">
                    <v-img :src="book.image" height="200px" class="mt-4"></v-img>
                    <v-card-title>{{ book.name }}</v-card-title>
                    <v-card-subtitle>{{ book.price }}</v-card-subtitle>    
                    <v-card-text>{{ book.description }}</v-card-text>
                        <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                    <v-card-text>By:{{ book.author }} </v-card-text>
                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn color="primary" variant="elevated">Click & Collect</v-btn>
                        <v-rating :model-value="book.rating" :size="24" readonly ></v-rating>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>