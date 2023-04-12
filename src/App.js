import Gallery from "./gallery.js";
import Animation from "./animation.js";

export default function App() {
  return (
    <section className="sectionApp">
      <h1 className="titleApp">Amazing scientists</h1>
      <Animation />
      <Gallery />
    </section>
  );
}
