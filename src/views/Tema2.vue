<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procedimiento de trazo y corte

    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/1.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items.mb-3(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/tema2/2.svg')
          .col-lg-10.col-md-10
            p.mb-0 Actualmente la industria de la confección cuenta con importantes avances tecnológicos en los procesos de corte, haciendo posible que se pase de procesos manuales a procesos totalmente computarizados y programables. La variedad de materiales utilizados en confección requiere de diferentes técnicas y tecnología para realizar los cortes de los patrones diseñados, sin embargo, esto no quiere decir que los procesos manuales estén en desuso.
        .bg6.p-4
          p.mb-0 El espacio requerido para el área de trazo y corte está relacionado con el tamaño del área de ensamble, el cual puede llegar a ser igual que los talleres de una fábrica de confección. En las mesas en talleres de microempresas, se analiza el ancho de las telas a cortar, si se manejan telas de 1,5 metros de ancho se recomienda adquirir mesas con un ancho mínimo de 1,8 metros y 2 metros de largo. También se debe contar, con espacio para áreas de almacenamiento y recepción, fusionadora, mesas de corte, y si es necesario el espacio del equipo de cómputo.
    
    p.mb-0 Las longitudes de las mesas son variables, pueden ser constituidas por módulos de un (1) metro por ejemplo, y los anchos pueden variar dependiendo del ancho del material a trabajar aumentando 30 o 40 cm para su manejo, la altura recomendada para la mesa es de 80 o 90 cm.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Tipos de corte

    p.mb-4 El corte es el inicio del proceso de fabricación, y está condicionado a las especificaciones detalladas en la prenda a realizar. La clasificación del procedimiento está relacionada con el nivel tecnológico en la maquinaria y equipos que ejecutan las actividades de corte y los materiales a utilizar, estos pueden ser:

    .cont_5_1.mt-4(data-aos="fade-left").mb-0
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/3.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema2/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Manual
              p.mb-0.txp Requiere en el corte la utilización de tijeras de aproximadamente 8 pulgadas, usadas solo para corte de tela, se colocan directamente los moldes y se procede a cortar.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/4.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema2/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Convencional
              p.mb-0.txp utiliza maquinaria y equipos electromecánicos, y se realiza a mano por uno o varios operarios.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/5.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema2/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Automático
              p.mb-0.txp Comprende elementos como mesa, unidad de control, conformado por el ordenador con software especializado, cabezal de corte, carro extendedor automático. Este tipo de corte aumenta el rendimiento del espacio y los tiempos de corte.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Operaciones principales de corte 

    p.mb-5 Son las directamente relacionadas con la actividad e interviene maquinaria y equipo en el desarrollo de sus actividades. Cada operación la componen varias actividades, las cuales se deben tener en cuenta para su correcto desempeño.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Trazo o marca

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/6.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mx-lg-4.mtt
            p.mb-0 Marcación manual o asistida por computador de las piezas que componen los patrones de la prenda. Se deben realizar los trazos por cada material en que se corta, es decir, trazos en telas, forro o entretelas teniendo en cuenta las cantidades y las tallas según la orden de corte.
            br 
            br 
            p.mb-0 “La marcada es siempre un rectángulo de lado corto igual al ancho del tejido y lado largo el que corresponda una vez distribuidos los patrones encima de la tela” (Giraldo, 1990, pág.9)
    
    p.mb-5 En el caso del corte troquelado se realiza mediante el uso de plantillas colocadas a presión y se procede a cortar. Es muy importante tener en cuenta el aprovechamiento del espacio en la colocación de los patrones para mejorar el rendimiento de la tela.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tendido

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.t2.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Consiste en estirar las capas de tela de manera uniforme sobre la mesa de corte, cortándolas al largo que corresponde según el trazo o marca realizada previamente, se inicia por la capa base, que guía el margen para tender las demás capas.
            br
            br
            p.mb-0 El tendido puede ser manual o asistido por un carro extendedor mecánico o automático, los cuales permiten alinear correctamente el tejido sobre la mesa de corte. En la imagen se observa un carro extendedor mecánico.
            br
            br
            p.mb-0 Las capas forman lo que se denomina colchón o bloque de tela, conforme el trazo y tipo de tendido. Antes de realizar el tendido se debe analizar el tiempo requerido de reposo de las telas para proceder a cortar.

    p.mb-4 De acuerdo con Giraldo (1990, pág. 12) “los tendidos básicos son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              h4.mb-3 Cara arriba (a una cara)
              p.mb-0 El tendido se realiza mediante un carro extendedor, el cual va dejando el tejido sobre la mesa hasta llegar al extremo final, donde se efectúa el corte al ancho del tejido. Efectuado este, la máquina extendedora retrocede hasta el principio, sin colocar tela sobre la mesa, hasta el principio de la marcada, donde inicia de nuevo el extendido de la siguiente capa. Este tipo de tendido es recomendado en entretelas, telas con estampados, líneas y cuadros.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.text-end
              h4.mb-3 Cara a cara (zigzag)
              p.mb-0 El comienzo puede iniciarse en cualquiera de los extremos de la marcada. Al igual que en el caso anterior el cabo de la tela se deposita en el extremo elegido y la maquinaria se desliza hacia el otro extremo, dejando el tejido al mismo tiempo. Al llegar al extremo opuesto, este es doblado y el carro retrocede extendiendo al mismo tiempo y así sucesivamente. Es el tendido más rápido y es típico de telas lisas y en denim.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.text-start
              h4.mb-3 Cara a cara girando
              p.mb-0 Se comienza igual que el tendido a una cara, en el extremo inicial de la marcada. El carro va extendiendo hasta el extremo opuesto donde es cortado el tejido, procediéndose a girar el rollo de tejido antes de volver al principio de la marcada, para empezar a extender la siguiente cara. Por lo tanto, el tejido en la segunda hoja irá cara abajo y en la misma dirección en del hilo que en la primera. Este tendido es el más lento y es recomendado en telas que tienen pelo en su textura tales como panas, gamuzas o terciopelos.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.text-end
              h4.mb-3 Escalonado o escalón
              p.mb-0 Es una variante del tendido cara arriba, donde si bien el ciclo de trabajo es idéntico, las longitudes de las capas son diferentes. Esto debido a que se intentó extender dentro de la misma marcada de varias tallas, con cantidades diferentes para cada una de ellas. Este tipo de tendido es empleado en procesos de confección con gran variedad de modelos y pocas cantidades por talla, de forma que se puede realizar en menor tiempo al realizar una sola marca, también se consigue mayor velocidad y rendimiento en el proceso de corte.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.text-start
              h4.mb-3 Tubular
              p.mb-0 Se diferencia de los tendidos cara arriba y zigzag en la forma de colocación del género y en los dispositivos especiales que llevan las máquinas extendedoras para alimentar y depositar las hojas dobles del tubular. Se utiliza con telas en tejido de punto.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.text-end
              h4.mb-3 Lomo
              p.mb-0  El fin el tendido de tejido al lomo es la usada en el corte manual, es siempre cara arriba, o sus variantes en escalón al doblar la tela y trabajar a doblez de tela.
    
    p.mb-5 Los dos últimos tipos de tendido son variaciones de los anteriores, pero trabajando con el tejido presentado en distinta forma a la usual de rollo y abierto”.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Corte o destrozado

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg7.p-4
          .row.justify-content-center.align-items.mb-0
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema2/8.svg' alt="")
            .col-lg-10
              p.mb-4 Esta operación consiste en el corte o destroce del colchón de tela (creado en el tendido) por el orillo del trazo realizado para cada una de las piezas. El colchón de tela debe estar fijado ya sea por alfileres, pinzas, pesas o por el sistema de succión si la mesa lo tiene.
              p.mb-4 La actividad puede realizarse de manera manual con uso de cortadoras de disco o máquinas de cuchilla vertical, o de manera automatizada con máquinas de corte por control numérico o troqueladoras.
              p.mb-0 Esta operación genera altos riesgos laborales, es por ello por lo que se recurre a la automatización del proceso, logrando la disminución de riesgos laborales derivados de la actividad.
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tiqueteado

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg2.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema2/9.svg' alt="")
            .col-lg-10
              p.mb-0 Consiste en rotular cada una de las piezas cortadas, identificando el lote, nombre de la pieza, talla y un consecutivo para contribuir en el orden del sistema.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Operaciones auxiliares de corte. 

    p.mb-5 Para completar el proceso de corte adecuadamente, se requiere de operaciones adicionales en las cuales interviene personal auxiliar, con el fin de apoyar el proceso.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Fusionado
    
    p.mb-4 En el proceso de fabricación existen piezas del modelo que están previstas para entretelar, por ello una vez se corta la tela y la entretela se requiere utilizar la máquina fusionadora, un equipo por medio del cual a presión y calor se adhiere la entretela a la tela. En este proceso es importante el control de temperatura según el textil ya que puede generar encogimiento.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema2/10.png')
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Empaquetado

    p.mb-4 Consiste en separar por bloques las piezas cortadas empaquetando una cantidad definida de todas las piezas que conforman la prenda, se amarran y forman paquetes de 10 a 20 unidades, para así facilitar el control de producción y por ende, de calidad.

    p.mb-0 Una vez se empaquete es importante el almacenamiento utilizando técnica de Kanban, para entregar a ensamble.


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Tecnología en corte
    
    p.mb-5 El uso de tecnología en el área de corte se inicia en el proceso de trazo, el cual es asistido por computador con programas de software especializados, los cuales ahorran tiempo y espacio en la producción. Así mismo la tecnología utilizada para el corte, la cual requiere de programas integrados y compatibles, cuya función es comunicar al cabezal de corte las piezas a cortar, acelerando así los ciclos de trabajo y logrando mayor productividad.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Maquinaria y equipos con tecnología en corte
    
    p.mb-4 Dentro de la maquinaria y equipo con tecnología en corte se encuentra la maquinaria de corte convencional, entre las más utilizadas se distinguen:

    .row.fondo1.align-items-center.p-lg-5.p-4.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Cortadoras verticales
                    p.mb-0 Poseen cuchillas hasta con 9 pulgadas de longitud, en su movimiento vertical van cortando el bloque de tela, su capacidad de corte llega hasta las 40 capas de tela dependiendo de la densidad y composición del material.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema2/11.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Cortadoras circulares
                    p.mb-0 Estas se caracterizan porque su cuchilla es en forma de disco, pueden ser de 2, 4 o 5 pulgadas, son muy utilizadas para cortar pocas capas de tela o prototipos de prendas y en piezas con formas curvas.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema2/12.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Cortadora sin fin
                    p.mb-0 Es adaptada en el centro de una mesa especial con sistema de succión de material para fijar el bloque de telas y reducir los riesgos laborales. El corte se realiza al mover la pieza alrededor, se utiliza también en el afinado de piezas.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema2/13.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Cortadora de extremos
                    p.mb-0 Son cuchillas rectas acompañadas de una guía con las que se realiza el corte del extremo del tendido.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema2/14.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Troqueles
                    p.mb-0 Son moldes con la forma de la pieza a cortar y son utilizados para grandes series de piezas, en las que la variación es mínima.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema2/15.png")

    p.mb-4 Así mismo existe maquinaria y equipos con tecnología por control numérico, en el que se utilizan programas informáticos para realizar las diversas operaciones de corte, entre los más comunes se encuentran:
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-3.d-none.d-lg-block
        img(alt="" src="@/assets/curso/tema2/16.png")
      .col-lg-9
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              h3.mb-3.mx-3 Ultrasonido 
              p.mx-2 Por medio del sonotrodo asegura que los bordes del corte no se desflequen ya que realiza un corte limpio, este corte se utiliza para procesos que desarrollan prendas con cero costuras.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              h3.mb-3.mx-3 Cabezal automatizado
              p.mx-2 Máquina provista de una cuchilla que gira a 360° para efectuar el corte de prendas, además puede rotular las piezas al tiquetearlas.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h3.mb-3.mx-3 Rayo láser
              p.mx-2 El elemento cortante es un haz de luz o rayo láser de alta densidad, el corte que genera es de gran precisión y mucho más rápido debido a al nivel automatizado del proceso.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Carro extendedor automatizado")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Posee un #[em software] que permite la programación de tendidos irregulares en medidas, cantidades, tallas y tejidos.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema2/17.png')
          .row.justify-content-center.align-items-center(titulo="Mesas neumáticas")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Cuentan con un sistema de succión para mejorar la calidad del corte evitando uso de alfileres, o con niveles que aumentan la capacidad de corte por el aprovechamiento del área de corte. Gracias a la aspiración fijan y aplanan las capas de tejido a cortar.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema2/18.png')
          .row.justify-content-center.align-items-center(titulo="Mesas con agujas")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 se utilizan para tejidos que requieren alineación perfecta entre capas, como las telas de rayas, estampados, cuadros, etc. Generan un corte fino y consumen el mínimo de tela. Las agujas tienen un largo de hasta 10 cm, con punta redonda para evitar el daño del tejido.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema2/19.png')
          .row.justify-content-center.align-items-center(titulo="Bandas transportadoras")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Se utilizan para el transporte de telas y paquetes cortados, también para entregar los paquetes debidamente empaquetados al área de ensamble.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema2/20.png')
          .row.justify-content-center.align-items-center(titulo="<em>Software</em>")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 Los programas especializados de AUDACES, GERBER, OPTITEX O LECTRA, cuentan con módulos especializados en trazo para facilitar el corte de las prendas, los hace más precisos, disminuye desperdicios de materia prima y optimiza los tiempos de producción.
              p.mb-0 Se requiere además del computador y el programa, un plotter para poder imprimir los trazos. Pero en el caso que el corte sea automático, el cabezal va cortando sobre la tela directamente sin necesidad de impresión previa del trazo.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema2/21.png')


</template>

<script>
export default {
  name: 'Tema2',
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
