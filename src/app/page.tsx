import Markdown from 'react-markdown';
import UserProfile from './components/UserProfile';

const welcomeContent = `
# 🪨📄✂️: 1 Trillion

The ultimate rock paper scissors game.

Inspired by <https://youtu.be/PmWQmZXYd74>.

`;

export default function Home() {
	return <div>
		<article className='prose'>
			<Markdown>{welcomeContent}</Markdown>
		</article>
		<section>
			<UserProfile />
		</section>
	</div>;
}
