<script>
	import Li from '$lib/Li.svelte';
	import Link from '$lib/Link.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Text from '$lib/text/Text.svelte';
	import Ul from '$lib/Ul.svelte';
</script>

<Header>
	<H1 color="light">Teaching</H1>
	<Text color="light">
		Our group offers several opportunities to learn about computational biology within both
		bachelor's and master's programs. We are using different formats ranging from two weeks long,
		intensive courses to semester long lectures with exercises. We are also offering a possibility
		to do your internship with us! If you are interested, please contact Prof. Matuszynska directly.</Text
	>
</Header>
<Section>
	<H2>Current semester</H2>
	<Ul>
		<Li>
			<Link href="/">Lecture + Practical Photosynthetic Systems in Architecture (PhoSA)</Link>
		</Li>
		<Li><Link href="/">Lecture Biology as an Application Subject II 16.00083</Link></Li>
		<Li><Link href="/">Lecture with exercise Introduction to Bioinformatics 16.00286</Link></Li>
		<Li><Link href="/">Lecture Ethics in the Biosciences 16.00244</Link></Li>
		<Li>
			<Link href="/">Practical + Seminar Interdisciplinary Data Science Course 16.00017</Link>
		</Li>
	</Ul>
	<Text
		>An overview of all courses offered this semester can also be found on <Link
			href="https://online.rwth-aachen.de/RWTHonline/pl/ui/$ctx/webnav.ini">RWTHonline</Link
		>
	</Text>
	<H2>Summer semester 2025</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
	<H2>Winter semester 2024/2025</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
	<H2>Summer semester 2024</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
	<H2>Winter semester 2023/2024</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
	<H2>Summer semester 2023</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
	<H2>Winter semester 2022/2023</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
	<H2>Summer semester 2022</H2>
	<Ul>
		<Li>...</Li>
		<Li>...</Li>
		<Li>...</Li>
	</Ul>
</Section>
