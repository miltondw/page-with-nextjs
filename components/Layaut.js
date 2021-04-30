import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layaut({ children }) {
  return (
    <div className="App">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
