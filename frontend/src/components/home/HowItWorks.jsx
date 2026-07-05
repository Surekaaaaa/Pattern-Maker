import { motion } from "framer-motion";
import {
  FiUploadCloud,
  FiCpu,
  FiScissors,
  FiDownload,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiUploadCloud size={34} />,
    title: "Upload Images",
    description:
      "Upload the front and back view of the garment you want to recreate.",
  },
  {
    icon: <FiCpu size={34} />,
    title: "AI Analysis",
    description:
      "AI detects garment type, neckline, sleeves, silhouette, and construction details.",
  },
  {
    icon: <FiScissors size={34} />,
    title: "Pattern Generation",
    description:
      "Generate a scalable sewing pattern based on the AI analysis and your measurements.",
  },
  {
    icon: <FiDownload size={34} />,
    title: "Download PDF",
    description:
      "Print the tiled A4 sewing pattern and start stitching with confidence.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-pink-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-800">
            Design in Four Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            PatternAI guides you from garment images to a printable sewing
            pattern in just a few steps.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="rounded-3xl bg-white p-8 shadow-lg border border-pink-100 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-500">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;