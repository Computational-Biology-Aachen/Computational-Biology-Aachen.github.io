<script>
	import BoxHeadingMain from '$lib/BoxHeadingMain.svelte';
	import Card from '$lib/cards/Card.svelte';
	import PublicationMain from '$lib/cards/PublicationMain.svelte';
	import SoftwareMain from '$lib/cards/SoftwareMain.svelte';
	import Sponsor from '$lib/cards/Sponsor.svelte';
	import Grid from '$lib/Grid.svelte';
	import GridSponsor from '$lib/GridSponsor.svelte';
	import Image from '$lib/Image.svelte';
	import Li from '$lib/Li.svelte';
	import Link from '$lib/Link.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Section from '$lib/sections/Section.svelte';
	import Bold from '$lib/text/Bold.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Text from '$lib/text/Text.svelte';
	import Ul from '$lib/Ul.svelte';

	import bioscImg from '$lib/assets/biosc-logo.jpg';
	import ceplasImg from '$lib/assets/ceplas-logo.jpg';
	import crophotImg from '$lib/assets/comphot-logo.png';
	import gopmfImg from '$lib/assets/gopmf-logo.png';
	import greenslothImg from '$lib/assets/greensloth-logo.svg';
	import groupImg from '$lib/assets/group.jpg';
	import hdsleeImg from '$lib/assets/hdslee-logo.jpg';
	import mibinetImg from '$lib/assets/mibinet-logo.png';
	import mxlbricksImg from '$lib/assets/mxlbricks-logo.png';
	import mxlpyImg from '$lib/assets/mxlpy-logo.png';
	import marketsImg from '$lib/assets/publications/microbial-markets.png';
	import newEraImg from '$lib/assets/publications/new-era.png';
	import sheddingImg from '$lib/assets/publications/shedding.png';

	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	let { data } = $props();
</script>

<svelte:head>
	<title>The Matuszyńska Lab</title>
</svelte:head>

<Hero></Hero>
<!-- 01 - mission -->
<Section color="light">
	<BoxHeadingMain n="01" title="mission"></BoxHeadingMain>
	<Text>
		We are a computational biology lab re-imagining photosynthesis for the future of sustainable
		agriculture and green innovation. Our mission bridges three core areas:
		<Bold>cutting-edge research</Bold>, where we design integrative models to predict plant
		performance under real-world stress; <Bold>transformative teaching</Bold>, where students gain
		hands-on skills in coding, systems biology, and data science through hackathons and open-source
		tools; and <Bold>citizen science & outreach</Bold>, where we connect plant modelling to
		solutions for climate change, urban greening, and food security. By uniting mathematics,
		biology, and global sustainability, we aim to inspire the next generation of scientists,
		partners, and citizens to join us in shaping resilient crops, smart cities, and a climate-ready
		future.
	</Text>
</Section>

<!-- 02 - Team -->
<Section color="dark">
	<BoxHeadingMain n="02" color="light" title="team"></BoxHeadingMain>
	<Link href="/team">
		<Image src={groupImg} />
	</Link>

	<Text>
		See our <Link color="secondary" href="/team">team page</Link> for more information.
	</Text>
</Section>

