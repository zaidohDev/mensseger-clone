import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="
      flex 
      flex-col 
      justify-center 
      py-12 
      bg-gray-100 
      min-h-full
      sm:px-6
      lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          width="48"
          height="48"
          alt="Logo "
          className="mx-auto w-auto"
        />
        <h2 className="
          mt-6
          text-center
          font-bold
          tracking-tight 
          text-gray-900 
        
        ">
          Messeger clone. Project by Daniel
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}
