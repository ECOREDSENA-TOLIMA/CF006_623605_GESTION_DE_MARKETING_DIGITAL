<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 En el componente formativo la campaña publicitaria en medios digitales, se aborda de manera integral el proceso de la publicidad digital, comenzando con una exploración de sus tipos y canales, así como sus beneficios y características distintivas. Luego, se profundiza en la importancia de la estrategia creativa, desglosando objetivos, técnicas de creatividad, teoría del arte e innovación. La campaña publicitaria digital se presenta como un elemento clave, analizando el <em>brief</em> publicitario, objetivos específicos, factores claves, tipos de campañas, y las diferentes etapas del proceso. Además, se destaca la relevancia del <em>insight</em> publicitario, detallando sus ventajas, importancia, y proporcionando pasos específicos para definirlo con eficacia.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describen los principales temas del componente formativo tales como: la publicidad digital, la estrategia creativa, la campaña  publicitaria digital y el insight publicitario")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
