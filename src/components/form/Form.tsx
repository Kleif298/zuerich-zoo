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
        Enter the title:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <select>
        <option value="show-email">E-Mail-Adresse anzeigen</option>
        <option value="show-nickname">Nickname anzeigen</option>
        <option value="null">Keine anzeigen</option>
      </select>
      <button type="submit">Submit</button>
      {submittedName ? <p>Hello, {submittedName}</p> : null}
    </form>
  )
}
