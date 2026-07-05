import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-500 to-pink-400 p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-5xl font-bold">
            Ready to Create Your Pattern?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-pink-100">
            Upload your garment images, let AI analyze every design detail,
            generate sewing patterns, estimate fabric consumption, and download
            a printable PDF in minutes.
          </p>

          <Link
            to="/upload"
            className="mx-auto mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-pink-600 transition hover:scale-105"
          >
            Start Designing
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;