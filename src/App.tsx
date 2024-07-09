import CardGroup from "./components/CardGroup";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Cebu", "Manila", "Bagiuo", "Davao", "Palawan"];

  let titles = ["Test One", "Test Two", "Test Three"];
  let descriptions = [
    "This is a Description",
    "Description Two Aswell",
    "Description Three Over Here!",
  ];
  let btnTitles = ["Button One", "Button Two", "Button Three"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <CardGroup
        title={titles}
        description={descriptions}
        btnName={btnTitles}
      />
    </div>
  );
}

export default App;
