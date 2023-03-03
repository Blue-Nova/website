import Link from "next/link";

export default function FirstPost() {
    return(
      <>
        <h1>Oh.</h1>
        <h2>You did check it out...</h2>
        <br></br>
        <h3>My bad. Here, you can <Link href="/">go home.</Link></h3>
      </>
    );
  }