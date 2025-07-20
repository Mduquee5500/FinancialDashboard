import { TestUserRepository } from "./usecases/tests/TestUserRepository";
import { TestBudgetRepository } from "./usecases/tests/TestBudgetRepository";
import TestButton from "./components/ui/TestButton";
import "./App.css";

function App() {
  return (
    <div>
      <TestButton
        text={"Test User Repository"}
        onClick={() => TestUserRepository()}
      />
      <TestButton
        text={"Test Budget Repository"}
        onClick={() => TestBudgetRepository()}
      />
      <TestButton
        text={"Test Budget Repository"}
        onClick={() => TestBudgetRepository()}
      />
    </div>
  );
}

export default App;
