<script lang="ts">
  import {
    TableAlumni as AlumniTable,
    H1,
    H2,
    SectionHeader as Header,
    Li,
    Link,
    Section,
    Text,
    Ul,
  } from "@computational-biology-aachen/design";
</script>

<svelte:head>
  <title>Teaching - Matuszyńska Lab</title>
</svelte:head>

<Header width="narrow">
  <H1 color="light">Teaching</H1>
  <Text color="light">
    Our group offers several opportunities to learn about computational biology
    within both bachelor's and master's programs. We are using different formats
    ranging from two weeks long, intensive courses to semester long lectures
    with exercises. We are also offering a possibility to do your internship
    with us! If you are interested, please contact Prof. Matuszynska directly.
  </Text>
</Header>
<Section width="narrow">
  <H2>Current semester</H2>
  <Ul>
    <Li>
      <Link href="/"
        >Lecture + Practical Photosynthetic Systems in Architecture (PhoSA)</Link
      >
    </Li>
    <Li
      ><Link href="/"
        >Lecture Biology as an Application Subject II 16.00083</Link
      ></Li
    >
    <Li
      ><Link href="/"
        >Lecture with exercise Introduction to Bioinformatics 16.00286</Link
      ></Li
    >
    <Li><Link href="/">Lecture Ethics in the Biosciences 16.00244</Link></Li>
    <Li>
      <Link href="/"
        >Practical + Seminar Interdisciplinary Data Science Course 16.00017</Link
      >
    </Li>
  </Ul>
  <Text
    >An overview of all courses offered this semester can also be found on <Link
      href="https://online.rwth-aachen.de/RWTHonline/pl/ui/$ctx/webnav.ini"
      >RWTHonline</Link
    >
  </Text>

  <H2 color="dark">Past theses</H2>
  <AlumniTable />
</Section>
