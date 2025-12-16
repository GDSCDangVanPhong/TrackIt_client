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
});
type Schema = z.output<typeof schema>;
const state = reactive<Partial<Schema>>({
  avatar: undefined,
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
        <UPageCard class="w-full md:w-[800px] h-96">
          <p
            class="text-2xl text-pretty font-semibold text-highlighted mb-6 text-center"
          >
            Settings
          </p>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4 w-full"
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
            <UButton type="submit" label="Submit" color="neutral" />
          </UForm>
        </UPageCard>
      </div>
    </template>
  </UDashboardPanel>
</template>