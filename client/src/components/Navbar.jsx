import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link className="text-white font-bold" to="/">
        <h1>React MySQL</h1>
      </Link>
      <ul className="flex gap-x-2">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new" className="bg-slate-200 px-2 py-1">
            create task
          </Link>
        </li>
      </ul>
    </div>
  );
};
