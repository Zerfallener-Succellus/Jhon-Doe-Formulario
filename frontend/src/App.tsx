import React, { useState, useEffect } from "react";
import WindowFrame from "./components/WindowFrame";
import { registerClient, getAvailableColors } from "./api/client";
import { Client } from "./types/client";
import "./ClientFormPage.css"; 

const ClientFormPage: React.FC = () => {
  const [formData, setFormData] = useState<Client>({
    name: "",
    cpf: "",
    email: "",
    favoriteColor: "",
    observations: "",
  });
  const [colors, setColors] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchColors = async () => {
      const availableColors = await getAvailableColors();
      setColors(availableColors);
    };
    fetchColors();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await registerClient(formData);
    setMessage(response.message);
    if (response.success) {
      setFormData({ name: "", cpf: "", email: "", favoriteColor: "", observations: "" });
    }
  };

  const closeMessage = () => {
    setMessage(null);
  };

  return (
    <div className="retro-container">
      <header className="win98-navbar">
        <div className="navbar-title">Bem-Vindo</div>
      </header>
      
      <main className="content-area">
        <WindowFrame title="Formulário de Cliente">
          <form onSubmit={handleSubmit} className="window-body">
            <div className="form-control">
              <label className="form-label">Nome Completo</label>
              <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-control">
              <label className="form-label">CPF</label>
              <input type="text" name="cpf" className="form-input" value={formData.cpf} onChange={handleChange} required />
            </div>
            <div className="form-control">
              <label className="form-label">E-mail</label>
              <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-control">
              <label className="form-label">Cor Preferida</label>
              <select name="favoriteColor" className="form-select" value={formData.favoriteColor} onChange={handleChange} required>
                <option value="">Selecione...</option>
                {colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="form-label">Observações</label>
              <textarea name="observations" className="form-textarea" value={formData.observations} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </form>
        </WindowFrame>
      </main>
      
      <footer className="rainbow-footer">
        <div className="footer-content">
          <p>© 2025 John Doe Enterprise</p>
        </div>
      </footer>
      
      {message && (
        <div className="success-window window">
          <div className="window-title">
            Sucesso
            <button onClick={closeMessage} className="window-close-button">✕</button>
          </div>
          <div className="window-body">{message}</div>
        </div>
      )}
    </div>
  );
};

export default ClientFormPage;