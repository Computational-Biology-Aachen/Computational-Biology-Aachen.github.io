<script>
	import BoxHeading from '$lib/BoxHeading.svelte';
	import SoftwareCard from '$lib/CardSoftware.svelte';
	import LightBox from '$lib/SectionLight.svelte';
	import P from '$lib/Text.svelte';
</script>

<BoxHeading>
	<hgroup>
		<h1>Software</h1>
		<P text="white">Things we built or contributed to with ❤️</P>
	</hgroup>
</BoxHeading>
<LightBox>
	<SoftwareCard
		title="MxlPy"
		github="https://github.com/Computational-Biology-Aachen/MxlPy"
		doi="10.1101/2025.05.06.652335"
	>
		<p>
			MxlPy (pronounced "em axe el pie") is a Python package for mechanistic learning (Mxl) - the
			combination of mechanistic modeling and machine learning to deliver explainable, data-informed
			solutions.
		</p>
	</SoftwareCard>

	<SoftwareCard
		title="MxlBricks"
		github="https://github.com/Computational-Biology-Aachen/mxl-bricks"
	>
		<p>
			mxlbricks is a library built on top of <a
				href="https://github.com/Computational-Biology-Aachen/MxlPy">MxlPy</a
			> to enable quick building of mechanistic learning models by using re-usable reaction bricks.
		</p>
	</SoftwareCard>

	<SoftwareCard title="pySBML" github="https://github.com/Computational-Biology-Aachen/pysbml">
		<p>pySBML takes SBML models and makes them simpler ❤️</p>
	</SoftwareCard>

	<SoftwareCard title="absorpig" github="https://github.com/Computational-Biology-Aachen/absorpig">
		<p>Extract pigment composition of measured absorption spectra of photosynthetic organisms.</p>
	</SoftwareCard>

	<SoftwareCard
		title="modelbase"
		gitlab="https://gitlab.com/qtb-hhu/modelbase-software"
		doi="10.1186/s12859-021-04122-7"
	>
		<p>
			modelbase is a python package to help you build and analyze dynamic mathematical models of
			biological systems. It has originally been designed for the simulation of metabolic systems,
			but can be used for virtually any processes, in which some substances get converted into
			others.
		</p>
	</SoftwareCard>

	<SoftwareCard
		title="moped"
		gitlab="https://gitlab.com/qtb-hhu/moped"
		doi="10.3390/metabo12040275"
	>
		<p>
			moped serves as an integrative hub for reproducible construction, modification, curation and
			analysis of metabolic models. moped supports draft reconstruction of models directly from
			genome/proteome sequences and pathway/genome databases utilizing GPR annotations, providing a
			completely reproducible model construction and curation process
		</p>
	</SoftwareCard>

	<SoftwareCard title="dismo" gitlab="https://gitlab.com/qtb-hhu/dismo">
		<p>
			dismo is a Python package for building and analysing discrete spatial models based on ordinary
			differential equations. Its primary purpose is to allow arbitrarily complex internal and
			transport processes to easily be mapped over multiple different regular grids. For this it
			features one, two and three-dimensional layouts, with standard and non-standard (e.g.
			hexagonal or triangular) grids.
		</p>
	</SoftwareCard>

	<SoftwareCard title="cycparser (python)" gitlab="https://gitlab.com/qtb-hhu/cycparser-py">
		<p>
			Library to parse *cyc database flatfiles, such as <a href="https://metacyc.org/">MetaCyc</a>
			and <a href="https://biocyc.org/">BioCyc</a>.
		</p>
	</SoftwareCard>

	<SoftwareCard title="cycparser (rust)" gitlab="https://gitlab.com/qtb-hhu/cycparser-rs">
		<p>
			Rust implementation of <a href="https://gitlab.com/qtb-hhu/cycparser-py">cycparser</a> Python package.
		</p>
	</SoftwareCard>

	<SoftwareCard title="COBREXA.jl" github="https://github.com/COBREXA/COBREXA.jl">
		<p>
			Cobrexa is a Julia package for scalable, high-performance constraint-based reconstruction and
			analysis of very large-scale biological models. Its primary purpose is to facilitate the
			integration of modern high performance computing environments with the processing and analysis
			of large-scale metabolic models of challenging complexity. We report the architecture of the
			package, and demonstrate how the design promotes analysis scalability on several use-cases
			with multi-organism community models.
		</p>
	</SoftwareCard>
</LightBox>
