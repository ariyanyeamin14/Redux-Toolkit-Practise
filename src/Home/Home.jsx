import React from 'react';
import CounterView from '../features/counter/counterView'
import PostView from '../features/posts/postView'

const Home = () => {
    return (
        <div className='w-[80%] md:w-[90%] mx-auto text-center'>
            <h1 className='text-4xl mb-4'>Counter App</h1>
            <CounterView></CounterView>

            <h1 className='text-4xl mt-14 mb-4'>Post App</h1>
            <PostView></PostView>
        </div>
    );
};

export default Home;