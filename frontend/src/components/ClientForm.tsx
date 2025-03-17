import React, { useState, useEffect } from "react";
import { registerClient, getAvailableColors } from "../api/client";
import WindowFrame from "./WindowFrame";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    favoriteColor: "",
    observations: ""
  });
  const [colors, setColors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    if (response.success) {
      setSuccessMessage(response.message);
      setFormData({ name: "", cpf: "", email: "", favoriteColor: "", observations: "" });
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <WindowFrame title="Cadastro de Cliente">
      {successMessage && (
        <div className="window success-window">
          <p>{successMessage}</p>
          <button className="btn" onClick={() => setSuccessMessage(null)}>OK</button>
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="window-body">
        <div className="form-control">
          <label className="form-label">Nome Completo:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-control">
          <label className="form-label">CPF:</label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="form-input" required maxLength={11} />
        </div>
        <div className="form-control">
          <label className="form-label">E-mail:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-control">
          <label className="form-label">Cor Preferida:</label>
          <select name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} className="form-select" required>
            <option value="">Selecione...</option>
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="form-label">Observações:</label>
          <textarea name="observations" value={formData.observations} onChange={handleChange} className="form-textarea" />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </WindowFrame>
  );
};

export default ClientForm;
