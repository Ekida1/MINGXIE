<template>
  <div class="basement">
    <div class="detail-content">
      <div class="content-img"></div>
      <p class="content-text first-text">
        En la inexorable búsqueda de la excelencia que inició hace una década el Teatro Colsubisdio “Roberto Arias Pérez”, nuevamente se sube el telón para que el virtuosismo de Ming Xie sea el que abra la temporada de “Grandes pianistas” con un repertorio de
        grandes obras maestras escritas para este instrumento.
      </p>
      <p class="content-text">
        La temporada 2017 que presenta este Teatro reunirá durante el año a los mejores intérpretes del piano, quienes ofrecerán al público un inigualable viaje sonoro. Será un dejá vú para deleitarse con famosas partituras desde el barroco hasta la música del
        siglo XXI y con la excelencia interpretativa de los invitados, una nómina de lujo que además de Xie completan los rusos Nikolai Kuznetsov, Alexei Chernov, Mikhail Mordvinov, el turco, Gülru Ensari y el alemán Herbert Schuchu.
      </p>
      <p class="content-text">
        Todos ellos, representativos de diversas escuelas y generaciones, están en la cúspide de la escena pianística internacional. Iinterpretarán exigentes composiciones de los maestros Beethoven, Johannes Brahms, Modest Mossurgsky, Franz Schubert, Franz Liszt
        e Igor Stravinsky.
      </p>
      <p class="content-text">
        Con este cartel de lujo, el Teatro Colsubsidio celebra su primera década con la temporada “Grandes pianistas” que se consolida como la única y más antigua serie de recitales de este instrumento en el país.
      </p>
      <p class="content-text">
        Como reseñamos, Ming Xie es el encargado de abrir la serie musical. Originario de China y becario de la legendaria escuela Juilliard de New York, ha ganado los primeros lugares en concursos como los de Sydney, Maria Canals de Barcelona, Panamá y Toyama
        en Hong-Kong, entre otros y se presenta regularmente en las principales capitales norteamericanas, europeas y del lejano oriente.
      </p>
      <p class="content-text">
        “Ming Xie es un pianista “fenomenal” que se apodera de la imaginación de sus audiencias”, dice la maestra argentina Martha Argerich, otra de las grandes del piano y considerada una de los mayores exponentes musicales de su generación y la posguerra.
      </p>
      <p class="content-text">
        Mientras, el crítico norteamericano Jeffery Williams concibió a Xie como “un gran virtuoso” luego de su debut en Nueva York.
      </p>
      <p class="content-text">
        Ming Xie iniciará su presentación este sábado 28, a las 7:30 de la noche en el Teatro Colsubsidio con la interpretación de Sonata para piano No 2 del compositor alemán Ludwig van Beethoven, considerado como “último de los clásicos y primero de los románticos”,
        sin duda una de las más grandes obras del período temprano del compositor y pilar fundamental para la creación de las denominadas 32 Sonatas, consideradas el “nuevo testamento” de la música clásica.
        <a class="content-link" href="https://www.elnuevosiglo.com.co/articulos/01-2017-ming-xie-el-virtuoso-que-se-apodera-de-la-imaginacion-del-publico">CLIKE HERE TO READ MORE</a>
      </p>

      <!-- <p class="content-text">
        Acto seguido se escuchará por primera vez en la Serie Internacional de Grandes Pianistas de Colsubsidio el Preludio, coral y fuga del belga César Franck, obra de gran lirismo y misticismo–romántico y, sin duda alguna, la más representativa escrita por
        el compositor para el piano.
      </p>
      <p class="content-text">
        Luego del intermedio, la segunda parte del programa iniciará con “El amor y la muerte” de las populares “Goyescas” o majos enamorados del español Enrique Granados, obra no programática más sin embargo inspirada en las pinturas del gran Francisco de Goya,
        sin que haya una correspondencia exacta entre cada pieza musical y algún cuadro del pintor en particular.
      </p>
      <p class="content-text">
        Ming Xie terminará su presentación con las Variaciones sobre un tema de Paganini del alemán Johannes Brahms, obra de ‘endemoniado’ virtuosismo y dificultad técnica, inspirada en el más famoso de los temas jamás compuesto por el compositor italiano Niccolo
        Paganini, de quien dice la leyenda tenía un pacto con el diablo.
      </p>
      <p class="content-text">
        Esta selección de obras, sin asociaciones programáticas específicas y de gran dificultad técnica, permitirán al intérprete un lucimiento escénico de todas sus facetas virtuosísticas.
      </p>
      <p class="content-text">
        Se dará así inicio a esta icónica temporada que tendrá un variado programa que llevará a los asistentes en un recorrido a través de grandes obras del repertorio romántico escrito para el piano.
      </p>
      <p class="content-text">
        Como valor agregado a esta lúdica musical se realiza el ciclo de conferencias que, sábado a sábado, ofrece el reconocido crítico y comentarista musical Emilio Sanmiguel, a las 6 pm, en el Auditorio anexo al Teatro de Colsubsidio. El ingreso a las conferencias
        es libre, presentando la boleta para el recital de las 7:30 pm.
      </p> -->

    </div>
  </div>
</template>

<script>
import { getDetailData } from "common/request/request";
export default {
  name: "detail",
  data() {
    return {
      detailContent: ""
    };
  },
  created() {
    getDetailData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.detailContent = data.detailContent;
      }
      err => {
        console.log("获取Detail信息失败，失败报错:", err);
      };
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  width: 100%;
  margin-top: 126px;
  background-color: #F8F8F8;
  position: relative;

  .detail-content {
    padding: 0 200px;

    .content-img {
      width: 100%;
      height: 450px;
      background-image: url('/static/img/reviews_pic1.jpg');
      background-repeat: no-repeat;
      background-position: 50%;
    }

    .first-text {
      margin-top: 30px;
    }

    .content-text {
      text-indent: 25px;
      font-family: 'Times New Roman';
      font-size: 20px;
    }

    .content-link {
      color: $Probrown;
    }
  }
}

@media screen and (max-width: 415px) {
  .detail-content {
    padding: 0 20px !important;
  }
}
</style>
