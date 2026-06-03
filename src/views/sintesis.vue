<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-right") El contenido explica la importancia de los diagramas de flujo y de operaciones como herramientas gráicas para representar procesos productivos, especialmente en confección. Describe los principales símbolos utilizados —operación, transporte, inspección, almacenamiento y demora— y su función dentro del flujo de trabajo. Además, resalta que estos diagramas permiten organizar, analizar y mejorar procesos, identificar actividades, tiempos y movimientos, y facilitar el control de calidad y la eficiencia en la producción.
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se divide en tres áreas: patronaje básico, que incluye técnicas, medidas y tipos de patronaje; procedimiento de trazo y corte, con operaciones, tipos de corte y tecnología utilizada; y procesos de confección industrial, enfocados en la elaboración de diferentes prendas como camisas, pantalones, ropa deportiva, interior y jean.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
