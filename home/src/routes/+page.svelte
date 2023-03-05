<script>
import SideBar from '../components/SideBar.svelte';
</script>
<div class="flex">
<div class="flex-none basis-1/6">
<SideBar/>
</div>
<div class="">
</div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
