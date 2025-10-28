<template>
  <UPageSection
  title="Testimonial"
  description="See what others talk about us">
    

    <!-- Review Section -->
    <div
      class="relative h-[430px] w-full overflow-hidden rounded-xl transition-colors duration-300
      bg-white dark:bg-neutral-900 shadow-lg dark:shadow-none border border-gray-100 dark:border-neutral-800"
    >
      <!-- Center Text -->
      <div
        class="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center px-4 text-center"
      >
        <h3 class="mb-2 text-2xl font-bold sm:text-3xl">
          What are you waiting for?
        </h3>
        <p class="m-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Get started and start building awesome UI 😄
        </p>
        <NuxtLink to="getting-started/installation">
          <UButton> Get Started → </UButton>
        </NuxtLink>
      </div>

      <!-- Tilted Marquees -->
      <div class="absolute inset-0 overflow-hidden">
        <CommonsMarquee
          :style="{ transform: 'translateY(-11.5rem) rotate(-16deg)' }"
          class="marquee"
          :pause-on-hover="false"
        >
          <CommonsReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </CommonsMarquee>

        <CommonsMarquee
          :style="{ transform: 'translateY(1rem) rotate(-16deg)' }"
          reverse
          class="marquee"
          :pause-on-hover="false"
        >
          <CommonsReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </CommonsMarquee>

        <CommonsMarquee
          :style="{ transform: 'translateY(13.5rem) rotate(-16deg)' }"
          class="marquee"
          :pause-on-hover="false"
        >
          <CommonsReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </CommonsMarquee>

        <CommonsMarquee
          :style="{ transform: 'translateY(26rem) rotate(-16deg)' }"
          reverse
          class="marquee"
          :pause-on-hover="false"
        >
          <CommonsReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </CommonsMarquee>
      </div>

      <!-- Gradient overlay -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t 
        from-white via-white/40 to-transparent 
        dark:from-neutral-950 dark:via-neutral-950/60 dark:to-transparent"
      ></div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
// Reviews data
const reviews = [
  {
    name: "kiri",
    username: "@kiruba_selvi6",
    body: "Oooohhh wowww...!!",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Sébastien Chopin",
    username: "@Atinux",
    body: "You ship 🚢",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Mattia Guariglia",
    username: "@matt_guariglia",
    body: "Omg 🥰",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Nelson🐐",
    username: "@Mathiasokafor3",
    body: "Thank you so much for all you do for the Vue/nuxt ecosystem.",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Premdas Vm",
    username: "@premdasvm",
    body: "Man, this is soo good! Inspira UI is 🔥🙌🏼",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Pierre",
    username: "@PierreHenryBap",
    body: "It looks really awesome! Can’t wait to try it out.",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Waldemar Enns",
    username: "@WaldemarEnns",
    body: "Awesome! ⭐️ed it immediately",
    img: "https://cdn.inspira-ui.com/images/x-logo.svg",
  },
];

const firstRow = ref(reviews);
</script>

<style scoped>
.marquee {
  --duration: 40s;
  position: absolute;
  left: -10%;
  width: 120%;
  padding: 0.5rem 0;
}
</style>
