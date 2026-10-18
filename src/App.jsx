import Addtodo from '../component/Addtodo.jsx'
import Todo from '../component/todo.jsx'

function App() {
  return (
    <main className="min-h-screen bg-slate-900 px-4 py-12 text-slate-100">
      <section className="mx-auto w-full max-w-2xl rounded-xl bg-slate-800 p-6 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Todo List</h1>
        <Addtodo />
        <Todo />
      </section>
    </main>
  );
}

export default App;
