<template>
  <div v-if="article">
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside>
              <UContentNavigation
              :navigation="navigation"
              highlight
              />
            </UPageAside>
          </template>
          <template #default>
            <UPage class="mt-8">
                 <ContentRenderer :value="article" />
            </UPage>
          </template>
        </UPage>
      </UContainer>
   
  </div>
  <div v-else>
    <UEmpty />
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  layout: "docs",
});
const { params } = useRoute();
const { data: article } = await useAsyncData(`content-${params.slug}`, () => {
  return queryCollection("content").path("/getting-started").first();
});
const focus = ref('what-can-it-help-me');
useSeoMeta({
  title: 'Getting Started',
  description: article.value?.description,

});
const navigation = computed(() => [
  {
    title: 'Introduction',
    icon: 'i-lucide-book-open',
    path: '#getting-started',
    children: [
      {
        title: 'What it can help me',
        path: '#what-can-it-help-me',
        active: focus.value === 'what-can-it-help-me',
        onClick: () => {
          focus.value = 'what-can-it-help-me';
        }
      },
      {
        title: 'Who made this? ',
        path: '#who-made-this',
        active: focus.value === 'who-made-this',
        onClick: () => {
          focus.value = 'who-made-this';
          console.log(focus.value);
        }
      }
    ]
  },
  {
    title: 'Getting Started',
    icon: 'i-lucide-database',
    path: '#composables',
    children: [
      {
        title: 'defineShortcuts',
        path: '#defineshortcuts'
      },
      {
        title: 'useModal',
        path: '#usemodal'
      }
    ]
  }
])
</script>
