import { useDispatch } from 'react-redux';
import { deleteGoal, getGoals } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    // Dispatch deleteGoal action
    await dispatch(deleteGoal(goal._id));
    // After deletion, fetch the updated list of goals
    dispatch(getGoals());
  };

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={handleDelete} className='close'>
        X
      </button>
    </div>
  );
}

export default GoalItem;
