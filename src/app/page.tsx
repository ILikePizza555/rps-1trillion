import Markdown from 'react-markdown';
import UserProfile from './components/UserProfile';
import Game from './components/Game';

const welcomeContent = `
# 🪨📄✂️: 1 Trillion

The ultimate rock paper scissors game.

Inspired by <https://youtu.be/PmWQmZXYd74>.

## How to play

In case you don't know how to play rock paper scissors, here's a quick rundown:
- On each round you and your opponent chooses one of: rock, paper, or scissors.
- In this case, the computer will choose after you do. (Don't worry, it's not cheating.)
- Rock beats scissors, scissors beats paper, and paper beats rock.
`;

export default function Home() {
	return <div className='max-w-[65ch] mx-auto'>
		<article className='prose'>
			<Markdown>{welcomeContent}</Markdown>
		</article>
		<section>
			<h2 className='text-2xl mt-8 mb-4 font-bold leading-snug'>User Profile</h2>
			<UserProfile />
		</section>
		<Game />
	</div>;
}
