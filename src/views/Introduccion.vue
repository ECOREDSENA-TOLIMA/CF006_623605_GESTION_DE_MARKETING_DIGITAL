<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El <em>marketing</em> digital, permite a las organizaciones crear campañas publicitarias que se encuentren relacionadas con las nuevas tendencias de mercado, estas han evolucionado con la llegada de las tecnologías de la información y la comunicación.  Le invitamos a analizar el siguiente video de introducción a la temática propuesta:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oh9nIxWcgfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
