<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesos de confección industrial por la línea de producción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/1.png', alt='')
      .col-lg-9
        .row.mb-0
          .col-lg-7.pe-lg-0.h-100
            .bg8.mb-0.p-lg-5.p-4.cen
              p.mb-0.text-white(data-aos="fade-left") Los procesos de confección industrial son una serie de operaciones unitarias, en las que se transforma la materia prima para obtener un producto final, los procesos tienen diferentes niveles de complejidad y gran cantidad de actividades, para comprenderlos e identificarlos se recurre al diseño del proceso, el cual permite comprender el proceso general, las rutas a seguir en cada etapa, las actividades que deben ejecutarse y analizar los puntos de control para establecer acciones de mejora, lo que permite garantizar el objetivo del proceso, la obtención del producto con la calidad esperada y la disminución de tiempos, de riesgos y de sobrecostos.
          .col-lg-5.col-md-8.ps-0.h-100(data-aos="fade-right")
            .bg9.p-0.cen
              img.img-t.img-a.d-none.d-lg-block(src='@/assets/curso/tema3/2.svg', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Diagramas de flujo y de operaciones

    p.mb-4 Para realizar un diseño conceptual del proceso apropiado se usan los diagramas de flujo de proceso, una herramienta en la cual de forma gráfica se representan todas las actividades del proceso. Para la diagramación de la secuencia operacional de los procesos se utilizan símbolos, que interpretan las acciones del proceso, los cuales son los siguientes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 9. 
            | Diagramas de flujo y de operaciones en procesos productivos
          img.img-a.img-t(src='@/assets/curso/tema3/3.svg', alt='Infografía educativa sobre diagramas de flujo y operaciones. En la parte superior aparece el título “Diagramas de flujo y de operaciones” acompañado de un texto explicativo que describe el uso de diagramas de flujo de proceso para representar gráficamente actividades y secuencias operacionales. En la sección inferior se muestran cinco símbolos de procesos: un círculo verde para “Operación”, una flecha azul para “Transporte”, un cuadrado azul oscuro para “Inspección”, un triángulo gris claro para “Almacenamiento” y una figura amarilla en forma de “D” para “Demora”. Cada símbolo incluye una definición sobre su función dentro del proceso.')

    p.mb-4 Para realizar el diagrama de flujo se deben seguir los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/tema3/4.svg', alt='')
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | Listar el proceso de manera ordenada.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            | Utilizar un formato en el que se especifican los tiempos de cada actividad y el tipo de acción que le corresponde.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            | Asignar tiempo en minutos y distancia en metros.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            | Diligenciar información consolidando tiempos totales en operaciones, transporte, inspección, almacenamiento y demora.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | Colocar recomendaciones y observaciones.
    
    p.mb-4 A continuación se puede observar un formato genérico en el que se pueden desarrollar los pasos mencionados.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 10. 
            | Formato diagrama de flujo de procesos
          img.img-a.img-t(src='@/assets/curso/tema3/5.svg', alt='Formato diagrama de flujo de procesos con espacios para registrar referencia, módulo, fecha, analista y observaciones. Incluye una tabla de resumen con categorías de operación, transporte, demoras, inspección, almacenamiento, tiempo, distancia y costo, divididas en columnas de estado actual, propuesta y diferencia. En la parte inferior se presenta una tabla para describir operaciones, símbolos del proceso, tiempo en minutos, distancia en metros y recomendaciones al método. Los símbolos representados son círculo, flecha, letra “D”, cuadrado y triángulo.')

    p.mb-4 Los símbolos que se utilizan son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 11. 
            | Símbolos y significado en diagramas de procesos industriales
          img.img-a.img-t(src='@/assets/curso/tema3/6.svg', alt='Infografía que explica los símbolos utilizados en diagramas de procesos. Incluye cinco elementos gráficos con su descripción: un círculo verde para “Operación”, un cuadrado oscuro para “Inspección”, una línea inclinada azul para “Líneas horizontales”, una línea vertical clara para “Líneas verticales” y una flecha azul para “Flechas”. Cada símbolo está acompañado de un texto explicativo sobre su función dentro de un flujo de procesos.')

    p.mb-4 Para realizar el diagrama de operaciones se deben seguir los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | Colocar las columnas según las piezas de la prenda, colocando de izquierda a derecha, en primera medida la que se integra a la pieza principal.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            | Asignar las operaciones según secuencia de acuerdo con la pieza.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            | Incluir inspecciones.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            | Unir con flechas la secuencia.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | Enumerar el orden operacional a partir de la columna de la derecha.

    p.mb-4 Podemos observar el diagrama operacional de la confección de una camiseta básica.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-0
          .titulo-sexto
            h5 Figura 12. 
            | Diagrama operacional de una camiseta básica
          img.img-a.img-t(src='@/assets/curso/tema3/7.svg', alt='Diagrama operacional de una camiseta básica dividido en tres secciones: “Mangas”, “Cuello” y “Delantero y posterior”. Cada sección muestra una secuencia de operaciones conectadas mediante líneas y símbolos circulares verdes. En “Mangas” se incluyen actividades como dobladillar y cerrar mangas. En “Cuello” aparecen procesos como medir y cortar cuello, cerrar cuello y voltear cuello. La sección “Delantero y posterior” integra operaciones como unir hombros, fijar talla, pegar cuello, pespuntar cuello, cerrar costado, pegar mangas, dobladillar ruedo, planchar y doblar y empacar. También se observa un símbolo cuadrado oscuro que representa una inspección dentro del flujo del proceso.')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ficha técnica

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/8.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mx-lg-4.mtt
            p.mb-0 En cuanto al control de los procesos se utiliza la ficha técnica una guía fundamental para establecer controles de producción y calidad, está compuesta por varias partes según el proceso desarrollado y describe la información de la referencia a producir, el modelo, número de piezas, medidas de patrones y prendas, materia prima e insumos, ruta operacional y especificaciones de calidad.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg8.p-4.p-lg-5
          .bg22.p-2.mb-lg-3.mb-4.cen
            h4.mb-0.ps-lg-4 Este instrumento toma importancia en el proceso de confección ya que permite:
          ul.lista-ul.mb-0.text-white.mx-lg-5
            li.d-flex.mb-1
              i.fas.fa-boltt
              p.mb-0 Estandarizar el producto pues todas las unidades deben cumplir con las mismas especificaciones.
            li.d-flex.mb-1
              i.fas.fa-boltt
              p.mb-0 Controlar la calidad ya que mantiene y mejora el cumplimiento de los requisitos exigidos por el cliente. Por ejemplo, medidas de patrón y prenda terminada, calibración de costura, ancho de costura.
            li.d-flex.mb-1
              i.fas.fa-boltt
              p.mb-0 Controlar la producción, proporciona la información necesaria para el control de la producción, se deben calcular eficiencias y diligenciar tableros para control diario de producción, semanal, quincenal, mensual.
            li.d-flex.mb-1
              i.fas.fa-boltt
              p.mb-0 Establece organización de líneas, balanceo de líneas de producción para obtener las metas propuestas.
            li.d-flex.mb-0
              i.fas.fa-boltt
              p.mb-0 Proporciona la información para la gestión de compras de materiales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/9.png', alt='')
    
    p.mb-4 Toda ficha técnica está compuesta por cuatro partes principales: un rótulo, cuerpo de la ficha, control del documento y glosario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/10.svg', alt='')
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Rótulo")
            .col-lg-12
              p.mb-4 Debe tener logotipo de la empresa, nombre del producto, fechas de elaboración de la muestra, persona encargada de diseño, patronaje, producción, compras, calidad según el área, línea del producto (deportiva, exterior, interior, infantil, femenino, masculino).
              .titulo-sexto
                h5 Tabla 1.
                | Ejemplo rótulo
              .tabla-a.tab1
                table
                  thead
                    tr
                      th.logo-cell(rowspan="2") Logo de la empresa
                      th(colspan="5") Nombre de la empresa
                    tr
                      th(colspan="5") Ficha técnica diseño
                  tbody
                    tr.bgw
                      td Referencia
                      td
                      td Prenda
                      td
                      td Fecha solicitud
                      td
                    tr.bgw
                      td Molde
                      td
                      td Línea
                      td
                      td Fecha elaboración
                      td
                    tr.bgw
                      td Diseñador
                      td
                      td Talla base
                      td
                      td Año muestrario
                      td
                    tr.bgw
                      td Tipo de empaque
                      td(colspan="5")
                    tr.bgw
                      td Descripción de la prenda
                      td(colspan="5")
          .row.align-items-center(titulo="Cuerpo de la ficha")
            .col-lg-12
              p.mb-4 Describe las especificaciones de cada proceso, organizado en el orden del desarrollo de la confección: plano de diseño, patronaje, producción, calidad.
              .titulo-sexto
                h5 Tabla 2.
                | Ejemplo cuerpo de la ficha
              .tabla-a.tab2
                table
                  thead
                    tr
                      th.logo-cell(rowspan="2") Logo de la empresa
                      th(colspan="5") Nombre de la empresa
                    tr
                      th(colspan="5") Ficha técnica diseño
                  tbody
                    tr.bgw
                      td Referencia
                      td
                      td Prenda
                      td
                      td Fecha solicitud
                      td
                    tr.bgw
                      td Molde
                      td
                      td Línea
                      td
                      td Fecha elaboración
                      td
                    tr.bgw
                      td Diseñador
                      td
                      td Talla base
                      td
                      td Año muestrario
                      td
                    tr.bgw
                      td Tipo de empaque
                      td(colspan="5")
                    tr.bgw
                      td Descripción de la prenda
                      td(colspan="5")
                  tfoot
                    tr.bgw
                      td.plano-title(colspan="6") Plano de diseño
                    tr.bgw
                      td(colspan="6").plano-area &nbsp;
          .row.align-items-center(titulo="El control del documento ")
            .col-lg-12
              p.mb-4 Identifica a los responsables en el proceso de elaboración de la ficha técnica en las etapas de elaboración, revisión y aprobación del documento.
              .titulo-sexto
                h5 Tabla 3.
                | Ejemplo control del documento
              .tabla-a.tab3
                table
                  thead
                    tr
                      th(colspan="3") Control del documento
                  tbody
                    tr.bgw
                      td Elaborado por
                      td Recisado por
                      td Aprobado por
                    tr.bgw
                      td
                      td
                      td
          .row.align-items-center(titulo="Glosario")
            .col-lg-12
              p.mb-4 Lista los términos y expresiones utilizadas en el documento y organizadas en orden alfabético, de forma que permite la total comprensión del documento.
              .titulo-sexto
                h5 Tabla 4.
                | Ejemplo glosario
              .tabla-a.tab4
                table
                  thead
                    tr
                      th Logo de la empresa
                      th(colspan="3") Glosario técnico
                  tbody
                    tr.bgw
                      td Término
                      td Definición
                      td Término
                      td Definición
                    tr.bgw
                      td Término
                      td Definición
                      td Término
                      td Definición
    
    p.mb-4 A continuación se muestran las partes que componen la ficha técnica de producción de una blusa camisera de dama de acuerdo con el proceso:

    p.mb-4 La ficha técnica de diseño de la prenda describe el diseño de la prenda, dibujo plano que incluye lupas y especificaciones de la prenda terminada y colores a utilizar.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha técnica de diseño
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-4 La ficha técnica de patronaje describe las cantidades de cada pieza que conforman la prenda, dibujos de las piezas y especifica las medidas de patronaje y de prenda terminada y método para tomar la medida.
    
    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha técnica de patronaje No.1
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo2.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha técnica de patronaje No.2
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo8.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    p.mb-4 La ficha técnica de insumos - producción describe la materia prima e insumos que hacen parte de la prenda e incluye consumos unitarios.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha técnica insumos - producción
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo3.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    p.mb-4 La ruta operacional especifica tipo de aguja, calibre, punta, pies, guías y aditamentos necesarios para su confección. También lista organizadamente las operaciones para la confección en los tres procesos los cuales son preparación, ensamble y terminados, incluye nombre de la operación, máquina, tiempo estándar de cada operación y el total de tiempo ensamble, unidades por hora y observaciones.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha técnica insumos - producción ruta
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo6.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-4 La ficha de calidad como su nombre lo indica describe las especificaciones de calidad de la prenda, contiene fotos de acercamiento donde se puede apreciar la operación realizada según lo especificado.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha de calidad No.1
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo4.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Ficha de calidad No.2
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo5.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    p.mb-4 Glosario: descripción de los términos técnicos del proceso.

    .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Glosario
              p.mb-0 Puede descargar la ficha para su estudio.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo7.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-4 Analice otros ejemplos de fichas técnicas consultando los siguientes documentos:

    .bg10.p-lg-5.p-4.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/tema3/11.svg', alt='')
        .col-lg-8
          .tarjeta.color-acento-contenido.df.p-4.mb-2(data-aos="fade-right")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.mx-lg-4
                    h4.mb-2 Ficha técnica polo básica masculina
                    p.mb-0 Puede descargar la ficha para su estudio.
                  .col-sm-auto.pe-lg-5
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ficha_tecnica_polo_basica_masculina.pdf')" target="_blank")
                      span Descargar 
                      i.fas.fa-file-download
          .tarjeta.color-acento-contenido.df.p-4.mb-0(data-aos="fade-right")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.mx-lg-4
                    h4.mb-2 Ficha técnica tapabocas
                    p.mb-0 Puede descargar la ficha para su estudio.
                  .col-sm-auto.pe-lg-5
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ficha_tecnica_tapabocas.pdf')" target="_blank")
                      span Descargar 
                      i.fas.fa-file-download


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Confección de productos para línea de ropa exterior

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/12.png', alt='')
      .col-lg-7
        p.mb-4 Teniendo en cuenta las líneas de producto, la línea de ropa exterior corresponde a prendas femeninas, masculinas e infantiles para uso exterior como pantalones, chaquetas, blusas, camisas, faldas, vestidos entre otros.
        p.mb-4 Las operaciones de confección se clasifican en tres grupos:
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Preparación:] operaciones iniciales.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Ensamble:] unión de piezas preparadas.
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 #[b Terminados:] se incluyen operaciones en el final de la confección.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección de camisa básica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-4
        p.mb-4 Para desarrollar la camisa básica masculina o blusa camisera en el caso femenino, se realizará el proceso, una vez se cuente con los insumos, tela cortada según el patronaje y definida la maquinaria básica como es la máquina plana una aguja y fileteadora.
        p.mb-0 Algunas operaciones se pueden desarrollar en máquinas con tecnología, como operaciones de pegar pechera, la cual se realiza en máquina de multiagujas; operación de cerrar bolsillos y puños en máquinas planas con sistema de cose y corte, prehormado de cuellos, puños y bolsillos en máquinas prehormadoras.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/13.svg', alt='')
      .col-lg-4
        ul.lista-ul.mb-0
          li.d-flex.mb-4
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de preparación:] cuello, puños, portañuelas, bolsillo, almilla, pecheras, entre otras.
          li.d-flex.mb-4
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de ensamble:] unión por hombros, pegar mangas, cerrar costados, pegar puños, dobladillar ruedo, entre otras.
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de terminados:] ojalar, botonar, revisar, inspeccionar, planchar y empacar.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-nSTXfqAp0Q?si=s9BNDsPq_pnX5WQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Confección blusa camisera - Paso 1 Alistamiento para la confección de la blusa camisera

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección de pantalón básico

    .bg2.mb-0
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/15.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/14.svg', alt='')
            p.mb-4(data-aos="fade-left") Para desarrollar un pantalón básico cuyo modelo tenga pretina, bolsillos delanteros y posteriores se utilizan máquinas planas una aguja y fileteadora; se pueden realizar algunas operaciones con máquinas especiales como dobladillar botas o colocar pretina, luego de seleccionar la maquinaria e insumos se procede a realizar:
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 #[b Operaciones de preparación:] pretina, bolsillos ribete o parche, delanteros, cremallera, entre otras.
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 #[b Operaciones de ensamble:] unir costados, entrepierna, dobladillar botas entre otras.
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 #[b Operaciones de terminados:] ojalar, botonar, presillar, revisar, planchar, empacar, entre otras.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Confección de productos para línea de ropa deportiva

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-4
        p.mb-4 Siguiendo con la línea deportiva, donde se desarrollan gran variedad de productos se incluyen máquinas especializadas como recubridoras, reencauchadoras, dotadas con aditamentos y guías para asegurar la calidad de las costuras.
        p.mb-0 Los materiales utilizados requieren un manejo con mayor habilidad sobre todo en las prendas de tejido de punto, incluyendo con composición de elastano.
      .col-lg-4
        img(src='@/assets/curso/tema3/16.svg', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección de camiseta tipo polo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-lg-0.mb-4
        p.mb-0 En relación con la confección de este tipo de camiseta, se debe contar con las máquinas básicas, plana, fileteadora y recubridora. Se recomienda utilizar la fileteadora con puntada de refuerzo (4 hilos). Actualmente se ha automatizado el proceso de hacer pecheras que garantiza eficiencia y calidad.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/17.svg', alt='')
      .col-lg-5
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de preparación:] pechera, cuello, bolsillo entre otras.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de ensamble:] unir por hombros, montar mangas, cerrar por costados, dobladillar ruedo, entre otras.
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de terminados:] ojalar, botonar, revisar, planchar, empacar, entre otras.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GxxciqbSif8?si=SLvyztBI4fvVBI3h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Confección camiseta tipo polo - Paso 1 Alistamiento para la confección de la camiseta tipo polo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .tit.mb-5(data-aos="fade-right")
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Confección de pantalón de sudadera
        p.mb-4 En cuanto al pantalón de sudadera, se utilizan además de maquinaria básica, máquinas especiales como encauchadoras para sentar el elástico.
        .bg11.p-4.p-lg-5
          ul.lista-ul.mb-0.mx-lg-2 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de preparación:] colocar bolsillo lateral, bolsillos posteriores, unir forro entre otras.
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de ensamble:] unir por entrepierna, unir por costados, pegar elástico incluyendo forro, dobladillar botas entre otras.
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de terminados:] revisar, empacar entre otras.
            
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema3/18.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/CoyQBVH6FBw?si=RLAsDAWfynczqf46" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Confección pantalón de sudadera - Paso 1 Alistamiento para confección de pantalón de sudadera


    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Confección de productos para línea de ropa interior 
    
    p.mb-5 La línea interior comprende prendas más delicadas, de manipulación delicada y muy cuidadosa, debido al material y tamaño de las piezas. Requiere de maquinaria básica, además de contar con aditamentos como dosificadores de elástico en fileteadoras, recubridoras, guías y fólderes especiales. También se incluye en el proceso máquinas zigzadoras y presilladoras.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección panty dama

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.t2.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/19.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 En el mercado existen cada vez mejores atributos y funcionalidades en este tipo de prendas, sirven de ejemplo, pantys control de abdomen o pantys cero costuras. Las máquinas donde se realizan el ensamble son fileteadoras de tres hilos, recubridoras con dosificadores, fólderes sesgadores con dosificación de elástico, zigzadoras y presilladoras.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg12.p-4.p-lg-5
          ul.lista-ul.mb-0.mx-lg-2 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de preparación:] filetear mariposa, unión de mariposa con delantero y posterior.
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de ensamble:] unir entrepierna, fijar mariposa, unir costados, sesgar pierna, sesgar cintura, entre otras.
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de terminados:] presillar costado, limpiar, revisar, empacar, entre otras.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2DkN1Ur5Dw0?si=ST0suG9DD1lubQeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Panty tanga
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección bóxer masculino

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/20.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/intro/2.svg')
          .col-lg-10.col-md-10
            p.mb-0 La prenda requiere de máquina fileteadora con 3 o 4 hilos, con dosificadores de elástico, recubridoras con dosificador de elástico, y presilladora. Este tipo de prendas se pueden ensamblar en la máquina flat seamer, que les da más seguridad a las costuras.
        ul.lista-ul.mb-0.mx-lg-2 
          li.d-flex.mb-3
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de preparación:] unir realce, unir tiro, entre otras.
          li.d-flex.mb-3
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de ensamble:]  unir entre pierna, pierna, dobladillar pierna, fijar elástico entre otras.
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de terminados:] presillar, limpiar, revisar, empacar, entre otras.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cZ2lyqcUjqg?si=aZjJM54HBLYJyOVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Boxer pijamero

    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4. Confección de productos para línea con especialidad en ropa jean
    
    p.mb-4 Estas son prendas con gran posicionamiento en el mercado, son muy utilizadas en general por todas las líneas y edades. Algunos ejemplos de prendas en tela denim son pantalones, shorts, faldas, chalecos, overoles.
    
    p.mb-5 Se ha desarrollado tecnología en las operaciones de ensamble, pero también en procesos de terminados como los de lavandería.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección chaqueta

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/21.png', alt='')
      .col-lg-9 
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/tema3/22.svg', alt='')
          .col-lg-7
            .bg13.mb-0.p-lg-5.p-4.cen
              p.mb-0.text-white.mt-lg-2.mb-lg-2(data-aos="fade-left") Prenda superior con costuras realizadas en máquinas cerradora de codo, empretinadora, plana dos agujas y las máquinas básicas plana una aguja y fileteadora de 5 hilos, ojaladora de lágrima, troqueladora.
        ul.lista-ul.mb-0.mx-lg-5
          li.d-flex.mb-4
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de preparación:] ribete, unión de piezas delanteras y posteriores, portañuelas, armar cuellos, pespuntes, pechera, entre otras.
          li.d-flex.mb-4
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de ensamble:] unión por hombros, pegar mangas, unir por costado, montar cuello, pegar puños, montar pretina, entre otras.
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 #[b Operaciones de terminados:] presillar, ojalar, pegar botón, limpiar, proceso lavandería, planchar, empacar.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Confección pantalón clásico

    .bg14.p-4.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6
          img.img-t.mb-4(src='@/assets/curso/tema3/23.svg', alt='')
          p.mb-lg-0.mb-4 Para la confección de esta prenda se necesita de cerradora de codo, fileteadora de 5 hilos, pretinadora, presilladora, troqueladora, ojaladora de lágrima. Se utilizan máquinas automatizadas para parchar bolsillos, especiales para dobladillar botas, montar pasadores.
        .col-lg-6
          ul.lista-ul.mb-0
            li.d-flex.mb-4
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de preparación:] coser bolsillo lateral, coser bolsillo parche, montar cremallera, entre otras.
            li.d-flex.mb-4
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de ensamble:] unir por costados, unir por entrepierna, colocar pretina, dobladillar bota, entre otras.
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 #[b Operaciones de terminados:] proceso lavandería, presillar, ojalar, pegar botones, limpiar, planchar, empacar, entre otras.


</template>

<script>
export default {
  name: 'Tema3',
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
