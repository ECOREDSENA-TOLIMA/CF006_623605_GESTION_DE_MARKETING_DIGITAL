<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La publicidad digital

    .row.mb-5
      .col-md-9
        p Según Kotler y Keller (2012), el mercadeo busca la identificación y satisfacción de las necesidades del ser humano de forma rentable. La empresa eBay, al reconocer que sus clientes no podían ubicar unos artículos deseados por ellos, se dio a la tarea de crear un foro para atenderlos de manera online. La empresa IKEA, al darse cuenta de que sus clientes deseaban buenos muebles con precios más bajos, ajusto sus costos. Las dos empresas entendieron el mercadeo y la inteligencia de marketing, convirtiendo una necesidad individual o social en una oportunidad empresarial que dio como resultado su rentabilidad.
        p Para ampliar el concepto de mercado, el siguiente video detalla elementos de valor y aporte para este ítem. 

      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/img-1.png', alt='Imagen decorativa')

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(style="background-color:#E3ECF7")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/decorador-1.svg', alt='Texto que describa la imagen')
          
        h3.text-center Publicidad tradicional
        p Es la comunicación de los productos, servicios o marca a través de los medios de comunicación como lo son la televisión, la radio y la prensa.

      .col-md.tarjeta.color-secundario.p-5(style="background-color:#FFFBE5")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/decorador-2.svg', alt='Texto que describa la imagen')
          
        h3.text-center Publicidad digital
        p Es la comunicación de productos, servicios o marcas a través de los medios de comunicación modernos o digitales como lo son las redes sociales, plataforma de videos, email, sitios web entre otros.

    p.mb-4 Estos medios se diferencian debido a la flexibilidad y la precisión; en cuanto a la flexibilidad la publicidad digital requiere menos tiempo que la tradicional; los medios tradicionales requieren mayor tiempo de producción y distribución. Respecto a la precisión los medios digitales, permiten llegar de forma oportuna a la audiencia, no solo por la usabilidad de los mismos sino también pueden llegar a cualquier tipo de población.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mt-4(style="background-color:#E4FDFB")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-4.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/decorador-3.svg', alt='Texto que describa la imagen')
            .col-lg-7
              p Los costos de presupuesto para una campaña publicitaria digital, pueden ser menores que la realizada por un medio tradicional; siempre y cuando esta no sea de gran complejidad.
              p La publicidad digital, se ha convertido en una de las estrategias más empleadas por el <em>marketing</em> digital; debido al acceso que tienen las personas, en la actualidad a los medios digitales; la hiperconectividad cada día es mayor; de acuerdo a datos del banco mundial al año 2020, el 60% de la población mundial usa <em>internet</em> (Banco Mundial, 2020)
    
    p.mb-5 El siguiente video se presenta para ampliar conceptos básicos sobre la publicidad digital y la comunicación en el marketing digital así:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-bbJONQgamY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipos y canales

    p.mb-4 A la hora de estructurar o realizar la ideación de un plan publicitario en medios digitales, se debe realizar un estudio previo de tipos de publicidad digital y los canales por el cual se divulgará el contenido, la elección del más favorable para la organización, dependerá del estudio de mercado, el cual deberá arrojar los canales digitales más usados por el consumidor esperado.

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mt-4(style="background-color:#E3ECF7")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-4.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/decorador-4.svg', alt='Texto que describa la imagen')
            .col-lg-7
              p Dentro de la campaña se deben tener en cuenta la frecuencia en la cual las personas estarán conectadas, la franja horaria de mayor audiencia es indispensable, debido a que indica los horarios y los días en que el consumidor, estará más atento, receptivo y presto para interactuar con el contenido publicitario. 
              p Cada campaña es diferente y debe asegurarse de utilizar el tipo de publicidad más funcional para el alcance de los objetivos, dentro de los diferentes tipos de publicidad digital y los canales de transmisión se encuentran los siguientes: 

    .BGIMG01.p-4.mb-5
      SlyderB.mb-5(:datos="datosSlyder")

    p Para que una campaña publicitaria en medios digitales sea exitosa, las organizaciones deben realizar su correcta estructuración, ideación y planificación; un plan de medios digitales permite establecer las estrategias para dar a conocer un producto, servicio o marca y estar más cerca a los consumidores.
    p La planeación de la campaña publicitaria, debe estar basada en unos objetivos claros a alcanzar, así como tener en cuenta los recursos con los que cuenta para lograrlos; por lo cual los planes de medios digitales; se han convertido en una de las herramientas fundamentales del marketing digital.
    p.mb-5 Para estructurar un plan de medios digitales las organizaciones deben tener en cuenta las siguientes etapas: 

    .BGIMG03.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Identificación")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Identificación de los consumidores
            p Un adecuado estudio de mercado permitirá a las organizaciones identificar las necesidades de los consumidores, el mercado objetivo, los potenciales consumidores y la competencia. Dos acciones necesarias son caracterizar al buyer persona y realizar el rastreo de compras, debido a que permite identificar cuáles son los gustos, preferencias y deseos de los clientes. 

          .col-md-6.col-ipad
            figure
              img(src='@/assets/curso/temas/tema1/img-12.png', alt='Texto que describa la imagen')

        .row(titulo="Objetivos")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Objetivos
            p Los objetivos planteados por las organizaciones, para la realización de las campañas publicitarias, deben ser claros, medibles y realistas; por lo cual se debe definir a dónde se quiere llegar, cuál es el alcance que se desea. 

          .col-md-6.col-ipad
            figure
              img(src='@/assets/curso/temas/tema1/img-13.png', alt='Texto que describa la imagen')

        .row(titulo="Estructuración")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Estructuración
            p Se deben integrar como mínimo las características de los productos o servicios, el sector o industria del mercado a la que pertenece, objetivo de la campaña, competidores, tiempo, alcance, límites, características del Buyer personas, seguimiento, control, evaluación y presupuesto. 
            
          .col-md-6.col-ipad
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png', alt='Texto que describa la imagen')

        .row(titulo="Estrategia")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Estrategia
            p En primer lugar, las redes sociales por la cercanía con el público, comentarios, calificaciones, análisis del <em>Buyer</em> persona, el uso de textos, imágenes, audios o videos y los horarios de mayor impacto. La segunda estrategia integra los sitios web en donde los buscadores mediante palabras claves permiten que el contenido digital aparezca en el momento en que el consumidor requiera adquirir un producto o servicio, en este se incluyen los banners. La tercera son los sitios web especializados, focalizando el mercado objetivo. La cuarta es el <em>Email de marketing,</em> que se realiza especialmente con los consumidores que están suscritos a la marca.
          
          .col-md-6.col-ipad
            figure
              img(src='@/assets/curso/temas/tema1/img-15.png', alt='Texto que describa la imagen')
        
        .row(titulo="Evaluación")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Evaluación
            p La evaluación de desempeño de la marca se puede medir mediante la respuesta de las ventas a la publicidad, el número de suscriptores nuevos, alcance en los medios digitales, retorno de la inversión; también mediante las métricas diseñadas para el <em>marketing</em> digital.  
          
          .col-md-6.col-ipad
            figure
              img(src='@/assets/curso/temas/tema1/img-16.png', alt='Texto que describa la imagen')
              
    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Beneficios

    p.mb-5 La publicidad en medios digitales, permite dar a conocer un producto, servicio o marca; sin embargo, trae otros beneficios para las organizaciones, como lo son: 

    .row.justify-content-center.mt-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-5.svg' alt='AvatarTop')
          p <strong>Generar valor para la marca:</strong> los medios digitales permiten dar a conocer las marcas, por lo cual cada día las organizaciones están más presentes en los medios digitales, dando a conocer sus productos, servicios o marcas e interactuando con los consumidores.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-6.svg' alt='AvatarTop')
          p <strong>Costos más bajos:</strong> los servicios de los medios digitales son más asequibles que los medios tradicionales y ofrecen beneficios como pagos por clic, lo que asegura un alcance efectivo de la publicidad digital.  

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-7.svg' alt='AvatarTop')
          p <strong>Evaluación:</strong> existen Software o plataformas disponibles en el mercado que permiten realizar análisis de las campañas publicitarias.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-8.svg' alt='AvatarTop')
          p <strong>Alcance:</strong> la publicidad digital, está al alcance de los consumidores digitales debido a que está disponible con una cobertura 24 horas, los 7 días de la semana.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-9.svg' alt='AvatarTop')
          p <strong>Flexibilidad:</strong> Los medios digitales, permiten realizar, cambios o modificaciones a las campañas publicitarias.  

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/decorador-10.svg' alt='AvatarTop')
          p <strong>Diversidad de formatos:</strong> Los medios digitales, permiten realizar publicidad digital en diferentes formatos como imágenes, audios, textos o videos.

    p.mb-5 Para ampliar los beneficios propios de las estrategias y campañas publicitarias el siguiente video detalla algunas de las más utilizadas así:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U2juCftBrTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características

    p La publicidad digital se caracteriza principalmente por dar a conocer o promocionar un producto, servicio o marca, en las diferentes plataformas o medios digitales; mediante el uso de internet a través de dispositivos móviles como computadores, Tablet o celulares. 
    p.mb-5 Dentro de las principales características de la publicidad digital se encuentran las siguientes:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Comunicación bidireccional")
        .col-md-6.mb-4.mb-md-0
          p En este sentido permite que las organizaciones y los consumidores se comuniquen en una dirección de doble sentido; permitiendo la retroalimentación mediante los comentarios o calificaciones por parte de los consumidores.  

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-17.png', alt='Texto que describa la imagen')
      
      .row(titulo="Promocional")
        .col-md-6.mb-4.mb-md-0
          p El principal fin de la publicidad digital, es dar a conocer productos o servicios, para que estos sean adquiridos por los consumidores. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-18.png', alt='Texto que describa la imagen')
      
      .row(titulo="Persuasiva")
        .col-md-6.mb-4.mb-md-0
          p Pretende dar a conocer las características, de los productos, servicios o la marca; para convencer al consumidor que es lo mejor de lo que se encuentra en el mercado. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-19.png', alt='Texto que describa la imagen')
      
      .row(titulo="Creativa")
        .col-md-6.mb-4.mb-md-0
          p La publicidad digital debe ser creativa, cada pieza publicitaria debe contener ingenio y pensado para el segmento del mercado al cual va dirigido; se debe tener en cuenta que el consumidor digital es exigente.  

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-20.png', alt='Texto que describa la imagen')

      .row(titulo="Segmentación")
        .col-md-6.mb-4.mb-md-0
          p Permite segmentar el mercado de acuerdo a los medios digitales que emplean los consumidores y los cuales serán más efectivos para realizar la publicidad digital. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-21.png', alt='Texto que describa la imagen')
      
      .row(titulo="Medible")
        .col-md-6.mb-4.mb-md-0
          p Una de las características del <em>marketing</em> digital es la facilidad de la medición de los resultados, por lo cual las plataformas o <em>software</em> especializados, permite evidenciar a cuántas personas ha llegado la publicidad, cuantos han interactuado, cuantos han dado clic, cuantos rebotes, entre otras tantas métricas. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-22.png', alt='Texto que describa la imagen')
      
      .row(titulo="Efectividad")
        .col-md-6.mb-4.mb-md-0
          p La publicidad digital logra que el contenido llegue al consumidor digital de forma efectiva, mediante los canales digitales acordes o empleados por estos. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-23.png', alt='Texto que describa la imagen')
      
      .row(titulo="Personalizado")
        .col-md-6.mb-4.mb-md-0
          p La era digital ha permitido que las características o segmentos del mercado sean más personalizados, debido a la información que los usuarios han reportado en los medios digitales; por lo cual la publicidad suministrada para cada consumidor, es exactamente lo que él necesita, desea o busca.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-24.png', alt='Texto que describa la imagen')








    



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'La publicidad de búsqueda o pago por clic',
        texto:
          'Es la estrategia de <em>marketing</em> digital <em>Search Engine Marketing (SEM), marketing</em> de motores de búsqueda; en la cual se publican anuncios en los motores de búsqueda y se paga por cada clic, esta publicidad digital por lo general aparece en la primera página y al lado derecho del buscador.',
        imagen: require('@/assets/curso/temas/tema1/img-2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'La publicidad de <em>display</em>',
        texto:
          'La publicidad digital que emplea los <em>displays,</em> son banners que aparecen en las páginas <em>web,</em> los cuales contienen textos, audios, imágenes, videos; estos <em>Benner</em> aparecen ubicados en la parte superior o lateral de las páginas web. Por lo general para desarrollar este tipo de publicidad digital se apoya en Google <em>Adsense.</em>',
        imagen: require('@/assets/curso/temas/tema1/img-3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Publicidad de video en línea',
        texto:
          'Como el nombre lo indica es publicidad digital que se realiza en forma de videos; sin embargo, se encuentran dos tipos de videos publicitarios los videos <em>out stream,</em> los cuales aparecen en las páginas web en forma de banner; y los videos <em>in stream,</em> aparecen en los reproductores de videos.',
        imagen: require('@/assets/curso/temas/tema1/img-4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Publicidad <em>streaming</em>',
        texto:
          'Las plataformas OTT <em>(over the top),</em> las cuales ofrecen transmisión sin necesidad de recurrir a la conexión por cable, permiten la publicidad digital en plataformas como <em>Netflix, Amazon Prime y Spotify</em> entre otras.',
        imagen: require('@/assets/curso/temas/tema1/img-5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Publicidad en redes sociales',
        texto:
          'Las redes sociales como <em>Facebook, Instagram, Twitter,</em> permiten realizar publicidad digital en sus plataformas mediante anuncios pagados.',
        imagen: require('@/assets/curso/temas/tema1/img-6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Email',
        texto:
          'Los email son principalmente empleados para dar a conocer los portafolios de productos y servicios de las organizaciones, también es un medio empleado para comunicarse con los suscriptores.',
        imagen: require('@/assets/curso/temas/tema1/img-7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Chat',
        texto:
          'La mensajería instantánea, se ha convertido en uno de los medios de comunicación más efectivos, empleados por los consumidores digitales, ya que buscan respuestas inmediatas; por lo cual puede iniciar una conversación entre empresa y cliente.',
        imagen: require('@/assets/curso/temas/tema1/img-8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Dispositivos móviles',
        texto:
          'En la actualidad los consumidores digitales, se encuentran diariamente conectados a sus dispositivos móviles, especialmente el celular; por lo cual es uno de los medios más idóneos para transmitir publicidad digital.',
        imagen: require('@/assets/curso/temas/tema1/img-9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mensajes de texto',
        texto:
          'La mensajería de texto es muy recurrente como publicidad digital, en especial cuando existen ofertas por parte de las marcas.',
        imagen: require('@/assets/curso/temas/tema1/img-10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mensajería de videos',
        texto:
          'Después del COVID-19, la mensajería por videos, revolucionó el mercado de las comunicaciones, debido a que acortó las distancias al permitir realizar todo tipo de reuniones, familiares, organizacionales o la forma de impartir y transmitir conocimiento.',
        imagen: require('@/assets/curso/temas/tema1/img-11.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
