import { motion } from "framer-motion";
import {
  FiImage,
  FiCpu,
  FiScissors,
  FiFileText,
  FiMessageCircle,
  FiLayers,
} from "react-icons/fi";

const features = [
  {
    icon: <FiImage size={34} />,
    title: "Upload Dress Images",
    description:
      "Upload clear front and back images of any garment for AI-powered analysis.",
  },
  {
    icon: <FiCpu size={34} />,
    title: "AI Garment Analysis",
    description:
      "Automatically identify garment type, neckline, sleeves, silhouette, closures, and design details.",
  },
  {
    icon: <FiScissors size={34} />,
    title: "Pattern Generation",
    description:
      "Generate scalable SVG sewing patterns tailored to your measurements.",
  },
  {
    icon: <FiLayers size={34} />,
    title: "Fabric Recommendation",
    description:
      "Receive suitable fabric suggestions, weight recommendations, and usage estimates.",
  },
  {
    icon: <FiFileText size={34} />,
    title: "Printable PDF",
    description:
      "Export tiled A4 printable sewing patterns complete with labels and alignment marks.",
  },
  {
    icon: <FiMessageCircle size={34} />,
    title: "AI Fashion Assistant",
    description:
      "Ask questions about sewing, alterations, measurements, fabrics, and garment construction.",
  },
];

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-800">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            PatternAI simplifies the entire fashion pattern-making workflow —
            from image upload to AI analysis, sewing pattern generation, fabric
            estimation, and printable PDFs.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-pink-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;