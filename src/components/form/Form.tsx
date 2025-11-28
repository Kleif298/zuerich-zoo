import { useState } from "react"
import "./Form.css"

export default function PostForm() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [author, setAuthor] = useState("")
  const [posts, setPosts] = useState<{ title: string; message: string; author: string }[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setPosts([...posts, { title, message, author }])

    // Felder resetten
    setTitle("")
    setMessage("")
    setAuthor("")
  }

  return (
    <div className="post-container">
      <form className="post-form" onSubmit={handleSubmit}>
        <h2>Neuer Post</h2>

        <label>Titel:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <label>Autor:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">keine Anzeige</option>
          <option value="E-Mail-Adresse anzeigen">E-Mail-Adresse anzeigen</option>
          <option value="Nickname anzeigen">Nickname anzeigen</option>
          <option value="Tobi98">Tobi98</option>
          <option value="SuperCoder">SuperCoder</option>
        </select>

        <button type="submit">Absenden</button>
      </form>

      <div className="post-list">
        <h3>Posts:</h3>
        {posts.length === 0 && <p>Noch keine Posts.</p>}

        {posts.map((p, index) => (
          <div key={index} className="post-item">
            <h4>{p.title}</h4>
            <p>{p.message}</p>
            <small>Autor: {p.author || "keine Anzeige"}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
