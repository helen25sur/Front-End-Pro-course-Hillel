// import {CardMovie} from './CardMovie'

const data1 = {
  id: '61045206-419a-4904-9230-606c35dbe9e4',
  srcImg: 'https://kino-teatr.ua/public/main/films/poster_5be67fa14676c.jpg',
  alt: 'Гарри Поттер и философский камень',
  titleMovie: 'Гарри Поттер и философский камень',
  titleEng: "Harry Potter and the Sorcerer's Stone",
  year: 2001,
  country: 'Великобритания, США',
  slogan: 'Путешествие в твою мечту',
  director: 'Крис Коламбус',
  // screenplay: 'Стивен Кловз, Дж.К. Роулинг',
  // producer: 'Тодд Арноу, Майкл Барнатан, Крис Коламбус',
  // cameraman: 'Джон Сил',
  // composer: 'Джон Уильямс',
  textDescription:
    'Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс.',
  textRange: 'IMDb: 7.60 (674K)',
  cast: [
    'Дэниэл Рэдклифф',
    'Руперт Гринт',
    'Эмма Уотсон',
    'Ричард Харрис',
    'Алан Рикман',
    'Мэгги Смит',
    'Робби Колтрейн',
    'Том Фелтон',
    'Мэттью Льюис',
    'Иэн Харт',
  ],
};

const data2 = {
  id: '315ed642-08ed-4e74-af43-c90776066228',
  srcImg: 'https://kino-teatr.ua/public/main/films/poster_7069.jpg',
  alt: 'Голодные игры',
  titleMovie: 'Голодные игры',
  titleEng: 'The Hunger Games',
  year: 2012,
  country: 'США',
  slogan: 'Весь мир смотрит',
  director: 'Гэри Росс',
  // screenplay: 'Сьюзен Коллинз, Гэри Росс, Билли Рэй',
  // producer: 'Нина Джейкобсон, Джон Килик, Диана Альварез',
  // cameraman: 'Том Стерн',
  // composer: 'Джеймс Ньютон Ховард',
  textDescription:
    'Будущее. Деспотичное государство ежегодно устраивает показательные игры на выживание, за которыми в прямом эфире следит весь мир. Жребий участвовать в Играх выпадает юной Китнисс и тайно влюбленному в нее Питу. Они знакомы с детства, но теперь должны стать врагами. Ведь по нерушимому закону Голодных игр победить может только один из 24 участников. Судьям не важно кто выиграет, главное - зрелище. И на этот раз зрелище будет незабываемым.',
  textRange: 'IMDb: 7.20 (855K)',
  cast: [
    'Дженнифер Лоуренс',
    'Джош Хатчерсон',
    'Лиам Хемсворт',
    'Вуди Харрельсон',
    'Элизабет Бэнкс',
    'Уэс Бентли',
    'Дональд Сазерленд',
    'Стэнли Туччи',
    'Ленни Кравиц',
    'Амандла Стенберг',
  ],
};

const data3 = {
  id: '2b198e1b-6cb6-495c-9d1a-a594c8fe28eb',
  srcImg: 'https://kino-teatr.ua/public/main/films/poster_543fa33259eb2.jpg',
  alt: 'Интерстеллар',
  titleMovie: 'Интерстеллар',
  titleEng: 'Interstellar',
  year: 2014,
  country: 'США, Великобритания, Канада',
  slogan: 'Следующий шаг человечества станет величайшим',
  director: 'Кристофер Нолан',
  // screenplay: 'Джонатан Нолан, Кристофер Нолан',
  // producer: 'Кристофер Нолан, Линда Обст, Эмма Томас',
  // cameraman: 'Хойте Ван Хойтема',
  // composer: 'Ханс Циммер',
  textDescription:
    'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
  textRange: 'IMDb: 8.60 (1 556K)',
  cast: [
    'Мэттью МакКонахи',
    'Энн Хэтэуэй',
    'Джессика Честейн',
    'Маккензи Фой',
    'Майкл Кейн',
    'Дэвид Гяси',
    'Уэс Бентли',
    'Кейси Аффлек',
    'Джон Литгоу',
    'Мэтт Дэймон',
  ],
};

const data4 = {
  id: '1b802b85-fc87-4e1b-8e1c-52a35e57923d',
  srcImg: 'https://kino-teatr.ua/public/main/films/poster_46936.jpg',
  alt: 'Властелин колец: Братство Кольца',
  titleMovie: 'Властелин колец: Братство Кольца',
  titleEng: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001,
  country: 'США, Новая Зеландия',
  slogan: 'Power can be held in the smallest of things...',
  director: 'Питер Джексон',
  // screenplay: 'Фрэн Уолш, Филиппа Бойенс, Питер Джексон',
  // producer: 'Питер Джексон, Барри М. Осборн, Тим Сандерс',
  // cameraman: 'Эндрю Лесни',
  // composer: 'Говард Шор',
  textDescription:
    'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад.',
  textRange: 'IMDb: 8.80 (1 692K)',
  cast: [
    'Элайджа Вуд',
    'Иэн Маккеллен',
    'Шон Эстин',
    'Вигго Мортенсен',
    'Билли Бойд',
    'Доминик Монахэн',
    'Джон Рис-Дэвис',
    'Орландо Блум',
    'Шон Бин',
    'Иэн Холм',
  ],
};

export const arrMovies = [data1, data2, data3, data4];
