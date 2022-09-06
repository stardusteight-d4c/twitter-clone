export default function handler(req, res) {
  res.status(200).json([
    {
      heading: 'Cracker Island Comming · Trending',
      description: 'Gorillaz: Listen Now Cracker Island',
      tags: ['#gorillaz,', 'Damon Albarn'],
      img: 'https://i.ibb.co/HzVLJTr/gorillaz.jpg',
    },
    {
      heading: 'Scaled and Icy Comming · Trending',
      description: 'Twenty One Pilots: Listen Now Scaled and Icy',
      tags: ['#21pilots,', 'Scaled and Icy'],
      img: 'https://i.ibb.co/x2t1NBn/scaled-and-Icy.png',
    },
    {
      heading: 'Last Day on Earth · Trending',
      description: 'The end of time has come',
      tags: ['ZIGGY STARDUST COMMING'],
    },
  ])
}
