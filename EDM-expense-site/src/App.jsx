import HeaderVideo from "./components/HeaderVideo";
import SideScrollGallery from "./components/SideScrollGallery";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderVideo />
      <SideScrollGallery />
      <ItemList />
    </div>
  );
}

export default App;
