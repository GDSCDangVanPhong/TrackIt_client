<template>
  <ClientOnly>
    <CommonsTetris
      class="relative h-screen w-full mask-[radial-gradient(800px_circle_at_center,#00C16A,transparent)]"
      :base="20"
      square-color="#00C16A"
    >
      <div >
        <AuthLoginCard/>
      </div>
    </CommonsTetris>
  </ClientOnly>
</template>

<script setup lang="ts">
</script>
