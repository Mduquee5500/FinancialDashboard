import { TestUserRepository } from "./usecases/tests/TestUserRepository";
import { TestBudgetRepository } from "./usecases/tests/TestBudgetRepository";
import { TestSavingsRepository } from "./usecases/tests/TestSavingsRepository";
import { TestTransactionRepository } from "./usecases/tests/TestTransactionRepository";
import { TestAuth } from "./tests/test-auth";
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
      <TestButton
        text={"Test Transaction Repository"}
        onClick={() => TestTransactionRepository()}
        color={"red"}
      />
      <TestButton
        text={"Test Auth"}
        onClick={() => TestAuth()}
        color={"blue"}
      />
    </div>
  );
}

export default App;
