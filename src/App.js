import Data from "./meusComponentes/Data";
import DataV2 from "./meusComponentes/DataV2";

function App() {
  return (
    <div className="App">
      <Data texto = "Data e hora atuais em Brasil: " timeZone = {-3.00}/>
      <Data texto = "Data e hora atuais em Londres: " timeZone = {1.00}/>
      <Data texto = "Data e hora atuais em Nova York: " timeZone = {-4.00}/>
      <DataV2 texto = "Data JSX e hora atual em Brasil: " timeZone={-3.00}/>
    </div>
  );
}

export default App;
