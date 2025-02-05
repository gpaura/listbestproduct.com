import { AuthForm } from "@/components/user/AuthForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm type="signin" />
    </div>
  );
}
