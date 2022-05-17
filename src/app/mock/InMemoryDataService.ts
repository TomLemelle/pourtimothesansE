import { InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const movies: Movie[] = [
    {
      title: 'test',
      img: '',
    }
  ];
  return { movies };
  }
}
