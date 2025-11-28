import { useState } from "react"
import "./Form.css"

export default function Form() {
  const [name, setName] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(`The name you entered was: ${name}`)
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
      {name ? <p>Hello, {name}</p> : null}
    </form>
  )
}
