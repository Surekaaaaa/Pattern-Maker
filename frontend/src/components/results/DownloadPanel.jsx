import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadPanel() {
  const downloadPDF = async () => {
    const element = document.getElementById("results-container");

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();

    const imgWidth = pageWidth - 20;

    const imgHeight =
      (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      10,
      10,
      imgWidth,
      imgHeight
    );

    pdf.save("PatternAI_Report.pdf");
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Downloads
      </h2>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={downloadPDF}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Download PDF Report
        </button>

        <button
          disabled
          className="cursor-not-allowed rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-400"
        >
          SVG Pattern (Coming Soon)
        </button>
      </div>
    </div>
  );
}