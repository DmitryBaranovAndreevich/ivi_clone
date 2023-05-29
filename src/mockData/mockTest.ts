import { IFilm } from './../type/TFilm';
import { TPersonEnglishName, TPersonName, TReviewUser } from '../type/type';
import { TTreeReviews } from '../store/reducers/ReviewSlice';
import { IRoles } from '../type/TUser';

export const textContent = 'test';

export const yearContent = 2020;

export const countryContent = 'Россия';

export const genreContent = 'Комедия';

export const ratingContent = '8.9';

export const typePersonNameTest: TPersonName = 'Актёры';

export const typePersonEnglishName: TPersonEnglishName = 'actors';

export const mockFilmTest: IFilm = {
  id: 1,
  name: '1+1',
  originalName: 'Intouchables',
  poster: 'https://st.kp.yandex.net/images/film_big/535341.jpg',
  trailer: 'https://www.youtube.com/embed/0RqDiYnFxTk',
  mpaaRating: '16+',
  rating: '8.8',
  ratingsNumber: 1571449,
  year: 2011,
  duration: 112,
  description:
    'Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.',
  directors: [
    {
      id: 1,
      name: 'Оливье Накаш',
      originalName: 'Olivier Nakache',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_382906.jpg',
    },
  ],
  writers: [
    {
      id: 1,
      name: 'Оливье Накаш',
      originalName: 'Olivier Nakache',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_382906.jpg',
    },
  ],
  producers: [
    {
      id: 44,
      name: 'Арно Бертран',
      originalName: 'Arnaud Bertrand',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2402288.jpg',
    },
    {
      id: 45,
      name: 'Доминик Бутонна',
      originalName: 'Dominique Boutonnat',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_884847.jpg',
    },
    {
      id: 46,
      name: 'Юбер Кайлар',
      originalName: 'Hubert Caillard',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2659794.jpg',
    },
    {
      id: 47,
      name: 'Николя Дюваль-Адассовски',
      originalName: 'Nicolas Duval Adassovsky',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_676553.jpg',
    },
  ],
  cinematography: [
    {
      id: 49,
      name: 'Матьё Вадпьед',
      originalName: 'Mathieu Vadepied',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_634036.jpg',
    },
  ],
  musicians: [
    {
      id: 52,
      name: 'Людовико Эйнауди',
      originalName: 'Ludovico Einaudi',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_590648.jpg',
    },
  ],
  designers: [
    {
      id: 48,
      name: 'Франсуа Эммануэлли',
      originalName: 'François Emmanuelli',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2006850.jpg',
    },
    {
      id: 49,
      name: 'Матьё Вадпьед',
      originalName: 'Mathieu Vadepied',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_634036.jpg',
    },
    {
      id: 50,
      name: 'Изабель Паннетье',
      originalName: 'Isabelle Pannetier',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1998619.jpg',
    },
    {
      id: 51,
      name: 'Оливия Блох-Лене',
      originalName: 'Olivia Bloch-Lainé',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2004628.jpg',
    },
  ],
  editors: [
    {
      id: 53,
      name: 'Дориан Ригаль-Ансу',
      originalName: 'Dorian Rigal-Ansous',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1987674.jpg',
    },
  ],
  actors: [
    {
      id: 3,
      name: 'Франсуа Клюзе',
      originalName: 'François Cluzet',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_71427.jpg',
    },
    {
      id: 4,
      name: 'Омар Си',
      originalName: 'Omar Sy',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_41644.jpg',
    },
    {
      id: 5,
      name: 'Анн Ле Ни',
      originalName: 'Anne Le Ny',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_57174.jpg',
    },
    {
      id: 6,
      name: 'Одри Флеро',
      originalName: 'Audrey Fleurot',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_868557.jpg',
    },
    {
      id: 7,
      name: 'Жозефин де Мо',
      originalName: 'Joséphine de Meaux',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_541041.jpg',
    },
    {
      id: 8,
      name: 'Клотильд Молле',
      originalName: 'Clotilde Mollet',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_445.jpg',
    },
    {
      id: 9,
      name: 'Альба Гайя Крагеде Беллуджи',
      originalName: 'Alba Gaïa Bellugi',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_964574.jpg',
    },
    {
      id: 10,
      name: 'Сирил Менди',
      originalName: 'Cyril Mendy',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2237576.jpg',
    },
    {
      id: 11,
      name: 'Салимата Камате',
      originalName: 'Salimata Kamate',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3084679.jpg',
    },
    {
      id: 12,
      name: 'Абса Дьяту Тур',
      originalName: 'Absa Diatou Toure',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3084680.jpg',
    },
    {
      id: 13,
      name: 'Грегуар Эстерманн',
      originalName: 'Grégoire Oestermann',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_83742.jpg',
    },
    {
      id: 14,
      name: 'Доминик Дагье',
      originalName: 'Dominique Daguier',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_233518.jpg',
    },
    {
      id: 15,
      name: 'Франсуа Карон',
      originalName: 'François Caron',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_25264.jpg',
    },
    {
      id: 16,
      name: 'Кристиан Амери',
      originalName: 'Christian Ameri',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_5570.jpg',
    },
    {
      id: 17,
      name: 'Тома Соливерес',
      originalName: 'Thomas Solivérès',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2497518.jpg',
    },
    {
      id: 18,
      name: 'Дороти Бриер',
      originalName: 'Dorothée Brière',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_240040.jpg',
    },
    {
      id: 19,
      name: 'Мари-Лор Дикуру',
      originalName: 'Marie-Laure Descoureaux',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1960244.jpg',
    },
    {
      id: 20,
      name: 'Эмили Кан',
      originalName: 'Émilie Caen',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1283646.jpg',
    },
    {
      id: 21,
      name: 'Сильвен Лазард',
      originalName: 'Sylvain Lazard',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2216393.jpg',
    },
    {
      id: 22,
      name: 'Жан Франсуа Кэйри',
      originalName: 'Jean-François Cayrey',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2687585.jpg',
    },
    {
      id: 23,
      name: 'Йен Фенелон',
      originalName: 'Ian Fenelon',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2228474.jpg',
    },
    {
      id: 24,
      name: 'Рено Барсе',
      originalName: 'Renaud Barse',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2200014.jpg',
    },
    {
      id: 25,
      name: 'Франсуа Бюрелу',
      originalName: 'François Bureloup',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1617276.jpg',
    },
    {
      id: 26,
      name: 'Никки Марбо',
      originalName: 'Nicky Marbot',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_58912.jpg',
    },
    {
      id: 27,
      name: 'Бенжамин Барош',
      originalName: 'Benjamin Baroche',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1277398.jpg',
    },
    {
      id: 28,
      name: 'Жером Паувельс',
      originalName: 'Jérôme Pauwels',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1171108.jpg',
    },
    {
      id: 29,
      name: 'Антуан Лоран',
      originalName: 'Antoine Laurent',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_551535.jpg',
    },
    {
      id: 30,
      name: 'Фабрис Мантенья',
      originalName: 'Fabrice Mantegna',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2224913.jpg',
    },
    {
      id: 31,
      name: 'Хеди Бушенафа',
      originalName: 'Hedi Bouchenafa',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2687586.jpg',
    },
    {
      id: 32,
      name: 'Каролин Бург',
      originalName: 'Caroline Bourg',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_792895.jpg',
    },
    {
      id: 33,
      name: 'Мишель Виноградов',
      originalName: 'Michel Winogradoff',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_99326.jpg',
    },
    {
      id: 34,
      name: 'Кевин Вамо',
      originalName: 'Kévin Wamo',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2687587.jpg',
    },
    {
      id: 35,
      name: 'Эллиот Латиль',
      originalName: 'Elliot Latil',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2687588.jpg',
    },
    {
      id: 36,
      name: 'Ален Антони',
      originalName: 'Alain Anthony',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2687589.jpg',
    },
    {
      id: 37,
      name: 'Доминик Анри',
      originalName: 'Dominique Henry',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2687590.jpg',
    },
    {
      id: 38,
      name: 'Ле Капариксьо Франсе',
      originalName: 'Le Capriccio Français',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3084681.jpg',
    },
    {
      id: 39,
      name: 'Филипп Ле Февр',
      originalName: 'Philippe Le Fevre',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3084682.jpg',
    },
    {
      id: 40,
      name: 'Пьер-Лоран Барнерон',
      originalName: 'Pierre-Laurent Barneron',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2269034.jpg',
    },
    {
      id: 41,
      name: 'Хэ Юньпин',
      originalName: 'He Yunping',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_4559766.jpg',
    },
    {
      id: 42,
      name: 'Филипп Поццо ди Борго',
      originalName: 'Philippe Pozzo di Borgo',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3152842.jpg',
    },
    {
      id: 43,
      name: 'Абдель Селлу',
      originalName: 'Abdel Sellou',
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2789409.jpg',
    },
  ],
  countries: [
    {
      id: 1,
      name: 'Франция',
      englishName: 'fr',
    },
  ],
  genres: [
    {
      id: 1,
      name: 'драма',
      englishName: 'drama',
    },
    {
      id: 2,
      name: 'комедия',
      englishName: 'comedy',
    },
    {
      id: 3,
      name: 'биография',
      englishName: 'biography',
    },
  ],
  relatedFilms: [],
  awards: [],
  reviews: [],
};

