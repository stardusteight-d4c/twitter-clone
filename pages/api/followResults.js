export default function handler(req, res) {
  res.status(200).json([
    {
      userImg: 'https://i.ibb.co/LZjZzgp/cardib.jpg',
      username: 'Cardi B',
      tag: '@iamcardib',
    },
    {
      userImg: 'https://i.ibb.co/qkw3GLp/bowie.jpg',
      username: 'Bowie',
      tag: '@DavidBowie',
    },
    {
      userImg: 'https://i.ibb.co/bPCgqcW/eminem.jpg',
      username: 'Marshall',
      tag: '@Eminem',
    },
  ])
}
