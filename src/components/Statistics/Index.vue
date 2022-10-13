<script setup>
import GameVictories from "@/components/Statistics/GameVictories.vue";
import MatchesPlayed from "@/components/Statistics/MatchesPlayed.vue";
import GameHistory from "@/components/Statistics/GameHistory.vue";
import TotalTime from "@/components/Statistics/TotalTime.vue";
</script>

<template>
  <section>
    <div class="container">
      <div class="stats-intro">
        <h2>Awesome statistics</h2>
        <p>All statistics in on place!</p>
      </div>
      <div class="stats-main">
        <div class="stats-main__items">
          <GameVictories />
        </div>
        <div class="stats-main__items column-centered">
          <MatchesPlayed />
          <GameHistory />
        </div>
      </div>
      <TotalTime />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats-intro {
  @include column-centered;
  margin: 64px 0 32px;
  p {
    padding: 16px;
    font-size: 1.2rem;
  }
}

.stats-main {
  @include centered;
  @media screen and (max-width: $mobile-break) {
    @include column-centered;
  }
  .stats-main__items {
    width: 50%;

    @media screen and (max-width: $mobile-break) {
      width: auto;
      margin: 24px auto;
    }
  }
}
</style>
