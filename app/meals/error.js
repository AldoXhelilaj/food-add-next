'use client';

export default function ErrorPage({error}) {
    return <main>

       <h1> Something went wrong!
        </h1>

        <p>{error.message}</p>
        </main>;
}