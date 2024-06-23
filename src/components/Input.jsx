function Input({ label, id, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value} // 에러
        onChange={onChange} // 에러
      />
    </div>
  );
}

export default Input;
