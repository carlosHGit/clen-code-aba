import { usePasswordGenerator } from "../../hooks/usePasswordManager";

export const PasswordManager = () => {

  const {password, handleGeneratePassword, length, handleLength}  = usePasswordGenerator()

  return (
    <div className="password-manager">
      <input type='number' value={length} onChange={handleLength} max='24' min="4" />
      <div className="actions">
        <button onClick={() => handleGeneratePassword(true, false)}>Agregar Números</button>
        <button onClick={() => handleGeneratePassword(false, false)}>Generar Contraseña</button>
        <button onClick={() => handleGeneratePassword(true, true)}>Agregar Caracteres Especiales</button>
      </div>
      <p>Contraseña Generada: {password}</p>
    </div>
  );
}
