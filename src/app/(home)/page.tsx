import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap border border-gray-200 rounded-md">
      <div className="w-full sm:w-1/2 p-2"><Image src={'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg'} width={500} height={500} alt="home-pic" /></div>
      <div className="w-full sm:w-1/2 p-2">
        <h1>Hello there! I am Jimmy</h1>
        <ul>
          <li>1. ba ba ba ba</li>
          <li>2. baba ba ba</li>
          <li>3. ba ba ba ba</li>
          <li>4. ba ba ba ba</li>
        </ul>
      </div>
    </div>
  );
}
