<script>
	import Software from '$lib/cards/Software.svelte';
	import Link from '$lib/Link.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';
</script>

<Header>
	<H1 color="light">Community resources</H1>
	<Text color="light">Things we built or contributed to with ❤️</Text>
</Header>
<Section>
	<Software
		title="MxlPy"
		github="https://github.com/Computational-Biology-Aachen/MxlPy"
		doi="10.1101/2025.05.06.652335"
		img="/mxlpy-logo.png"
	>
		<Text>
			MxlPy (pronounced "em axe el pie") is a Python package for mechanistic learning (Mxl) - the
			combination of mechanistic modeling and machine learning to deliver explainable, data-informed
			solutions.
		</Text>
	</Software>

	<Software
		title="MxlBricks"
		github="https://github.com/Computational-Biology-Aachen/mxl-bricks"
		img="/mxlbricks-logo.png"
	>
		<Text>
			mxlbricks is a library built on top of <Link
				href="https://github.com/Computational-Biology-Aachen/MxlPy">MxlPy</Link
			> to enable quick building of mechanistic learning models by using re-usable reaction bricks.
		</Text>
	</Software>

	<Software title="GreenSloth" href="https://greensloth.rwth-aachen.de/" img="/greensloth-logo.svg">
		<Text
			>Interactive database of photosynthesis models to help you decide which model is best suited
			for your needs.</Text
		>
	</Software>

	<Software title="ComPhot" href="https://comphot-biotool.streamlit.app/" img="/cpbl-rwth-logo.svg">
		<Text>
			Simulation-based photosynthesis learning platform for the needs of 21st-century students
		</Text>
	</Software>

	<Software
		title="absorpig"
		github="https://github.com/Computational-Biology-Aachen/absorpig"
		img="/absorpig-logo.png"
	>
		<Text
			>Extract pigment composition of measured absorption spectra of photosynthetic organisms.</Text
		>
	</Software>

	<Software
		title="pySBML"
		github="https://github.com/Computational-Biology-Aachen/pysbml"
		img="/cpbl-rwth-logo.svg"
	>
		<Text>pySBML takes SBML models and makes them simpler ❤️</Text>
	</Software>
</Section>
