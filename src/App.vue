<script setup>
import AppHeader from "@/components/UI/AppHeader.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import GameZone from "@/components/GameZone/GameZoneMain.vue";
import StatisticsComponent from "@/components/Statistics/StatisticsMain.vue";
import AppFooter from "@/components/UI/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <ProfileComponent />
  <GameZone />
  <StatisticsComponent />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
