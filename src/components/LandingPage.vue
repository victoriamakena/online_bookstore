<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
<!-- About us -->
 <v-container class="bg-secondary" max-width="100%">
    <v-row>
        <v-col class="text-center">
            <div class="text-display-medium mb-12">Welcome to Brewed Pages!</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8 ">Hello and welcome again to the beautiful world of deep diving into reading. Where vast access to knowlegde is just like a cup of coffee, within arm's reach.   </div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Here you will find many different books which are accustomed to many tastes and prefeences. Enjoy your time as you go through our vast selection of books and feel free to inquire on the areas you require assistance.</div>

        </v-col>
    </v-row>
 </v-container>
<!-- Bestsellers -->
 <v-container max-width="100%">
    <v-row>
        <v-col md="3">
            <v-card>
                <v-img src="atomicHabits.jpg" cover></v-img>
                <v-card-title>Atomic Habits</v-card-title>
                <v-card-subtitle>Ksh. 2000</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card>
                <v-img src="howToTalk.jpg" cover></v-img>
                <v-card-title>How To Talk So Kids Will Listen & How To Listen So Kids Will Talk</v-card-title>
                <v-card-subtitle>Ksh. 1000</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card>
                <v-img src="psychologyOfMoney.jpg" cover></v-img>
                <v-card-title>Psychology Of Money</v-card-title>
                <v-card-subtitle>Ksh. 1500</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card>
                <v-img src="richDad.jpg" cover></v-img>
                <v-card-title>Rich Dad, Poor Dad</v-card-title>
                <v-card-subtitle>Ksh. 800</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
    </v-row>
 </v-container>

 <!-- Footer -->
   <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/FullLogo_Transparent.png" width="45%" height="15%" ></v-img>
                </router-link>

                <p> Copyright Brewed Pages Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@brwdpages.com</p>
                <p>Phone: +254712345780</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>