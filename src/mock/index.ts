import PostType from '../types/PostType';

export const postsMock: PostType[] = [
  {
    subredditPicture: require('../../assets/images/r-minecraft.png'),
    subredditName: 'Minecraft',
    content: 'What is the best (and worst) looking armour trim?',
    image: require('../../assets/images/p-16k7lja.jpg'),
    votesCount: 312,
    commentsCount: 49,
    sharesCount: 0,
    creationDate: new Date('2023-09-16T13:27:58-04:00')
  },
  {
    subredditPicture: require('../../assets/images/r-cellbits.png'),
    subredditName: 'cellbits',
    content: 'KKKKKKKKKKKKK',
    image: require('../../assets/images/p-16kgls3.jpg'),
    votesCount: -1,
    commentsCount: 4,
    sharesCount: 3,
    creationDate: new Date('2023-09-16T20:03:18-04:00')
  },
  {
    isSponsored: true,
    website: 'jetbrains.com',
    subredditPicture: require('../../assets/images/r-jetbrains.jpeg'),
    subredditName: 'JetBrains_official',
    content: 'Investigating issues or reviewing code with a teammate using screen sharing is a nightmare. Code With Me allows you to invite others into your project and work on it together in real time. Try it in your JetBrains IDE and take your online collaboration game to the next level.',
    image: require('../../assets/images/sponsor-1.webp'),
    votesCount: 166,
    commentsCount: 0,
  },
];