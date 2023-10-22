'use client';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UserProfile() {
	const { user, error, isLoading } = useUser();

	if (isLoading) {
		return <>
			<span>Loading</span>
			<span className='loading loading-dots'></span>
		</>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	if (user) {
		return <>
			<p>Welcome <b>{user.name}</b>!</p>
			<a className='btn btn-primary mt-4' href='/api/auth/logout'>Logout</a>
		</>;
	}

	return <a className='btn btn-primary' href='/api/auth/login'>Login</a>;
}
