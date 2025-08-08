import React from "react";
import { motion } from "framer-motion";
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Section_d = () => {
  return (
    <section className="bg-[#f8f5ec] w-full pb-[70px] pt-[80px] px-2">
      <div className="max-w-7xl mx-auto">
        {/* Main white container */}
        <motion.div
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white rounded-lg shadow-lg p-8 sm:p-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#2E2B26] mt-3 tracking-tight">
            RESEARCH:
          </h2>

          {/* --- RESEARCH QUESTIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
            className="bg-[#f9fafb] border-l-4 border-accent-teal rounded-md shadow-md p-6 mt-10 mb-10"
          >
            {/* Heading with icon */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-8 h-8 text-accent-teal"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9a3.771 3.771 0 117.542 0c0 1.657-1.286 2.571-2.057 3.143-.76.563-1.143 1.097-1.143 1.857M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-accent-teal">
                Research Questions
              </h3>
            </div>

            {/* Paragraph + Q1 */}
            <p className="text-base sm:text-lg text-[#444]">
              We have two research questions that we aim to answer with the research:
              <br />
              <br />
              <span>
                Q1: What are the challenges faced by the target users when
                interacting with PWMA?
              </span>
            </p>

            {/* List for Q1 */}
            <ul className="list-disc pl-6 mt-4 ms-8 text-[#444] text-base sm:text-lg">
              <li>
                How do users perceive the usability and user interface of PWMA
                compared to alternative tools?
              </li>
              <li>
                How does the learning curve for PWMA, and does it affect users'
                preference for using the software?
              </li>
              <li>
                What are the key features and functionalities users find lacking
                in PWMA compared to auxiliary software like Tableau and Excel?
              </li>
              <li>
                What are the specific use cases or scenarios where users prefer to
                use Tableau or Excel over PWMA?
              </li>
            </ul>

            <br />

            {/* Q2 */}
            <p className="text-base sm:text-lg text-[#444]">
              Q2: What improvements can be made to PWMA to encourage users to adopt
              it as their primary tool for data visualization and analysis?
            </p>

            {/* List for Q2 */}
            <ul className="list-disc pl-6 mt-4 ms-8 text-[#444] text-base sm:text-lg">
              <li>
                What intuitive design principles and data visualization techniques
                can be applied to PWMA?
              </li>
              <li>
                How are other tools more efficient in data visualization and
                outlier detection techniques?
              </li>
            </ul>
          </motion.div>



          {/* --- PROCESS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={1}
            className="bg-[#fef9f5] border-l-4 border-[#E36414] rounded-md shadow-md p-6 mb-10"
          >
            {/* Heading with icon */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-8 h-8 text-[#E36414]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#E36414]">Process</h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              We conducted a literature review and competitive analysis, and based
              on our secondary research, we found that Keysight Technologies has a
              unique value proposition.
              <br />
              <br />
              It brings a combination of hardware and software solutions, different
              from the contenders like JMP, Spotfire, and Zoho Analytics.
              <br />
              <br />
              We then focused on understanding the user perception.
            </p>

            <div>
              <img
                src="/project_a_img_d.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>




          {/* --- MAIN RESEARCH METHOD --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={2}
            className="bg-[#f7f6ff] border-l-4 border-[#6B4EFF] rounded-md shadow-md p-6 mb-10"
          >
            {/* Heading with icon */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-8 h-8 text-[#6B4EFF]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-1.35 6.15z"
                />
              </svg>
              <h3
                className="text-xl sm:text-3xl font-bold text-[#6B4EFF]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Main Research Method
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              We followed a set of research methodologies, which this project covers
              next.
            </p>

            <div>
              <img
                src="/project_a_img_e.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>



          {/* --- USER INTERVIEWS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={3}
            className="bg-[#fcf8fd] border-l-4 border-[#9c27b0] rounded-md shadow-md p-6 mb-10"
          >
            {/* Heading with microphone icon */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-8 h-8 text-[#9c27b0]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1v11m6-5a6 6 0 11-12 0 6 6 0 0112 0zm-6 11v3m-4 0h8"
                />
              </svg>
              <h3
                className="text-xl sm:text-3xl font-bold"
                style={{ color: "#9c27b0", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                User Interviews
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Our first approach was to conduct user interviews
            </p>

            <ul className="list-disc pl-6 mt-4 ms-8 text-base sm:text-lg text-[#444]">
              <li>Remote via Zoom</li>
              <li>Internal Keysight Participants</li>
            </ul>
          </motion.div>




          {/* --- RECRUITMENT --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={4}
            className="bg-[#f8f9ff] border-l-4 border-[#3f51b5] rounded-md shadow-md p-6 mb-10"
          >
            {/* Heading with recruitment icon */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-8 h-8 text-[#3f51b5]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 14c2.21 0 4 1.79 4 4v2H4v-2c0-2.21 1.79-4 4-4h8zM12 12a4 4 0 100-8 4 4 0 000 8zm6-5h3m-1.5-1.5v3"
                />
              </svg>
              <h3
                className="text-xl sm:text-3xl font-bold"
                style={{ color: "#3f51b5", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Recruitment
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Since PWMA is an internal product, we recruited internal users from
              Keysight, and their selection was based on their experience and time
              spent on PWMA
            </p>

            <ul className="list-disc pl-6 mt-4 ms-8 text-base sm:text-lg text-[#444]">
              <li>Sponsor-student meetings directed the project goals</li>
              <li>Participants facilitated by sponsors</li>
              <li>
                Participants were selected based on experience & time spent with
                PWMA
              </li>
            </ul>
          </motion.div>



          {/* --- INTERVIEW SESSIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={5}
            className="bg-[#f8fbff] border-l-4 border-[#2196f3] rounded-md shadow-md p-6 mb-10"
          >
            {/* Heading with chat icon */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-8 h-8 text-[#2196f3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h6m-6 8l-4-4V6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H7z"
                />
              </svg>
              <h3
                className="text-xl sm:text-3xl font-bold"
                style={{ color: "#2196f3", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Interview Sessions
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Overall, we conducted 8 interview sessions with 5 internal users.
              <br />
              We had two interview rounds: a screener round to gauge the user issues
              and an observation round, where we asked the user to share their
              screen on Zoom and walk us through their tasks and features where they
              may have encountered problems.
            </p>
          </motion.div>



          {/* --- SCREENER ROUND --- */}

          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={6}
            className="bg-[#fff8fb] border-l-4 border-[#e91e63] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-7 h-8 text-[#e91e63]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M9 5h6m2 0a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#e91e63]">
                Screener Round
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              <ul className="list-disc pl-6 mt-4 ms-8">
                <li>30 mins of individual interviews with 5 participants</li>
                <li>Semi-structured questions</li>
              </ul>
            </p>
          </motion.div>



          {/* --- OBSERVATION ROUND --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={7}
            className="bg-[#fdfff4] border-l-4 border-[#cddc39] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-7 h-7 text-[#cddc39]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8M4 10h8m-8 4h5"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#cddc39]">
                Observation Round
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              <ul className="list-disc pl-6 mt-4 ms-8">
                <li>60 mins of individual interviews with 3 participants</li>
                <li>
                  Task flow questions followed by observing the user’s interaction
                  with the tool
                </li>
              </ul>
            </p>
          </motion.div>


          {/* --- THEMATIC ANALYSIS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.001}
            className="bg-[#f9f6fc] border-l-4 border-[#673ab7] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-7 h-7 text-[#673ab7]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#673ab7]">
                Thematic Analysis
              </h3>
            </div>

            <div>
              <img
                src="/project_a_img_f.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              After conducting the interviews and gathering the transcripts it was
              time to analyze them and come up with some major categories of the
              user’s pain points to find the most common problems they had with the
              tool.
            </p>

            <div>
              <img
                src="/project_a_img_g.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Below is the list of categories we used to code the interview
              transcripts together with the number of occurrence in our analysis.
            </p>

            <div>
              <img
                src="/project_a_img_h.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Later, we narrowed the categories down to come up with key findings
              and turn those into feasible design recommendations. The ones with the
              most received complaints were feature-specific challenges,
              intuitiveness problems, and lack of accessibility features.
            </p>
          </motion.div>



          {/* --- USABILITY EVALUATION --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.002}
            className="bg-[#f9fafb] border-l-4 border-accent-teal rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-7 h-7 text-accent-teal"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 11l3 3L22 4M2 12h4m-4 4h4m-4-8h4"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-accent-teal">
                Usability Evaluation
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              First, Heuristic Evaluation (HE) assesses a product’s interface to detect usability
              issues and identify ways to resolve them. We used 10 heuristic criteria based on
              Nielsen's HE Principles.
              <ul className="list-disc pl-6 mt-4 ms-8">
                <li>Conducted by two team evaluators</li>
                <li>Followed a scoring scale of 0-4</li>
                <li>Each score explains the severity of the usability of the tool</li>
              </ul>
            </p>
          </motion.div>




          {/* --- SCORING METRIC --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.003}
            className="bg-[#fffef7] border-l-4 border-[#ffd600] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-7 h-7 text-[#ffd600]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 21V10M12 21V3M20 21v-6"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold" style={{ color: '#ffd600' }}>
                Scoring Metric
              </h3>
            </div>

            <div>
              <img
                src="/project_a_img_i.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              The HE helped us identify and prioritize the core usability issues.
              Further, the HE process reconfirmed and justified the issues
              identified by the interview participants. The HE and the secondary
              research and interviews would guide us in identifying the design goals
              of PWMA in the future.
            </p>

            <div>
              <img
                src="/project_a_img_j.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>



          {/* --- HEURISTIC EVALUATION RESULTS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.004}
            className="bg-[#fef7f6] border-l-4 border-[#ff7043] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#ff7043]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1 8a1 1 0 100-2 1 1 0 000 2zm.293-14.707a1 1 0 00-1.586 0L3.293 9.293A1 1 0 004 11h16a1 1 0 00.707-1.707l-7-7z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold" style={{ color: '#ff7043' }}>
                Heuristic Evaluation Results
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Based on our evaluation, PWMA has a low usability score for Status
              Visibility, User Control, Error Prevention, and Flexibility.
              <br />
              The overall usability score is 1.9, which is below 50%
            </p>

            <div>
              <img
                src="/project_a_img_k.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              The visualization below demonstrates that to get the final scores for
              each principle, we have performed two separate evaluations and
              aggregated the results at the end.
            </p>

            <div>
              <img
                src="/project_a_img_l.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>



          {/* --- 01: FEATURE-SPECIFIC CHALLENGES --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.005}
            className="bg-[#f5fbfe] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#1976d2]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3v2.25M14.25 3v2.25M3 9.75h18M4.5 21h15a1.5 1.5 0 001.5-1.5v-9.75H3v9.75A1.5 1.5 0 004.5 21z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold" style={{ color: '#1976d2' }}>
                01: Feature-Specific Challenges
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              This theme focuses on:
              <ul className="list-disc pl-6 mt-4 ms-8">
                <li>
                  Identifying and addressing specific challenges related to the
                  features and functionalities of the PWMA
                </li>
                <li>
                  Gaining insights into the usability, effectiveness, and user
                  satisfaction with different features and their associated
                  interactions
                </li>
                <li>
                  Analyzes the performance of the features, task completion steps,
                  the application feedback on each step, and the effectiveness of
                  visualizations
                </li>
              </ul>
            </p>

            <p className="text-base sm:text-lg text-[#444]">
              Here are some quotes from our Interview participants, where they
              mention that it takes bunch of clicks to create a chart, and the chart
              you get at the end is not what you wanted.
              <br />
              <br />
              Another participant mentioned that the plotting procedure is not
              transparent enough.
            </p>
          </motion.div>



          {/* --- PARTICIPANT 4 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.006}
            className="bg-[#fef6f8] border-l-4 border-[#d81b60] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#d81b60]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A3 3 0 007 21h10a3 3 0 002.828-3.804l-3-10A3 3 0 0014.97 5H9.03a3 3 0 00-2.857 2.196l-3 10z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold" style={{ color: '#d81b60' }}>
                Participant 4
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              … you just did a bunch of clicks and potentially waited five seconds
              or something for the chart to load, and then you don't have the chart
              you want.
              <br />
              <br />
              Some of the participants talked about how the tool automatically
              errors out instead of allowing them to prevent the errors. Participant
              5 mentions how confusing it is to have data being loaded with no
              indication.
            </p>
          </motion.div>



          {/* --- PARTICIPANT 5 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.007}
            className="bg-[#f9fafb] border-l-4 border-accent-teal rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-accent-teal"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A3 3 0 007 21h10a3 3 0 002.828-3.804l-3-10A3 3 0 0014.97 5H9.03a3 3 0 00-2.857 2.196l-3 10z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-accent-teal">
                Participant 5
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              It takes time to load the data on the table view and that's really
              confusing for the user to figure out some processes going on at the
              backend.
              <br />
              <br />
              Hence, we developed some initial recommendations for the first set of
              findings. One of them is to change the structure of the interface and
              the navigation of the app. Then, work on improving the error
              prevention and the system feedback. And lastly, improve the way PWMA
              communicates the current state, the progress, and the loading of its
              processes.
            </p>
          </motion.div>


          {/* --- RECOMMENDATIONS --- */}


          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.008}
            className="bg-[#f7f6ff] border-l-4 border-[#6B4EFF] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#6B4EFF]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20h9M12 4H3m9 0v16"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#6B4EFF]">
                Recommendations
              </h3>
            </div>

            <div className="my-8">
              <img
                src="/project_a_img_m.png"
                alt="Keysight PWMA"
                className="w-full max-w-[600px] rounded object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>


          {/* --- 02: INTUITIVENESS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.009}
            className="bg-[#f9fdf6] border-l-4 border-[#8bc34a] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#8bc34a]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#8bc34a]">
                02: Intuitiveness
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Our second key finding concerns UI intuitiveness — the ease with which
              users understand and navigate an interface without extensive guidelines.
              <br />
              <br />
              This theme focuses on:
              <ul className="list-disc pl-6 mt-4 ms-8">
                <li>
                  Identifying intuitiveness challenges when interacting with the PWMA interface
                </li>
                <li>
                  Identify if the task completion flow matches the mental model of
                  the same tasks in other analytics tools
                </li>
              </ul>
              <br />
              Users approach our software with prior knowledge, expecting familiar
              elements like shapes, positioning, and interaction patterns to function
              as usual. We examined two areas of this intuition: general interaction
              with modern GUIs and more specific interaction with other data
              visualization software relevant to our target users.
              <br />
              <br />
              Based on our findings, one instance of a user’s intuition with a GUI not
              working is that the users expect a click-and-drag across a chart to
              select values, as experienced in browsers or Excel. However, in the
              charts of PWMA, this action results in zooming in, contradicting the
              user's expectation.
            </p>
          </motion.div>




          {/* --- PARTICIPANT 1 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.01}
            className="bg-[#f5fafe] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#1976d2]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828M5 19h14"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1976d2]">
                Participant 1
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              My intuition, my usual user experience says to me that when I click on
              the graph, the cursor here will be used as a selection tool, but instead
              of that, it works as the zoom cursor.
              <br />
              <br />
              Besides the overall user interface, users also possess specific
              expectations for software designed for particular purposes. For example,
              when utilizing our software for data visualization, they anticipate
              similar interaction methods found in programs like Excel or Spotfire.
              This explains why some interview participants found it challenging to
              create a chart.
            </p>
          </motion.div>


          {/* --- PARTICIPANT 2 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.011}
            className="bg-[#fef6f8] border-l-4 border-[#d81b60] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#d81b60]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 3a7 7 0 00-2 13.7V19a1 1 0 001 1h4a1 1 0 001-1v-2.3A7 7 0 0011 3z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#d81b60]">
                Participant 2
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Plotting of one parameter versus another parameter… It was not intuitive
              for me.
              <br />
              <br />
              According to our discoveries, we recommend two improvements: follow
              existing user experience standards—if something appears clickable, confirm
              it is indeed clickable. Additionally, design a user interface that aligns
              with the user's understanding instead of imposing unfamiliar habits.
            </p>
          </motion.div>



          {/* --- RECOMMENDATIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.012}
            className="bg-[#fffaf3] border-l-4 border-[#ffb300] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#ffb300]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#ffb300]">
                Recommendations
              </h3>
            </div>

            <div className="my-8">
              <img
                src="/project_a_img_n.png"
                alt="Keysight PWMA"
                className="w-full max-w-[600px] rounded object-contain"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          {/* --- 03: ACCESSIBILITY --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.013}
            className="bg-[#fbf6fc] border-l-4 border-[#ab47bc] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#ab47bc]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4a2 2 0 110 4 2 2 0 010-4zm-2 4.5a2 2 0 014 0v2h4m-4 0h-4v-2a2 2 0 014 0v2zm-1 3h2l3 9m-8 0l3-9m-4 0h6"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#ab47bc]">
                03: Accessibility
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              This theme focuses on:
              <ul className="list-disc pl-6 mt-4 ms-8">
                <li>
                  Addressing accessibility issues that prevent users from fully engaging with the software.
                </li>
                <li>
                  Following chartability methodology principles to ensure an inclusive data experience.
                </li>
                <li>
                  How the lack of clear affordances could lead to confusion or misinterpretation, so proper affordances are crucial for accessibility.
                </li>
              </ul>
              <br />
              Some participants complained about memorizing unnecessary information such as the mean value for the cluster or standard deviation. Other participants mentioned the tool’s navigation and workflow seemed consuming, which led to a steep learning curve.
            </p>
          </motion.div>



          {/* --- PARTICIPANT 1 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.014}
            className="bg-[#f5fbfe] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#1976d2]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1976d2]">
                Participant 1
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Usually when I confirm, I have to remember the mean value for the
              cluster and the deviation.
            </p>
          </motion.div>



          {/* --- CHARTABILITY --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.015}
            className="bg-[#f9fdf8] border-l-4 border-[#8bc34a] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#8bc34a]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0A9 9 0 1112 3a9 9 0 019 9z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#8bc34a]">
                Chartability
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              Chartability is the set of heuristics ensuring the tool is accessible.
              Figma, Tableau, and Excel have conducted these and implemented them.
              <br />
              <br />
              One of the standards of this heuristics specifically focuses on color
              sensitivity and vision impairment.
              <br />
              <br />
              Red color blindness is common in males. Since the extremity of color
              blindness can be different in different people they might view the
              gray as black or even a very pale highlight, especially with the
              background of black.
              <br />
              <br />
              How color blind people view the charts:
            </p>

            <div>
              <img
                src="/project_a_img_o.png"
                alt="Colorblind View"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              To measure the Chartability of the PWMA charts, we conducted a
              chartability heuristic evaluation that resulted in an overall score of
              2.37/4, which is 59%.
            </p>

            <div>
              <img
                src="/project_a_img_p.png"
                alt="Chartability Score"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              One example of the evaluation is the color contrast used for the
              charts: it should have at least 3:1 contrast. Thus, the color choice
              should be “colorblind safe” (distinguishable to people with color
              vision deficiencies).
            </p>
          </motion.div>



          {/* --- RECOMMENDATIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.016}
            className="bg-[#fffaf3] border-l-4 border-[#ffb300] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#ffb300]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3
                className="text-xl sm:text-3xl font-bold text-[#ffb300]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Recommendations
              </h3>
            </div>

            <div className="my-8">
              <img
                src="/project_a_img_q.png"
                alt="Keysight PWMA"
                className="w-full max-w-[600px] rounded-lg shadow-sm object-contain"
              />
            </div>
          </motion.div>



          {/* --- SIMILARITIES INCLUDE: --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.017}
            className="bg-[#f5fafe] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#1976d2]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1976d2]">
                Similarities Include:
              </h3>
            </div>

            <ul className="list-disc pl-6 mt-4 ms-8 text-base sm:text-lg text-[#444]">
              <li>The use of Supplementary Software,</li>
              <li>Experience using PWMA and,</li>
              <li>General Pain Points (i.e., Cognitive Load, and Feedback).</li>
            </ul>
          </motion.div>




          {/* --- DIFFERENCES INCLUDE: --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.018}
            className="bg-[#fef9f5] border-l-4 border-[#ff7043] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#ff7043]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#ff7043]">
                Differences Include:
              </h3>
            </div>

            <ul className="list-disc pl-6 mt-4 ms-8 text-base sm:text-lg text-[#444]">
              <li>Skill Sets,</li>
              <li>Educational And Professional Background and,</li>
              <li>General Goals</li>
            </ul>

            <div>
              <img
                src="/project_a_img_r.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>



          {/* --- CUSTOMER EXPERIENCE MAP: --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.019}
            className="bg-[#f6fdfd] border-l-4 border-[#1db3a6] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#1db3a6]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m4 18l7-7-7-7"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1db3a6]">
                Customer experience map
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#444]">
              We also created a customer experience map to visualize the opportunities and the pain points in each stage of the tool’s workflow. Furthermore, we wanted to compare our suggestions to the interviewers' recommendations.
            </p>

            <div>
              <img
                src="/project_a_img_s.png"
                alt="Keysight PWMA"
                className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>


          {/* --- MAIN PAIN POINTS: --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.02}
            className="bg-[#fffdf8] border-l-4 border-[#ff9800] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#ff9800]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#ff9800]">
                Main pain points
              </h3>
            </div>

            <ul className="list-disc pl-6 mt-4 ms-8 text-base sm:text-lg text-[#444]">
              <li>Hard to familiarize yourself with the data</li>
              <li>It takes a lot of steps to create a chart with multiple fields</li>
              <li>The user has to remember some characteristics (e.g., mean) to use them.</li>
              <li>Visual/data set sharing options are limited</li>
            </ul>
          </motion.div>



          {/* --- POSSIBLE DESIGN OPPORTUNITIES --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.021}
            className="bg-[#f5fdf5] border-l-4 border-[#4caf50] rounded-md shadow-md p-6 mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-6 h-6 text-[#4caf50]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl sm:text-3xl font-bold text-[#4caf50]">
                Possible design opportunities
              </h3>
            </div>

            <ul className="list-disc pl-6 mt-4 ms-8 text-base sm:text-lg text-[#444]">
              <li>Support analysis of large data set structure.</li>
              <li>Minimize task steps for quick and accessible chart/explain features.</li>
              <li>Remove ambiguity by providing direct and clear system feedback.</li>
              <li>Improve the navigation between scanning Outliers and Features.</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Section_d;



