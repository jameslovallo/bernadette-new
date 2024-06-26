import { md } from 'cuirk'
import { pressList } from '../src/components/index.js'
import detroit from '../src/data/press/detroit.js'
import highlights from '../src/data/press/highlights.js'
import southAfrica from '../src/data/press/south-africa.js'

export const meta = {
	title: 'Press',
}

export const body = md`
# ${meta.title}

## Selected Highlights

<div class="surface">
	${pressList(highlights)}
</div>

## Detroit

<div class="surface">
	${pressList(detroit)}
</div>

## South Africa

<div class="surface">
	${pressList(southAfrica)}
</div>

<style>
	.surface {
		padding: 1rem;
	}
</style>
`
