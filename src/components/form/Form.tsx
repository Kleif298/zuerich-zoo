import { useState } from "react"
import "./Form.css"

export default function Form() {
  const [name, setName] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setSubmittedName(name);
    setName("");
    event.preventDefault(); // Remove standard behavior to prevent page reload


    //alert(`The name you entered was: ${name}`);
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
      {submittedName ? <p>Hello, {submittedName}</p> : null}
    </form>
  )
}
