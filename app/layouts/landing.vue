<template>
  <div>
    <CommonsNavBar :has-menu="true"/>
    <slot id="body" />
    <CommonsFooter />
  </div>
</template>
