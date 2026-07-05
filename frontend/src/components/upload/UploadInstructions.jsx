export default function UploadInstructions() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">

      <h2 className="text-2xl font-bold mb-6">
        Upload Guidelines
      </h2>

      <div className="space-y-5">

        <div>
          <h3 className="font-semibold text-lg">
            ✓ Front View
          </h3>

          <p className="text-gray-600 mt-1">
            Capture the complete front side of the garment.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            ✓ Back View
          </h3>

          <p className="text-gray-600 mt-1">
            Capture the complete back side without folding.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            ✓ Good Lighting
          </h3>

          <p className="text-gray-600 mt-1">
            Avoid shadows and ensure the garment is clearly visible.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            ✓ Flat Surface
          </h3>

          <p className="text-gray-600 mt-1">
            Place the dress on a flat surface for accurate AI analysis.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            ✓ Supported Formats
          </h3>

          <p className="text-gray-600 mt-1">
            JPG, JPEG, PNG and WEBP images up to 10 MB.
          </p>
        </div>

      </div>
    </div>
  );
}