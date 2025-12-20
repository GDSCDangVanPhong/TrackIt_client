<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
definePageMeta({
  layout: "dashboard",
});
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const MIN_DIMENSIONS = { width: 100, height: 100 };
const MAX_DIMENSIONS = { width: 4096, height: 4096 };
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  );
};
const schema = z.object({
  avatar: z
    .instanceof(File, {
      message: "Please select an image file.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: `The image is too large. Please choose an image smaller than ${formatBytes(MAX_FILE_SIZE)}.`,
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Please upload a valid image file (JPEG, PNG, or WebP).",
    })
    .refine(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const meetsDimensions =
                img.width >= MIN_DIMENSIONS.width &&
                img.height >= MIN_DIMENSIONS.height &&
                img.width <= MAX_DIMENSIONS.width &&
                img.height <= MAX_DIMENSIONS.height;
              resolve(meetsDimensions);
            };
            img.src = e.target?.result as string;
          };
          reader.readAsDataURL(file);
        }),
      {
        message: `The image dimensions are invalid. Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`,
      },
    ),
    projectName: z.string().min(8).max(40),
    projectDescription: z.string().min(10).max(200),
  });

type Schema = z.output<typeof schema>;
const state = reactive<Partial<Schema>>({
  
});
function createObjectUrl(file: File): string {
  return URL.createObjectURL(file);
}
async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>
<template>
  <UDashboardPanel id="settings">
    <template #header>
      <UDashboardNavbar title="Settings" :ui="{ right: 'gap-3' }">
        <template #leading>
          <UDashboardSidebarCollapse class="cursor-pointer" />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <div class="flex justify-center items-center">
        <UPageCard class="w-full md:w-[800px] ">
          <p
            class="text-2xl text-pretty font-semibold text-highlighted mb-6 text-center"
          >
            Settings
          </p>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-5 w-full"
            @submit="onSubmit"
          >
            <div class="flex justify-center">
              <UFormField name="avatar">
                <UFileUpload
                  v-slot="{ open }"
                  v-model="state.avatar"
                  accept="image/*"
                >
                  <div class="flex justify-center">
                    <div class="relative">
                        <p class="text-pretty font-bold mb-1.5 text-lg">Avatar</p>
                      <UAvatar
                        :ui="{
                          root: 'size-32',
                        }"
                        :src="
                          state.avatar ? createObjectUrl(state.avatar) : undefined
                        "
                        icon="i-lucide-image"
                      />
                      <UButton
                        size="sm"
                        icon="i-heroicons-camera"
                        class="absolute bottom-1 right-2 rounded-3xl cursor-pointer"
                        @click="open"
                      />
                    </div>
                  </div>
                </UFileUpload>
              </UFormField>
            </div>
            <p class="mt-2 font-bold text-lg">General settings</p>
            <UCard 
            variant="subtle"
            :ui="{
              root: 'p-0 bg-default',
              body: 'sm:p-0',
            }">
                <div class="flex justify-between items-center p-4 mt-2" >
                    <div>
                        <p class='font-bold text-sm mb-1'>Project name</p>
                        <p class="text-xs text-muted font-semibold">Displayed throughout the dashboard.</p>
                    </div>
                    <UFormField name="projectName">
                        <UInput
                          v-model="state.projectName"
                          placeholder="Project Name"
                          class="w-full"
                        />
                    </UFormField>
                </div>
                <USeparator/>
                <div class="flex justify-between items-center p-4" >
                    <div>
                        <p class='font-bold text-sm mb-1'>Project URL</p>
                        <p class="text-xs text-muted font-semibold">Reference used in APIs and URLs.</p>
                    </div>
                    <UFormField name="projectDescription">
                        <UInput
                          v-model="state.projectDescription"
                          placeholder="Project Description"
                          class="w-full"
                        />
                    </UFormField>
                </div>
                <USeparator/>
                <div class="flex p-4 justify-end" >
                    <UButton type="submit" label="Submit" color="neutral" class="cursor-pointer" size="sm" />
                </div>
            </UCard>
            
          </UForm>
          <div>
              <p class="mt-4 font-bold text-lg">Project availability</p>
              <p class= "text-muted text-sm ">Restart or pause your project when performing maintenance.</p>
          </div>
          <UCard 
          variant="subtle"
          :ui="{
            root: 'p-0 bg-default',
            body: 'sm:p-0',
          }">
              <div class="flex justify-between items-center p-4 mt-2" >
                  <div>
                      <p class='font-bold text-sm mb-1'>Restart project</p>
                      <p class="text-xs text-muted font-semibold">Your project will not be available for a few minutes.</p>
                  </div>
                  <UButton
                    variant="subtle"
                    size="sm"
                    label="Restart project"
                    color="primary"
                    class="cursor-pointer"
                  />
              </div>
              <USeparator/>
              <div class="flex justify-between items-center p-4" >
                  <div>
                      <p class='font-bold text-sm mb-1'>Pause project</p>
                      <p class="text-xs text-muted font-semibold">Your project will not be accessible while it is paused.</p>
                  </div>
                  <UButton
                    leading-icon="mynaui:pause-solid"
                    variant="subtle"
                    size="sm"
                    label="Pause project"
                    color="primary"
                    class="cursor-pointer"
                  />
              </div>
          </UCard>
          <div>
              <p class="mt-4 font-bold text-lg">Project usage</p>
              <p class= "text-muted text-sm ">Usage statistics now live under your organization settings.</p>
          </div>
          <UCard >
              <template #header>
              <div class="flex justify-between items-center">
                  <div class="flex gap-x-4">
                      <Icon name="lets-icons:stat"/>
                      <div>
                          <p class='font-bold text-sm mb-1'>See your project usage</p>
                          <p class="text-xs text-muted font-semibold">You may view your project usage statistics in your organization settings.</p>
                      </div>
                      
                  </div>
                  <UButton
                    variant="subtle"
                    size="sm"
                    label="View usage"
                    color="primary"
                    class="cursor-pointer"
                  />
              </div>
              </template>
          </UCard>
          <div>
              <p class="mt-4 font-bold text-lg">Delete Project</p>
              <p class= "text-muted text-sm ">Permanently remove your project and its database.</p>
          </div>
          <UCard 
          :ui="{
            root: 'ring-red-200'
          }">
              <template #header>
              <div class="flex justify-between items-center">
                  <div class="flex gap-x-4">
                      <Icon name="ion:warning" class="text-red-500"/>
                      <div>
                          <p class='font-bold text-sm mb-1'>Deleting this project will also remove your database.</p>
                          <p class="text-xs text-muted font-semibold">Make sure you have made a backup if you want to keep your data.</p>
                      </div>
                      
                  </div>
                  <UButton
                    variant="subtle"
                    size="sm"
                    label="Delete project"
                    color="error"
                    class="cursor-pointer"
                  />
              </div>
              </template>
          </UCard>
        </UPageCard>
        
      </div>
    </template>
  </UDashboardPanel>
</template>