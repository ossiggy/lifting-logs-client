export const HANDLE_EXERCISE_CHANGE = 'HANDLE_EXERCISE_CHANGE';
export const handleExerciseChange = exercise => ({
  type: HANDLE_EXERCISE_CHANGE,
  exercise
})

export const HANDLE_GROUP_CHANGE = 'HANDLE_GROUP_CHANGE';
export const handleGroupChange = group => ({
  type: HANDLE_GROUP_CHANGE,
  group
})