import { useSelector, useDispatch } from 'react-redux'

export default function index() {
    const { num, name } = useSelector((state: ReduxState) => ({
        num: state.reducer.num,
        name: state.reducer2.name
    }))
    const dispatch = useDispatch()

    const increase = () => {
        dispatch({ type: 'increase', value: 2 })
    }
    const increaseAsync = () => {

        setTimeout(() => { dispatch({ type: 'increase', value: 2 }) }, 1000)
    }

    const changename = () => {
        dispatch({ type: 'changename', value: 'Jim' })
    }

    return (
        <div>
            page1  / {num} / {name} <br />
            <button onClick={increase}>加</button>
            <button onClick={increaseAsync}>异步加</button>
            <button onClick={changename}>Jim</button>
        </div>
    )
}
