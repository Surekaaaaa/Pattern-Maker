import MeasurementInput from "./MeasurementInput";

export default function MeasurementCard({
  title,
  fields,
  values,
  unit,
  onChange,
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        {title}
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {fields.map((field) => (

          <MeasurementInput
            key={field.name}
            label={field.label}
            name={field.name}
            value={values[field.name]}
            unit={unit}
            onChange={onChange}
          />

        ))}

      </div>

    </div>
  );
}