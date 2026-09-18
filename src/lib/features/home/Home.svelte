<script lang="ts">
  import bioscImg from "$lib/assets/biosc-logo.jpg";
  import ccls from "$lib/assets/ccls.svg";
  import ceplasImg from "$lib/assets/ceplas-logo.jpg";
  import crophotImg from "$lib/assets/comphot-logo.png";
  import cpblImg from "$lib/assets/cpbl-rwth-logo.svg";
  import gopmfImg from "$lib/assets/gopmf-logo.png";
  import greenslothImg from "$lib/assets/greensloth-logo.svg";
  import groupImg from "$lib/assets/group-picture-2026-03-sm.jpg";
  import hdsleeImg from "$lib/assets/hdslee-logo.jpg";
  import hero from "$lib/assets/hero.jpg";
  import mibinetImg from "$lib/assets/mibinet-logo.png";
  import mxlbricksImg from "$lib/assets/mxlbricks-logo.png";
  import mxlpyImg from "$lib/assets/mxlpy-logo.png";
  import placeholderImg from "$lib/assets/placeholder.jpg";
  // Publication watermark images, keyed by DOI in `publicationImages` below
  import pubFluoInvImg from "$lib/assets/publications/2026-fluorescence-inverse.png";
  import pubWebBased from "$lib/assets/publications/2026-web-based.png";
  import pubSheddingImg from "$lib/assets/publications/shedding.png";
  // Remainder
  import rwth from "$lib/assets/rwth.svg";
  import publicationsJson from "$lib/publications.json";
  import {
    Bold,
    BoxHeadingMain,
    Card,
    Grid,
    H2,
    HeroGradient,
    Image,
    Li,
    Link,
    LogoBar,
    CardPublicationMain as PublicationMain,
    Section,
    CardSoftwareMain as SoftwareMain,
    Text,
    Ul,
  } from "@computational-biology-aachen/design";

  let { data } = $props();

  const logos = [
    { src: rwth, href: "https://www.rwth-aachen.de", alt: "rwth logo" },
    {
      src: ccls,
      href: "https://www.ccls.rwth-aachen.de",
      alt: "ccls logo",
      height: "4rem",
    },
    {
      src: bioscImg,
      href: "https://www.biosc.de/",
      alt: "ccls logo",
      height: "4rem",
    },
    {
      src: hdsleeImg,
      href: "https://www.hds-lee.de",
      alt: "HDSLEE logo",
      height: "4rem",
    },
    {
      src: ceplasImg,
      href: "https://www.ceplas.eu/en/home",
      alt: "ceplas logo",
      height: "4rem",
    },
    {
      src: mibinetImg,
      href: "https://www.sfb1535.hhu.de/en/mibinet",
      alt: "mibinet logo",
      height: "5.5rem",
    },
    {
      src: gopmfImg,
      href: "https://www.uni-muenster.de/GoPMF/en/index.html",
      alt: "gopmf logo",
      height: "5.5rem",
    },
  ];

  // Curated watermark art for the top publications, keyed by DOI. Any
  // publication.json entry without a curated image falls back to a generic
  // placeholder rather than going unillustrated.
  const publicationImages: Record<string, string> = {
    "https://doi.org/10.1016/j.molp.2026.07.006": pubFluoInvImg,
    "https://doi.org/10.1371/journal.pbio.3003825": pubWebBased,
    "https://doi.org/10.1371/journal.pcbi.1012445": pubSheddingImg,
  };

  // Always show the curated set above, not just whatever is chronologically
  // newest - publications.json is bumped by a weekly bot, so "top 3 by date"
  // drifts away from the hand-made watermark art almost immediately.
  const publications = Object.keys(publicationImages)
    .map((doi) => publicationsJson.find((publication) => publication.doi === doi))
    .filter((publication) => publication !== undefined);
</script>

<svelte:head>
  <title>Matuszyńska Lab</title>
</svelte:head>

<!-- 00 - hero image -->
<HeroGradient
  src={hero}
  cpblLogo={cpblImg}
  width="narrow"
>
  <hgroup>
    <h1 class="hero-line">The Matuszyńska Lab</h1>
    <p class="hero-line">Computational Biology</p>
    <p class="hero-line">RWTH Aachen</p>
  </hgroup>
</HeroGradient>

<!-- 01 - mission -->
<Section
  variant="light"
  width="narrow"
>
  <BoxHeadingMain
    n="01"
    title="mission"
  ></BoxHeadingMain>
  <Text>
    We are a computational biology lab re-imagining photosynthesis for the
    future of sustainable agriculture and green innovation. Our mission bridges
    three core areas:
    <Bold>cutting-edge research</Bold>, where we design integrative models to
    predict plant performance under real-world stress; <Bold
      >transformative teaching</Bold
    >, where students gain hands-on skills in coding, systems biology, and data
    science through hackathons and open-source tools; and <Bold
      >citizen science & outreach</Bold
    >, where we connect plant modelling to solutions for climate change, urban
    greening, and food security. By uniting mathematics, biology, and global
    sustainability, we aim to inspire the next generation of scientists,
    partners, and citizens to join us in shaping resilient crops, smart cities,
    and a climate-ready future.
  </Text>