<!-- Blog -->
<Section color="light">
	<BoxHeadingMain n="07" title="news"></BoxHeadingMain>
	{#each data.posts as post}
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
<Section color="dark">
	<BoxHeadingMain n="04" color="light" title="Teaching"></BoxHeadingMain>
	<Text>
		Our group offers several opportunities to learn about computational biology within both
		bachelor's and master's programs. We are using different formats ranging from two weeks long,
		intensive courses to semester long lectures with exercises. We are also offering a possibility
		to do your internship with us! If you are interested, please contact Prof. Matuszyńska directly.
	</Text>

	<H2 color="light">Current semester</H2>

	<Ul>
		<Li color="light">
			<Link color="light" href="/"
				>Lecture + Practical Photosynthetic Systems in Architecture (PhoSA)
			</Link>
		</Li>
		<Li color="light">
			<Link color="light" href="/">Lecture Biology as an Application Subject II 16.00083</Link>
		</Li>
		<Li color="light">
			<Link color="light" href="/"
				>Lecture with exercise Introduction to Bioinformatics 16.00286
			</Link>
		</Li>
		<Li color="light">
			<Link color="light" href="/">Lecture Ethics in the Biosciences 16.00244</Link>
		</Li>
		<Li color="light">
			<Link color="light" href="/"
				>Practical + Seminar Interdisciplinary Data Science Course 16.00017</Link
			>
		</Li>
	</Ul>
	<Link color="secondary" href="/teaching">Past semesters</Link>
</Section>
<!-- Publications -->
<Section color="light">
	<BoxHeadingMain n="05" title="latest publications"></BoxHeadingMain>

	<Grid columns="one">
		<PublicationMain
			title="Shedding light on blue-green photosynthesis"
			href="https://doi.org/10.1371/journal.pcbi.1012445"
			img={sheddingImg}
		>
			<Text color="white">
				Tobias Pfennig , Elena Kullmann, Tomáš Zavřel, Andreas Nakielski, Oliver Ebenhöh, Jan
				Červený, Gábor Bernát, Anna Barbara Matuszyńska
			</Text>
		</PublicationMain>
		<PublicationMain
			title="Microbial markets: socio-economic perspective in studying microbial communities"
			href="https://doi.org/10.1093/femsml/uqae016"
			img={marketsImg}
		>
			<Text color="white">
				Fariha Mostafa , Aileen Krüger , Tim Nies , Julia Frunzke , Kerstin Schipper , Anna
				Matuszyńska
			</Text>
		</PublicationMain>
		<PublicationMain
			title="A new era of synthetic biology—microbial community design"
			href="https://doi.org/10.1093/synbio/ysae011"
			img={newEraImg}
		>
			<Text color="white"
				>Anna Matuszyńska , Oliver Ebenhöh , Matias D Zurbriggen , Daniel C Ducat , Ilka M Axmann</Text
			>
		</PublicationMain>
	</Grid>
	<Text>
		Interested? Check out our <Link href="/papers">full list of publications</Link>
	</Text>
</Section>
<!-- community resources -->
<Section color="dark">
	<BoxHeadingMain n="06" color="light" title="community resources"></BoxHeadingMain>

	<Grid columns="two">
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
		<SoftwareMain title="GreenSloth" img={greenslothImg} url="https://greensloth.rwth-aachen.de/">
			<Text color="white">Photosynthesis model database</Text>
		</SoftwareMain>
		<SoftwareMain title="ComPhot" img={crophotImg} url="https://comphot-biotool.streamlit.app/">
			<Text color="white">Simulation based learning platform</Text>
		</SoftwareMain>
	</Grid>

	<Text color="light">
		Interested? Check out our <Link color="secondary" href="/software">full list of software</Link>
	</Text>
</Section>

<!-- 03 - Research / Consortia -->
<Section color="light">
	<BoxHeadingMain n="03" title="research community"></BoxHeadingMain>
	<GridSponsor>
		<Sponsor name="MibiNet" href="https://www.sfb1535.hhu.de/en/mibinet" img={mibinetImg} />
		<Sponsor name="GoPMF" href="https://www.uni-muenster.de/GoPMF/" img={gopmfImg} />
		<Sponsor name="CEPLAS" href="https://www.ceplas.eu/en/home" img={ceplasImg} />
		<Sponsor name="BioSC" href="https://www.biosc.de/" img={bioscImg} />
		<Sponsor name="HDSLEE" href="https://www.hds-lee.de/" img={hdsleeImg} />
	</GridSponsor>
</Section>

<Section color="dark">
	<BoxHeadingMain n="08" title="imprint" color="light"></BoxHeadingMain>
	<Text color="light">
		Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
		Worringerweg 1 52074 Aachen <br />
		Work Phone: +49 241 80 25817 <br />

		Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
		Prof. Dr. Anna B. Matuszyńska <br />
		Design und Umsetzung Dr. Marvin van Aalst<br />
		(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
		<Link
			href="https://github.com/Computational-Biology-Aachen/Computational-Biology-Aachen.github.io"
			><Fa icon={faGithub} /></Link
		>
	</Text>
</Section>
