// "use client";
// import React, { useEffect, useState } from 'react'
// import ReportCard from './ReportCard';

// const PromptCardList: React.FC<{ data: Post[], handleTagClick: (tag: string) => void }> = ({ data, handleTagClick }) => {
//     return (
//         <div className='mt-16 prompt_layout'>
//             {
//                 data.map((e) => <ReportCard key={e._id} post={e} handleTagClick={handleTagClick} />)
//             }
//         </div>
//     )
// }

// const Feed = () => {
//     const [searchText, setSearchText] = useState();
//     const [posts, setPosts] = useState<Post[]>([]);

//     const handleSearchChange = (e: any) => {
//         setSearchText(e.target.value);
//     }

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const response = await fetch('/api/prompt');
//             const data = await response.json();
//             setPosts(data);
//         }
//         fetchPosts();
//     }, []);



//     return (
//         <section className='feed'>
//             <form className='relative w-full flex-center'>
//                 <input
//                     type='text'
//                     placeholder='Search for a tag or username'
//                     value={searchText}
//                     onChange={handleSearchChange}
//                     required
//                     className='search_input peer'
//                 />
//             </form>
//             <PromptCardList data={posts} handleTagClick={(tag) => { }} />
//         </section>
//     )
// }

// export default Feed