import { h } from 'preact';
import style from './style';
import Skills from '../../components/skills-section';
import Work from '../../components/work-section';
import Education from '../../components/education-section';
import Projects from '../../components/projects-section';

const Home = () => (
	<div class={style.home}>
		<h1>Maksim Tsvetkov</h1>
		<p>Senior Frontend developer</p>
		<Work />
		<Education />
		<Skills />
		<Projects />
	</div>
);

export default Home;
