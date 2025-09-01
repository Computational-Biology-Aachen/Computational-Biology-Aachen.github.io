<script>
	import BoxHeadingMain from '$lib/BoxHeadingMain.svelte';
	import HeroBox from '$lib/BoxHero.svelte';
	import PersonCard from '$lib/CardPerson.svelte';
	import PublicationCard from '$lib/CardPublication.svelte';
	import CardSponsor from '$lib/CardSponsor.svelte';
	import Grid from '$lib/Grid.svelte';
	import GridPerson from '$lib/GridPerson.svelte';
	import Link from '$lib/Link.svelte';
	import Section from '$lib/Section.svelte';
	import Text from '$lib/Text.svelte';
	import Ul from '$lib/Ul.svelte';
	import TwoColUl from '$lib/UlTwoCol.svelte';

	import team from '$lib/team.json';
</script>

<svelte:head>
	<title>The Matuszyńska Lab</title>
</svelte:head>

<HeroBox></HeroBox>
<!-- mission -->
<Section>
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
<!-- Team -->
<Section light={false}>
	<BoxHeadingMain n="02" text="white" title="team"></BoxHeadingMain>
	<GridPerson>
		{#each team as { slug, name, is_alumni }}
			{#if !is_alumni}
				<Link light={true} href="team/{slug}">
					<PersonCard title={name}>
						<Text text="white">Some Description</Text>
					</PersonCard>
				</Link>
			{/if}
		{/each}
	</GridPerson>

	<div>
		<h2 class="white">Alumni</h2>
		<TwoColUl>
			{#each team as { slug, name, is_alumni }}
				{#if is_alumni}
					<Link href="team/{slug}">
						<li style="color: white">{name}</li>
					</Link>
				{/if}
			{/each}
		</TwoColUl>
	</div>
</Section>
<!-- Research / Consortia -->
<Section>
	<BoxHeadingMain n="03" title="research community"></BoxHeadingMain>
	<Grid>
		<CardSponsor
			name="MibiNet"
			href="https://www.sfb1535.hhu.de/en/mibinet"
			img="/mibinet-logo.png"
		/>
		<CardSponsor name="GoPMF" href="https://www.uni-muenster.de/GoPMF/" img="/gopmf-logo.png" />
		<CardSponsor name="CEPLAS" href="https://www.ceplas.eu/en/home" img="/ceplas-logo.jpg" />
		<CardSponsor name="BioSC" href="https://www.biosc.de/" img="/biosc-logo.jpg" />
		<CardSponsor name="HDSLEE" href="https://www.hds-lee.de/" img="/hdslee-logo.jpg" />
	</Grid>
</Section>
<!-- Teaching -->
<Section light={false}>
	<BoxHeadingMain n="04" text="white" title="Teaching"></BoxHeadingMain>
	Our group offers several opportunities to learn about computational biology within both bachelor's
	and master's programs. We are using different formats ranging from two weeks long, intensive courses
	to semester long lectures with exercises. We are also offering a possibility to do your internship
	with us! If you are interested, please contact Prof. Matuszynska directly.
	<h2 class="white">Current semester</h2>

	<Ul light={true}>
		<li>
			<Link light={true} href="/"
				>Lecture + Practical Photosynthetic Systems in Architecture (PhoSA)
			</Link>
		</li>
		<li>
			<Link light={true} href="/">Lecture Biology as an Application Subject II 16.00083</Link>
		</li>
		<li>
			<Link light={true} href="/"
				>Lecture with exercise Introduction to Bioinformatics 16.00286
			</Link>
		</li>
		<li><Link light={true} href="/">Lecture Ethics in the Biosciences 16.00244</Link></li>
		<li>
			<Link light={true} href="/"
				>Practical + Seminar Interdisciplinary Data Science Course 16.00017</Link
			>
		</li>
	</Ul>

	<Link light={true} href="/teaching">Past semesters</Link>
</Section>
<!-- Publications -->
<Section>
	<BoxHeadingMain n="05" title="publications"></BoxHeadingMain>
	<PublicationCard title="Shedding light on blue-green photosynthesis">
		<Text text="white">
			Tobias Pfennig , Elena Kullmann, Tomáš Zavřel, Andreas Nakielski, Oliver Ebenhöh, Jan Červený,
			Gábor Bernát, Anna Barbara Matuszyńska
		</Text>
	</PublicationCard>
	<PublicationCard
		title="Microbial markets: socio-economic perspective in studying microbial communities"
	>
		<Text text="white">
			Fariha Mostafa , Aileen Krüger , Tim Nies , Julia Frunzke , Kerstin Schipper , Anna
			Matuszyńska
		</Text>
	</PublicationCard>
	<PublicationCard title="A new era of synthetic biology—microbial community design">
		<Text text="white"
			>Anna Matuszyńska , Oliver Ebenhöh , Matias D Zurbriggen , Daniel C Ducat , Ilka M Axmann</Text
		>
	</PublicationCard>
	<Text text="white">
		Interested? Check out our <Link href="/papers">full list of publications</Link>
	</Text>
</Section>
<!-- Software -->
<Section light={false}>
	<BoxHeadingMain n="06" text="white" title="software"></BoxHeadingMain>
	<PublicationCard title="MxlPy">
		<Text text="white">
			MxlPy (pronounced "em axe el pie") is a Python package for mechanistic learning (Mxl) - the
			combination of mechanistic modeling and machine learning to deliver explainable, data-informed
			solutions.
		</Text>
	</PublicationCard>
	<PublicationCard title="MxlBricks">
		<Text text="white">
			mxlbricks is a library built on top of <Link
				light={true}
				href="https://github.com/Computational-Biology-Aachen/MxlPy">MxlPy</Link
			> to enable quick building of mechanistic learning models by using re-usable reaction bricks.
		</Text>
	</PublicationCard>
	<PublicationCard title="pySBML">
		<Text text="white">pySBML takes SBML models and makes them simpler ❤️</Text>
	</PublicationCard>
	<Text text="white">
		Interested? Check out our <Link white={true} href="/software">full list of software</Link>
	</Text>
</Section>
<!-- Blog -->
<Section>
	<BoxHeadingMain n="07" title="news"></BoxHeadingMain>
	<Text>Add the most recent entry here.</Text>
	<Text>Then link to the <Link href="/blog">blog page</Link>.</Text>
</Section>
<Section light={false}>
	<BoxHeadingMain n="08" title="imprint" text="white"></BoxHeadingMain>
	<Text text="white">
		Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
		Worringerweg 1 52074 Aachen <br />
		Work Phone: +49 241 80 25817 <br />
		Send Email <br />

		Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
		Prof. Dr. Anna B. Matuszyńska <br />
		(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
	</Text>
</Section>
