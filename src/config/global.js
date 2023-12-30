export default {
  global: {
    componenteFormativo: 'La campaña publicitaria en medios digitales',
    descripcionCurso:
      'El componente formativo permitirá que apropie conocimientos respecto a la publicidad digital, las estrategias creativas, las campañas publicitarias digitales y el <em>insight</em> publicitario; aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través del <em>marketing</em> digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'La publicidad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos y canales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Beneficios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La estrategia creativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Objetivo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de creatividad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Teoría del arte',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Innovación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La campaña publicitaria digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'El <em>brief</em> publicitario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Objetivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Factores claves',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Etapas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'El <em>insight</em> publicitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ventajas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Importancia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pasos para definir el <em>insight</em>',
            hash: 't_4_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_06_623605.zip',
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
      tema: 'Innovación en Diseño de Producto Digital - SENA',
      referencia:
        'SENA [SENATVColombia]. (2020, diciembre 2). Innovación en Diseño de Producto Digital - SENA. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eT1TWmsgrEU',
    },
    {
      tema: 'Foro virtual: Innovación para la Transformación.',
      referencia:
        'SENA [SENATVColombia]. (2021, junio 4). Foro virtual: Innovación para la Transformación.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UE2BWEW85wM',
    },
    {
      tema:
        'La publicidad en la era digital: el <em>microsite</em> como factor estratégico de las campañas publicitarias <em>on-line</em>',
      referencia:
        'Romero-Calmache, M., & Fanjul-Peyró, C. (2010). Advertising in the digital age: The microsite as a strategic factor in on-line advertising campaigns. Comunicar, 17(34), 125-134.',
      tipo: 'Libro',
      link:
        'https://www.revistacomunicar.com/index.php?contenido=detalles&numero=34&articulo=34-2010-15',
    },
  ],
  glosario: [
    {
      termino: 'Campañas Publicitaria Digital',
      significado:
        'Estrategia de <em>marketing</em> digital, que busca dar a conocer un producto, servicio o marca, en medios digitales.',
    },
    {
      termino: 'Estrategia creativa',
      significado:
        'Permite establecer la forma en la que se construye el mensaje publicitario y los medios o canales más idóneos para darlo a conocer.',
    },
    {
      termino: 'Estrategia de marca',
      significado:
        'Plan o estrategias que emplean las organizaciones para impulsar o generar valor de marca.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'Consiste en investigar e indagar, lo que internamente sienten los consumidores.',
    },
    {
      termino: '<em>Marketing</em> Digital',
      significado:
        'Son las estrategias de mercadotecnia implementada en plataformas digitales.',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'Es una estrategia de <em>marketing</em> implementada en medios digitales, con el fin de dar a conocer un producto, servicio o marca.',
    },
    {
      termino: 'Redes sociales',
      significado: 'Comunidad de personas que se forman en internet.',
    },
    {
      termino: 'Sitio <em>Web</em>',
      significado: 'Conjunto de páginas <em>web</em>',
    },
    {
      termino: '<em>Search Engine Marketing</em> (SEM)',
      significado:
        'Es el conjunto de estrategia para implementar publicidad en motores de búsqueda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Méndez, Jorge. (22 de mayo de 2016). <em>Brief</em> o <em>Briefing</em> de <em>marketing</em> - Qué es y cómo hacer uno. YouTube.',
      link: 'https://youtu.be/6vlN4DZVQGc?si=9580HkYBZbru8OAm',
    },
    {
      referencia:
        'Moschini, S., & Di, N. (s/f). Claves del <em>marketing</em> digital. Edu.mx. Recuperado el 15 de agosto de 2022, de',
      link:
        'https://www.ceut.edu.mx/Biblioteca/books/Administraci%C3%B3n-2/Claves-del-Marketing-Digital.pdf',
    },
    {
      referencia:
        'Núñez Gómez, P., & Ruiz San Román, J. A. (2021). Presencia de influencers en campañas publicitarias digitales. Estudio de su capacidad persuasiva y efectividad en jóvenes. Universidad Complutense de Madrid.',
      link: '',
    },
    {
      referencia:
        'Personas que usan Internet (% de la población). (s/f). Bancomundial.org. Recuperado el 17 de agosto de 2022.',
      link:
        'https://datos.bancomundial.org/indicator/IT.NET.USER.ZS?end=2020&start=1960&view=chart',
    },
    {
      referencia:
        'Romero-Calmache, M., & Fanjul-Peyró, C. (2010). Advertising in the digital age: The microsite as a strategic factor in on-line advertising campaigns. Comunicar, 17(34), 125-134.',
      link: 'https://doi.org/10.3916/c34-2010-03-12',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos. (2018). Manual de Oslo: Directrices para la recopilación e interpretación de datos sobre innovación (3ra ed.). Recuperado de',
      link: 'https://www.evalueconsultores.com/tipos-innovacion-manual-oslo/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Alejandra Tovar Bernal',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Industria y la Información',
        },
        {
          nombre: 'Adriana López',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
