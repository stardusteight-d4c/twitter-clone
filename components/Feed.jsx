import { useEffect, useState } from 'react'
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'
import Input from './Input'
import Post from './Post'

import { SparklesIcon } from '@heroicons/react/outline'

const Feed = () => {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    []
  )

  return (
    <div className="flex-grow max-w-2xl text-white border-gray-700 border-x sm:ml-[73px] xl:ml-[270px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-[#15202b] border-b border-gray-700">
        <h2 className="text-lg font-bold sm:text-xl">Início</h2>
        <div className="flex items-center justify-center ml-auto hoverAnimation w-9 h-9 xl:px-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  )
}

export default Feed
