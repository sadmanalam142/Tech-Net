import { decreament, decreamentByAmount, increament, increamentByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className='flex mt-24 ml-72'>
        <button className='bg-teal-700 rounded-md' onClick={() => dispatch(increament())}>Increament</button>
        <button className='bg-teal-700 rounded-md ml-10' onClick={() => dispatch(increamentByAmount(10))}>Increament by 10</button>
        <div className='ml-14 mr-14 font-bold'>{count}</div>
      <button className='bg-teal-700 rounded-md' onClick={() => dispatch(decreamentByAmount(10))}>Dcreament by 10</button>
      <button className='bg-teal-700 rounded-md ml-10' onClick={() => dispatch(decreament())}>Dcreament</button>
      </div>
    </div>
  )
}

export default App
