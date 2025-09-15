<script>
	import BoxHeadingMain from '$lib/BoxHeadingMain.svelte';
	import Publication from '$lib/cards/Publication.svelte';
	import SoftwareImage from '$lib/cards/SoftwareImage.svelte';
	import Sponsor from '$lib/cards/Sponsor.svelte';
	import Grid from '$lib/Grid.svelte';
	import GridSponsor from '$lib/GridSponsor.svelte';
	import Li from '$lib/Li.svelte';
	import Link from '$lib/Link.svelte';
	import Team from '$lib/pages/Team.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Text from '$lib/text/Text.svelte';
	import Ul from '$lib/Ul.svelte';
</script>

<svelte:head>
	<title>The Matuszyńska Lab</title>
</svelte:head>

<Hero></Hero>
<!-- 01 - mission -->
<Section color="light">
	<BoxHeadingMain n="01" title="mission"></BoxHeadingMain>
	<Text>Some really inspiring words to inspire people.</Text>
	<Text
		>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum".</Text
	>
</Section>
<!-- 02 - Team -->
<Section color="dark">
	<BoxHeadingMain n="02" color="light" title="team"></BoxHeadingMain>
	<Team />
</Section>

<!-- 03 - Research / Consortia -->
<Section color="light">
	<BoxHeadingMain n="03" title="research community"></BoxHeadingMain>
	<GridSponsor>
		<Sponsor name="MibiNet" href="https://www.sfb1535.hhu.de/en/mibinet" img="/mibinet-logo.png" />
		<Sponsor name="GoPMF" href="https://www.uni-muenster.de/GoPMF/" img="/gopmf-logo.png" />
		<Sponsor name="CEPLAS" href="https://www.ceplas.eu/en/home" img="/ceplas-logo.jpg" />
		<Sponsor name="BioSC" href="https://www.biosc.de/" img="/biosc-logo.jpg" />
		<Sponsor name="HDSLEE" href="https://www.hds-lee.de/" img="/hdslee-logo.jpg" />
	</GridSponsor>
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
	<BoxHeadingMain n="05" title="publications"></BoxHeadingMain>

	<Grid columns="one">
		<Publication
			title="Shedding light on blue-green photosynthesis"
			href="https://doi.org/10.1371/journal.pcbi.1012445"
			img="/publications/shedding.png"
		>
			<Text color="white">
				Tobias Pfennig , Elena Kullmann, Tomáš Zavřel, Andreas Nakielski, Oliver Ebenhöh, Jan
				Červený, Gábor Bernát, Anna Barbara Matuszyńska
			</Text>
		</Publication>
		<Publication
			title="Microbial markets: socio-economic perspective in studying microbial communities"
			href="https://doi.org/10.1093/femsml/uqae016"
			img="/publications/microbial-markets.png"
		>
			<Text color="white">
				Fariha Mostafa , Aileen Krüger , Tim Nies , Julia Frunzke , Kerstin Schipper , Anna
				Matuszyńska
			</Text>
		</Publication>
		<Publication
			title="A new era of synthetic biology—microbial community design"
			href="https://doi.org/10.1093/synbio/ysae011"
			img="/publications/new-era.png"
		>
			<Text color="white"
				>Anna Matuszyńska , Oliver Ebenhöh , Matias D Zurbriggen , Daniel C Ducat , Ilka M Axmann</Text
			>
		</Publication>
	</Grid>
	<Text>
		Interested? Check out our <Link href="/papers">full list of publications</Link>
	</Text>
</Section>
<!-- community resources -->
<Section color="dark">
	<BoxHeadingMain n="06" color="light" title="community resources"></BoxHeadingMain>

	<Grid columns="two">
		<SoftwareImage
			title="MxlPy"
			img="/mxlpy-logo.png"
			url="https://github.com/Computational-Biology-Aachen/MxlPy"
		>
			<Text color="white">makes mechanistic learning approachable</Text>
		</SoftwareImage>
		<SoftwareImage
			title="MxlBricks"
			img="/mxlbricks-logo.png"
			url="https://github.com/Computational-Biology-Aachen/mxl-bricks"
		>
			<Text color="white">helps building large models</Text>
		</SoftwareImage>
		<SoftwareImage
			title="GreenSloth"
			img="/greensloth-logo.svg"
			url="https://greensloth.rwth-aachen.de/"
		>
			<Text color="white">Photosynthesis model database</Text>
		</SoftwareImage>
		<SoftwareImage
			title="ComPhot"
			img="/comphot-logo.png"
			url="https://comphot-biotool.streamlit.app/"
		>
			<Text color="white">Simulation based learning platform</Text>
		</SoftwareImage>
	</Grid>

	<Text color="light">
		Interested? Check out our <Link color="secondary" href="/software">full list of software</Link>
	</Text>
</Section>
<!-- Blog -->
<Section color="light">
	<BoxHeadingMain n="07" title="news"></BoxHeadingMain>
	<Text>Add the most recent entry here.</Text>
	<Text>Then link to the <Link href="/blog">blog page</Link>.</Text>
</Section>
<Section color="dark">
	<BoxHeadingMain n="08" title="imprint" color="light"></BoxHeadingMain>
	<Text color="light">
		Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
		Worringerweg 1 52074 Aachen <br />
		Work Phone: +49 241 80 25817 <br />
		Send Email <br />

		Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
		Prof. Dr. Anna B. Matuszyńska <br />
		(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
	</Text>
</Section>
