<script>
	import DarkBox from '$lib/BoxDark.svelte';
	import BoxHeadingMain from '$lib/BoxHeadingMain.svelte';
	import HeroBox from '$lib/BoxHero.svelte';
	import LightBox from '$lib/BoxLight.svelte';
	import PersonCard from '$lib/CardPerson.svelte';
	import PublicationCard from '$lib/CardPublication.svelte';
	import TwoColumnLayout from '$lib/LayoutTwoCol.svelte';
	import Link from '$lib/Link.svelte';
	import LinkLight from '$lib/LinkLight.svelte';
	import Text from '$lib/Text.svelte';
	import TwoColUl from '$lib/UlTwoCol.svelte';

	import team from '$lib/team.json';
</script>

<svelte:head>
	<title>The Matuszyńska Lab</title>
</svelte:head>

<HeroBox></HeroBox>
<!-- mission -->
<LightBox>
	<BoxHeadingMain n="01" title="mission"></BoxHeadingMain>
	<Text>Some really inspiring words to inspire people.</Text>
	<Text>Some really inspiring words to inspire people.</Text>
	<Text>Some really inspiring words to inspire people.</Text>
</LightBox>
<!-- Team -->
<DarkBox>
	<BoxHeadingMain n="02" text="white" title="team"></BoxHeadingMain>
	<TwoColumnLayout>
		{#each team as { slug, name, is_alumni }}
			{#if !is_alumni}
				<Link href="team/{slug}">
					<PersonCard title={name}>
						<Text text="white">Some Description</Text>
					</PersonCard>
				</Link>
			{/if}
		{/each}
	</TwoColumnLayout>

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
</DarkBox>
<!-- Research / Consortia -->
<LightBox>
	<BoxHeadingMain n="03" title="research community"></BoxHeadingMain>
	<Link href="https://www.sfb1535.hhu.de/en/mibinet">MibiNet</Link>
	<Link href="https://www.uni-muenster.de/GoPMF/">GoPMF</Link>
	<Link href="https://www.ceplas.eu/en/home">CEPLAS</Link>
	<Link href="https://www.biosc.de/">BioSC</Link>
	<Link href="https://www.hds-lee.de/">HDSLEE</Link>
</LightBox>
<!-- Teaching -->
<DarkBox>
	<BoxHeadingMain n="04" text="white" title="Teaching"></BoxHeadingMain>
	Our group offers several opportunities to learn about computational biology within both bachelor's
	and master's programs. We are using different formats ranging from two weeks long, intensive courses
	to semester long lectures with exercises. We are also offering a possibility to do your internship
	with us! If you are interested, please contact Prof. Matuszynska directly.
	<h2 class="white">Current semester</h2>

	<ul>
		<LinkLight href="/"
			><li>Lecture + Practical Photosynthetic Systems in Architecture (PhoSA)</li></LinkLight
		>
		<LinkLight href="/"><li>Lecture Biology as an Application Subject II 16.00083</li></LinkLight>
		<LinkLight href="/"
			><li>Lecture with exercise Introduction to Bioinformatics 16.00286</li></LinkLight
		>
		<LinkLight href="/"><li>Lecture Ethics in the Biosciences 16.00244</li></LinkLight>
		<LinkLight href="/"
			><li>Practical + Seminar Interdisciplinary Data Science Course 16.00017</li></LinkLight
		>
	</ul>

	<LinkLight href="/teaching">Past semesters</LinkLight>
</DarkBox>
<!-- Publications -->
<LightBox>
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
</LightBox>
<!-- Software -->
<DarkBox>
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
			mxlbricks is a library built on top of <LinkLight
				href="https://github.com/Computational-Biology-Aachen/MxlPy">MxlPy</LinkLight
			> to enable quick building of mechanistic learning models by using re-usable reaction bricks.
		</Text>
	</PublicationCard>
	<PublicationCard title="pySBML">
		<Text text="white">pySBML takes SBML models and makes them simpler ❤️</Text>
	</PublicationCard>
	<Text text="white">
		Interested? Check out our <a style="color: var(--white);" href="/software"
			>full list of software</a
		>
	</Text>
</DarkBox>
<!-- Blog -->
<LightBox>
	<BoxHeadingMain n="07" title="news"></BoxHeadingMain>
	<Text>Add the most recent entry here.</Text>
	<Text>Then link to the <Link href="/blog">blog page</Link>.</Text>
</LightBox>
<DarkBox>
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
</DarkBox>
