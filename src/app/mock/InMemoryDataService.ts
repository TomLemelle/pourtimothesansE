import { InMemoryDbService} from "angular-in-memory-web-api";
import {Movie} from "../models/movie";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const movies: Movie[] = [
    {
      title: 'Voyage au centre de la terre 2',
      img: 'https://resize1.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/famille/activites-enfants/meilleurs-films-netflix-pour-enfants/voyage-centre-terre-2-ile-mysterieuse/8176973-1-fre-FR/Voyage-au-centre-de-la-terre-2-l-ile-mysterieuse.jpg',
    },
    {
      title: 'Bright',
      img: 'https://cinedweller.com/wp-content/uploads/2020/02/bright-david-ayer-affiche-netflix.jpg',
    }
  ];
  return { movies };
  }
}
