import AppRouter from "./router/AppRouter";
import Measurements from "./pages/Measurements";

<Route
  path="/measurements"
  element={<Measurements />}
/>

function App() {
  return <AppRouter />;
}

export default App;