</Section>

<!-- 02 - Team -->
<Section
  variant="dark"
  width="narrow"
>
  <BoxHeadingMain
    n="02"
    color="light"
    title="team"
  ></BoxHeadingMain>
  <Link href="/team">
    <Image
      src={groupImg}
      alt="Group photo of the Matuszyńska Lab team"
    />
  </Link>

  <Text>
    See our <Link
      color="secondary"
      href="/team">team page</Link
    > for more information.
  </Text>
</Section>

<!-- Blog -->
<Section
  variant="light"
  width="narrow"
>
  <BoxHeadingMain
    n="07"
    title="news"
  ></BoxHeadingMain>

  {#each data.posts as post (post.slug)}
    <Card format="full">
      <H2>{post.title}</H2>
      <Text>{post.description}</Text>
      <Link href="/news/{post.slug}">Read on</Link>
    </Card>
  {/each}
  <Text>
    Interested? Check out our <Link href="/news">news</Link>
  </Text>
</Section>

<!-- Teaching -->
<Section
  variant="dark"
  width="narrow"
>
  <BoxHeadingMain
    n="04"
    color="light"
    title="Teaching"
  ></BoxHeadingMain>

  <Text>
    Our group offers several opportunities to learn about computational biology
    within both bachelor's and master's programs. We are using different formats
    ranging from two weeks long, intensive courses to semester long lectures
    with exercises. We are also offering a possibility to do your internship
    with us! If you are interested, please contact Prof. Matuszyńska directly.
  </Text>

  <H2 color="light">Current semester</H2>

  <Ul>
    <Li color="light">
      <Link
        color="light"
        href="/"
        >Lecture + Practical Photosynthetic Systems in Architecture (PhoSA)
      </Link>
    </Li>
    <Li color="light">
      <Link
        color="light"
        href="/">Lecture Biology as an Application Subject II 16.00083</Link
      >
    </Li>
    <Li color="light">
      <Link
        color="light"
        href="/"
        >Lecture with exercise Introduction to Bioinformatics 16.00286
      </Link>
    </Li>
    <Li color="light">
      <Link
        color="light"
        href="/">Lecture Ethics in the Biosciences 16.00244</Link
      >
    </Li>
    <Li color="light">
      <Link
        color="light"
        href="/"
        >Practical + Seminar Interdisciplinary Data Science Course 16.00017</Link
      >
    </Li>
  </Ul>
  <Link
    color="secondary"
    href="/teaching">Past semesters</Link
  >
</Section>
<!-- Publications -->
<Section
  variant="light"
  width="narrow"
>
  <BoxHeadingMain
    n="05"
    title="latest publications"
  ></BoxHeadingMain>

  <Grid columns={1}>
    {#each publications as publication (publication.doi)}
      <PublicationMain
        title={publication.title}
        href={publication.doi}
        img={publicationImages[publication.doi] ?? placeholderImg}
      >
        <Text color="white">{publication.authors.join(", ")}</Text>
      </PublicationMain>
    {/each}
  </Grid>
  <Text>
    Interested? Check out our <Link href="/papers"
      >full list of publications</Link
    >
  </Text>
</Section>
<!-- community resources -->
<Section
  variant="dark"
  width="narrow"
>
  <BoxHeadingMain
    n="06"
    color="light"
    title="community resources"
  ></BoxHeadingMain>

  <Grid columns={2}>
    <SoftwareMain
      title="MxlPy"
      img={mxlpyImg}
      url="https://github.com/Computational-Biology-Aachen/MxlPy"
    >
      <Text color="white">makes mechanistic learning approachable</Text>
    </SoftwareMain>
    <SoftwareMain
      title="MxlBricks"
      img={mxlbricksImg}
      url="https://github.com/Computational-Biology-Aachen/mxl-bricks"
    >
      <Text color="white">helps building large models</Text>
    </SoftwareMain>
    <SoftwareMain
      title="GreenSloth"
      img={greenslothImg}
      url="https://greensloth.rwth-aachen.de/"
    >
      <Text color="white">Photosynthesis model database</Text>
    </SoftwareMain>
    <SoftwareMain
      title="ComPhot"
      img={crophotImg}
      url="https://comphot-biotool.streamlit.app/"
    >
      <Text color="white">Simulation based learning platform</Text>
    </SoftwareMain>
  </Grid>

  <Text color="light">
    Interested? Check out our <Link
      color="secondary"
      href="/software">full list of software</Link
    >
  </Text>
</Section>

<!-- 03 - Research / Consortia -->
<Section
  variant="light"
  width="narrow"
>
  <BoxHeadingMain
    n="03"
    title="research community"
  ></BoxHeadingMain>
  <LogoBar logos={logos} />
</Section>

<style>
  hgroup {
    .hero-line {
      margin: var(--space-1) 0;
      color: white;
      font-weight: 400;
      font-size: 2rem;
      font-family: "Quicksand", sans-serif;
      letter-spacing: -2%;
    }
    @media screen and (min-width: 800px) {
      .hero-line {
        font-size: 2.5rem;
      }
    }
    @media screen and (min-width: 1385px) {
      .hero-line {
        font-size: 3rem;
      }
    }
  }
</style>
