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
          className="bg-white rounded-lg shadow-lg p-12 sm:p-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#2E2B26] m-6 mt-3 tracking-tight">
            RESEARCH:
          </h2>
          {/* --- RESEARCH QUESTIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
            className="bg-[#e6f7fa] border-l-4 border-[#1db3a6] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#1db3a6'}}>
            RESEARCH
            <br /> QUESTIONS
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
              We have two research questions that we aim to answer with the research:
            <br />
            <br />
            <span>
              Q1: What are the challenges faced by the target users when
              interacting with PWMA?
            </span>
            </p>
            <ul className="list-disc pl-6 mt-4 ms-8">
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
            <p className="text-base sm:text-lg text-[#444]">
            Q2: What improvements can be made to PWMA to encourage users to adopt
            it as their primary tool for data visualization and analysis?
            </p>
            <ul className="list-disc pl-6 mt-4 ms-8">
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
            className="bg-[#fff7e6] border-l-4 border-[#ff9800] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ff9800'}}>PROCESS</h3>
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
            className="bg-[#e6f7e6] border-l-4 border-[#4caf50] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#4caf50'}}>
            MAIN RESEARCH METHOD
          </h3>
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
            className="bg-[#f3e6fa] border-l-4 border-[#9c27b0] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#9c27b0'}}>
            USER INTERVIEWS
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            Our first approach was to conduct user interviews
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>Remote via Zoom</li>
              <li>Internal Keysight Participants</li>
            </ul>
          </p>
          </motion.div>
          {/* --- RECRUITMENT --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={4}
            className="bg-[#e6eaff] border-l-4 border-[#3f51b5] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#3f51b5'}}>
            RECURUITMENT
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            Since PWMA is an internal product, we recruited internal users from
            Keysight, and their selection was based on their experience and time
            spent on PWMA
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>Sponsor-student meetings directed the project goals</li>
              <li>Participants facilitated by sponsors </li>
              <li>
                Participants were selected based on experience & time spent with
                  PWMA
              </li>
            </ul>
          </p>
          </motion.div>
          {/* --- INTERVIEW SESSIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={5}
            className="bg-[#e6f2ff] border-l-4 border-[#2196f3] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#2196f3'}}>
            INTERVIEW SESSIONS
          </h3>
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
            className="bg-[#fff0f6] border-l-4 border-[#e91e63] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#e91e63'}}>
            SCREENER ROUND
          </h3>
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
            className="bg-[#f9fbe7] border-l-4 border-[#cddc39] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#cddc39'}}>
            OBSERVATION ROUND
          </h3>
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
            className="bg-[#ede7f6] border-l-4 border-[#673ab7] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#673ab7'}}>
            THEMATIC ANALYSIS
          </h3>
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
            className="bg-[#e0f2f1] border-l-4 border-[#009688] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#009688'}}>
            USABILITY EVALUATION
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            First, Heuristic Evaluation (HE) assesses a product’s interface to
            detect usability issues and identify ways to resolve them. We used 10
            heuristic criteria based on Nielsen's HE Principles.
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>Conducted by two team evaluators</li>
              <li>Followed a scoring scale of 0-4</li>
              <li>
                Each score explains the severity of the usability of the tool
              </li>
            </ul>
          </p>
          </motion.div>
          {/* --- SCORING METRIC --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1}}
            custom={7.003}
            className="bg-[#fffde7] border-l-4 border-[#ffd600] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ffd600'}}>
            SCORING METRIC
          </h3>
          <div>
            <img
                src="/project_a_img_i.png"
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
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
              style={{ objectFit: "contain" }}
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
            className="bg-[#fbe9e7] border-l-4 border-[#ff7043] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ff7043'}}>
            HEURISTIC EVALUATION RESULTS
          </h3>
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
              style={{ objectFit: "contain" }}
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
              style={{ objectFit: "contain" }}
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
            className="bg-[#e3f2fd] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#1976d2'}}>
            01: FEATURE-SPECIFIC CHALLENGES
          </h3>
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
            className="bg-[#fce4ec] border-l-4 border-[#d81b60] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#d81b60'}}>
            PARTICIPANT 4
          </h3>
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
            className="bg-[#e8f5e9] border-l-4 border-[#43a047] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#43a047'}}>
            PARTICIPANT 5
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            t takes time to load the data on the table view and that's really
            confusing for the user to figure out some processes going on at the
            back at the backend.
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
            className="bg-[#fff3e0] border-l-4 border-[#ffb300] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ffb300'}}>
            RECOMENDATIONS
          </h3>
          <div>
            <img
                src="/project_a_img_m.png"
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
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
            className="bg-[#f1f8e9] border-l-4 border-[#8bc34a] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#8bc34a'}}>
            02: INTUITIVENESS
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            Our second key finding concerns UI intuitiveness - the ease with which
            users understand and navigate an interface without extensive
            guidelines.
            <br />
            <br />
            This theme focuses on:
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>
                Identifying intuitiveness challenges when interacting with the
                PWMA interface
              </li>
              <li>
                Identify if the task completion flow matches the mental model of
                the same tasks in other analytics tools
              </li>
            </ul>
            <br />
            Users approach our software with prior knowledge, expecting familiar
            elements like shapes, positioning, and interaction patterns to
            function as usual. We examined two areas of this intuition: general
            interaction with modern GUIs and more specific interaction with other
            data visualization software relevant to our target users.
            <br />
            <br />
            Based on our findings, one instance of a user’s intuition with a GUI
            not working is that the users expect a click-and-drag across a chart
            to select values, as experienced in browsers or Excel. However, in the
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
            className="bg-[#e3f2fd] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#1976d2'}}>
            PARTICIPANT 1
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            My intuition, my usual user experience says to me that when I click on
            the graph, the cursor here will be used as a selection tool, but
            instead of that, it works as the zoom cursor.
            <br />
            <br />
            Besides the overall user interface, users also possess specific
            expectations for software designed for particular purposes. For
            example, when utilizing our software for data visualization, they
            anticipate similar interaction methods found in programs like Excel or
            Spotfire. This explains why some interview participants found it
            challenging to create a chart.
          </p>
          </motion.div>
          {/* --- PARTICIPANT 2 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.011}
            className="bg-[#fce4ec] border-l-4 border-[#d81b60] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#d81b60'}}>
            PARTICIPANT 2
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            Plotting of one parameter versus versus another parameter… It was not
            intuitive for me.
            <br />
            <br />
            According to our discoveries, we recommend two improvements: follow
            existing user experience standards—if something appears clickable,
            confirm it is indeed clickable. Additionally, design a user interface
            that aligns with the user's understanding instead of imposing
            unfamiliar habits.
          </p>
          </motion.div>
          {/* --- RECOMMENDATIONS --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.012}
            className="bg-[#fff3e0] border-l-4 border-[#ffb300] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ffb300'}}>
            RECOMENDATIONS
          </h3>
          <div>
            <img
                src="/project_a_img_n.png"
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
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
            className="bg-[#f3e5f5] border-l-4 border-[#ab47bc] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ab47bc'}}>
            03: ACCESSIBILITY
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            This theme focuses on:
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>
                Addressing accessibility issues that prevent users from fully
                engaging with the software.
              </li>
              <li>
                Following chartability methodology principles to ensure an
                inclusive data experience.
              </li>
              <li>
                How the lack of clear affordances could lead to confusion or
                misinterpretation, so proper affordances are crucial for
                accessibility
              </li>
            </ul>
            <br />
            Some participants complained about memorizing unnecessary information
            such as the mean value for the cluster or standard deviation. Other
            participants mentioned the tool’s navigation and workflow seemed
            consuming, which led to a steep learning curve.
          </p>
          </motion.div>
          {/* --- PARTICIPANT 1 --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.014}
            className="bg-[#e3f2fd] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#1976d2'}}>
            PARTICIPANT 1
          </h3>
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
            className="bg-[#f1f8e9] border-l-4 border-[#8bc34a] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#8bc34a'}}>
            CHARTABILITY
          </h3>
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
            gray as black or or even a very pale highlight, especially with the
            background of black.
            <br />
            <br />
            How Color Blind People View the Charts:
          </p>
          <div>
            <img
                src="/project_a_img_o.png"
              alt="Keysight PWMA"
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
              alt="Keysight PWMA"
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
            className="bg-[#fff3e0] border-l-4 border-[#ffb300] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ffb300'}}>
            RECOMMENDATIONS
          </h3>
          <div>
            <img
                src="/project_a_img_q.png"
              alt="Keysight PWMA"
              className="md:max-w-[930px] max-w-full mx-auto my-10 rounded"
              style={{ objectFit: "contain" }}
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
            className="bg-[#e3f2fd] border-l-4 border-[#1976d2] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#1976d2'}}>
            SIMILARITIES INCLUDE:
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>The use of Supplementary Software,</li>
              <li>Experience using PWMA and,</li>
              <li>General Pain Points (i.e., Cognitive Load, and Feedback).</li>
            </ul>
          </p>
          </motion.div>
          {/* --- DIFFERENCES INCLUDE: --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.018}
            className="bg-[#fbe9e7] border-l-4 border-[#ff7043] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ff7043'}}>
            DIFFERENCES INCLUDE:
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>Skill Sets,</li>
              <li>Educational And Professional Background and,</li>
              <li>General Goals</li>
            </ul>
          </p>
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
            className="bg-[#e6f7fa] border-l-4 border-[#1db3a6] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#1db3a6'}}>
            CUSTOMER EXPERIENCE MAP:
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            We also created a customer experience map to visualize the
            opportunities and the pain points in each stage of the tool’s
            workflow. Furthermore, we wanted to compare our suggestions to the
            interviewers' recommendations.
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
            className="bg-[#fff7e6] border-l-4 border-[#ff9800] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#ff9800'}}>
            MAIN PAIN POINTS:
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>Hard to familiarize yourself with the data</li>
              <li>
                It takes a lot of steps to create a chart with multiple fields
              </li>
              <li>
                The user has to remember some characteristics (e.g., mean) to use
                them.
              </li>
              <li>Visual/data set sharing options are limited</li>
            </ul>
          </p>
          </motion.div>
          {/* --- POSSIBLE DESIGN OPPORTUNITIES --- */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            custom={7.021}
            className="bg-[#e6f7e6] border-l-4 border-[#4caf50] rounded-md shadow-md p-6 mb-10"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-3" style={{color:'#4caf50'}}>
            POSSIBLE DESIGN OPPORTUNITIES
          </h3>
            <p className="text-base sm:text-lg text-[#444]">
            <ul className="list-disc pl-6 mt-4 ms-8">
              <li>Support analysis of large data set structure.</li>
              <li>
                Minimize task steps for quick and accessible chart/explain
                features.
              </li>
              <li>
                Remove ambiguity by providing direct and clear system feedback.
              </li>
              <li>
                Improve the navigation between scanning Outliers and Features.
              </li>
            </ul>
          </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section_d;



