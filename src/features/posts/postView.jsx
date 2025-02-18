import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const postView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {isLoading && <h3 className='text-3xl'>Loading...</h3> }
            {error && <h3>{error}</h3> }
            <div className='grid grid-col-1 md:grid-cols-2 2xl:grid-cols-3 gap-3'>
                {
                    posts.map(post => <article key={post.id} className='bg-[#033457] text-white py-6 px-10'>
                        <h4 className='text-2xl mb-4 leading-normal'>{post.title}</h4>
                        <p>{post.body}</p>
                    </article> )
                }
            </div>
        </div>
    );
};

export default postView;