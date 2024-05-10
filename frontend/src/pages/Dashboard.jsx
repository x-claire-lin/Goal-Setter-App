import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import GoalForm from "../components/GoalForm"
import Spinner from "../components/spinner"
import { getGoals, reset } from "../features/goals/goalSlice"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/Login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  },[user, navigate, dispatch])


  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
    </section>

    <GoalForm />
    </>
  )
}

export default Dashboard