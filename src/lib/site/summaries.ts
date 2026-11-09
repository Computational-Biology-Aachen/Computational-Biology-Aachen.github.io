// Plain-text summaries of the pages whose content lives only in Svelte
// components (Software, Teaching, Events), for llms.txt / llms-full.txt.
// Keep in sync with src/lib/features/{software,teaching,events}.

export const mission =
  "We are a computational biology lab re-imagining photosynthesis for the future of sustainable agriculture and green innovation. Our mission bridges cutting-edge research (integrative models that predict plant performance under real-world stress), transformative teaching (hands-on coding, systems biology and data science through hackathons and open-source tools) and citizen science & outreach (connecting plant modelling to climate change, urban greening and food security).";

export const software = [
  {
    title: "MxlPy",
    url: "https://github.com/Computational-Biology-Aachen/MxlPy",
    description:
      "Python package for mechanistic learning (Mxl) - the combination of mechanistic modeling and machine learning to deliver explainable, data-informed solutions. Docs: https://cpbl.rwth-aachen.de/MxlPy/ ; LLM reference: https://cpbl.rwth-aachen.de/MxlPy/latest/llms.txt",
  },
  {
    title: "MxlBricks",
    url: "https://github.com/Computational-Biology-Aachen/mxl-bricks",
    description:
      "Library on top of MxlPy for quickly building mechanistic learning models from re-usable reaction bricks.",
  },
  {
    title: "GreenSloth",
    url: "https://greensloth.rwth-aachen.de/",
    description:
      "Interactive database of photosynthesis models to help decide which model is best suited for your needs.",
  },
  {
    title: "ComPhot",
    url: "https://comphot-biotool.streamlit.app/",
    description:
      "Simulation-based photosynthesis learning platform for 21st-century students.",
  },
  {
    title: "absorpig",
    url: "https://github.com/Computational-Biology-Aachen/absorpig",
    description:
      "Extracts the pigment composition of measured absorption spectra of photosynthetic organisms.",
  },
  {
    title: "pySBML",
    url: "https://github.com/Computational-Biology-Aachen/pysbml",
    description: "Takes SBML models and makes them simpler.",
  },
];

export const teaching =
  "The group teaches computational biology in bachelor's and master's programmes at RWTH Aachen, in formats ranging from two-week intensive courses to semester-long lectures with exercises, and offers internships (contact Prof. Matuszyńska). Current courses include Photosynthetic Systems in Architecture (PhoSA), Biology as an Application Subject II, Introduction to Bioinformatics, Ethics in the Biosciences and an Interdisciplinary Data Science Course. All courses are listed on RWTHonline.";

export const events = [
  {
    title: "JII Open Challenge in Accra, Ghana",
    url: "https://computational-biology-aachen.github.io/2026-photosynthesis-hackathon/",
    description:
      "“Hacking for Photosynthesis: From Field Photosynthesis to Genetic Architecture” - a hackathon linking genotypic variation to photosynthetic performance.",
  },
  {
    title: "Computational Modeling in Embu, Kenya",
    url: "https://computational-biology-aachen.github.io/2023-hackathon-embu/",
    description:
      "2023 hackathon workshop on computational modeling for young African researchers at the University of Embu.",
  },
  {
    title: "Summer School for Computational Biology in Watamu, Kenya",
    url: "https://computational-biology-aachen.github.io/2022-hackathon-watamu/",
    description:
      "Two-week summer school in computational biology for sustainable environmental research, organised with the Mawazo Institute (2022).",
  },
];
