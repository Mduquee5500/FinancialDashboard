import { TestUserRepository } from "./usecases/tests/TestUserRepository";
import { TestBudgetRepository } from "./usecases/tests/TestBudgetRepository";
import { TestSavingsRepository } from "./usecases/tests/TestSavingsRepository";
import TestButton from "./components/ui/TestButton";
import "./App.css";

function App() {
  return (
    <div>
      <TestButton
        text={"Test User Repository"}
        onClick={() => TestUserRepository()}
        color={"blue"}
      />
      <TestButton
        text={"Test Budget Repository"}
        onClick={() => TestBudgetRepository()}
        color={"yellow"}
      />
      <TestButton
        text={"Test Savings Repository"}
        onClick={() => TestSavingsRepository()}
        color={"green"}
      />
    </div>
  );
}

export default App;
