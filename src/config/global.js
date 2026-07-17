export default {
  global: {
    Name: 'Patronaje, trazo, corte y confección',
    Description:
      'En este componente formativo se abordan los procesos de patronaje, trazo, corte y confección industrial como etapas fundamentales para asegurar la calidad de las prendas. A través del reconocimiento de la terminología técnica, la interpretación de patrones, la identificación de señales, el análisis de tecnologías aplicadas y la relación entre las operaciones de ensamble, se fortalece la comprensión de la ruta operacional en diferentes líneas de producto, de acuerdo con las especificaciones técnicas y los requerimientos del proceso productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Patronaje básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Terminología técnica y convenciones del área de patronaje industrial ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Especificaciones técnicas de patronaje, medidas y cuadro de tallas, proporciones del cuerpo humano.',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procedimiento de patronaje ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Patronaje básico en cada línea de producción',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procedimiento de trazo y corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de corte',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Operaciones principales de corte ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operaciones auxiliares de corte. ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tecnología en corte',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos de confección industrial por la línea de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Confección de productos para línea de ropa exterior',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Confección de productos para línea de ropa deportiva',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Confección de productos para línea de ropa interior ',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Confección de productos para línea con especialidad en ropa jean',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF4_935507_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Ampliaciones',
      significado:
        'medidas para dar aumento en una pieza con el fin de aplicar un prense o pliegue, un recogido o fruncido.',
    },
    {
      termino: 'Aprovechamiento de tela',
      significado:
        'indicador resultante de la relación de la suma de las áreas de los patrones entre el área de la tela a cortar.',
    },
    {
      termino: 'Desahogos',
      significado:
        'unidades de longitud sea en centímetros, pulgadas, milímetros, aplicadas para aumentar las medidas anatómicas con el fin de asegurar comodidad en la prenda al facilitar su uso en el movimiento del individuo.',
    },
    {
      termino: 'Escalado',
      significado:
        'es la reproducción de los patrones base en las otras tallas según proporción de aumentos establecidos, a tallas mayores o menores según las diferencias de medidas entre una y otra talla.',
    },
    {
      termino: 'Línea de aplome',
      significado:
        'indica la dirección de corte de la pieza. Trazada a través del molde o patrón.',
    },
    {
      termino: 'Mariposa',
      significado:
        'pieza del <em>panty</em> ubicada entre el tiro y la entrepierna para proteger y dar comodidad en la parte íntima femenina.',
    },
    {
      termino: 'Nido',
      significado:
        'proyección de una pieza del patrón en todas las tallas, en el cual se visualiza los incrementos en los puntos en donde se escala.',
    },
    {
      termino: 'Patronaje plano',
      significado:
        'resultado de la interpretación del diseño de la prenda, desarrollado a partir de los patrones básicos.',
    },
    {
      termino: 'Piquetes',
      significado:
        'línea corta (0,5 cm) en dirección perpendicular al molde, señaladas en el patrón con el fin de facilitar la operación de confección, al indicar ubicaciones, guiar al unir cortes.',
    },
    {
      termino: 'Procedimiento',
      significado: 'descripción precisa de los pasos para realizar un proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'descripción general de los pasos de una actividad o conjunto de operaciones.',
    },
    {
      termino: 'Sentido al hilo',
      significado:
        'dirección de la tela en que se tejió, donde se encuentra el orillo de la tela, es decir al largo de la tela, en sentido de la urdiembre.',
    },
    {
      termino: 'Traslado de pinza',
      significado:
        'cambio de la ubicación de la pinza con el fin de desarrollar el diseño para hacer un corte en el patrón.',
    },
  ],
  referencias: [
    {
      referencia:
        'A5 Project Group. (2020). <em>Máquinas de corte automático</em>.',
      link: '',
    },
    {
      referencia:
        'Amaden-Crawford, C. (2014). <em>Confección de moda: técnicas básicas</em> (Vol. 1). Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Audaces. (2020). <em>Audaces Pattern</em> [<em>Software</em>].',
      link: '',
    },
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). <em>Técnicas de patronaje: tomo I. Mujer</em>. Universidad Peruana de Ciencias Aplicadas.',
      link: '',
    },
    {
      referencia:
        'Duarte, N. (1983). <em>Conocimientos básicos de corte: unidad instruccional n.º 3</em>. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Duarte, N. E. (1984). <em>Toma de medidas para falda</em>. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Durán Portillo, D. (2013). <em>Preparación de máquinas de corte, ensamblado y acabado</em> (UF1034). IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Giraldo, M. (1990a). <em>Procesos básicos en la sala de corte</em>. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Giraldo, M. (1990b). <em>Selección de las máquinas para sala de corte</em>. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, S. C. (s. f.). <em>Terminología en patronaje</em> [Documento de apoyo]. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia: 'Optitex. (2020a). <em>CutPlan</em> [<em>Software</em>].',
      link: '',
    },
    {
      referencia:
        'Optitex. (2020b). <em>Pattern Design Software integrado en 2D y 3D</em> [<em>Software</em>].',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2011). <em>Manual de patronaje básico e interpretación de diseños</em>. Regional Distrito Capital, Centro de Manufactura en Textiles y Cuero.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Nelftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Gestión Empresarial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Andrés Fernández Urrego',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – CENIGRAF - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
