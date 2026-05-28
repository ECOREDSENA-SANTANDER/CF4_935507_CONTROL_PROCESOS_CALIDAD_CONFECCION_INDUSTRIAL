<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/intro/2.svg')
          .col-lg-10.col-md-10
            p.mb-0 Actualmente la industria de la moda requiere de altos estándares de calidad, lo cual se logra no solo a partir de los insumos y la maquinaria, sino del proceso de estructuración de las prendas a confeccionar mediante el patronaje, una actividad que requiere de precisión y exactitud en el diseño de la moldería y el escalado de las tallas a partir de los bocetos o diseños de modelos.
        .bg1.p-4
          p.mb-0 Por ello es necesario comprender y describir los procesos de patronaje, corte y trazo para relacionarlos con los procesos de confección, con el fin de determinar las diversas rutas operacionales de acuerdo con las líneas de producto y la tecnología disponible para realizar procesos de confección de calidad.

    p.mb-0 En el patronaje industrial “cada pieza del patrón modelo debe contener toda la información necesaria, dirección en la que se ubica el patrón sobre la tela, cantidad de piezas por modelo, la simetría, el nombre de la pieza y el nombre del modelo al que pertenece” (Carrera de Diseño y Gestión en Moda, 2015, pág. 9), de forma que conocer e interpretar la señalización de patrones es fundamental en los procesos de control de calidad.


</template>

<script>
export default {
  name: 'Introduccion',
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
