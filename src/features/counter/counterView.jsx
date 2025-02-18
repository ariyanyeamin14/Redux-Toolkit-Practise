import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByNumber, increment, reset } from './counterSlice';

const counterView = () => {
    const count = useSelector(state =>state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='text-xl mb-6 font-semibold'>Counte: {count}</h2>
            <button className=' border px-3 py-1 bg-blue-300 rounded-lg mr-2' onClick={() => {dispatch(increment())}}>Increment</button>
            <button className=' border px-3 py-1 bg-blue-300 rounded-lg' onClick={() => {dispatch(decrement())}}>Decrement</button>
            <button className=' border px-3 py-1 bg-blue-300 rounded-lg ml-2' onClick={() => {dispatch(reset())}}>Reset</button>
            <button className=' border px-3 py-1 bg-blue-300 rounded-lg ml-2' onClick={() => {dispatch(increaseByNumber(5))}}>Increase 5 Number</button>
        </div>
    );
};

export default counterView;