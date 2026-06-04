<script>
  import absorpigImg from "$lib/assets/absorpig-logo.png";
  import cpblRwthImg from "$lib/assets/cpbl-rwth-logo.svg";
  import greenslothImg from "$lib/assets/greensloth-logo.svg";
  import mxlbricksImg from "$lib/assets/mxlbricks-logo.png";
  import mxlpyImg from "$lib/assets/mxlpy-logo.png";
  import {
    CardSoftware,
    H1,
    SectionHeader as Header,
    Link,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
</script>

<svelte:head>
  <title>Community resources - Matuszyńska Lab</title>
</svelte:head>

<Header width="narrow">
  <H1 color="light">Community resources</H1>
  <Text color="light">Things we built or contributed to with ❤️</Text>
</Header>
<Section
  width="narrow"
  gap="large"
>
  <CardSoftware
    title="MxlPy"
    github="https://github.com/Computational-Biology-Aachen/MxlPy"
    doi="10.1101/2025.05.06.652335"
    img={mxlpyImg}
  >
    <Text>
      MxlPy (pronounced "em axe el pie") is a Python package for mechanistic
      learning (Mxl) - the combination of mechanistic modeling and machine
      learning to deliver explainable, data-informed solutions.
    </Text>
  </CardSoftware>

  <CardSoftware
    title="MxlBricks"
    github="https://github.com/Computational-Biology-Aachen/mxl-bricks"
    img={mxlbricksImg}
  >
    <Text>
      mxlbricks is a library built on top of <Link
        href="https://github.com/Computational-Biology-Aachen/MxlPy">MxlPy</Link
      > to enable quick building of mechanistic learning models by using re-usable
      reaction bricks.
    </Text>
  </CardSoftware>

  <CardSoftware
    title="GreenSloth"
    href="https://greensloth.rwth-aachen.de/"
    img={greenslothImg}
  >
    <Text
      >Interactive database of photosynthesis models to help you decide which
      model is best suited for your needs.</Text
    >
  </CardSoftware>

  <CardSoftware
    title="ComPhot"
    href="https://comphot-biotool.streamlit.app/"
    img={cpblRwthImg}
  >
    <Text>
      Simulation-based photosynthesis learning platform for the needs of
      21st-century students
    </Text>
  </CardSoftware>

  <CardSoftware
    title="absorpig"
    github="https://github.com/Computational-Biology-Aachen/absorpig"
    img={absorpigImg}
  >
    <Text
      >Extract pigment composition of measured absorption spectra of
      photosynthetic organisms.</Text
    >
  </CardSoftware>

  <CardSoftware
    title="pySBML"
    github="https://github.com/Computational-Biology-Aachen/pysbml"
    img={cpblRwthImg}
  >
    <Text>pySBML takes SBML models and makes them simpler ❤️</Text>
  </CardSoftware>
</Section>
