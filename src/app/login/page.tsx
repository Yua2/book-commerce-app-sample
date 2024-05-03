import { getProviders } from "next-auth/react";
import GitHubLogin from "./GitHubLogin";

const Login = async () => {
  const providers = await getProviders().then((res) => {
    return res;
  });

  return (
    <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg;px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウントにログイン
          </h2>
        </div>
        <GitHubLogin providers={providers} />
      </div>
    </div>
  );
};

export default Login;
