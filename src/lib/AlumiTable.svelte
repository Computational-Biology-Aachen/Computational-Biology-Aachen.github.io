<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import Bold from './text/Bold.svelte';
	import Text from './text/Text.svelte';
	const small = new MediaQuery('max-width: 800px');
	let header = ['Semester', 'Name', 'Degree', 'Work'];
	let rows = [
		[
			'SoSe 2025',
			'Manuel Schroder',
			'M. Sc.',
			'Stoichiometric modelling for media characterization of a CHO-based process. <em>External: Sabine Arnold, Dr.-Ing, Boehringer Ingelheim Pharma GmbH & Co. KG</em>'
		],
		[
			'SoSe 2025',
			'Li Ina',
			'M. Sc.',
			'Investigating temporal dynamics of genetic diversityin RSV subgroups during an epidemic cycle in Germany, 2014-2023. <em>External: Daniel Weinberger, PhD, Yale School of Public Health, USA</em>'
		],
		[
			'SoSe 2024',
			'Mohamed Wehbe',
			'B. Sc.',
			'Developing a Machine Learning Pipeline to Extract Information from Literature for the Validation and Improvement of Computational Photosynthesis Models'
		],
		[
			'WiSe 2022/23',
			'Sarah Philipps',
			'B. Sc.',
			'Developing of Graphical Interface for Interactive Simulations in Green Biology'
		],
		[
			'SoSe 2022',
			'Theresa Zimmermann',
			'B. Sc.',
			'Modelling nutrient-driven population dynamics of Microorganisms'
		],
		[
			'SoSe 2022',
			'Elouën Corvest',
			'B. Sc.',
			'Computational Study of Photosynthetic CO2 Assimilation Rate'
		],
		[
			'SoSe 2022',
			'Pia Falter',
			'B. Sc.',
			'Modelling the effect of climate change and nutrient saturation on dinoflagellate blooms in the Baltic Sea'
		]
	];
</script>

{#if small.current}
	{#each rows as row}
		<div class="card">
			<Text><Bold>{row[1]}</Bold>, {row[2]} - {row[0]}</Text>
			<Text>{row[3]}</Text>
		</div>
	{/each}
{:else}
	<table>
		<thead>
			<tr>
				{#each header as cell}
					<td>{@html cell}</td>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					{#each row as cell}
						<td>{@html cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<style>
	table {
		width: 100%;
		font-family: var(--font-family);
	}
	thead {
		font-weight: 700;
	}
	td {
		padding: 0.5rem;
	}
	.card {
		margin: 1rem 0;
		padding: 1rem;
		border: 1px solid var(--light-grey);
		border-radius: 8px;
		box-shadow: 0px 18px 36px -18px rgba(0, 0, 0, 0.1);
	}
</style>
