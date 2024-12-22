<template>
  <ThemeSwitcher />
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <div class="card flex justify-center">
    <Toast />
    <div class="flex flex-wrap gap-2">
      <Button label="Success" severity="success" @click="showSuccess" class="mr-2" />
      <Button label="Info" severity="info" @click="showInfo" />
      <Button label="Warn" severity="warn" @click="showWarn" />
      <Button label="Error" severity="danger" @click="showError" />
      <Button label="Secondary" severity="secondary" @click="showSecondary" />
      <Button label="Contrast" severity="contrast" @click="showContrast" />
    </div>
  </div>
  <div class="flex flex-col gap-12">
    <div class="flex gap-6 flex-wrap">
      <div
        class="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors"
      >
        primary
      </div>
      <div
        class="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors"
      >
        highlight
      </div>
      <div
        class="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors"
      >
        box
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Message Content',
        life: 3000,
      })
    },
    showInfo() {
      this.$toast.add({
        severity: 'info',
        summary: 'Info Message',
        detail: 'Message Content',
        life: 3000,
      })
    },
    showWarn() {
      this.$toast.add({
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'Message Content',
        life: 3000,
      })
    },
    showError() {
      this.$toast.add({
        severity: 'error',
        summary: 'Error Message',
        detail: 'Message Content',
        life: 3000,
      })
    },
    showSecondary() {
      this.$toast.add({
        severity: 'secondary',
        summary: 'Secondary Message',
        detail: 'Message Content',
        life: 3000,
      })
    },
    showContrast() {
      this.$toast.add({
        severity: 'contrast',
        summary: 'Contrast Message',
        detail: 'Message Content',
        life: 3000,
      })
    },
  },
}
</script>
