import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../feauture/todoslice';

function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    dispatch(addtodo(text));
    setInput("");
  };



  return (
    <form onSubmit={addTodoHandler} className="mt-6 flex gap-3">
      <input
        type="text"
        className="min-w-0 flex-1 rounded border border-slate-600 bg-slate-700 px-3 py-2 text-base text-slate-100 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded bg-indigo-500 px-5 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Add Todo
      </button>
    </form>
  );
}

export default Addtodo;
