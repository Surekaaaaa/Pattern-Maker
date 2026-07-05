import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiUpload,
  FiScissors,
  FiLayers,
} from "react-icons/fi";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-300 opacity-30 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            ✨ AI Powered Fashion Design
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-800 lg:text-7xl">
            Turn Any Dress
            <br />
            Into a
            <span className="text-pink-500"> Sewing Pattern</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Upload the front and back images of any garment, let AI analyze
            every design detail, generate sewing patterns, estimate fabric,
            recommend materials, and create printable PDFs — all in one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/upload"
              className="flex items-center gap-2 rounded-xl bg-pink-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-pink-600 hover:shadow-pink-300"
            >
              Start Designing
              <FiArrowRight size={20} />
            </Link>

            <Link
              to="/chatbot"
              className="rounded-xl border border-pink-300 bg-white px-7 py-4 font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              Ask AI Assistant
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold text-pink-600">500+</h3>
              <p className="text-gray-500">Pattern Variations</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">AI</h3>
              <p className="text-gray-500">Garment Analysis</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">PDF</h3>
              <p className="text-gray-500">Printable Output</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-1 justify-center"
        >
          <div className="relative">

            {/* Main Card */}
            <div className="w-[380px] rounded-3xl border border-pink-100 bg-white p-8 shadow-2xl">

              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-700">
                  AI Analysis
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                  Ready
                </span>
              </div>

              <div className="space-y-5">

                <div className="flex items-center gap-4 rounded-xl bg-pink-50 p-4">
                  <FiUpload className="text-3xl text-pink-500" />
                  <div>
                    <h3 className="font-semibold">
                      Upload Images
                    </h3>
                    <p className="text-sm text-gray-500">
                      Front & Back View
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-pink-50 p-4">
                  <FiScissors className="text-3xl text-pink-500" />
                  <div>
                    <h3 className="font-semibold">
                      Pattern Generation
                    </h3>
                    <p className="text-sm text-gray-500">
                      AI Generated SVG
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-pink-50 p-4">
                  <FiLayers className="text-3xl text-pink-500" />
                  <div>
                    <h3 className="font-semibold">
                      Fabric Recommendation
                    </h3>
                    <p className="text-sm text-gray-500">
                      AI Suggested Materials
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -left-12 top-12 rounded-2xl bg-white p-4 shadow-xl"
            >
              <h3 className="font-semibold text-pink-600">
                Fabric Estimate
              </h3>

              <p className="mt-2 text-gray-600">
                Cotton Satin
              </p>

              <p className="font-bold text-pink-500">
                2.8 meters
              </p>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-10 bottom-12 rounded-full bg-pink-500 px-6 py-4 font-semibold text-white shadow-xl"
            >
              AI Powered
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;