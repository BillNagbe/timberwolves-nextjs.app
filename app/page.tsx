import Image from "next/image";

export default function Home() {
     

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <Image 
        src={""}
        width={500}
        height={500}
        alt="TimberWolves"
      />
      <h1 className="text-5xl text-blue-500 font-bold">Wolves Back</h1>
    </div>
  )
}
