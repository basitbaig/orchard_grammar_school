import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-2">


      <div className="container mx-auto px-4 relative z-10">
        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-gray-800 mb-8 text-center font-playfair"
          >
            Our Story
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins text-justify">
              Civilizations aims to be a complete school. In its 20-year journey,
              it has insisted upon providing a wholesome life experience to its
              students. One part of this experience is academics and students at
              Civilizations read more widely than is the norm in the city.
              Accordingly, both German and English Literature are compulsory at
              the school, while Additional Mathematics, Computer Science and Arts
              are offered as options. In addition to this width, a school
              experience must remain both relevant and deep. Accordingly, all
              three languages, German, English and Urdu, as well as Mathematics,
              are developed to levels well beyond those prevalent in Karachi.
              Beyond academics is the realm of sports and extra-curricular
              activities. At Civilizations, students spend up to 240 minutes a
              week in coached sports classes and may opt for more. In addition,
              theatre, public speaking, publishing, writing and recitation are
              integrated in the regular and busy co-curricular life at the school.
              A long play is produced every year, as are some thirty short plays.
              Civilizations provides room to its the student to develop their
              social skills through institutionalisation of free-play, a time
              every week when students individually decide what to play or how to
              interact. This “street vibe” allows students to develop their social
              skills and help complete the educational experience. All of this
              might suggest the school is eager to heap skills on the proverbial
              reluctant students and this is entirely not the case. In early
              years, academics take a clear back seat to physical, emotional and
              social development. The daily schedule ensures students look forward
              to school, relish the experience and ask for more. Indeed, the final
              goal of trilingual fluency remains a lower priority to the happiness
              and self-confidence of the child. Academics become meatier in later
              years as students develop the maturity to take on more grown-up
              work-loads. Perhaps it is because of the gradual development of the
              students that they are seldom heard complaining of their work-load.
              Civilizations makes an effort to co-opt parents with this and other
              philosophies and techniques and the reader is bound to hear more
              during the school year. Until then, it is hoped you enjoy the
              admission process at the school.
            </p>
          </motion.div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-gray-800 mb-8 text-center font-playfair"
          >
            Founders
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins text-justify">
              <b>Hammad Nasar</b> is an art curator, advisor, writer and
              management consultant. He was the founding partner of Asal Partners
              Ltd, a London-based art advisory firm. He also co-founded Green
              Cardamom, a not-for-profit arts organisation. He has served as Arts
              Director for the Festival of Muslim Cultures in the UK. Prior to
              this, Hammad worked with Booz Allen Hamilton in London as a strategy
              consultant; was consultant to the Chairman of NIT in Pakistan; and
              was a manager at KPMG London. Hammad qualified as a Chartered
              Accountant (England & Wales), holds an MBA from IMD International in
              Switzerland and a PGDip in Art History from Goldsmiths College,
              London. He is an alum of St. Patrick’s High School and Karachi
              Grammar School.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins text-justify">
              <b>Saad-ur-Rehman</b> was until recently the Head of Corporate
              Investment Banking at Banque Saudi Fransi in Saudi Arabia. Prior to
              joining Saudi Fransi, he was the Head of Corporate Finance at ANZ
              Bank in Pakistan. Saad has extensive experience arranging debt and
              equity for projects in Saudi Arabia, the GCC region and Pakistan. He
              has lead nearly all of the major energy financing deals in Saudi
              Arabia in the recent past. Saad holds an MBA degree from Lahore
              University of Management Sciences in Pakistan. He is alum of the BVS
              Parsi School.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins text-justify">
              <b>Ali Khursheed Mustafa</b> worked for ANZ Bank and Unilever in the
              UK and Pakistan, focusing on development and financing of land and
              maritime projects across the world. More locally, Ali served as
              Governor of Wembley High School, London and trustee at Shahwilayat
              Public School, Karachi, leading the latter’s transformation. At
              various points, he taught at the IBA, Karachi and researched at
              INSEAD in Paris. Ali holds a master’s degree from London School of
              Economics and an MBA from INSEAD. He is alum of Habib Public School
              and Karachi Grammar School.
            </p>
          </motion.div>
        </motion.div>

        {/* Management Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-gray-800 mb-8 text-center font-playfair"
          >
            Management
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins">
              The following have comprised the management of the school over since
              2006:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins">
              <b>Ali Khursheed Mustafa</b> served as Principal from June 2024 to
              February 2025, and continues to serve as a director since 2004. Ali
              has served as Deputy Managing Trustee at Shahwilayat Public School
              and continues as a trustee.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins">
              <b>Munira Diwan</b> was Principal 2013-2024. Munira was previously
              with Foundation Public School, eventually serving as Director
              Academics there. She continues to teach at Civilizations. Farnaz
              Hasan was Principal from 2006 to 2011. Prior to joining
              Civilizations, she served as a coordinator at Salamat School System
              in Lahore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-amber-200 to-cyan-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins">
              <b>Farnaz Hasan</b> was Principal from 2006 to 2011. Prior to joining
              Civilizations, she served as a coordinator at Salamat School System
              in Lahore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins">
              <b>Perveen Alavi</b> was the Headmistress of Junior School from 2013
              to 2024. She previously served as a Headmistress at Headstart School
              System and now teaches at Veritas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-lg p-8 mb-6"
          >
            <p className="text-gray-700 text-xl leading-relaxed font-poppins">
              <b>Naushin Husain</b> was the Headmistress of Senior School from
              2021-2023. She previously served as the head of the primary section
              at CAS School.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}