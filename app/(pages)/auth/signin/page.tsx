import SignInForm from "@/components/SignInForm";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const SignInPage = ({ searchParams }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col p-5 shadow-lg w-full md:w-[350px]">
        <h1 className="font-bold text-3xl mb-10 text-center">Log In</h1>
        {/* <LoginForm callbackUrl={searchParams.callbackUrl} /> */}
        <SignInForm callbackUrl={searchParams.callbackUrl} />
      </div>
    </div>
  );
};

export default SignInPage;
