<template>
  <div v-if="article">
      <UContainer >
        <UPage>
          <template #left >
            <UPageAside > 
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
        title: 'Sign up and log in',
        path: '#sign-up-and-log-in',
        active: focus.value === 'sign-up-and-log-in',
        onClick: () => {
          focus.value = 'sign-up-and-log-in';
        }
      },
      {
        title: 'Create workspace',
        path: '#create-your-first-workspace',
        active: focus.value === 'create-your-first-workspace',
        onClick: () => {
          focus.value = 'create-your-first-workspace';
        }
      },
      {
        title: 'Add projects',
        path: '#add-projects',
        active: focus.value === 'add-projects',
        onClick: () => {
          focus.value = 'add-projects';
        }
      },
      {
        title: 'Create tasks',
        path: '#create-tasks',
        active: focus.value === 'create-tasks',
        onClick: () => {
          focus.value = 'create-tasks';
        }
      },
      {
        title: 'Views & Organization',
        path: '#views-organization',
        active: focus.value === 'views-organization',
        onClick: () => {
          focus.value = 'views-organization';
        }
      }
    ]
  }
])
</script>
