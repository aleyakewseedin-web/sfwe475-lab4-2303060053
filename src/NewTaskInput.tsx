import { useState } from "react";
function NewTaskInput() {
 const [text, setText] = useState("");
 return (
    <div>
      <input
        type="text"
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => console.log(text)}>Add</button>
    </div>
  );
}

export default NewTaskInput;