export const mockTreeReviews: Array<TTreeReviews> = [
  {
    review: {
      id: 30,
      title: 'tttttttttt',
      text: 'rfr4gf4ref4',
      rating: 36,
      userId: 1,
      filmId: 2,
      parentId: null,
    },
    childrenReviews: [
      {
        review: {
          id: 31,
          title: 'Lera',
          text: 'fcgvhhjkjhh',
          rating: 36,
          userId: 1,
          filmId: 2,
          parentId: 30,
        },
        childrenReviews: [
          {
            review: {
              id: 32,
              title: 'ttttg',
              text: 'rfr4gf4ref4',
              rating: 36,
              userId: 1,
              filmId: 2,
              parentId: 31,
            },
            childrenReviews: [
              {
                review: {
                  id: 33,
                  title: 'ttttg',
                  text: 'fcgvhhjkjhh',
                  rating: 36,
                  userId: 1,
                  filmId: 2,
                  parentId: 32,
                },
                childrenReviews: [
                  {
                    review: {
                      id: 34,
                      title: 'gfv',
                      text: 'rfr4gf4ref4',
                      rating: 36,
                      userId: 1,
                      filmId: 2,
                      parentId: 33,
                    },
                    childrenReviews: [
                      {
                        review: {
                          id: 35,
                          title: 'gfv',
                          text: 'rfr4gf4ref4',
                          rating: 36,
                          userId: 1,
                          filmId: 2,
                          parentId: 34,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mockReviewObj = {
  title: 'test',
  text: 'test',
};

export const mockArrayRoles: Array<IRoles> = [
  {
    id: 1,
    value: 'ADMIN',
    description: 'ADMIN',
  },
  {
    id: 2,
    value: 'USER',
    description: 'USER',
  },
];

export const mockArrayStringRoles: Array<string> = ['ADMIN', 'USER'];
