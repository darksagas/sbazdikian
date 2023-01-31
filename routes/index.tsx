import {Head} from "$fresh/runtime.ts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Sarkis Bazdikian</title>
            </Head>
            <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[177px]">
                <svg class="relative block w-[calc(150%-1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="p-4 mx-auto max-w-screen-md">
                <img
                    src="/logo.svg"
                    class="w-32 h-32 mt-3 "
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <p class="my-6">
                    Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
                    file, and refresh.
                </p>
            </div>
        </>
    );
}
