import Data from "./meusComponentes/Data";

function App() {
  return (
    <div className="App">
      <Data texto = "Data e hora atuais em Brasil: " timeZone = "-3"/>
      <Data texto = "Data e hora atuais em Londres: " timeZone = "1"/>
      <Data texto = "Data e hora atuais em Nova York: " timeZone = "-4"/>
    </div>
  );
}

export default App;
