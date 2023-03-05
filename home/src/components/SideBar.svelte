<script lang="ts">
 import { onMount } from 'svelte';
 import Icon from 'svelte-awesome';
 import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

 let github_data = {};
 let stuff_links = [
    {text:"Home",href:"/"},
    {text:"Hanzi Practice",href:"/hanzi"}
 ];
 onMount(async () => {

     github_data = await fetch(
            "https://api.github.com/users/UlascanErsoy"
            ).then(resp => resp.json());
     console.log(data);

}) 
</script>
<div class="grid place-items-center text-center ">
<img class="rounded-lg mt-4" width="200" src="{github_data.avatar_url}"/>
<h1 class="mt-3 mb-2 text-xl font-medium leading-tight text-primary">{github_data.name}</h1>
<span class="border-b-black">
<a href="https://twitter.com/@{github_data.twitter_username}"><Icon data={faTwitter} scale="1.25" class="m-2"/></a>
<a href="https://linkedin.com/in/ulascan-ersoy-a88b16129/"><Icon data={faLinkedin} scale="1.25"class="m-2"/></a>
<a href="{github_data.html_url}"><Icon data={faGithub} scale="1.25" class="m-2"/></a>
</span>
<p class="m-2 font-normal text-sm leading-normal">{github_data.bio}</p>
<hr class="w-52 mb-2 h-0.5 bg-gray-700 border-0 rounded dark:bg-gray-100">


<h4 class="text-2xl font-bold dark:text-white">Stuff</h4>
<ul class="mt-2">
    {#each stuff_links as stuff}
        <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="{stuff.href}">{stuff.text}</a></li>
    {/each}
</ul>
</div>
