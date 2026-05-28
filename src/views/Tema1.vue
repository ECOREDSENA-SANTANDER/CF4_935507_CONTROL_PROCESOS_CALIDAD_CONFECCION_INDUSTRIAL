<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Patronaje básico
    
    p.mb-0 La actividad del patronaje se constituye como la actividad básica en la creación de las prendas, es definido como el proceso mediante el cual se elaboran todas las piezas y moldes necesarios para la creación y estructuración de una prenda, este proceso se encuentra ligado al proceso creativo del diseñador.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Terminología técnica y convenciones del área de patronaje industrial 

    .bg2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/2.svg', alt='')
            p.mb-4(data-aos="fade-left") La comunicación es primordial para el logro de los objetivos de una empresa, por lo tanto todas las áreas de la planta deben definir e identificar los conceptos propios del proceso para su aplicación en una determinada sección sin inconvenientes y no alterar la calidad de la prenda al momento de avanzar en las diferentes secciones o áreas de producción.
            p.mb-0(data-aos="fade-right") El patronaje es la técnica de desarrollo de las plantillas resultado de la interpretación del diseño de la prenda, tiene en cuenta las medidas del cuerpo, las cuales pueden ser tridimensionales o bidimensionales. De acuerdo con la industrialización del proceso se hace necesario convenir en el uso de términos y de símbolos, es necesario que se maneje un lenguaje técnico relacionado al proceso, como por ejemplo, hilo de tela, línea de aplome, ampliaciones, desahogos, entre otros para su aplicación en el procedimiento.
    
    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Terminología en patronaje
              p.mb-0 Para conocer otros conceptos consulte del documento terminología en patronaje.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Terminologia_en_patronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg3.p-lg-5.p-4
          p.mb-4 Para identificar los patrones, debe indicarse de manera ordenada:
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-bolt
              p.mb-0 Nombre de la pieza.
            li.d-flex.mb-1
              i.fas.fa-bolt
              p.mb-0 Referencia, nombre del diseño, el cual para diferenciarse puede utilizar números, letras o una combinación de ambos.
            li.d-flex.mb-1
              i.fas.fa-bolt
              p.mb-0 Talla, según el cuadro de tallas.
            li.d-flex.mb-1
              i.fas.fa-bolt
              p.mb-0 Número de veces a cortar.
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 Línea de aplome, dirección del corte del patrón, se debe indicar en cada pieza del patrón.
      .col-lg-5.d-none.d-lg-block
        img.img-t.img-a(src='@/assets/curso/tema1/3.svg', alt='')

    p.mb-4 A continuación, se detalla el despiece y la rotulación de algunos patrones, los cuales exponen el orden correspondiente para su correcta identificación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 1. 
            | Patrón de confección de prenda con piezas de delantero, espalda y manga.
          img.img-a.img-t(src='@/assets/curso/tema1/4.svg', alt='Ilustración de una mujer señalando un tablero con moldes de confección de una prenda. En el tablero aparecen tres piezas del patrón: delantero, espalda y manga, cada una con líneas de referencia, pinzas y flechas verticales indicando dirección. Los textos visibles dicen “Delantero referencia 02-102 talla 10 x-2”, “Espalda referencias 02-102 talla 10 x-1” y “Manga referencias 02-102 talla 10 x-2”. El fondo es gris claro y el tablero tiene un tono azul claro.')

    p.mb-4 Las convenciones son símbolos para poder identificar el patrón o molde y las claves geométricas también se requieren para poder desarrollar cada pieza, conforme al diseño especificado.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Manual de patronaje 
              p.mb-0 Para más información consulte el manual de patronaje básico e interpretación de diseños.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-0 Los materiales y herramientas para desarrollar manualmente los patrones son papel molde o manifold, tijeras de papel, portaminas, borrador, micropuntas de colores, pegante en barra, rodaja, punzón y las reglas de patronaje.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Especificaciones técnicas de patronaje, medidas y cuadro de tallas, proporciones del cuerpo humano.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mx-lg-4.mtt
            p.mb-0 La función del patronaje es realizada por el patronista, persona capacitada en interpretar el diseño y en construir los patrones, los cuales como se mencionó anteriormente deben incluir cortes, pinzas, amplitudes, aplomes (piquetes) y anchos de costura.
            br 
            br 
            p.mb-0 El listado de medidas son las tomadas en una persona para desarrollar el patrón teniendo en cuenta los puntos de referencia corporal; se pueden mencionar el punto de acromio, zona umbilical, fosa supraclavicular, entre otros.
            br 
            br
            p.mb-0 Existen dos tipos de medidas, verticales y horizontales, a su vez se habla de medidas bidimensionales que se aplican por ejemplo a lo largo, es decir en dirección vertical, por ejemplo largo de falda, largo de talle; y medidas a lo ancho en dirección horizontal como el ancho de pecho, también se incluye en las horizontales las tridimensionales, las cuales son contorno de pecho, cintura y cadera.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 2. 
            | Medidas corporales para confección de falda.
          img.img-a.img-t(src='@/assets/curso/tema1/4.svg', alt='Ilustración de una mujer señalando un tablero con moldes de confección de una prenda. En el tablero aparecen tres piezas del patrón: delantero, espalda y manga, cada una con líneas de referencia, pinzas y flechas verticales indicando dirección. Los textos visibles dicen “Delantero referencia 02-102 talla 10 x-2”, “Espalda referencias 02-102 talla 10 x-1” y “Manga referencias 02-102 talla 10 x-2”. El fondo es gris claro y el tablero tiene un tono azul claro.')

    p.mb-4 Los materiales y herramientas para desarrollar manualmente los patrones son papel molde o manifold, tijeras de papel, portaminas, borrador, micropuntas de colores, pegante en barra, rodaja, punzón y las reglas de patronaje.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 3. 
            | Clasificación de tallas por rango de edad
          img.img-a.img-t(src='@/assets/curso/tema1/6.svg', alt='Gráfico informativo que relaciona rangos de edad con tipos de tallas de confección. El contenido indica: “0 a 12 meses – Tallas bebé”, “1 a 14 años – Tallas infantiles”, “15 a 17 años – Tallas jóvenes” y “A partir de los 18 años – Tallas adultos”. Cada categoría está conectada por una línea horizontal verde sobre un fondo gris claro con borde redondeado.')

    p.mb-4 Teniendo en cuenta lo mencionado, hay que tener presente que el cuerpo humano es considerado un cuerpo geométrico tridimensional irregular, el cual se asemeja a la figura geométrica de un cilindro conformado por su contorno, que una vez abierto forma un rectángulo, el cual es el área en la que se trabaja el patrón. Al dividir en dos partes el rectángulo, una parte corresponde al posterior del cuerpo y la otra mitad corresponde a la parte anterior o delantera del cuerpo, basados en la simetría del cuerpo humano, es decir, que el lado derecho es igual al lado izquierdo, por lo cual se puede trazar solo la mitad del delantero y así mismo con el posterior.
    
    p.mb-4 En consecuencia, existen medidas horizontales como el ancho de pecho y ancho de espalda que se dividen en dos para trazar en el patrón y las medidas de contornos (busto, cintura, cadera) se dividen en cuatro para poder trazar en el patrón.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto
            h5 Figura 4. 
            | Representación del cuerpo humano a partir de un cilindro
          img.img-a.img-t(src='@/assets/curso/tema1/7.svg', alt='Diagrama explicativo en tres pasos sobre la construcción de patrones de confección a partir de una figura cilíndrica. La primera imagen muestra un cilindro que envuelve el cuerpo humano con una línea vertical punteada y marcas de corte. La segunda muestra el cilindro cortado por la mitad. La tercera presenta un rectángulo desplegado que representa el área que cubre el cuerpo humano, con indicaciones de “Centro espalda” y “Centro delantero”. El fondo es gris claro y las líneas guía son verdes.')
        figcaption #[b Fuente:] (Carrera de diseño y gestión en moda, 2015, pág 10)
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XxCRQGNL_G4?si=AYY6zVE7VmOMzjMm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Toma de medidas

    .bg5.p-lg5.p-4.mb-5
      p.mb-0 La empresa debe conocer al consumidor, su antropometría y así con un estudio minucioso establecer una tabla de medidas en donde se estandarice por tallas. Las tablas muestran en orden creciente las medidas y su talla, conforme a la proporción, la cual se entiende como una unidad de medida constante, y es aplicada en cada talla para establecer su variación. Las tablas de medidas pueden cambiar en una misma línea de producto, conforme el mercado, la marca del producto o tipo de tejido.

    .tarjeta.color-acento-contenido.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Manual de patronaje 
              p.mb-0 Para más información consulte el manual de patronaje básico e interpretación de diseños.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Procedimiento de patronaje 
    
    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/8.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items.mb-2(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/tema1/9.svg')
          .col-lg-10.col-md-10
            p.mb-0 El espacio para realizar la actividad de patronaje debe contar con una mesa plana de trabajo uniforme, suficiente para colocar pliegos de papel manifold o cartón cartulina, sus materiales y herramientas en el caso que sea de manera manual; el patronaje requiere precisión en el trazo de las líneas y curvas, aplicar correctamente las medidas y cortar los patrones según el paso a paso del desarrollo del molde. A partir de las medidas del patrón una vez desarrollado, se trazan además los anchos de costuras alrededor del trazo de cada pieza. De allí el cuadro de medidas de prenda terminada y de patrones para luego ejecutar el control de calidad.
        p.mb-0 Además de la opción de realizar el patronaje manual, actualmente se utilizan programas de software especializados en los que se desarrolla el patronaje, el escalado y trazo de las prendas. Los más utilizados son #[b Audaces, Optitex, Lectra, Gerber,,] entre otros, los cuales optimizan el tiempo de las actividades en un alto porcentaje.
    
    p.mb-4 Los anchos de costura aplicados, dependen del tipo de costura y conforme a las normas de calidad en el proceso industrializado, en donde se considera un (1) cm de ancho de costura, pero además se debe tener en cuenta el ajuste y características de las máquinas, por ejemplo, el ancho de un sobrehilado puede variar según el ajuste por tanto puede afectar las medidas de los contornos en una camiseta cuando se unan a los costados, de allí puede ser 0,5 cm o 0,7 cm el ancho de costura, variando 2 mm que en total del contorno equivale a 2mm x 4mm = 8 mm, es decir casi un centímetro lo que afectará las medidas de prenda terminada.

    p.mb-4 El procedimiento de patronaje manual se desarrolla en tres pasos básicos como muestra en la siguiente figura y los cuales cuentan con una serie de actividades a realizar y las cuales permiten el desarrollo de un patrón con las características recibidas en la orden de trabajo.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12.offset-lg-0
        .row.justify-content-center.align-items-end
          .col-lg-9.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/10.svg", alt="alt")
                .col
                  h5.mb-4 Toma de medidas
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Tomar con la cita métrica las medidas requeridas según el patrón a partir de los puntos corporales de referencia.
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Realizar medidas de contornos las cuales se toman alrededor del cuerpo (tridimensionales).   
                    li.d-flex.mb-0
                      i.fas.fa-bolt
                      p.mb-0 Realizar las medidas de los largos y anchos (bidimensionales).    
            .crd.crd--avatarHorizontal.cr1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/11.svg", alt="alt")
                .col
                  h5.mb-4 Desarrollar patrón base
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Hacer el patrón plano conforme a la prenda, el cual debe estar disponible para realizar transformaciones conforme al diseño y a la tela.
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Realizar el patrón acorde a la simetría del cuerpo, los contornos de cintura, cadera, pecho, aplicando las fórmulas y procedimientos para su desarrollo.   
                    li.d-flex.mb-0
                      i.fas.fa-bolt
                      p.mb-0 Seleccionar la talla de la escala de tallas.
          .col-lg-4.sob1.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema1/12.svg", alt="alt")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.offset-lg-1
        .row.justify-content-center.align-items-end
          .col-lg-4.sob.d-none.d-lg-block(data-aos="fade-left")
            img.img-t(src="@/assets/curso/tema1/14.svg", alt="alt")
          .col-lg-9(data-aos="fade-right")
            .bg15.ic.p-4
              h5.mb-3.text-white.ps-lg-5.pe-lg-5 Analizar e interpretar el diseño propuesto
              ul.lista-ul.mb-0.text-white.ps-lg-5.pe-lg-5
                li.d-flex.mb-3
                  i.fas.fa-boltt
                  p.mb-0 Desarrollar el plano teniendo en cuenta el diseño de la prenda.
                li.d-flex.mb-2
                  i.fas.fa-boltt
                  p.mb-0 Despiezar las partes que conforman el patrón plano.
                li.d-flex.mb-2
                  i.fas.fa-boltt
                  p.mb-0 Cortar la muestra o prototipo para comprobar el cumplimiento de las especificaciones de patronaje con el diseño y las medidas.  
                li.d-flex.mb-2
                  i.fas.fa-boltt
                  p.mb-0 Ensamblar el prototipo o muestra.
                li.d-flex.mb-2
                  i.fas.fa-boltt
                  p.mb-0 Analizar y evaluar muestra treminada.
                li.d-flex.mb-2
                  i.fas.fa-boltt
                  p.mb-0 Realizar ajustes.
                li.d-flex.mb-2
                  i.fas.fa-boltt
                  p.mb-0 Proceder con la segunda muestra o prototipo.
                li.d-flex.mb-0
                  i.fas.fa-boltt
                  p.mb-0 Aprobar el patron una vez cumpla con los requisitos.

    p.mb-4 Una vez se aprueba el prototipo o muestra, desarrollado de forma manual o asistido por computador, se procede a realizar el escalado de cada pieza que compone el patrón, como lo muestra la figura, a lo cual se le denomina nido.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto
            h5 Figura 5. 
            | Piezas de patrón para confección de prenda y cuello 
          img.img-a.img-t(src='@/assets/curso/tema1/15.svg', alt='Ilustración técnica identificada como “Figura 5” que muestra diferentes piezas de un patrón de confección escalado en varias tallas. Aparecen las piezas de espalda, frente, manga corregida, cuello y pie de cuello, además de piezas pequeñas complementarias. Cada molde presenta líneas superpuestas que representan gradaciones de talla y marcas de referencia. El diseño está sobre un fondo gris claro con textos en negro.')

    
    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Patronaje básico en cada línea de producción

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/16.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mx-lg-4.mtt
            p.mb-0 Como se ha visto, es importante establecer los patrones básicos en cada línea de producción para luego proceder a realizar las transformaciones necesarias según el diseño del modelo.
            br 
            br 
            p.mb-0 Se desarrollan patrones básicos de corpiño en la línea femenina para realizar blusas, vestidos y chaquetas; así mismo, para confeccionar prendas elásticas se desarrollan patrones básicos de corpiños especializado para este tipo de textiles las cuales son reducidas según su elasticidad. También se desarrollan patrones básicos de falda y pantalón para las prendas inferiores.
            br 
            br
            p.mb-0 En la línea masculina se desarrollan patrones básicos de torso y pantalón; y para la línea infantil se desarrollan patrones básicos de torso, falda y pantalón.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Patronaje básico femenino

    p.mb-4 Para construir el patrón básico de corpiño se requieren las medidas de talle delantero, talle posterior, hombro, escote, ancho de pecho, ancho de espalda, altura de busto, separación de busto, contorno de busto y contorno de cintura. Es importante ubicar el centro frente y centro atrás en el papel que equivale al orillo a lo largo del pliego, es decir en línea vertical.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Manual de patronaje 
              p.mb-0 Se realizan las operaciones indicadas para desarrollar el patrón del corpiño y del torso - para ello puede revisar el manual de patronaje básico e interpretación de diseño.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-4 A continuación se observa a continuación se identifica el patrón básico de corpiño femenino.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto
            h5 Figura 6. 
            | Patrón básico de corpiño delantero y posterior con medidas anatómicas 
          img.img-a.img-t(src='@/assets/curso/tema1/17.svg', alt='Diagrama técnico de patronaje de un corpiño básico femenino, mostrando las piezas delantera y posterior. Incluye referencias de medidas como cuello delantero y espalda, hombro, talle frente y atrás, ancho de pecho y espalda, cintura, costado, ubicación de pinzas y profundidad de sisa. En el centro se observa la forma de la sisa que conecta ambas piezas del patrón.')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Patronaje básico infantil

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.t1.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mx-lg-4.mtt
            p.mb-0 Conforme a la morfología corporal de los niños, es necesario tener en cuenta para construir el patrón básico del torso las medidas de talle delantero, talle posterior, hombro, escote, ancho de pecho, ancho de espalda, contorno de pecho y contorno de cintura. Si se utiliza el papel manifold debe dejarse un espacio de margen para el manejo en la parte superior de aproximadamente cuatro (4) cm.
    
    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Manual de patronaje 
              p.mb-0 Realizar las operaciones indicadas para desarrollar el patrón básico infantil para ello puede revisar el manual de patronaje básico e interpretación de diseño.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    p.mb-4 En esta sección se muestra el patrón básico de torso infantil terminado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto
            h5 Figura 7. 
            | Diagrama base de torso delantero y posterior para patronaje 
          img.img-a.img-t(src='@/assets/curso/tema1/19.svg', alt='Ilustración técnica de patronaje que muestra el desarrollo del básico de torso delantero y posterior. El esquema incluye líneas de construcción, medidas proporcionales como B/20+2.5, B/4+0.5 y B/2+3, así como referencias de largo de espalda. También se observan curvas de sisa, cuello, hombro y marcas de ajuste indicadas con flechas y símbolos geométricos para modificaciones del patrón.')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Patronaje básico masculino
    
    p.mb-4 Así mismo como en el patronaje infantil, se requiere para desarrollar el patrón básico de torso masculino las mismas medidas y aplicar las operaciones antes especificadas, según la talla.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Manual de patronaje 
              p.mb-0 Realizar las operaciones indicadas para desarrollar el patrón básico masculino, para ello puede revisar el manual de patronaje básico e interpretación de diseño.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto
            h5 Figura 8. 
            | patrón básico de torso masculino.
          img.img-a.img-t(src='@/assets/curso/tema1/20.svg', alt='Página educativa sobre patronaje básico masculino. En la parte superior aparece el título “patrón básico de torso masculino” acompañado de un texto explicativo y una nota instructiva. En el centro se muestra la Figura 7, un diagrama técnico del patrón básico de torso masculino con piezas del delantero y espalda identificadas como CF y CA. El esquema incluye líneas de construcción, curvas de sisa y cuello, medidas proporcionales, referencias de hombro, centro atrás y divisiones matemáticas utilizadas para elaborar el patrón.')


</template>

<script>
export default {
  name: 'Tema1',
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
