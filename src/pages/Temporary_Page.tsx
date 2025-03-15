import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut",  }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6 text-justify">
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

          {/* Add more content as needed */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut", }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Founders</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6 text-justify">
            <b>Hammad Nasar</b> is an art curator, advisor, writer and
            management consultant. He was the founding partner of Asal Partners
            Ltd, a Londonbased art advisory firm. He also co-founded Green
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
          <p className="text-gray-600 mb-6 text-justify">
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
          <p className="text-gray-600 mb-6 text-justify">
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
          {/* Add more content as needed */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut",}}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-6">
          Management
        </h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6 text-justify">
            The following have comprised the management of the school over since
            2006:
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            <b>Ali Khursheed Mustafa</b> served as Principal from June 2024 to
            February 2025, and continues to serve as a director since 2004. Ali
            has served as Deputy Managing Trustee at Shahwilayat Public School
            and continues as a trustee.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            <b>Munira Diwan</b> was Principal 2013-2024. Munira was previously
            with Foundation Public School, eventually serving as Director
            Academics there. She continues to teach at Civilizations. Farnaz
            Hasan was Principal from 2006 to 2011. Prior to joining
            Civilizations, she served as a coordinator at Salamat School System
            in Lahore.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            <b>Perveen Alavi</b> was the Headmistress of Junior School from 2013
            to 2024. She previously served as a Headmistress at Headstart School
            System and now teaches at Veritas.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            <b>Naushin Husain</b> was the Headmistress of Senior School from
            2021-2023. She previously served as the head of the primary section
            at CAS School.
          </p>
          {/* Add more content as needed */}
        </div>
      </motion.div>
    </div>
  );
}
