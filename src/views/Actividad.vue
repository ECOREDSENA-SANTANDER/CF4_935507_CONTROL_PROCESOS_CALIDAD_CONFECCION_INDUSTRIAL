<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje, trazo, corte y confección.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos relacionados con patronaje básico, terminología técnica, señalización de patrones, medidas corporales, procedimientos de trazo y corte, operaciones principales y auxiliares de corte, tecnología aplicada, diagramas de flujo y operaciones, ficha técnica, ruta operacional y procesos de confección industrial por línea de producción.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: '¡VUELVA A INTENTARLO!',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad del componente formativo Patronaje, trazo, corte y confección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer únicamente los insumos decorativos de una prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprender los procesos de patronaje, trazo, corte y confección para relacionarlos con rutas operacionales y calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Estudiar solo el empaque y embalaje de productos terminados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la ficha técnica por observaciones verbales del operario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué información debe indicarse en un patrón para su correcta identificación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el color de la tela y el nombre del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el precio del producto y la fecha de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el nombre del operario que corta la tela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Nombre de la pieza, referencia, talla, número de veces a cortar y línea de aplome.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué son las convenciones en el área de patronaje industrial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Símbolos que permiten identificar el patrón o molde según el diseño especificado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Máquinas empleadas para realizar cortes automatizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnicas exclusivas para planchar prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Formatos utilizados solo para registrar compras de insumos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes medidas corresponde a una medida tridimensional del cuerpo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Largo de falda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ancho de pecho.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contorno de cintura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Largo de talle.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Según la explicación geométrica del cuerpo humano, ¿cómo se trabaja el área del patrón al abrir el cilindro?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como una línea curva que no requiere simetría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como un rectángulo dividido entre posterior y delantero, con base en la simetría corporal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Como un círculo completo que se corta sin divisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como una pieza única sin relación con medidas corporales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuáles son los tres pasos básicos del procedimiento de patronaje manual presentados en el componente?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El de producción autoriza qué y cuánto confeccionar; el de transporte autoriza qué y cuánto material retirar del proceso anterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El de producción se usa solo para ventas; el de transporte se usa solo para auditorías externas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El de producción elimina los inventarios; el de transporte elimina las fichas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El de producción aplica a textiles y el de transporte solo a maquinaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué programas se mencionan como apoyo tecnológico para patronaje, escalado y trazo?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Audaces, Optitex, Lectra y Gerber.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Word, PowerPoint, Outlook y Teams.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Photoshop, Premiere, Canva y CapCut.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SPSS, SAS, R y Python.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es el escalado en el proceso de patronaje?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La unión de las piezas por medio de costuras rectas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La impresión de etiquetas para identificar paquetes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El aumento o reducción de cada pieza del patrón aprobado según las tallas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La revisión final de la prenda antes del empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el inicio del proceso de fabricación en el área de trazo y corte?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La plancha industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El bordado decorativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El proceso de lavandería.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El corte, condicionado por las especificaciones de la prenda.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza al corte automático?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utiliza solo tijeras de ocho pulgadas y moldes manuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprende mesa, unidad de control, <em>software</em> especializado, cabezal de corte y carro extendedor automático.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se realiza únicamente con alfileres, pinzas y pesas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere trazo, tendido ni control de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué es el trazo o marca en el proceso de corte?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La marcación manual o asistida por computador de las piezas que componen los patrones de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La unión final de las piezas preparadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El proceso de eliminar arrugas con calor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La clasificación de defectos en prendas terminadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿En qué consiste el tendido de la tela?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En doblar y empacar las prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En colocar botones y ojales al producto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En estirar capas de tela uniformemente sobre la mesa de corte según el trazo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En registrar el glosario técnico de la ficha.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de tendido se recomienda para telas con estampados, líneas y cuadros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tendido tubular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tendido al lomo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tendido escalonado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tendido cara arriba.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué operación consiste en rotular cada pieza cortada con lote, nombre de la pieza, talla y consecutivo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiqueteado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fusionado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Doblado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planchado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué operación auxiliar adhiere la entretela a la tela por medio de presión y calor?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empaquetado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fusionado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál máquina de corte convencional se caracteriza por tener cuchilla en forma de disco y servir para pocas capas o prototipos?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cortadora vertical.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cortadora sin fin.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cortadora de extremos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cortadora circular.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué tecnología de corte utiliza un sonotrodo para evitar que los bordes se desflequen?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ultrasonido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cortadora de extremos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mesa con agujas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carro manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'En los diagramas de flujo de procesos, ¿qué representa el símbolo de inspección?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El traslado de un objeto de un lugar a otro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El momento de espera antes de continuar la actividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El examen de un objeto para su identificación o comprobación de cantidad o calidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El momento en que se transforma la materia prima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuáles son las cuatro partes principales de la ficha técnica mencionadas en el componente?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tela, hilo, botón y cremallera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trazo, corte, confección y empaque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patronaje, escalado, tendido y destrozado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Rótulo, cuerpo de la ficha, control del documento y glosario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué grupos de operaciones se usan para organizar la confección de prendas como camisa, pantalón, polo, sudadera, <em>panty</em>, <em>bóxer</em>, chaqueta y jean?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño, compras y ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preparación, ensamble y terminados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenamiento, demora y transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Moldería, fotografía y publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
