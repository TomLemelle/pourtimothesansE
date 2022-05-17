import {InMemoryDbService} from "angular-in-memory-web-api";
import {Movie} from "../models/movie";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Movie[] = [
      {
        title: 'La tortue rouge',
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtCcTdyVoD0KC8aX86C7EKv7CEe3T1tA7xBcndrHUOUNS9R8_7',
        director: 'Michael Dudok',
        duration: 80,
        year: 2016
      }, {
        title: 'Le vent se lève',
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
        director: 'Michael Dudok',
        duration: 120,
        year: 2013
      }
    ];
    return {movies};
  }
}
