export default function MeasurementInput({
  label,
  name,
  value,
  unit,
  onChange,
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">

      <label className="mb-2 block font-semibold">
        {label}
      </label>

      <div className="flex">

        <input
          type="number"
          step="0.1"
          min="0"
          name={name}
          value={value}
          onChange={onChange}
          required
          className="flex-1 rounded-l-lg border border-gray-300 p-3 outline-none focus:border-pink-500"
        />

        <div className="flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 px-4">
          {unit}
        </div>

      </div>

    </div>
  );
}