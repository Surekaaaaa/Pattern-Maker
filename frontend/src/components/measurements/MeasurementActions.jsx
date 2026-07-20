export default function MeasurementActions({
  loading,
}) {
  return (
    <div className="flex justify-end">

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700"
      >
        {loading
          ? "Saving..."
          : "Continue to Pattern"}
      </button>

    </div>
  );
}