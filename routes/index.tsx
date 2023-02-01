import { Head } from "$fresh/runtime.ts";
import Background from "../components/Background.tsx";
import TopBar from "../components/TopBar.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Sarkis Bazdikian</title>
            </Head>
            <Background />
            <TopBar title="Sarkis Bazdikian" />
        </>
    );
}
