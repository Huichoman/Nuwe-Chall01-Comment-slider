import "./App.css";
import { CommentSlider } from "./components";
import { comments } from "./constants/userComments";

function App() {
  return (
    <main className="flex flex-row justify-center bg-[#1B1D29]  w-full h-full ">
      <div className="flex flex-row justify-center items-center w-[40rem] h-[20rem] border border-slate-100 ">
        <CommentSlider comments={comments} />
      </div>
    </main>
  );
}

export default App;
