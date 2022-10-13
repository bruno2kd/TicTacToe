<script setup>
import GameVictories from "@/components/Statistics/GameVictories.vue";
import MatchesPlayed from "@/components/Statistics/MatchesPlayed.vue";
import GameHistory from "@/components/Statistics/GameHistory.vue";
import TotalTime from "@/components/Statistics/TotalTime.vue";
</script>

<template>
  <section>
    <div class="container">
      <div class="stats-intro column-centered">
        <h2>Awesome statistics</h2>
        <p>All statistics in on place!</p>
      </div>
      <div class="stats-main centered">
        <GameVictories />
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
  padding: 64px 0 48px;
  p {
    padding: 16px;
    font-size: 1.2rem;
  }
}

.stats-main {
  div {
    width: 50%;
  }
}
</style>
