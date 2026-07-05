export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <div className="h-20 w-20 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

      <h2 className="mt-8 text-2xl font-bold">
        AI is analyzing your garment...
      </h2>

      <p className="mt-3 text-gray-500">
        Please wait a few seconds.
      </p>

    </div>
  );
}