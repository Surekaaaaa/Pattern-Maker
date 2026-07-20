import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import { saveMeasurements } from "../services/measurementService";

import MeasurementHeader from "../components/measurements/MeasurementHeader";
import MeasurementCard from "../components/measurements/MeasurementCard";
import MeasurementGuide from "../components/measurements/MeasurementGuide";
import MeasurementActions from "../components/measurements/MeasurementActions";

export default function Measurements() {
  const navigate = useNavigate();

  const { projectId, setMeasurementData } = useContext(AppContext);

  const [unit, setUnit] = useState("cm");

  const [measurements, setMeasurements] = useState({
    height: "",
    bust: "",
    waist: "",
    hip: "",
    shoulder: "",
    neck: "",
    armhole: "",
    sleeveLength: "",
    dressLength: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMeasurements((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await saveMeasurements(
        projectId,
        unit,
        measurements
      );

      setMeasurementData(result);

      navigate("/pattern");
    } catch (err) {
      console.error(err);
      alert("Unable to save measurements.");
    } finally {
      setLoading(false);
    }
  }

  const bodyFields = [
    { label: "Height", name: "height" },
    { label: "Bust", name: "bust" },
    { label: "Waist", name: "waist" },
    { label: "Hip", name: "hip" },
  ];

  const upperBodyFields = [
    { label: "Shoulder Width", name: "shoulder" },
    { label: "Neck Circumference", name: "neck" },
    { label: "Armhole", name: "armhole" },
    { label: "Sleeve Length", name: "sleeveLength" },
  ];

  const garmentFields = [
    { label: "Dress Length", name: "dressLength" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <MeasurementHeader />

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Unit Selection */}

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">
              Measurement Unit
            </h2>

            <div className="flex gap-8">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="cm"
                  checked={unit === "cm"}
                  onChange={(e) => setUnit(e.target.value)}
                />
                Centimeters (cm)
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="in"
                  checked={unit === "in"}
                  onChange={(e) => setUnit(e.target.value)}
                />
                Inches (in)
              </label>

            </div>
          </div>

          <MeasurementCard
            title="Body Measurements"
            fields={bodyFields}
            values={measurements}
            unit={unit}
            onChange={handleChange}
          />

          <MeasurementCard
            title="Upper Body"
            fields={upperBodyFields}
            values={measurements}
            unit={unit}
            onChange={handleChange}
          />

          <MeasurementCard
            title="Garment Measurements"
            fields={garmentFields}
            values={measurements}
            unit={unit}
            onChange={handleChange}
          />

          <MeasurementGuide />

          <MeasurementActions
            loading={loading}
          />

        </form>

      </div>
    </section>
  );
}