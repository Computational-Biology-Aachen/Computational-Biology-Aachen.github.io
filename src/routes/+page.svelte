<script>
	import BoxHeading from '$lib/BoxHeading.svelte';
	import DarkBox from '$lib/DarkBox.svelte';
	import HeroBox from '$lib/HeroBox.svelte';
	import LightBox from '$lib/LightBox.svelte';
	import P from '$lib/P.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import PublicationCard from '$lib/PublicationCard.svelte';
	import TwoColUl from '$lib/TwoColUl.svelte';
	import TwoColumnLayout from '$lib/TwoColumnLayout.svelte';
</script>

<HeroBox></HeroBox>
<LightBox>
	<BoxHeading n="01" title="about"></BoxHeading>
	<p>Some really inspiring words to inspire people. Maybe talk about our mission or whatever.</p>
</LightBox>
<DarkBox>
	<BoxHeading n="02" text="white" title="publications"></BoxHeading>
	<PublicationCard title="Shedding light on blue-green photosynthesis">
		<P text="white">
			Tobias Pfennig , Elena Kullmann, Tomáš Zavřel, Andreas Nakielski, Oliver Ebenhöh, Jan Červený,
			Gábor Bernát, Anna Barbara Matuszyńska
		</P>
	</PublicationCard>
	<PublicationCard
		title="Microbial markets: socio-economic perspective in studying microbial communities"
	>
		<P text="white">
			Fariha Mostafa , Aileen Krüger , Tim Nies , Julia Frunzke , Kerstin Schipper , Anna
			Matuszyńska
		</P>
	</PublicationCard>
	<PublicationCard title="A new era of synthetic biology—microbial community design">
		<P text="white"
			>Anna Matuszyńska , Oliver Ebenhöh , Matias D Zurbriggen , Daniel C Ducat , Ilka M Axmann</P
		>
	</PublicationCard>
	<P text="white">
		Interested? Check out our <a style="color: var(--white);" href="/papers"
			>full list of publications</a
		>
	</P>
</DarkBox>
<LightBox>
	<BoxHeading n="03" title="team"></BoxHeading>
	<TwoColumnLayout>
		<PersonCard title="Prof. Dr. Anna Matuszyńska">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Dr. Tim Nies">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Dr. Marvin van Aalst">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Tobias Pfennig">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Tanvir Hassan">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Quang Huy Nguyen">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Josha Ebeling">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Elouën Corvest">
			<P text="white">Some Description</P>
		</PersonCard>
		<PersonCard title="Veena Lohiya">
			<P text="white">Some Description</P>
		</PersonCard>
	</TwoColumnLayout>

	<div>
		<h2>Alumni</h2>
		<TwoColUl>
			<li>Fariha Mostafa</li>
			<li>Andreas Nakielski</li>
			<li>Chloe Aujoulat</li>
			<li>Abdulmalik Omeiza Abdulkabir</li>
			<li>Elena Kullmann</li>
			<li>Anastasiia Boshtova</li>
			<li>Sarah Philipps</li>
			<li>Pia Falter</li>
			<li>Theresa Zimmermann</li>
			<li>Dorina von Oehsen</li>
		</TwoColUl>
	</div>
</LightBox>
<DarkBox>
	<BoxHeading n="04" text="white" title="software"></BoxHeading>
	<PublicationCard title="MxlPy">
		<P text="white">
			MxlPy (pronounced "em axe el pie") is a Python package for mechanistic learning (Mxl) - the
			combination of mechanistic modeling and machine learning to deliver explainable, data-informed
			solutions.
		</P>
	</PublicationCard>
	<PublicationCard title="MxlBricks">
		<P text="white">
			mxlbricks is a library built on top of <a
				href="https://github.com/Computational-Biology-Aachen/MxlPy">MxlPy</a
			> to enable quick building of mechanistic learning models by using re-usable reaction bricks.
		</P>
	</PublicationCard>
	<PublicationCard title="pySBML">
		<P text="white">pySBML takes SBML models and makes them simpler ❤️</P>
	</PublicationCard>
	<P text="white">
		Interested? Check out our <a style="color: var(--white);" href="/software"
			>full list of software</a
		>
	</P>
</DarkBox>
<LightBox>
	<BoxHeading n="05" title="teaching"></BoxHeading>
	<p>Here we could list current courses etc</p>
</LightBox>
<DarkBox>
	<BoxHeading n="06" title="imprint" text="white"></BoxHeading>
	<P text="white">
		Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
		Worringerweg 1 52074 Aachen <br />
		Work Phone: +49 241 80 25817 <br />
		Send Email <br />

		Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
		Prof. Dr. Anna B. Matuszyńska <br />
		(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
	</P>
</DarkBox>
