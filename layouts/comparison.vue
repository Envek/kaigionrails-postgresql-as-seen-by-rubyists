<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  rubyRails: {
    type: String,
    default: 'ruby',
  },
  footnoteClass: {
    type: String,
    default: 'text-xs'
  },
})

const rubyRailsLogo = computed(() => {
  switch(props.rubyRails) {
    case 'ruby': return "/images/Ruby_logo.svg";
    case 'rails': return "/images/Ruby_on_Rails-logo.png";
    case 'ruby-rails': return "/images/Ruby_and_Rails_logo.png";
    default: return "/images/Ruby_logo.svg";
  }
})
</script>

<template>
  <div class="slidev-layout comparison-container w-full h-full grid grid-cols-2 gap-2 pb-0">
    <div class="self-start col-span-2">
      <slot />
    </div>
    <div class="place-self-stretch ruby-type">
      <div class="self-start float-left">
        <img :src="rubyRailsLogo" class="min-w-28 w-28 p-4" />
      </div>
      <slot name="rubytype" />
    </div>
    <div class="place-self-stretch pg-type">
      <div class="self-start float-left">
        <img src="/images/Postgresql_elephant.svg" class="min-w-28 w-28 p-4" />
      </div>
      <slot name="pgtype" />
    </div>
    <div class="place-self-stretch ruby">
      <slot name="ruby" />
    </div>
    <div class="place-self-stretch postgresql">
      <slot name="postgresql" />
    </div>
    <div class="self-end footnote" :class="props.footnoteClass">
      <slot name="footnote_ruby" />
    </div>
    <div class="self-end footnote" :class="props.footnoteClass">
      <slot name="footnote_pg" />
    </div>
</div>
</template>

<style>
.comparison-container {
  display: grid;
  grid-template-rows: min-content min-content auto min-content;
}

.ruby-type :not(pre) > code, .pg-type :not(pre) > code {
  font-size: 1.5em;
  background: none;
}

.ruby-type :not(pre) > code::before, .pg-type :not(pre) > code::before {
  content: '';
}

.ruby-type :not(pre) > code::after, .pg-type :not(pre) > code::after {
  content: '';
}

.footnote-container > .footnote > p:first-child {
  margin-top: 0;
}
</style>
