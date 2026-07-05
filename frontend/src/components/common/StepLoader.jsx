export default function StepLoader({ step }) {

  const steps = [
    "Uploading images...",
    "Analyzing garment...",
    "Generating pattern...",
    "Calculating fabric...",
    "Finalizing results...",
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20">

      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

      <p className="mt-6 text-xl font-semibold">
        {steps[step]}
      </p>

      <div className="mt-4 text-sm text-gray-500">
        AI processing your design
      </div>

    </div>
  );
}