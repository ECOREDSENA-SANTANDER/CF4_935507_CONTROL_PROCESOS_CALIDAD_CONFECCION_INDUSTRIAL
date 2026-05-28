export default {
  global: {
    Name: 'Patronaje, trazo, corte y confección',
    Description:
      'Comprender y describir los procesos de patronaje, corte y trazo, relacionar procesos de confección para determinar ruta operacional de las prendas en las diferentes líneas de productos. Interpretar terminología técnica de los procesos en patronaje, corte y confección. Descripción de aplicación de avance tecnológico en los procesos, comparación y relación de las tecnologías en los procesos. Interpretación señalización de patrones. Trazar patrones básicos. Ejemplificar procesos de ensamble de prendas en diferentes líneas de productos.',
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
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
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
        'pieza del panty ubicada entre el tiro y la entrepierna para proteger y dar comodidad en la parte íntima femenina.',
    },
    {
      termino: 'Nido',
      significado:
        'proyección de una pieza del patrón en todas las tallas, en el cual se visualiza los incrementos en los puntos en donde se escala.',
    },
    {
      termino: 'Patronaje plano',
      significado:
        'resultado de la interpretación del diseño de la prenda, desarrollados a partir de los patrones básicos.',
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
      referencia: 'A5 Proyect Group (2020). Máquinas de corte automático.',
      link:
        'http://www.grupoa5.com/productos/maquinas-de-corte/industria-textil-y-de-moda/',
    },
    {
      referencia:
        'Amaden-Crawford, C. (2014). Confección de moda: técnicas básicas. Vol. 2. Editorial Gustavo Gili.',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4421905.',
    },
    {
      referencia: 'Audaces Pattern. Audaces. (2020).',
      link: 'https://www.audaces.com/en/audaces-360/moldes/.',
    },
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Tomo I: Mujer. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/41322?page=10',
    },
    {
      referencia:
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3 SENA – Repositorio institucional.',
      link: 'https://hdl.handle.net/11404/1432',
    },
    {
      referencia:
        'Duarte, N. E. (1984). Toma de medidas para falda. SENA - Repositorio institucional',
      link: 'https://hdl.handle.net/11404/893',
    },
    {
      referencia:
        'Durán Portillo, D. (2013). Preparación de máquinas de corte, ensamblado y acabado (UF1034). IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43646?page=2',
    },
    {
      referencia:
        'Giraldo, M. (1990). Procesos básicos en la sala de corte. SENA',
      link: 'https://hdl.handle.net/11404/4259',
    },
    {
      referencia:
        'Giraldo, M. (1990). Selección de las máquinas para sala de corte. SENA.',
      link: 'https://hdl.handle.net/11404/4258',
    },
    {
      referencia:
        'OPTITEX, (2020). PATTERN DESIGN SOFTWARE INTEGRADO EN 2D Y 3D.',
      link: 'https://optitex.com/es/products/cutplan/.',
    },
    {
      referencia: 'OPTITEX. (2020). CUTPLAN',
      link: 'https://optitex.com/es/products/cutplan/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
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
          nombre: '--',
          cargo: 'Experto temático',
          centro: '--',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '--',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
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
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
