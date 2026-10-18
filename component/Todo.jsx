import { useDispatch, useSelector } from 'react-redux';
import { removetodo } from '../feauture/todoslice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-semibold">Todos</h2>
      {todos.length === 0 ? (
        <p className="text-slate-400">No todos yet. Add one above.</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between gap-4 rounded bg-slate-700 px-4 py-3"
            >
              <span className="break-words">{todo.text}</span>
              <button
                type="button"
                onClick={() => dispatch(removetodo(todo.id))}
                className="shrink-0 rounded px-3 py-1 text-sm text-red-300 hover:bg-red-950 hover:text-red-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todo;
