import ModuleList from "../Modules/List";
import StatusButtons from "./statusbuttons";
import TodoList from "./todoList";
import ComingUp from "./comingup";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="float-start me-4">
        <ModuleList />
      </div>
      <div className="float-start">
      <div>
            <StatusButtons/>
            <TodoList/>
            <ComingUp/>
        </div>
      </div>
    </div>
  );
}
export default Home;