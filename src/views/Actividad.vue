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
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permite el estudio del componente formativo Mantenimiento en máquinas de confección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los procesos de mantenimiento de la planta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar piezas, diagnosticar fallas y planear mantenimientos para mejorar la producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar las normas ISO por instrucciones internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar una sola máquina para todas las operaciones de confección.',
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
            '¿Por qué es necesario identificar las piezas mecánicas de las máquinas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque permite evitar el uso de fichas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la capacitación del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque ayuda a entender los mecanismos y detectar daños en las máquinas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque elimina la necesidad de revisar la calidad de la costura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué función cumple el árbol en una máquina de confección?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Toma y transfiere movimiento girando sobre sí mismo en revoluciones completas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Une dos telas mediante varias puntadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regula únicamente la presión del pie prénsatelas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evita que el hilo pase por los discos tensores.',
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
          texto: '¿Qué caracteriza a la barra como elemento mecánico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una rueda dentada que transfiere movimiento circular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Toma y transfiere movimiento sin girar, trabajando en sentido rectilíneo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Forma la puntada de cadeneta con recubridor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Funciona únicamente como caja bobina.',
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
            '¿Qué función cumple la biela en los mecanismos de la máquina?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar el hilo inferior de la máquina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sostener el material durante el empaque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Transmitir movimiento, convirtiéndolo de circular u oscilante a rectilíneo u oscilante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Clasificar los tipos de costuras según la norma ISO 4916.',
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
            '¿Qué acción realiza el cigüeñal dentro de los mecanismos de la máquina?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presiona el hilo mediante discos tensores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Forma el ribete en los bordes de la tela.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identifica el tipo de puntada en la ficha técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Toma movimiento circular y lo cambia en movimiento oscilante.',
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
            '¿Qué elemento convierte el movimiento circular uniforme en rectilíneo u oscilante y tiene su centro de giro fuera del centro geométrico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Excéntrica.', esCorrecta: true },
            { id: 'b', texto: 'Caja bobina.', esCorrecta: false },
            { id: 'c', texto: 'Pie prénsatelas.', esCorrecta: false },
            { id: 'd', texto: 'Planchuela.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función del mecanismo sistema tensor?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el gramaje de las telas utilizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar la oposición necesaria al paso del hilo para obtener una tensión óptima.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cortar las piezas después del trazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar la máquina como familiar o industrial.',
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
          texto: '¿Qué piezas conforman el mecanismo de arrastre?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Volante, polea y caja bobina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Botón, cremallera y broche.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diente, pie, planchuela y soporte de dientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aguja, hilo, etiqueta y empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe verificarse en la planchuela para evitar fallas en la formación de la puntada?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que tenga el color indicado por el diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que reemplace el gancho rotatorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que tenga únicamente aberturas decorativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que esté libre de asperezas, obstrucciones y rebordes cortantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué función cumplen los dientes en el mecanismo de arrastre?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sobresalir de la planchuela y transportar el material durante la costura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Guardar el hilo inferior dentro del gancho rotatorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar costuras ribeteadas según la norma ISO 4916.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir el nombre comercial de la tela.',
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
          texto:
            '¿Qué elemento tomador de lazada se usa en fileteadora, recubridora, cerradora de codo, multiagujas y empretinadora?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Volante.', esCorrecta: false },
            { id: 'b', texto: 'Looper.', esCorrecta: true },
            { id: 'c', texto: 'Piqueteadora.', esCorrecta: false },
            { id: 'd', texto: 'Papel manifold.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es la diferencia entre puntada y costura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La puntada es una herramienta y la costura es una norma técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La puntada solo aplica al corte y la costura al empaque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La puntada es el enlace de hilos, y la costura reúne varias puntadas en uno o más materiales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La puntada se usa en mantenimiento y la costura solo en patronaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué establece la norma ISO 4915?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los pasos para elaborar un diagrama de Gantt.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La frecuencia de limpieza de los tanques de aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las áreas donde se guardan las herramientas de corte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La clasificación, designación, descripción e ilustración de las puntadas.',
              esCorrecta: true,
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
            '¿A qué corresponde la serie 300 de puntadas según la ISO 4915?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Puntadas de doble pespunte realizadas con aguja y gancho rotatorio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Puntadas manuales o artesanales con agujas de crochet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Puntadas de sobrehilado desarrolladas en fileteadora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Puntadas de cadeneta sencilla realizadas con un solo hilo.',
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
          texto: '¿Qué clasifica la norma ISO 4916?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las fibras textiles de origen natural y sintético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las secciones transversales de los materiales y los tipos de costuras cosidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Los tipos de motores eléctricos usados en las máquinas familiares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las herramientas de patronaje, trazo y corte.',
              esCorrecta: false,
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
            '¿Qué busca la metodología Mantenimiento Productivo Total (TPM)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar mantenimiento solo cuando la máquina se detiene.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar la participación del operario en el cuidado de la máquina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejorar la efectividad de los equipos con trabajo en equipo y corresponsabilidad en el mantenimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir las normas ISO 4915 e ISO 4916.',
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
          texto: '¿Qué caracteriza al mantenimiento correctivo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se realiza antes de que aparezca cualquier falla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Lo ejecuta únicamente el operario sin diagnóstico previo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiene como meta reemplazar el plan de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se realiza durante la producción para solucionar una falla en el menor tiempo posible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué caracteriza al mantenimiento preventivo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se realiza de manera anticipada a la falla e integra al personal mediante capacitación y mantenimiento autónomo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se aplica solo cuando la máquina ya no puede continuar trabajando.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consiste únicamente en cambiar repuestos sin programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina la limpieza, lubricación y documentación del proceso.',
              esCorrecta: false,
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
            '¿Para qué sirve el plan de mantenimiento apoyado en herramientas como el diagrama de Gantt?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para seleccionar colores de las prendas según la temporada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para organizar actividades, responsables, recursos, duración y seguimiento del mantenimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para reemplazar las listas de chequeo y la ficha de cada máquina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para definir únicamente el precio de los repuestos.',
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
