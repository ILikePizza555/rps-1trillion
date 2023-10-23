'use client';
import { useUser } from '@auth0/nextjs-auth0/client';

const GameButton = ({color, children, onClick}: {color: string; children: React.ReactNode; onClick?: () => void}) =>
	<button
		className={`border-2 border-solid border-${color}-500 bg-${color}-100 rounded-lg w-32 h-52 text-8xl 
			        shadow-none hover:shadow-lg transition-shadow ease-in-out`}
		onClick={onClick}>
		{children}
	</button>;

const GameButtons = () => <div className='flex justify-around py-5'>
	<button className='game-card rock'>🪨</button>
	<button className='game-card paper'>📄</button>
	<button className='game-card scissors'>✂️</button>
</div>;

export default function Game() {
	const { user } = useUser();

	if (user) {
		return <>
			<h2>Game</h2>
			<GameButtons />
		</>;
	}

	return <></>;
}
